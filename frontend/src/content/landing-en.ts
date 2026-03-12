/**
 * Landing content — English. Same structure as landing.ts for i18n.
 */

import { CONTACT_EMAIL } from "./contact";
export { CONTACT_EMAIL };
export const DEMO_SUBJECT = "Localia Demo";

export const HERO = {
  badge: "Plug and play. No IT team? We run it. Got one? We work with them.",
  title: "Your AI. Your server.",
  titleHighlight: "Your data never leaves.",
  tagline:
    "Private AI for organisations that can't afford a data breach.",
  ctaPrimary: "Security, compliance and AI—without the infrastructure or IT overhead",
  ctaSecondary: "The problem",
} as const;

export const PLUG_AND_PLAY = {
  headline: "You don't lift a finger.",
  subline: "We install, configure and maintain everything. Works with or without an IT team. Easiest option. Safest. Fully compliant.",
  points: [
    { label: "With or without IT", desc: "No tech team? We run the lot. Have one? We work alongside them." },
    { label: "Zero config", desc: "Up and running from day one." },
    { label: "We run the lot", desc: "Server, AI, updates, support—all on us." },
  ],
} as const;

export const HERO_ALT = {
  title: "A private ChatGPT that knows your organisation.",
  subtitle: "Data stays on your server. Nothing is trained on it. No lock-in.",
} as const;

export const PRIVATE_SECURE = {
  private: {
    title: "Private",
    description: "Your data stays yours. We never use it to train any AI.",
  },
  secure: {
    title: "Secure",
    description: "People only see answers they're allowed to see.",
  },
} as const;

export const CAPACIDADES = [
  "Draft documents, reports, and internal comms in your organization’s style.",
  "Answer questions on your procedures and how you do things.",
  "Summarise meetings, minutes and long docs in seconds.",
  "Get new hires up to speed from day one.",
  "Give consistent answers to the same questions, every time.",
  "Translate, proofread and polish any text in seconds.",
  "Analyse data and draw conclusions without data ever leaving your environment.",
] as const;

export const HERO_STATS = [
  { value: 100, suffix: "%", label: "Data on your server", sublabel: "Nothing goes to third parties" },
  { value: 0, suffix: "", label: "Data leaks", sublabel: "Your data never trains any model" },
  { value: 1, suffix: " week", label: "Live", sublabel: "From first contact" },
] as const;

export const HERO_STAT_PILLS = [
  { icon: "Server" as const, label: "data never leaves your organisation", value: "100%" },
  { icon: "Shield" as const, label: "GDPR by design", value: "Yes" },
  { icon: "Zap" as const, label: "plug and play, no setup", value: "Yes" },
  { icon: "Lock" as const, label: "no lock-in", value: "0" },
] as const;

export const OPERATION_STEPS = [
  { icon: "Server" as const, title: "Your server", desc: "AI runs where you want it. No shared SaaS.", metric: "100%", versus: "vs everyone else’s cloud", color: "bg-emerald-500/10 text-emerald-400" },
  { icon: "Lock" as const, title: "Your data never trains anything", desc: "Your models or open-source. You’re in control.", metric: "0 leaks", versus: "vs ChatGPT/Copilot that learn from you", color: "bg-emerald-500/10 text-emerald-400" },
  { icon: "Shield" as const, title: "Access control", desc: "Users only see what they're allowed to see.", metric: "GDPR", versus: "by design, not bolted on", color: "bg-emerald-500/10 text-emerald-300" },
] as const;

export const CASOS_USO = [
  { icon: "FileText" as const, title: "Documents and reports", desc: "Draft and send in your house style.", tags: ["Internal", "Brand style"], color: "bg-emerald-50 text-emerald-600", tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  { icon: "MessageSquare" as const, title: "Procedures and protocols", desc: "Answers on how things are done in your organisation.", tags: ["FAQ", "Onboarding"], color: "bg-emerald-50 text-emerald-600", tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  { icon: "Users" as const, title: "Summaries and minutes", desc: "Meetings and long docs—done in seconds.", tags: ["Productivity"], color: "bg-emerald-50 text-emerald-600", tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  { icon: "CheckCircle2" as const, title: "Frequent questions", desc: "Same question, same quality answer—every time.", tags: ["Scalable"], color: "bg-emerald-50 text-emerald-600", tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  { icon: "Globe" as const, title: "Translate and polish", desc: "Any text—improve, review or translate.", tags: ["Multilingual"], color: "bg-emerald-50 text-emerald-600", tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  { icon: "BarChart3" as const, title: "Data and insights", desc: "Analyse without data ever leaving your environment.", tags: ["Compliance"], color: "bg-emerald-50 text-emerald-600", tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
] as const;

export const IA_POTENCIA = [
  { icon: "Users" as const, title: "More capacity, less busywork", desc: "Teams focus on what actually matters." },
  { icon: "Eye" as const, title: "Explainable", desc: "You always know where an answer came from." },
  { icon: "Lock" as const, title: "GDPR by design", desc: "Privacy built in from the ground up." },
  { icon: "Zap" as const, title: "Plug and play", desc: "With or without IT—we install, configure and maintain. Or we work with your team." },
] as const;

export const POR_QUE_AHORA = [
  { icon: "Shield" as const, title: "GDPR and confidentiality", desc: "More and more mandatory. Localia's already there.", iconColor: "text-emerald-400" },
  { icon: "TrendingUp" as const, title: "Competitive edge", desc: "Teams that use internal AI well pull ahead.", iconColor: "text-emerald-300" },
  { icon: "Server" as const, title: "Full control", desc: "No lock-in to one cloud vendor.", iconColor: "text-green-400" },
  { icon: "Clock" as const, title: "Live in days", desc: "Not months of integration.", iconColor: "text-green-300" },
] as const;

export const TRUST_STATS = [
  { value: "2024", label: "With us since" },
  { value: "50+", label: "Organisations trust us" },
  { value: "600k+", label: "Responses generated" },
  { value: "250k+", label: "AI hours in production" },
] as const;

export const GOVERNANCE_COPY = {
  headline: "Not just a local model.",
  body: "Control, audit, policies and traceability—you know who asked what. AI governance and protection of sensitive data. What organisations actually need.",
} as const;

export const FOOTER_BADGES = [
  { icon: "Shield" as const, label: "GDPR" },
  { icon: "Server" as const, label: "Dedicated server" },
  { icon: "Lock" as const, label: "Private AI" },
  { icon: "Zap" as const, label: "With or without IT" },
] as const;

export const PASOS_INSTALACION = [
  { titulo: "You tell us", desc: "What you need—no jargon." },
  { titulo: "We set it up", desc: "Server, AI, content. You're not involved." },
  { titulo: "Ready to use", desc: "Your team can start the same day." },
  { titulo: "We keep it running", desc: "Updates and support. No ops burden on you." },
] as const;

export const FAQ = [
  { q: "Do we need our own servers?", a: "No. We rent and run the dedicated server for you. You don't touch the infrastructure." },
  { q: "Can we tailor the AI with our data?", a: "Yes. You add your docs, procedures, manuals and style so the AI answers like you. Nothing is used to train models—your data only feeds your AI on your server and stays yours." },
  { q: "What if the server fails?", a: "We monitor the service 24/7. If something goes wrong, we fix it before it affects your team." },
  { q: "Can we change the preconfigured questions?", a: "Yes. You choose what appears in the interface; we update it when you need." },
  { q: "Can our data be used to train AI models?", a: "No. Data never leaves your server. Nothing is trained on it—it's only used to tailor your AI. The AI is yours, the data is yours, and it's never sent to third parties." },
  { q: "Is Localia legal under GDPR?", a: "Yes. With no data transfer to third parties, Localia is GDPR-compliant by design. We can provide technical documentation for your DPO on request." },
  { q: "Can we cancel anytime?", a: "Yes. No commitment. No penalties." },
] as const;

export const DOCS = {
  localiaGuide: "/docs/localia",
} as const;

export const GUIA_IA_PRIVADA = {
  title: "Localia — Private AI Guide",
  navLabel: "Localia Guide",
} as const;

import type { PricingTier } from "@/content/landing";

export const SECTIONS = {
  heroHeadline1: "A private ChatGPT",
  heroHeadline2: "with your organisation's knowledge",
  heroSubline: "No big infrastructure or IT team required. Security, compliance and AI that's robust, secure and scalable.",
  heroTrainingLine: "You tailor the AI with your data, processes and style. Nothing is used for training—it's yours and stays yours.",
  privateSecureIntro: "You add your documentation, processes and knowledge to tailor your AI. Nothing is trained on that data—it's only used so the AI answers like you. Data never leaves your organisation.",
  problemaBadge: "B2B. Organisations.",
  problemaTitle: "From public ChatGPT to your own private AI",
  problemaDesc: "Teams use ChatGPT or Copilot with sensitive data and it slips out of their control. With Localia: same ease of use, zero leaks, everything stays in your hands. Your server, plug and play. With or without an IT team.",
  comoTitle: "As simple as chat",
  comoSubtitle: "Plug and play. With or without an IT team—we run it or work with yours. Up and running from day one.",
  comoBody1: "Data stays in your environment, on your servers. Speed, reliability and answer quality match a public ChatGPT—unchanged.",
  comoBody2: "You tailor the AI with your data: docs, procedures, manuals, knowledge bases and your style. Nothing is trained on it—the AI just uses it to answer, and it all stays yours. Your team can keep adding docs whenever they like.",
  comoBody3: "If you can use WhatsApp, you can use Localia. Connect your docs; the team asks and gets answers straight away.",
  comoPill1: "With or without IT",
  comoPill2: "\u003c2s",
  comoPill3: "Preconfigured",
  comoPill4: "Personalized with your data",
  comoTasaError: "Error rate \u003c0.1%. Ready for review and validation.",
  comoExampleQuestion: "Question",
  comoExampleAnswer: "AI answer in seconds.",
  distinctTitle: "What sets us apart",
  distinctSubline: "Years of experience behind us. Precision isn't optional.",
  distinctBody: "We've been in the field for years and we know precision matters. So we've built our technology to minimise errors and to understand the industrial context you work in. This isn't a generic ChatGPT—it's AI that gets your sector.",
  casosTitle: "What can",
  casosTitleSuffix: " do?",
  casosSubtitle: "Documents, procedures, summaries and more—all without leaving your environment.",
  instalacionTitle: "Live in under a week. You don't lift a finger.",
  iaPotenciaBadge: "AI in your organisation",
  iaPotenciaTitleLine1: "AI that",
  iaPotenciaTitleLine2: "powers your team",
  iaPotenciaSubline: "Explainable. Auditable. You're in control.",
  porQueBadge: "Why now",
  porQueTitle: "Why Localia?",
  porQueSubline: "GDPR, control, edge. First movers win.",
  trustIntro: "Since 2024, 50+ organisations trust us",
  trustWho: "Who's already with us",
  trustTestimonial: "Calvià Town Council uses Localia. Citizen data protected; team up to speed.",
  ctaFinalTitle1: "Your AI. Your server.",
  ctaFinalTitle2: "Your data never leaves.",
  ctaFinalSubline: "30-minute demo. No commitment. Plug and play within a week. With or without IT—no heavy infrastructure.",
  ctaFinalSubline2: "No lock-in. GDPR by design. Dedicated server.",
  ctaFinalBullet1: "GDPR by design",
  ctaFinalBullet2: "Dedicated server",
  ctaFinalBullet3: "Data that never leaves",
  ctaFinalBullet4: "With or without IT",
  pricingTitle: "Plans and pricing",
  pricingSubtitle: "Fixed fee. Unlimited responses for everyone on the plan, at the same time. Hard to beat.",
  pricingSubtitle2: "Plug and play included—we set it up and keep it running.",
  pricingMonthly: "Monthly",
  pricingAnnual: "Annual",
  pricingRecommended: "Recommended",
  pricingSimultaneousUsers: "simultaneous users",
  pricingPerMonth: "/mo",
  pricingPerYear: "/yr",
  pricingMonthlyBilling: "Monthly billing",
  footerTagline: "Private AI on your server. Plug and play. With or without IT—we run it or work with your team. No leaks.",
  footerWantToSee: "Want to see it live?",
} as const;

export const PRICING_TIERS: PricingTier[] = [
  { id: "nano", name: "Nano", users: "Up to 10", latency: "\u003c2s", priceMonth: "220", priceYear: "187", cta: "Contact" },
  { id: "starter", name: "Starter", users: "Up to 25", latency: "\u003c2s", priceMonth: "450", priceYear: "382", cta: "Contact" },
  { id: "professional", name: "Professional", users: "Up to 60", latency: "\u003c2s", priceMonth: "850", priceYear: "722", cta: "Contact", highlight: true },
  { id: "enterprise", name: "Enterprise", users: "Up to 150", latency: "\u003c2.5s", priceMonth: "1.690", priceYear: "1.437", cta: "Contact" },
  { id: "enterprise-custom", name: "Enterprise+", users: "350+", latency: "\u003c3s", priceMonth: "3.190", priceYear: "2.712", cta: "Contact" },
  { id: "custom", name: "Custom", users: "Custom", latency: "On request", priceMonth: null, priceYear: null, cta: "Contact us" },
];

// Single export for getLanding(locale) — mirrors all named exports from landing.ts
export const landingEn = {
  CONTACT_EMAIL,
  DEMO_SUBJECT,
  HERO,
  PLUG_AND_PLAY,
  HERO_ALT,
  PRIVATE_SECURE,
  CAPACIDADES,
  HERO_STATS,
  HERO_STAT_PILLS,
  OPERATION_STEPS,
  CASOS_USO,
  IA_POTENCIA,
  POR_QUE_AHORA,
  TRUST_STATS,
  GOVERNANCE_COPY,
  FOOTER_BADGES,
  PASOS_INSTALACION,
  FAQ,
  DOCS,
  GUIA_IA_PRIVADA,
  PRICING_TIERS,
  SECTIONS,
};
