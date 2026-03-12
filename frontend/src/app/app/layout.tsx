import Link from "next/link";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 safe-top bg-white border-b border-gray-100">
        <nav className="container-tight flex items-center justify-between h-14 sm:h-16">
          <Link href="/app" className="font-semibold text-primary-600">
            LOCALIA
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="touch-target flex items-center justify-center rounded-lg px-4 text-gray-600 hover:text-gray-900 text-sm"
            >
              Landing
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 container-tight py-6 sm:py-8 safe-bottom">
        {children}
      </main>
    </div>
  );
}
