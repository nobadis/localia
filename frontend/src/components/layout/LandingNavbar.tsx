"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { CONTACT_EMAIL, DEMO_SUBJECT, DOCS, GUIA_IA_PRIVADA } from "@/content/landing";

export function LandingNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <span className="font-semibold text-white tracking-tight text-lg group-hover:opacity-90 transition-opacity">
            LOCALIA
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#problema"
            className="rounded-full px-4 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            El problema
          </a>
          <a
            href="#como-funciona"
            className="rounded-full px-4 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            Cómo funciona
          </a>
          <a
            href="#precio"
            className="rounded-full px-4 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            Precio
          </a>
          <a
            href="#faq"
            className="rounded-full px-4 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            FAQ
          </a>
          <Link
            href={DOCS.privateGptGuide}
            className="rounded-full px-4 py-1.5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            {GUIA_IA_PRIVADA.navLabel}
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(DEMO_SUBJECT)}`}>
            <span className="rounded-full bg-indigo-500 hover:bg-indigo-400 text-[13px] font-semibold text-white px-5 py-1.5 transition-all shadow-md shadow-indigo-500/20">
              Solicitar Demo
            </span>
          </a>
          <Link href="/app">
            <span className="rounded-full bg-white/10 hover:bg-white/15 text-[13px] font-medium text-white px-4 py-1.5 transition-all border border-white/10">
              Entrar
            </span>
          </Link>
        </div>

        <button
          className="md:hidden rounded-full p-2 text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
              <span className="font-semibold text-white">LOCALIA</span>
              <button onClick={() => setOpen(false)} aria-label="Cerrar menú" className="rounded-full p-2 text-gray-500 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-1">
              <a href="#problema" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05]">
                El problema
              </a>
              <a href="#como-funciona" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05]">
                Cómo funciona
              </a>
              <a href="#precio" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05]">
                Precio
              </a>
              <a href="#faq" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05]">
                FAQ
              </a>
              <Link href={DOCS.privateGptGuide} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05]">
                {GUIA_IA_PRIVADA.navLabel}
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(DEMO_SUBJECT)}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-indigo-400">
                Solicitar Demo
              </a>
              <Link href="/app" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-white bg-white/10">
                Entrar a la app
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
