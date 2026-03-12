/**
 * Copy y datos de la landing. Una sola fuente de verdad para escalar y A/B testing.
 */

export const CONTACT_EMAIL = "hola@localia.es";
export const DEMO_SUBJECT = "Demo Localia";

export const HERO = {
  badge: "IA privada · Tus datos nunca salen · Sin IT",
  title: "Tu IA. Tu servidor.",
  titleHighlight: "Tus datos, siempre contigo.",
  tagline:
    "La inteligencia artificial privada para organizaciones que no pueden permitirse un error de confidencialidad.",
  ctaPrimary: "Empieza ahora sin necesitar un informático",
  ctaSecondary: "El problema",
} as const;

/** Headline tipo startup: IA privada con el conocimiento de tu empresa (somos Localia) */
export const HERO_ALT = {
  title: "A private ChatGPT with all the knowledge from your company.",
  subtitle: "Your data stays yours. Your server. No training on your data. No lock-in.",
} as const;

export const PRIVATE_SECURE = {
  private: {
    title: "Private",
    description: "Your data is yours and won't be used to train AI.",
  },
  secure: {
    title: "Secure",
    description:
      "People within your organization will only get answers about the information they are allowed to access.",
  },
} as const;

export const CAPACIDADES = [
  "Redactar documentos, informes, y comunicaciones internas en el estilo de tu organización.",
  "Responder preguntas sobre vuestros procedimientos y protocolos.",
  "Resumir reuniones, actas, y documentos extensos.",
  "Ayudar a empleados nuevos a integrarse desde el primer día.",
  "Generar respuestas a consultas frecuentes de forma consistente y rápida.",
  "Traducir, revisar, mejorar cualquier texto en segundos.",
  "Analizar datos y extraer conclusiones sin salir de tu entorno seguro.",
] as const;

export const PASOS_INSTALACION = [
  { titulo: "Primer contacto", desc: "Entendemos tu organización y tus necesidades." },
  { titulo: "Configuración", desc: "Preparamos tu servidor y personalizamos la IA con tu contenido." },
  { titulo: "Activación", desc: "Tu equipo accede a Localia y empieza a usarla el mismo día." },
  { titulo: "Seguimiento", desc: "Analizamos el uso y ajustamos lo que sea necesario en las primeras semanas." },
] as const;

export const FAQ = [
  {
    q: "¿Necesito tener mis propios servidores?",
    a: "No. Nosotros alquilamos y gestionamos el servidor dedicado para tu organización. Tú no tocas nada de infraestructura.",
  },
  {
    q: "¿Qué pasa si el servidor falla?",
    a: "Monitorizamos el servicio de forma continua. En caso de incidencia, actuamos antes de que afecte a tu equipo.",
  },
  {
    q: "¿Puedo cambiar las preguntas preconfiguradas?",
    a: "Sí. Tú decides qué preguntas aparecen en tu interfaz y nosotros las actualizamos cuando quieras.",
  },
  {
    q: "¿Mis datos pueden usarse para entrenar modelos de IA?",
    a: "No. Los modelos que usamos son open source y corren en tu servidor. Ningún dato sale de tu entorno.",
  },
  {
    q: "¿Es legal usar Localia bajo el RGPD?",
    a: "Sí. Al no existir transferencia de datos a terceros, Localia es compatible con el RGPD desde su arquitectura. Te podemos proporcionar documentación técnica para tu DPO si la necesitas.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. Sin permanencia. Sin penalizaciones.",
  },
] as const;

/** Enlaces a documentación externa (Booster, guía IA privada) */
export const DOCS = {
  boosterFramework: "https://docs.boosterframework.com",
  boosterIntro: "https://docs.boosterframework.com/introduction",
  privateGptGuide: "/docs/private-gpt",
} as const;

/** Título de la guía (español) — somos Localia, no PrivateGPT */
export const GUIA_IA_PRIVADA = {
  title: "El poder de una IA privada",
  navLabel: "Guía: IA privada",
} as const;
