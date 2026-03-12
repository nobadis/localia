"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LocaliaLogo } from "@/components/ui/LocaliaLogo";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { openDemoForm } from "@/components/demo/DemoRequestForm";
import { getLocale, getMessages, getLanding } from "@/lib/i18n";

export function LandingNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = getLocale();
  const msg = getMessages(locale);
  const landing = getLanding(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-2xl safe-top ${
        scrolled
          ? "bg-gray-950/95 border-b border-white/[0.08] shadow-lg shadow-black/30"
          : "bg-gray-950/90 border-b border-white/[0.04]"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <LocaliaLogo size={28} onDark className="group-hover:opacity-90 transition-opacity" />
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <LocaleSwitcher className="shrink-0" />
          <a
            href="#problema"
            className="rounded-full px-4 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            {msg.nav.problema}
          </a>
          <a
            href="#como-funciona"
            className="rounded-full px-4 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            {msg.nav.comoFunciona}
          </a>
          <a
            href="#precio"
            className="rounded-full px-4 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            {msg.nav.precio}
          </a>
          <a
            href="#faq"
            className="rounded-full px-4 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            {msg.nav.faq}
          </a>
          <Link
            href={landing.DOCS.localiaGuide}
            className="rounded-full px-4 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            {landing.GUIA_IA_PRIVADA.navLabel}
          </Link>
          <Link
            href="/demo"
            className="rounded-full border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400/60 px-4 py-1.5 text-[13px] font-semibold transition-all"
          >
            {msg.nav.pruébalo}
          </Link>
          <button
            type="button"
            onClick={() => { setOpen(false); openDemoForm(); }}
            className="rounded-full bg-emerald-600 hover:bg-emerald-500 text-[13px] font-semibold text-white px-5 py-1.5 transition-all shadow-md shadow-emerald-500/20"
          >
            {msg.nav.solicitarDemo}
          </button>
        </div>

        <button
          className="md:hidden rounded-full p-2 text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? msg.common.closeMenu : msg.common.openMenu}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed right-0 top-0 z-50 h-full w-72 bg-gray-950 backdrop-blur-2xl border-l border-white/[0.06] shadow-2xl md:hidden animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b border-white/[0.06]">
              <LocaliaLogo size={24} onDark />
              <button onClick={() => setOpen(false)} aria-label={msg.common.closeMenu} className="rounded-full p-2 text-gray-500 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-1">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06]">
                <span className="text-xs font-medium text-gray-500">{msg.common.languageLabel}</span>
                <LocaleSwitcher compact />
              </div>
              <a href="#problema" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05]">
                {msg.nav.problema}
              </a>
              <a href="#como-funciona" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05]">
                {msg.nav.comoFunciona}
              </a>
              <a href="#precio" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05]">
                {msg.nav.precio}
              </a>
              <a href="#faq" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05]">
                {msg.nav.faq}
              </a>
              <Link href={landing.DOCS.localiaGuide} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05]">
                {landing.GUIA_IA_PRIVADA.navLabel}
              </Link>
              <Link href="/demo" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/10">
                {msg.nav.pruébalo}
              </Link>
              <button
                type="button"
                onClick={() => { setOpen(false); openDemoForm(); }}
                className="block w-full text-left rounded-xl px-4 py-3 text-sm font-semibold text-emerald-400"
              >
                {msg.nav.solicitarDemo}
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
