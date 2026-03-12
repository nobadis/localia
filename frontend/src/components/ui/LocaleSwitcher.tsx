"use client";

import { useCallback } from "react";
import { getLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

type Props = {
  /** Optional class for the container */
  className?: string;
  /** Optional: use compact style (e.g. for mobile menu) */
  compact?: boolean;
  /** "dark" = light text on dark bg (navbar), "light" = dark text on light bg (demo header) */
  variant?: "dark" | "light";
};

const baseCompact = "rounded-full px-2.5 py-1 text-xs font-medium transition-colors";
const activeDark = "bg-white/15 text-white";
const inactiveDark = "text-gray-500 hover:text-white hover:bg-white/[0.06]";
const activeLight = "bg-gray-200 text-gray-900";
const inactiveLight = "text-gray-500 hover:text-gray-900 hover:bg-gray-100";

export function LocaleSwitcher({ className = "", compact = false, variant = "dark" }: Props) {
  const locale = getLocale();
  const isDark = variant === "dark";
  const active = isDark ? activeDark : activeLight;
  const inactive = isDark ? inactiveDark : inactiveLight;

  const setLocale = useCallback(async (newLocale: Locale) => {
    if (newLocale === locale) return;
    await fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: newLocale }),
    });
    window.location.reload();
  }, [locale]);

  if (compact) {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <button
          type="button"
          onClick={() => setLocale("es")}
          className={`${baseCompact} ${locale === "es" ? active : inactive}`}
          aria-pressed={locale === "es"}
          aria-label="Español"
        >
          ES
        </button>
        <span className={`text-xs ${isDark ? "text-gray-600" : "text-gray-400"}`} aria-hidden>
          |
        </span>
        <button
          type="button"
          onClick={() => setLocale("en")}
          className={`${baseCompact} ${locale === "en" ? active : inactive}`}
          aria-pressed={locale === "en"}
          aria-label="English"
        >
          EN
        </button>
      </div>
    );
  }

  const containerClass = isDark
    ? "inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.04] p-0.5"
    : "inline-flex items-center rounded-full border border-gray-200 bg-gray-50 p-0.5";
  const btnBase = "rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors";

  return (
    <div
      className={`${containerClass} ${className}`}
      role="group"
      aria-label="Idioma / Language"
    >
      <button
        type="button"
        onClick={() => setLocale("es")}
        className={`${btnBase} ${locale === "es" ? active : inactive}`}
        aria-pressed={locale === "es"}
        aria-label="Español"
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`${btnBase} ${locale === "en" ? active : inactive}`}
        aria-pressed={locale === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
