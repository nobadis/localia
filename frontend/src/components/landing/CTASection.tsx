import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-tight">
        <div className="rounded-3xl bg-primary-500 px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">
            ¿Listo para empezar?
          </h2>
          <p className="mt-4 text-primary-100 max-w-xl mx-auto">
            Únete hoy y descubre una nueva forma de trabajar.
          </p>
          <Link
            href="/app"
            className="mt-8 inline-flex touch-target items-center justify-center rounded-xl bg-white px-8 py-3 font-semibold text-primary-600 hover:bg-primary-50 transition-colors focus-ring"
          >
            Acceder a la app
          </Link>
        </div>
      </div>
    </section>
  );
}
