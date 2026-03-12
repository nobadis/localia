/**
 * i18n: locale and messages for a fully English-ready site.
 * Set NEXT_PUBLIC_LOCALE=en to build/run in English (default: es).
 */

import { messages as messagesEs } from "@/content/messages/es";
import { messages as messagesEn } from "@/content/messages/en";
import * as landingEs from "@/content/landing";
import { landingEn } from "@/content/landing-en";

export type Locale = "es" | "en";

export function getLocale(): Locale {
  if (typeof window !== "undefined") {
    return (window as unknown as { __LOCALE__?: Locale }).__LOCALE__ ?? "es";
  }
  const env = process.env.NEXT_PUBLIC_LOCALE as Locale | undefined;
  return env === "en" ? "en" : "es";
}

export type NavMessages = {
  problema: string;
  comoFunciona: string;
  precio: string;
  faq: string;
  guiaLabel: string;
  pruébalo: string;
  solicitarDemo: string;
};

export type FooterMessages = {
  madeWith: string;
};

export type CommonMessages = {
  back: string;
  demo: string;
  requestDemo: string;
  tryIt: string;
  tryItFree: string;
  howItWorks: string;
  scrollDown: string;
  contact: string;
  talkToUs: string;
  tryItNow: string;
  seePlans: string;
  openMenu: string;
  closeMenu: string;
  copy: string;
  copied: string;
  languageLabel: string;
  formTitle: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formSubmit: string;
  formSuccess: string;
  formError: string;
};

export type DemoMessages = {
  writeOrChoose: string;
  serverLocalBanner: string;
  errorResponse: string;
  errorConnection: string;
  lastResponseBold: string;
  lastResponseRest: string;
  limitReached: string;
  placeholder: string;
  placeholderLimit: string;
  send: string;
  remaining: string;
  contactToContinue: string;
  requestDemo: string;
  contact: string;
  sessionComplete: string;
  forBusiness: string;
  seePlans: string;
  contactLocalia: string;
  prompts: string[];
};

export type Messages = {
  nav: NavMessages;
  footer: FooterMessages;
  common: CommonMessages;
  demo: DemoMessages;
};

export function getMessages(locale: Locale): Messages {
  return locale === "en" ? messagesEn : messagesEs;
}

export type LandingContent = typeof landingEs;

export function getLanding(locale: Locale): LandingContent {
  return (locale === "en" ? landingEn : landingEs) as LandingContent;
}
