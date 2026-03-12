import type { Metadata, Viewport } from "next";
import { getServerLocale } from "@/lib/server-locale";
import { DemoRequestForm } from "@/components/demo/DemoRequestForm";
import "./globals.css";

// Render dinámico para que cookies() tenga request scope
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  let locale: "es" | "en" = "es";
  try {
    locale = await getServerLocale();
  } catch {
    locale = process.env.NEXT_PUBLIC_LOCALE === "en" ? "en" : "es";
  }
  const isEn = locale === "en";
  return {
    title: {
      default: isEn
        ? "LOCALIA. Own AI. Own server. Data that never leaves."
        : "LOCALIA. IA propia. Servidor propio. Datos que no salen.",
      template: "%s | LOCALIA",
    },
    description: isEn
      ? "Private AI plug and play. No IT required. We install, configure, and maintain. Easiest, safest, compliant. Dedicated server, data never leaves."
      : "IA privada plug and play. Sin necesidad de IT. Nosotros lo instalamos, configuramos y mantenemos. Lo más fácil, seguro y compliant. Servidor dedicado, datos que nunca salen.",
    keywords: isEn
      ? "private AI, plug and play, no IT, GDPR, confidentiality, dedicated server, ChatGPT alternative, sensitive data"
      : "IA privada, plug and play, sin IT, RGPD, confidencialidad, servidor dedicado, ChatGPT alternativo, datos sensibles",
    manifest: "/manifest.json",
    openGraph: {
      title: isEn
        ? "LOCALIA. Own AI. Own server. Data that never leaves."
        : "LOCALIA. IA propia. Servidor propio. Datos que no salen.",
      description: isEn
        ? "Private AI plug and play on your own server. We do it all. No IT, no setup, easiest and safest."
        : "IA privada plug and play en servidor propio. Nosotros lo hacemos todo. Sin IT, sin configuración, lo más fácil y seguro.",
      type: "website",
      locale: isEn ? "en_GB" : "es_ES",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let locale: "es" | "en" = "es";
  try {
    locale = await getServerLocale();
  } catch {
    locale = process.env.NEXT_PUBLIC_LOCALE === "en" ? "en" : "es";
  }
  return (
    <html lang={locale === "en" ? "en" : "es"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: `window.__LOCALE__='${locale}'` }}
        />
        {children}
        <DemoRequestForm />
      </body>
    </html>
  );
}
