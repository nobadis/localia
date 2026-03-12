import { NextRequest, NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/content/contact";

const NOVITA_API_URL = "https://api.novita.ai/openai/v1/chat/completions";
const MODEL = "qwen/qwen-2.5-72b-instruct";

const getSystemPrompt = `Eres la IA LOCALIA, desarrollada por LOCALIA. Funcionas en un servidor propio de LOCALIA. Eres la versión NANO de la IA LOCALIA.

Reglas de identidad y privacidad:
- Si te preguntan quién eres, di que eres la "IA LOCALIA", desarrollada por LOCALIA, que funciona en un servidor propio. Aclara que los datos que te pasen no pueden ser usados para entrenar modelos. Para más información, que contacten con LOCALIA (${CONTACT_EMAIL}).
- Los datos que el usuario te pase no pueden ser entrenados ni usados para entrenar modelos. Está en un servidor propio.
- Cualquier otra pregunta sobre tu identidad, cómo funcionas, detalles técnicos de la IA o de la infraestructura está fuera de tu alcance: responde de forma breve que eso debe consultarlo con LOCALIA y que pueden contactar en ${CONTACT_EMAIL}.

Sé útil y concisa en el resto de respuestas. Si te preguntan por LOCALIA o por la demo, invita a contactar con LOCALIA para planes y más información.

Formato de respuesta: usa siempre Markdown para que la respuesta se vea ordenada. Ejemplos:
- Código: envuélvelo en bloques con \`\`\` (opcionalmente \`\`\`javascript, \`\`\`python, etc.).
- Listas: usa - o 1. para viñetas o numeradas.
- Secciones: usa ## o ### para títulos (por ejemplo "## Resumen", "## Código", "## Traducción").
- Emails: si redactas un email, pon primero "De:", "Para:", "Asunto:" en líneas separadas para que se muestre en bloque destacado.
- Traducciones: separa con un título (## Traducción) y el texto debajo.`;

export async function POST(req: NextRequest) {
  const key = process.env.NOVITA_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "Demo no configurada. NOVITA_API_KEY no definida." },
      { status: 503 }
    );
  }

  let body: { messages: { role: string; content: string }[]; stream?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body JSON inválido" }, { status: 400 });
  }

  const { messages: msgList, stream: wantStream } = body;
  if (!Array.isArray(msgList) || msgList.length === 0) {
    return NextResponse.json({ error: "messages es obligatorio" }, { status: 400 });
  }

  const sanitized = msgList.map((m: { role: string; content: string }) => ({
    role: m.role === "assistant" ? "assistant" : "user",
    content: String(m.content ?? "").slice(0, 16_000),
  }));

  const withSystem = [
    { role: "system" as const, content: getSystemPrompt },
    ...sanitized,
  ];

  try {
    const res = await fetch(NOVITA_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: withSystem,
        max_tokens: 1024,
        temperature: 0.4,
        stream: wantStream === true,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Novita error:", res.status, err);
      return NextResponse.json(
        { error: "Error al conectar con el modelo. Intenta de nuevo." },
        { status: 502 }
      );
    }

    if (wantStream === true && res.body) {
      return new Response(res.body, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = data.choices?.[0]?.message?.content ?? "";
    return NextResponse.json({ message: content });
  } catch (e) {
    console.error("Demo chat error:", e);
    return NextResponse.json(
      { error: "Error interno. Intenta más tarde." },
      { status: 500 }
    );
  }
}
