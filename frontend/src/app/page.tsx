import Link from "next/link";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CTASection } from "@/components/landing/CTASection";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 safe-top bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="container-tight flex items-center justify-between h-14 sm:h-16">
          <span className="font-semibold text-lg text-primary-600">LOCALIA</span>
          <Link
            href="/app"
            className="touch-target flex items-center justify-center rounded-lg bg-primary-500 px-4 text-white font-medium hover:bg-primary-600 transition-colors focus-ring"
          >
            Entrar
          </Link>
        </nav>
      </header>

      <HeroSection />
      <FeaturesSection />
      <CTASection />

      <footer className="border-t border-gray-100 py-8">
        <div className="container-tight text-center text-sm text-gray-500">
          © {new Date().getFullYear()} LOCALIA. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
