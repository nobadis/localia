"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { getLocale, getMessages } from "@/lib/i18n";

const EVENT_OPEN = "open-demo-form";

export function openDemoForm() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(EVENT_OPEN));
  }
}

export function DemoRequestForm() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const locale = getLocale();
  const msg = getMessages(locale);

  const close = useCallback(() => {
    setOpen(false);
    setStatus("idle");
    setName("");
    setEmail("");
    setMessage("");
  }, []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(EVENT_OPEN, handler);
    return () => window.removeEventListener(EVENT_OPEN, handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open, close]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;
    setSubmitting(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || undefined,
          email: trimmedEmail,
          message: message.trim() || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(close, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && close()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-form-title"
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-2 border-b border-gray-100">
          <h2 id="demo-form-title" className="text-lg font-semibold text-gray-900">
            {msg.common.formTitle}
          </h2>
          <button
            type="button"
            onClick={close}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            aria-label={msg.common.closeMenu}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {status === "success" && (
            <p className="text-sm font-medium text-emerald-600 bg-emerald-50 rounded-xl px-4 py-3">
              {msg.common.formSuccess}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-600 bg-red-50 rounded-xl px-4 py-3">
              {msg.common.formError}
            </p>
          )}
          <div>
            <label htmlFor="demo-name" className="block text-sm font-medium text-gray-700 mb-1">
              {msg.common.formName}
            </label>
            <input
              id="demo-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder={msg.common.formName}
              autoComplete="name"
              disabled={submitting}
            />
          </div>
          <div>
            <label htmlFor="demo-email" className="block text-sm font-medium text-gray-700 mb-1">
              {msg.common.formEmail} <span className="text-red-500">*</span>
            </label>
            <input
              id="demo-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="tu@empresa.com"
              autoComplete="email"
              disabled={submitting}
            />
          </div>
          <div>
            <label htmlFor="demo-message" className="block text-sm font-medium text-gray-700 mb-1">
              {msg.common.formMessage}
            </label>
            <textarea
              id="demo-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              placeholder={msg.common.formMessage}
              disabled={submitting}
            />
          </div>
          <button
            type="submit"
            disabled={submitting || !email.trim()}
            className="w-full rounded-xl bg-emerald-600 text-white font-semibold py-3 px-4 hover:bg-emerald-700 disabled:opacity-50 disabled:pointer-events-none transition-colors"
          >
            {submitting ? "..." : msg.common.formSubmit}
          </button>
        </form>
      </div>
    </div>
  );
}
