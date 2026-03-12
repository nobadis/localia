import Link from "next/link";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4">
      <div className="container-tight text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
          Tu app,{" "}
          <span className="text-primary-600">donde quieras</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Web y móvil. Una sola experiencia. Diseñada para ti.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/app"
            className="touch-target flex items-center justify-center rounded-xl bg-primary-500 px-8 py-3 text-white font-semibold hover:bg-primary-600 transition-colors focus-ring"
          >
            Empezar gratis
          </Link>
          <Link
            href="#features"
            className="touch-target flex items-center justify-center rounded-xl border-2 border-gray-200 px-8 py-3 font-semibold text-gray-700 hover:border-gray-300 transition-colors focus-ring"
          >
            Ver más
          </Link>
        </div>
      </div>
    </section>
  );
}
