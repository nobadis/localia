import { cookies } from "next/headers";

export type Locale = "es" | "en";

const LOCALE_COOKIE = "locale";

/**
 * Returns the locale for the current request: cookie first, then NEXT_PUBLIC_LOCALE, then "es".
 * Use only in Server Components or Route Handlers.
 */
export async function getServerLocale(): Promise<Locale> {
  try {
    const cookieStore = await cookies();
    const value = cookieStore.get(LOCALE_COOKIE)?.value;
    if (value === "en" || value === "es") return value;
  } catch (_e) {
    // cookies() can throw outside request scope (e.g. static generation, edge); fall back to env
  }
  return (typeof process !== "undefined" && process.env.NEXT_PUBLIC_LOCALE === "en") ? "en" : "es";
}

export function getLocaleCookieName(): string {
  return LOCALE_COOKIE;
}
