import { NextResponse } from "next/server";
import { getLocaleCookieName } from "@/lib/server-locale";

const LOCALE_COOKIE = getLocaleCookieName();
const MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const locale = body?.locale === "en" ? "en" : body?.locale === "es" ? "es" : null;
    if (!locale) {
      return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
    }
    const res = NextResponse.json({ ok: true, locale });
    res.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: MAX_AGE,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    return res;
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
