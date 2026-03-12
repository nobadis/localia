"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LandingNavbar } from "@/components/layout/LandingNavbar";
import { stagger, fadeUp, scaleIn } from "@/lib/motion";
import {
  ArrowRight,
  Shield,
  Server,
  MessageSquare,
  CheckCircle2,
  Lock,
  ChevronRight,
  ChevronDown,
  Zap,
  FileText,
  Users,
  Eye,
  TrendingUp,
  Clock,
  BarChart3,
  Globe,
} from "lucide-react";
import { BrandName } from "@/components/ui/BrandName";
import { LocaliaLogo } from "@/components/ui/LocaliaLogo";
import { openDemoForm } from "@/components/demo/DemoRequestForm";
import { getLocale, getLanding, getMessages } from "@/lib/i18n";
import type { LandingContent } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Lock,
  Shield,
  FileText,
  MessageSquare,
  Users,
  CheckCircle2,
  Globe,
  BarChart3,
  Eye,
  Zap,
  TrendingUp,
  Clock,
};

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  useEffect(() => {
    if (inView) animate(count, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
  }, [inView, count, value]);
  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsub;
  }, [rounded, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

function StatPill({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] backdrop-blur-sm p-3 border border-white/[0.06] hover:border-white/10 transition-colors">
      <Icon className="h-4 w-4 text-gray-600 shrink-0" />
      <div>
        <p className="text-lg font-bold text-white">{value}</p>
        <p className="text-[11px] text-gray-600">{label}</p>
      </div>
    </div>
  );
}

function FAQAccordion({ landing, messages }: { landing: LandingContent; messages: Messages }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const FAQ = landing.FAQ;
  return (
    <section id="faq" className="relative py-14 sm:py-16 bg-white scroll-mt-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-2xl font-bold text-gray-900 sm:text-3xl text-center">
          {messages.nav.faq}
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-accent mx-auto mt-3" />
        <div className="mt-8 space-y-2">
          {FAQ.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 1, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-gray-200/80 bg-gray-50/50 overflow-hidden transition-colors hover:border-emerald-200/60"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left font-semibold text-gray-900 text-sm transition-colors hover:bg-emerald-50/30"
                aria-expanded={openIndex === i}
              >
                {item.q}
                <ChevronDown className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <dd className="px-4 pb-3.5 pt-3 text-gray-600 text-[13px] leading-relaxed border-t border-gray-200/60">
                      {item.a}
                    </dd>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const [pricingAnnual, setPricingAnnual] = useState(true);
  const locale = getLocale();
  const landing = getLanding(locale) as LandingContent;
  const msg = getMessages(locale);
  const s = landing.SECTIONS;
  return (
    <div className="min-h-screen bg-white relative">
      <LandingNavbar />

      {/* HERO: grid, stats, pills, scroll */}
      <section className="relative overflow-hidden bg-gray-950 text-white min-h-[100dvh] flex items-center pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,.12)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-emerald-600/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-40 right-[15%] w-56 h-56 bg-green-600/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 w-full">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-5 py-2 text-sm text-gray-400 backdrop-blur-sm mb-8">
              <Zap className="h-4 w-4 text-emerald-400" />
              {landing.HERO.badge}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="hero-headline text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.05]"
              style={{ fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
            >
              {s.heroHeadline1}
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                {s.heroHeadline2}
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed">
              {s.heroSubline}
            </motion.p>
            <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-sm text-emerald-300/90 sm:text-base">
              {s.heroTrainingLine}
            </motion.p>

            {/* 3 stat cards: centrados, simétricos, misma altura y ancho */}
            <motion.div variants={fadeUp} className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto w-full">
              {landing.HERO_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.04, borderColor: "rgba(16,185,129,0.3)" }}
                  className={`rounded-2xl border backdrop-blur-sm transition-colors cursor-default flex flex-col items-center justify-center text-center min-h-[172px] w-full px-6 py-7 box-border ${
                    i === 1 ? "bg-emerald-950/60 border-emerald-800/30" : "bg-gray-900/80 border-gray-800"
                  }`}
                >
                  <p className="text-5xl font-bold tabular-nums leading-none">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className={`text-sm mt-3 font-medium leading-tight ${i === 1 ? "text-emerald-300" : "text-gray-400"}`}>{stat.label}</p>
                  <p className={`text-xs mt-1 leading-tight ${i === 1 ? "text-emerald-400/40" : "text-gray-600"}`}>{stat.sublabel}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={openDemoForm}
                className="inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-black hover:bg-gray-100 shadow-2xl shadow-white/10 font-semibold text-base px-8 py-3 gap-2"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2">
                  {msg.common.requestDemo}
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </button>
              <Link href="/demo">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" className="font-semibold text-base px-8 gap-2 border-emerald-400/50 text-emerald-200 hover:bg-emerald-500/20 hover:border-emerald-400/70">
                    {msg.common.tryIt}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
              <a href="#como-funciona">
                <Button size="lg" variant="outline" className="font-semibold text-base px-8 gap-2">
                  {msg.common.howItWorks}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {landing.HERO_STAT_PILLS.map((pill) => {
              const Icon = ICONS[pill.icon];
              return Icon ? <StatPill key={pill.label} icon={Icon} label={pill.label} value={pill.value} /> : null;
            })}
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs uppercase tracking-widest">{msg.common.scrollDown}</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </section>

      {/* Plug and play: ellos no hacen nada */}
      <section className="relative py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 1, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">
              {landing.PLUG_AND_PLAY.headline}
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              {landing.PLUG_AND_PLAY.subline}
            </p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/demo">
                <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-semibold px-6 gap-2">
                  {msg.common.tryItFree}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button type="button" size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold px-6 gap-2" onClick={openDemoForm}>
                {msg.common.requestDemo}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-12 grid sm:grid-cols-3 gap-6"
          >
            {landing.PLUG_AND_PLAY.points.map((point, i) => (
              <motion.div
                key={point.label}
                variants={fadeUp}
                className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 text-center"
              >
                <div className="inline-flex rounded-xl bg-emerald-500/10 p-3 mb-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{point.label}</h3>
                <p className="mt-1 text-sm text-gray-600">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Private / Secure: dos pilares */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-emerald-50/60 to-white border-b border-emerald-100/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.p
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 text-sm sm:text-base mb-10"
          >
            {s.privateSecureIntro}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 gap-6"
          >
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -2, boxShadow: "0 12px 40px -12px rgba(16, 185, 129, 0.12)" }}
              className="group rounded-2xl border border-gray-200/80 bg-gray-50/50 p-6 transition-all hover:border-emerald-200/60 hover:bg-emerald-50/20 cursor-default"
            >
              <div className="inline-flex rounded-xl bg-emerald-500/10 p-3 mb-4 group-hover:scale-105 transition-transform">
                <Lock className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">{landing.PRIVATE_SECURE.private.title}</h3>
              <p className="mt-1 text-gray-600 text-sm leading-relaxed">{landing.PRIVATE_SECURE.private.description}</p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -2, boxShadow: "0 12px 40px -12px rgba(16, 185, 129, 0.12)" }}
              className="group rounded-2xl border border-gray-200/80 bg-gray-50/50 p-6 transition-all hover:border-emerald-200/60 hover:bg-emerald-50/20 cursor-default"
            >
              <div className="inline-flex rounded-xl bg-emerald-500/10 p-3 mb-4 group-hover:scale-105 transition-transform">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">{landing.PRIVATE_SECURE.secure.title}</h3>
              <p className="mt-1 text-gray-600 text-sm leading-relaxed">{landing.PRIVATE_SECURE.secure.description}</p>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-3">
            <Button type="button" size="md" className="bg-emerald-600 text-white hover:bg-emerald-700 font-semibold px-5 gap-2" onClick={openDemoForm}>
              {msg.common.requestDemo}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN OSCURA: El problema + De ChatGPT público a IA privada (fusionado) */}
      <section id="problema" className="relative py-20 sm:py-28 bg-gray-950 text-white overflow-hidden scroll-mt-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center">
              <Badge className="bg-white/10 text-gray-300 border border-white/10 mb-4 text-sm font-medium">{s.problemaBadge}</Badge>
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight">
                {s.problemaTitle}
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                {s.problemaDesc}
              </p>
              <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/demo">
                  <Button size="md" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 font-semibold gap-2">{msg.common.tryIt}</Button>
                </Link>
                <Button type="button" size="md" className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold gap-2" onClick={openDemoForm}>{msg.common.requestDemo}</Button>
              </motion.div>
            </motion.div>
            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {landing.OPERATION_STEPS.map((step, i) => {
                const Icon = ICONS[step.icon];
                return (
                  <motion.div
                    key={step.title}
                    variants={scaleIn}
                    whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)" }}
                    className="relative rounded-2xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm p-8 transition-colors"
                  >
                    <div className="text-6xl font-black text-gray-800/30 absolute top-4 right-6 select-none">{i + 1}</div>
                    {Icon && <div className={`mb-4 inline-flex rounded-xl p-3 ${step.color}`}><Icon className="h-6 w-6" /></div>}
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-400">{step.desc}</p>
                    <div className="mt-5 pt-4 border-t border-gray-800">
                      <p className="text-3xl font-bold text-white">{step.metric}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{step.versus}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <motion.div variants={fadeUp} className="mt-10 max-w-2xl mx-auto rounded-xl border border-gray-800 bg-gray-900/50 px-5 py-4 text-center">
              <p className="text-sm font-medium text-white">{landing.GOVERNANCE_COPY.headline}</p>
              <p className="mt-1 text-xs text-gray-400 leading-relaxed">{landing.GOVERNANCE_COPY.body}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CÓMO: datos en el entorno */}
      <section id="como-funciona" className="relative py-20 sm:py-28 scroll-mt-16 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,.04)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">
              {s.comoTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              {s.comoSubtitle}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/demo">
                <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-semibold px-8 gap-2">
                  {msg.common.tryItNow}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button type="button" size="lg" variant="outline" className="border-emerald-500 text-emerald-700 bg-white hover:bg-emerald-50 font-semibold px-8 gap-2" onClick={openDemoForm}>
                {msg.common.talkToUs}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14">
            <motion.div variants={fadeUp} className="flex-1 space-y-4">
              <div className="inline-flex rounded-xl bg-gradient-to-br from-emerald-100 to-green-100 p-3 mb-2">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {s.comoBody1}
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {s.comoBody2}
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {s.comoBody3}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 border border-gray-200 px-3.5 py-1.5 text-xs font-medium text-gray-600"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> {s.comoPill1}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 border border-gray-200 px-3.5 py-1.5 text-xs font-medium text-gray-600"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> {s.comoPill2}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 border border-gray-200 px-3.5 py-1.5 text-xs font-medium text-gray-600"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> {s.comoPill3}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 text-xs font-medium text-emerald-700"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> {s.comoPill4}</span>
              </div>
              <p className="mt-3 text-sm text-gray-500">{s.comoTasaError}</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 60px -15px rgba(16, 185, 129, 0.25)" }}
              className="flex-1 rounded-3xl border border-gray-200 bg-gray-50 shadow-sm p-6 transition-all cursor-default"
            >
              <div className="rounded-xl bg-white border border-gray-200 p-3 text-sm text-gray-500">{s.comoExampleQuestion}</div>
              <div className="mt-3 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 p-3 text-sm text-gray-800">{s.comoExampleAnswer}</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,.03)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">
                {s.casosTitle} <BrandName variant="capitalize" />{s.casosTitleSuffix}
              </h2>
              <p className="mt-4 text-gray-500 max-w-xl mx-auto">{s.casosSubtitle}</p>
            <motion.div variants={fadeUp} className="mt-6 flex justify-center gap-3">
              <Link href="/demo">
                <Button size="md" className="bg-emerald-600 text-white hover:bg-emerald-700 font-semibold gap-2">{msg.common.tryIt}</Button>
              </Link>
              <Button type="button" size="md" variant="outline" className="border-emerald-500 text-emerald-700 bg-white hover:bg-emerald-50 font-semibold gap-2" onClick={openDemoForm}>{msg.common.contact}</Button>
            </motion.div>
            </motion.div>
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {landing.CASOS_USO.map((uc) => {
                const Icon = ICONS[uc.icon];
                return (
                  <motion.div
                    key={uc.title}
                    variants={scaleIn}
                    whileHover={{ y: -8, boxShadow: "0 25px 60px -15px rgba(0,0,0,0.08)" }}
                    className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all cursor-default hover:border-emerald-200 hover:shadow-lg"
                  >
                    {Icon && (
                      <div className={`mb-4 inline-flex rounded-xl p-3 ${uc.color} transition-transform group-hover:scale-110`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-gray-900">{uc.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{uc.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {uc.tags.map((tag) => (
                        <span key={tag} className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${uc.tagColor}`}>{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INSTALACIÓN: 4 pasos */}
      <section className="relative py-16 sm:py-20 bg-gray-50/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl text-center tracking-tight">
            {s.instalacionTitle}
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-accent mx-auto mt-3" />
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {landing.PASOS_INSTALACION.map((paso, i) => (
              <motion.div
                key={paso.titulo}
                initial={{ opacity: 1, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px -12px rgba(16, 185, 129, 0.15)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-gray-200/80 bg-white p-4 text-center shadow-sm transition-all hover:border-emerald-200/60 cursor-default"
              >
                <span className="text-2xl font-black bg-gradient-to-br from-emerald-200 to-green-200 bg-clip-text text-transparent">{i + 1}</span>
                <p className="mt-1 font-semibold text-gray-900 text-sm">{paso.titulo}</p>
                <p className="mt-0.5 text-[12px] text-gray-500">{paso.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="mt-10 flex justify-center gap-3">
            <Link href="/demo">
              <Button size="md" variant="outline" className="border-emerald-500 text-emerald-700 bg-white hover:bg-emerald-50 font-semibold gap-2">{msg.common.tryIt}</Button>
            </Link>
            <Button type="button" size="md" className="bg-emerald-600 text-white hover:bg-emerald-700 font-semibold gap-2" onClick={openDemoForm}>{msg.common.requestDemo}</Button>
          </motion.div>
        </div>
      </section>

      {/* DOS COLUMNAS OSCURO: IA que potencia + Por qué ahora */}
      <section className="relative py-20 sm:py-28 bg-gray-950 text-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="grid gap-16 lg:grid-cols-2 items-start">
            <motion.div variants={fadeUp}>
              <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4 text-sm">{s.iaPotenciaBadge}</Badge>
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight">
                {s.iaPotenciaTitleLine1}
                <br />
                <span className="text-emerald-400">{s.iaPotenciaTitleLine2}</span>
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">{s.iaPotenciaSubline}</p>
              <div className="mt-8 space-y-5">
                {landing.IA_POTENCIA.map((item) => {
                  const Icon = ICONS[item.icon];
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      whileHover={{ x: 4 }}
                      className="flex gap-4 p-3 -mx-3 rounded-xl transition-colors hover:bg-emerald-500/5 cursor-default"
                    >
                      {Icon && <div className="shrink-0 mt-0.5 rounded-lg bg-emerald-500/10 p-2.5"><Icon className="h-5 w-5 text-emerald-400" /></div>}
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4 text-sm">{s.porQueBadge}</Badge>
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight">{s.porQueTitle}</h2>
              <p className="mt-4 text-gray-400 leading-relaxed">{s.porQueSubline}</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {landing.POR_QUE_AHORA.map((item) => {
                  const Icon = ICONS[item.icon];
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="rounded-xl border border-gray-800 bg-gray-900/60 p-5 hover:bg-gray-800/60 hover:border-gray-700 transition-all cursor-default"
                    >
                      {Icon && <Icon className={`h-6 w-6 mb-3 ${item.iconColor}`} />}
                      <p className="font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* QUÉ NOS HACE DISTINTOS */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,.04)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-gray-900 sm:text-5xl tracking-tight">
              {s.distinctTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-emerald-600 font-medium">
              {s.distinctSubline}
            </motion.p>
            <motion.p variants={fadeUp} className="mt-6 text-gray-600 text-[15px] sm:text-base leading-relaxed">
              {s.distinctBody}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL + CIFRAS + GUÍA */}
      <section className="relative py-16 sm:py-20 bg-gray-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,.06)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.p variants={fadeUp} className="text-gray-500 text-xs uppercase tracking-wider">{s.trustIntro}</motion.p>
            <motion.div variants={fadeUp} className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {landing.TRUST_STATS.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-gray-800 bg-gray-900/60 px-3 py-3">
                  <p className="text-lg font-bold text-white tabular-nums">{stat.value}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeUp} className="mt-8 text-gray-500 text-xs uppercase tracking-wider">{s.trustWho}</motion.p>
            <motion.p variants={fadeUp} className="mt-3 text-lg text-white font-medium">
              {s.trustTestimonial}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href={landing.DOCS.localiaGuide} className="group inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-4 py-2.5 text-sm font-medium hover:bg-white/15 hover:border-white/25 transition-all duration-200">
                {landing.GUIA_IA_PRIVADA.title}
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion landing={landing} messages={msg} />

      {/* CTA FINAL */}
      <section className="relative py-24 sm:py-32 text-white overflow-hidden bg-gray-950">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,.1)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl font-extrabold sm:text-5xl lg:text-7xl tracking-tight">
              {s.ctaFinalTitle1}
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                {s.ctaFinalTitle2}
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              {s.ctaFinalSubline}
            </motion.p>
            <motion.p variants={fadeUp} className="mt-2 text-sm text-gray-600">
              {s.ctaFinalSubline2}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-12">
              <Button type="button" size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-12 text-base shadow-2xl shadow-white/10 gap-2" onClick={openDemoForm}>
                <motion.span whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} className="inline-flex items-center gap-2">
                  {msg.common.requestDemo}
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-emerald-400" /> {s.ctaFinalBullet1}</span>
              <span className="flex items-center gap-1.5"><Server className="h-4 w-4 text-emerald-400" /> {s.ctaFinalBullet2}</span>
              <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-green-400" /> {s.ctaFinalBullet3}</span>
              <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-green-400" /> {s.ctaFinalBullet4}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PLANES Y PRECIOS */}
      <section id="precio" className="relative py-20 sm:py-28 scroll-mt-20 overflow-visible bg-gray-950">
        <div className="pointer-events-none absolute inset-0 overflow-hidden bg-gray-950" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,.1)_0%,transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{s.pricingTitle}</h2>
              <div className="section-accent mx-auto mt-3" />
              <p className="mt-3 text-gray-400 text-sm">{s.pricingSubtitle}</p>
              <p className="mt-1 text-gray-500 text-xs">{s.pricingSubtitle2}</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <span className={`text-sm font-medium ${!pricingAnnual ? "text-white" : "text-gray-500"}`}>{s.pricingMonthly}</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={pricingAnnual}
                  onClick={() => setPricingAnnual((a) => !a)}
                  className="relative inline-flex h-6 w-11 shrink-0 rounded-full bg-gray-700 border border-gray-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition translate-x-0.5 ${
                      pricingAnnual ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${pricingAnnual ? "text-white" : "text-gray-500"}`}>{s.pricingAnnual}</span>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-x-auto overflow-y-visible -mx-4 px-4 sm:mx-0 sm:px-0 pt-8 pb-6">
              <div className="inline-flex gap-4 min-w-max sm:grid sm:grid-cols-6 sm:min-w-0 items-start">
                {landing.PRICING_TIERS.map((tier) => (
                  <motion.div
                    key={tier.id}
                    whileHover={{
                      y: -6,
                      scale: tier.highlight ? 1.02 : 1,
                      transition: { duration: 0.2 },
                      boxShadow: tier.highlight
                        ? "0 25px 50px -12px rgba(16, 185, 129, 0.35), 0 0 0 1px rgba(255,255,255,0.1)"
                        : undefined,
                    }}
                    className={`relative flex flex-col rounded-2xl border min-w-[160px] sm:min-w-0 transition-all duration-200 cursor-pointer ${
                      tier.highlight
                        ? "bg-emerald-500/20 border-emerald-400/50 shadow-xl shadow-emerald-500/15 hover:border-emerald-400/80 hover:bg-emerald-500/25"
                        : "bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/[0.08]"
                    }`}
                  >
                    {tier.highlight && (
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10">
                        <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0 text-[10px] px-2 py-0.5 shadow-lg whitespace-nowrap">{s.pricingRecommended}</Badge>
                      </div>
                    )}
                    <div className={`p-4 sm:p-5 flex flex-col flex-1 ${tier.highlight ? "pt-6 sm:pt-7" : ""}`}>
                      <p className={`font-bold text-sm uppercase tracking-wider ${tier.highlight ? "text-emerald-300" : "text-gray-400"}`}>
                        {tier.name}
                      </p>
                      <p className="mt-3 text-white font-semibold text-[13px]">{tier.users}</p>
                      <p className="text-gray-500 text-[12px] mt-0.5">{s.pricingSimultaneousUsers}</p>
                      <p className="mt-2 text-gray-400 text-[12px] flex items-center gap-1">
                        <Zap className="h-3 w-3 text-amber-400/80" /> {tier.latency}
                      </p>
                      <div className="mt-auto pt-5">
                        {tier.priceMonth !== null ? (
                          <>
                            {pricingAnnual ? (
                              <>
                                <p className="text-gray-500 text-sm line-through">{tier.priceMonth}€{s.pricingPerMonth}</p>
                                <p className="text-white font-bold text-xl mt-0.5">
                                  {tier.priceYear}€
                                  <span className="text-gray-500 font-normal text-sm">{s.pricingPerMonth}</span>
                                </p>
                                <p className="text-gray-500 text-[11px] mt-0.5">
                                  {tier.priceYear
                                    ? `${(Number(tier.priceYear.replace(/\./g, "")) * 12).toLocaleString(locale === "en" ? "en-GB" : "es-ES", { maximumFractionDigits: 0 })}€${s.pricingPerYear}`
                                    : ""}
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="text-white font-bold text-xl">
                                  {tier.priceMonth}€
                                  <span className="text-gray-500 font-normal text-sm">{s.pricingPerMonth}</span>
                                </p>
                                <p className="text-gray-500 text-[11px] mt-0.5">{s.pricingMonthlyBilling}</p>
                              </>
                            )}
                          </>
                        ) : (
                          <p className="text-gray-400 text-sm font-medium">{tier.cta}</p>
                        )}
                        <button
                          type="button"
                          onClick={openDemoForm}
                          className={`mt-3 block w-full rounded-lg py-2 text-[13px] font-medium transition-all duration-200 ${
                            tier.highlight ? "bg-white text-gray-900 hover:bg-gray-100 shadow-md" : "bg-white/10 text-white hover:bg-white/20"
                          }`}
                        >
                          {tier.cta}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-gray-950 text-gray-400 pb-24 md:pb-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-14">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <LocaliaLogo size={28} onDark />
              </div>
              <p className="text-sm leading-relaxed text-gray-500">
                {s.footerTagline}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {landing.FOOTER_BADGES.map((b) => {
                  const Icon = ICONS[b.icon];
                  return Icon ? (
                    <span key={b.label} className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 px-3 py-1 text-[11px] font-medium">
                      <Icon className="h-3 w-3" /> {b.label}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
            <div className="shrink-0">
              <p className="text-sm text-gray-500 mb-3">{s.footerWantToSee}</p>
              <Button type="button" size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 text-sm gap-2" onClick={openDemoForm}>
                {msg.common.requestDemo}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800/50 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-gray-700">© {new Date().getFullYear()} <BrandName onDark className="text-xs" /></p>
            <div className="flex flex-col sm:items-end gap-0.5 text-xs text-gray-700">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {getMessages(getLocale()).footer.madeWith}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
