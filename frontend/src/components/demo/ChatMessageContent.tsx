"use client";

import React, { useCallback, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Check, Copy } from "lucide-react";
import { getLocale, getMessages } from "@/lib/i18n";

function CodeBlock({ children, className }: { children?: React.ReactNode; className?: string }) {
  const [copied, setCopied] = useState(false);
  const text = typeof children === "string" ? children : String(React.Children.toArray(children).join(""));
  const lang = className?.replace(/^language-/, "") ?? "";
  const msg = getMessages(getLocale());

  const handleCopy = useCallback(() => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <div className="group relative my-2 rounded-xl overflow-hidden border border-gray-200 bg-gray-900">
      <div className="flex items-center justify-between px-3 py-1.5 bg-gray-800/80 border-b border-gray-700 text-xs text-gray-400">
        {lang && <span className="font-medium">{lang}</span>}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          aria-label={msg.common.copy}
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? msg.common.copied : msg.common.copy}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-gray-100 font-mono leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Blockquote({ children }: { children?: React.ReactNode }) {
  const getText = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(getText).join("");
    if (node && typeof node === "object" && "props" in node) {
      const el = node as React.ReactElement<{ children?: React.ReactNode }>;
      return getText(el.props.children);
    }
    return "";
  };
  const content = getText(children);
  const looksLikeEmail =
    /^(De:|Para:|Asunto:|From:|To:|Subject:)/m.test(content) ||
    (content.includes("De:") && (content.includes("Para:") || content.includes("Asunto:")));

  return (
    <blockquote
      className={`my-3 rounded-xl border px-4 py-3 text-sm leading-relaxed ${
        looksLikeEmail
          ? "border-emerald-200 bg-emerald-50/80 text-gray-800"
          : "border-gray-200 bg-gray-50 text-gray-700"
      }`}
    >
      {looksLikeEmail && (
        <span className="block text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">Email</span>
      )}
      {children}
    </blockquote>
  );
}

const markdownComponents = {
  pre: ({ children }: { children?: React.ReactNode }) => {
    const child = Array.isArray(children) ? children[0] : children;
    if (child && typeof child === "object" && child !== null && "props" in child) {
      const codeProps = (child as React.ReactElement<{ className?: string; children?: React.ReactNode }>).props;
      if (codeProps && ("className" in codeProps || "children" in codeProps)) {
        return (
          <CodeBlock className={codeProps.className}>
            {codeProps.children}
          </CodeBlock>
        );
      }
    }
    return <pre className="my-2 rounded-lg bg-gray-100 p-4 overflow-x-auto text-sm">{children}</pre>;
  },
  code({ className, children, ...props }: React.ComponentPropsWithoutRef<"code">) {
    const isBlock = className != null;
    if (isBlock) return <>{children}</>;
    return (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px] text-gray-800" {...props}>
        {children}
      </code>
    );
  },
  blockquote: Blockquote,
  p: ({ children }: { children?: React.ReactNode }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
  ul: ({ children }: { children?: React.ReactNode }) => <ul className="my-2 list-disc list-inside space-y-0.5 text-gray-700">{children}</ul>,
  ol: ({ children }: { children?: React.ReactNode }) => <ol className="my-2 list-decimal list-inside space-y-0.5 text-gray-700">{children}</ol>,
  li: ({ children }: { children?: React.ReactNode }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }: { children?: React.ReactNode }) => <strong className="font-semibold text-gray-900">{children}</strong>,
  h1: ({ children }: { children?: React.ReactNode }) => <h1 className="mt-3 mb-1 text-base font-bold text-gray-900">{children}</h1>,
  h2: ({ children }: { children?: React.ReactNode }) => <h2 className="mt-3 mb-1 text-sm font-bold text-gray-900">{children}</h2>,
  h3: ({ children }: { children?: React.ReactNode }) => <h3 className="mt-2 mb-1 text-sm font-semibold text-gray-900">{children}</h3>,
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
      {children}
    </a>
  ),
};

export function AssistantMessageContent({
  content,
  streaming = false,
}: {
  content: string;
  streaming?: boolean;
}) {
  return (
    <div className="prose prose-sm max-w-none prose-p:my-1 prose-headings:my-2">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
      {streaming && (
        <span
          className="inline-block w-2 h-4 ml-0.5 align-middle bg-emerald-500 animate-pulse"
          aria-hidden
        />
      )}
    </div>
  );
}
