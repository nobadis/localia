import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "LOCALIA — Tu IA. Tu servidor. Tus datos, siempre contigo.", template: "%s | LOCALIA" },
  description: "La inteligencia artificial privada para organizaciones que no pueden permitirse un error de confidencialidad. Servidor dedicado, datos que nunca salen, sin IT.",
  keywords: "IA privada, inteligencia artificial, RGPD, confidencialidad, servidor dedicado, ChatGPT alternativo, datos sensibles",
  manifest: "/manifest.json",
  openGraph: {
    title: "LOCALIA — Tu IA. Tu servidor. Tus datos.",
    description: "IA privada en tu propio servidor. Sin configuración técnica, sin IT, sin miedo.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
