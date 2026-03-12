import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-2 text-gray-600">
          Esta página no existe.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            Ir al inicio
          </Link>
          <Link
            href="/app"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-500 text-emerald-700 px-5 py-2.5 text-sm font-semibold hover:bg-emerald-50 transition-colors"
          >
            Ir a la app
          </Link>
        </div>
      </div>
    </div>
  );
}
