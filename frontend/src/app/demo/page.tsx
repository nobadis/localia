"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BrandName } from "@/components/ui/BrandName";
import { AssistantMessageContent } from "@/components/demo/ChatMessageContent";
import { ArrowLeft, Send, Sparkles, Server } from "lucide-react";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { getLocale, getMessages, getLanding } from "@/lib/i18n";

const MAX_RESPONSES_PER_SESSION = 10;
const STORAGE_KEY = "localia-demo-session";

type Message = { role: "user" | "assistant"; content: string };

function loadSession(): Message[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (m): m is Message =>
        typeof m === "object" && m !== null && "role" in m && "content" in m &&
        (m.role === "user" || m.role === "assistant") && typeof m.content === "string"
    );
  } catch {
    return [];
  }
}

function saveSession(messages: Message[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {
    // ignore
  }
}

export default function DemoPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const locale = getLocale();
  const msg = getMessages(locale);
  const landing = getLanding(locale);
  const contactEmail = landing.CONTACT_EMAIL;
  const demoSubject = landing.DEMO_SUBJECT;
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(demoSubject)}`;

  useEffect(() => {
    setMessages(loadSession());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveSession(messages);
  }, [hydrated, messages]);

  const assistantCount = messages.filter((m) => m.role === "assistant").length;
  const remaining = MAX_RESPONSES_PER_SESSION - assistantCount;
  const atLimit = assistantCount >= MAX_RESPONSES_PER_SESSION;
  const oneLeft = assistantCount === MAX_RESPONSES_PER_SESSION - 1 && !loading;
  const ctaUrgent = remaining <= 3 && !atLimit;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading || atLimit) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const nextMessages: Message[] = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/demo/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
          stream: true,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error ?? msg.demo.errorResponse);
        return;
      }

      const contentType = res.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) {
        const data = (await res.json()) as { message?: string };
        setMessages((prev) => [...prev, { role: "assistant", content: data.message ?? "" }]);
        return;
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) {
        setError(msg.demo.errorConnection);
        return;
      }

      // Mensaje del asistente que se irá llenando con el stream
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
      let content = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        buffer += value ? decoder.decode(value, { stream: true }) : "";
        if (done && buffer) buffer += "\n";
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? ""; // queda la parte incompleta en buffer
        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine.startsWith("data: ")) continue;
          const payload = trimmedLine.slice(6).trim();
          if (payload === "[DONE]") continue;
          try {
            const data = JSON.parse(payload) as {
              choices?: Array<{ delta?: { content?: string } }>;
            };
            const delta = data.choices?.[0]?.delta?.content;
            if (typeof delta === "string") {
              content += delta;
              setMessages((prev) => {
                const next = [...prev];
                const last = next[next.length - 1];
                if (last?.role === "assistant") next[next.length - 1] = { ...last, content };
                return next;
              });
            }
          } catch {
            // ignorar líneas JSON inválidas
          }
        }
        if (done) break;
      }

      // Asegurar contenido final
      setMessages((prev) => {
        const next = [...prev];
        const last = next[next.length - 1];
        if (last?.role === "assistant" && last.content !== content)
          next[next.length - 1] = { ...last, content };
        return next;
      });
    } catch {
      setError(msg.demo.errorConnection);
      setMessages((prev) => (prev.at(-1)?.role === "assistant" && prev.at(-1)?.content === "" ? prev.slice(0, -1) : prev));
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const handlePrePrompt = (prompt: string) => {
    setInput(prompt);
    // Opcional: enviar directo al hacer clic
    // send(prompt);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header minimalista */}
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-3xl px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {msg.common.back}
          </Link>
          <span className="font-semibold text-gray-900">
            <BrandName variant="capitalize" /> Demo
          </span>
          <LocaleSwitcher variant="light" />
        </div>
      </header>

      {/* Copy: servidor local — sticky debajo del header */}
      <div className="sticky top-14 z-[9] border-b border-emerald-100 bg-emerald-50/95 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl px-4 py-3">
          <motion.div
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-white/80 px-4 py-3 shadow-sm"
          >
            <Server className="h-4 w-4 text-emerald-600 shrink-0" />
            <p className="text-sm text-gray-700">
              {msg.demo.serverLocalBanner}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Chat */}
      <main className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-4 pb-6">
        {messages.length === 0 && hydrated && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="pt-8 pb-4"
          >
            <p className="text-center text-gray-500 text-sm mb-4">{msg.demo.writeOrChoose}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {msg.demo.prompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handlePrePrompt(prompt)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 px-4 py-2 text-xs font-medium text-gray-700 hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-800 transition-colors shadow-sm"
                >
                  <Sparkles className="h-3 w-3 text-emerald-500" />
                  {prompt}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <div className="flex-1 space-y-4 pt-4 overflow-y-auto min-h-[200px]">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  m.role === "user"
                    ? "bg-emerald-600 text-white"
                    : "bg-white border border-gray-200 text-gray-800 shadow-sm"
                }`}
              >
                {m.role === "user" ? (
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{m.content}</p>
                ) : (
                  <AssistantMessageContent
                    content={m.content}
                    streaming={loading && i === messages.length - 1}
                  />
                )}
              </div>
            </motion.div>
          ))}
          {loading && messages.at(-1)?.role !== "assistant" && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="rounded-2xl bg-white border border-gray-200 px-4 py-3 shadow-sm">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </motion.div>
          )}
          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-2">
              {error}
            </p>
          )}
          {oneLeft && (
            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
              <strong>{msg.demo.lastResponseBold}</strong> {msg.demo.lastResponseRest}
            </p>
          )}
          {atLimit && (
            <p className="text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded-xl px-4 py-3">
              {msg.demo.limitReached}{" "}
              <a href={mailto} className="font-semibold text-emerald-600 hover:underline">
                {msg.demo.contactLocalia}
              </a>
              .
            </p>
          )}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={handleSubmit} className="pt-4">
          <div className="flex gap-2 rounded-2xl bg-white border border-gray-200 shadow-sm focus-within:border-emerald-300 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={atLimit ? msg.demo.placeholderLimit : msg.demo.placeholder}
              className="flex-1 min-w-0 rounded-2xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent disabled:opacity-70"
              disabled={loading || atLimit}
            />
            <button
              type="submit"
              disabled={loading || !input.trim() || atLimit}
              className="shrink-0 rounded-xl bg-emerald-600 text-white p-3 hover:bg-emerald-700 disabled:opacity-50 disabled:pointer-events-none transition-colors"
              aria-label={msg.demo.send}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          {!atLimit && (
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <p className={`text-xs ${ctaUrgent ? "text-amber-600 font-medium" : "text-gray-500"}`}>
                {remaining} {msg.demo.remaining}
              </p>
              <a
                href={mailto}
                className={`inline-flex items-center gap-1.5 rounded-full text-xs font-semibold transition-all ${
                  ctaUrgent
                    ? "bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700 shadow-md"
                    : "text-emerald-600 hover:text-emerald-700 hover:underline"
                }`}
              >
                {ctaUrgent ? (remaining <= 1 ? msg.demo.contactToContinue : msg.demo.requestDemo) : msg.demo.contact}
              </a>
            </div>
          )}
          {atLimit && (
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-gray-500">{msg.demo.sessionComplete}</p>
              <a
                href={mailto}
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 text-white px-4 py-2 text-xs font-semibold hover:bg-emerald-700 shadow-md"
              >
                {msg.demo.contact}
              </a>
            </div>
          )}
        </form>
      </main>

      {/* CTA sutil */}
      <div className="max-w-3xl mx-auto px-4 py-4 text-center">
        <p className="text-xs text-gray-500">
          {msg.demo.forBusiness}{" "}
          <Link href="/#precio" className="text-emerald-600 font-medium hover:underline">
            {msg.demo.seePlans}
          </Link>
          {" | "}
          <a href={mailto} className="text-emerald-600 font-medium hover:underline">
            {msg.demo.requestDemo}
          </a>
        </p>
      </div>
    </div>
  );
}
