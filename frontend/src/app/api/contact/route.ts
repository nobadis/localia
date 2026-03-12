import { NextRequest, NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/content/contact";

const RESEND_URL = "https://api.resend.com/emails";

export async function POST(req: NextRequest) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "Servicio de contacto no configurado. RESEND_API_KEY no definida." },
      { status: 503 }
    );
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body JSON inválido" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email no válido" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 200) : "";
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 2000) : "";

  const subject = `[LOCALIA] Solicitud de demo: ${name || email}`;
  const html = [
    "<p><strong>Nueva solicitud de demo</strong></p>",
    name ? `<p><strong>Nombre:</strong> ${escapeHtml(name)}</p>` : "",
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    message ? `<p><strong>Mensaje:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>` : "",
  ].filter(Boolean).join("");

  try {
    const res = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "User-Agent": "LOCALIA/1.0",
      },
      body: JSON.stringify({
        from: "LOCALIA Demo <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject,
        html: html || "<p>Sin mensaje.</p>",
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", res.status, err);
      return NextResponse.json(
        { error: "No se pudo enviar. Inténtalo de nuevo más tarde." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Error interno. Inténtalo más tarde." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
