import type { Metadata } from "next";
import { getServerLocale } from "@/lib/server-locale";
import { getLanding } from "@/lib/i18n";
import GuideEs from "./GuideEs";
import GuideEn from "./GuideEn";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  return {
    title: isEn ? "Localia — Private AI Guide" : "Localia — Guía IA privada",
    description: isEn
      ? "A guide to leveraging AI in your organization's knowledge management with security and privacy. Localia."
      : "Guía para aprovechar la IA en la gestión del conocimiento de la empresa con seguridad y privacidad. Localia.",
  };
}

export default async function GuiaLocaliaPage() {
  const locale = await getServerLocale();
  const landing = getLanding(locale);
  const contactEmail = landing.CONTACT_EMAIL;
  const demoSubject = landing.DEMO_SUBJECT;

  if (locale === "en") {
    return <GuideEn contactEmail={contactEmail} demoSubject={demoSubject} />;
  }
  return <GuideEs contactEmail={contactEmail} demoSubject={demoSubject} />;
}
