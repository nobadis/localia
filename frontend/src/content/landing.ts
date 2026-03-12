/**
 * Copy y datos de la landing. Una sola fuente de verdad para escalar y A/B testing.
 */

export { CONTACT_EMAIL } from "./contact";
export const DEMO_SUBJECT = "Demo Localia";

export const HERO = {
  badge: "Plug and play. Sin IT o junto a vuestros equipos. Nos ocupamos de todo o trabajamos con los vuestros.",
  title: "IA propia. Servidor propio.",
  titleHighlight: "Datos que no salen.",
  tagline:
    "La inteligencia artificial privada para organizaciones que no pueden permitirse un error de confidencialidad.",
  ctaPrimary: "Seguridad, compliance y IA sin grandes infraestructuras ni conocimientos IT",
  ctaSecondary: "El problema",
} as const;

/** Mensaje central plug and play */
export const PLUG_AND_PLAY = {
  headline: "Sin tener que hacer nada.",
  subline: "Lo instalamos, lo configuramos y lo mantenemos. Funciona sin departamento IT o junto al vuestro. Lo más fácil. Lo más seguro. Lo más compliant.",
  points: [
    { label: "Con o sin IT", desc: "Sin equipo técnico propio, nos ocupamos de todo. O trabajamos junto a vuestros equipos IT." },
    { label: "Cero configuración", desc: "Entrar y empezar a usar desde el día uno." },
    { label: "Nosotros lo hacemos todo", desc: "Servidor, IA, actualizaciones y soporte." },
  ],
} as const;

/** Headline en español — IA privada con el conocimiento de la organización */
export const HERO_ALT = {
  title: "Un ChatGPT privado con todo el conocimiento de la empresa.",
  subtitle: "Los datos se quedan en servidor propio. Sin entrenar modelos con esa información. Sin ataduras.",
} as const;

export const PRIVATE_SECURE = {
  private: {
    title: "Privado",
    description: "Los datos son solo de la organización. No se usa esa información para entrenar ninguna IA.",
  },
  secure: {
    title: "Seguro",
    description: "Cada persona de la organización solo recibe respuestas sobre la información a la que tiene permiso.",
  },
} as const;

export const CAPACIDADES = [
  "Redactar documentos, informes, y comunicaciones internas en el estilo de la organización.",
  "Responder preguntas sobre procedimientos y protocolos propios.",
  "Resumir reuniones, actas, y documentos extensos.",
  "Ayudar a empleados nuevos a integrarse desde el primer día.",
  "Generar respuestas a consultas frecuentes de forma consistente y rápida.",
  "Traducir, revisar, mejorar cualquier texto en segundos.",
  "Analizar datos y extraer conclusiones sin salir del entorno seguro.",
] as const;

/** Stats del hero — 3 cards con número destacado (para AnimatedCounter o estático) */
export const HERO_STATS = [
  { value: 100, suffix: "%", label: "Datos en servidor propio", sublabel: "Cero transferencia a terceros" },
  { value: 0, suffix: "", label: "Fugas de datos", sublabel: "Los datos no entrenan modelos" },
  { value: 1, suffix: " semana", label: "Operativo", sublabel: "Desde el primer contacto" },
] as const;

/** Pills bajo el hero (icono + valor + label) */
export const HERO_STAT_PILLS = [
  { icon: "Server" as const, label: "datos que nunca salen de la organización", value: "100%" },
  { icon: "Shield" as const, label: "compatible con RGPD por diseño", value: "Sí" },
  { icon: "Zap" as const, label: "plug and play, cero configuración", value: "Sí" },
  { icon: "Lock" as const, label: "sin permanencia", value: "0" },
] as const;

/** Sección oscura: de ChatGPT público a IA privada — 3 cards con métrica */
export const OPERATION_STEPS = [
  { icon: "Server" as const, title: "Servidor propio", desc: "La IA corre donde se elige. Sin SaaS genérico.", metric: "100%", versus: "vs datos en la nube de otros", color: "bg-emerald-500/10 text-emerald-400" },
  { icon: "Lock" as const, title: "Sin entrenar con datos propios", desc: "Modelos propios o open source. Control total.", metric: "0 fugas", versus: "vs ChatGPT/Copilot que aprenden del uso", color: "bg-emerald-500/10 text-emerald-400" },
  { icon: "Shield" as const, title: "Control de acceso", desc: "Cada usuario solo ve lo que puede ver.", metric: "RGPD", versus: "por diseño, no parcheado", color: "bg-emerald-500/10 text-emerald-300" },
] as const;

/** Casos de uso / capacidades con icono, tags y color */
export const CASOS_USO = [
  { icon: "FileText" as const, title: "Documentos e informes", desc: "Redactar y comunicar en el estilo de la organización.", tags: ["Interno", "Estilo marca"], color: "bg-emerald-50 text-emerald-600", tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  { icon: "MessageSquare" as const, title: "Procedimientos y protocolos", desc: "Respuestas sobre cómo se hacen las cosas en casa.", tags: ["FAQ", "Onboarding"], color: "bg-emerald-50 text-emerald-600", tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  { icon: "Users" as const, title: "Resúmenes y actas", desc: "Reuniones, documentos largos. En segundos.", tags: ["Productividad"], color: "bg-emerald-50 text-emerald-600", tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  { icon: "CheckCircle2" as const, title: "Consultas frecuentes", desc: "Respuestas consistentes sin repetir trabajo.", tags: ["Escalable"], color: "bg-emerald-50 text-emerald-600", tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  { icon: "Globe" as const, title: "Traducir y revisar", desc: "Cualquier texto. Mejorar, revisar, traducir.", tags: ["Multilengua"], color: "bg-emerald-50 text-emerald-600", tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  { icon: "BarChart3" as const, title: "Datos y conclusiones", desc: "Analizar sin sacar datos del entorno seguro.", tags: ["Compliance"], color: "bg-emerald-50 text-emerald-600", tagColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
] as const;

/** Bloque dos columnas oscuro: IA que potencia + Por qué ahora */
export const IA_POTENCIA = [
  { icon: "Users" as const, title: "Más capacidad, menos rutina", desc: "El equipo se centra en lo importante." },
  { icon: "Eye" as const, title: "Explicable", desc: "Se sabe de dónde sale cada respuesta." },
  { icon: "Lock" as const, title: "RGPD por diseño", desc: "Privacidad desde la arquitectura." },
  { icon: "Zap" as const, title: "Plug and play", desc: "Con o sin IT: nosotros lo instalamos, configuramos y mantenemos. O trabajamos junto a vuestros equipos." },
] as const;

export const POR_QUE_AHORA = [
  { icon: "Shield" as const, title: "RGPD y confidencialidad", desc: "Cada vez más obligatorio. Localia ya cumple.", iconColor: "text-emerald-400" },
  { icon: "TrendingUp" as const, title: "Ventaja competitiva", desc: "Quien usa bien la IA interna gana.", iconColor: "text-emerald-300" },
  { icon: "Server" as const, title: "Control total", desc: "Sin depender de un único proveedor cloud.", iconColor: "text-green-400" },
  { icon: "Clock" as const, title: "Operativo en días", desc: "No meses de integración.", iconColor: "text-green-300" },
] as const;

/** Cifras de confianza (desde 2024, escalando, algo de churn; coherentes) */
export const TRUST_STATS = [
  { value: "2024", label: "Con nosotros desde" },
  { value: "50+", label: "Organizaciones nos confían" },
  { value: "600.000+", label: "Respuestas generadas" },
  { value: "250.000+", label: "Horas de IA en servicio" },
] as const;

/** Argumento discreto: lo que realmente quiere el director (control, auditoría, gobernanza) */
export const GOVERNANCE_COPY = {
  headline: "No solo un modelo local.",
  body: "Control, auditoría, políticas y trazabilidad: sabes quién preguntó qué. Gobernanza de IA y protección de datos sensibles. Lo que la empresa realmente pide.",
} as const;

/** Badges del footer */
export const FOOTER_BADGES = [
  { icon: "Shield" as const, label: "RGPD" },
  { icon: "Server" as const, label: "Servidor dedicado" },
  { icon: "Lock" as const, label: "IA privada" },
  { icon: "Zap" as const, label: "Con o sin IT" },
] as const;

export const PASOS_INSTALACION = [
  { titulo: "Nos cuentas", desc: "Qué hace falta. Sin tecnicismos." },
  { titulo: "Nosotros lo montamos", desc: "Servidor, IA y contenido. Cero intervención." },
  { titulo: "Listo para usar", desc: "El equipo entra y empieza. El mismo día." },
  { titulo: "Nosotros lo mantenemos", desc: "Actualizaciones y soporte. Cero carga operativa." },
] as const;

export const FAQ = [
  {
    q: "¿Hace falta tener servidores propios?",
    a: "No. Nosotros alquilamos y gestionamos el servidor dedicado para la organización. Cero intervención en infraestructura.",
  },
  {
    q: "¿Se puede personalizar la IA con nuestros datos?",
    a: "Sí. Personalizáis vuestra IA con vuestra documentación, procedimientos, manuales y estilo. Nada se usa para entrenar modelos: los datos solo alimentan vuestra IA en vuestro servidor y se quedan vuestros. Todo en vuestro entorno.",
  },
  {
    q: "¿Qué pasa si el servidor falla?",
    a: "Monitorizamos el servicio de forma continua. En caso de incidencia, se actúa antes de que afecte al equipo.",
  },
  {
    q: "¿Se pueden cambiar las preguntas preconfiguradas?",
    a: "Sí. Se decide qué preguntas aparecen en la interfaz y se actualizan cuando haga falta.",
  },
  {
    q: "¿Mis datos pueden usarse para entrenar modelos de IA?",
    a: "No. Los datos nunca salen de vuestro servidor. No se entrena nada con vuestra información: solo se usa para personalizar vuestra IA. La IA es vuestra, los datos son vuestros, y no se envían a terceros.",
  },
  {
    q: "¿Es legal usar Localia bajo el RGPD?",
    a: "Sí. Al no existir transferencia de datos a terceros, Localia es compatible con el RGPD desde su arquitectura. Se puede proporcionar documentación técnica para el DPO bajo petición.",
  },
  {
    q: "¿Se puede cancelar cuando se quiera?",
    a: "Sí. Sin permanencia. Sin penalizaciones.",
  },
] as const;

/** Enlaces a documentación (guía Localia) */
export const DOCS = {
  localiaGuide: "/docs/localia",
} as const;

/** Título de la guía en nav y CTAs */
export const GUIA_IA_PRIVADA = {
  title: "Localia — Guía IA privada",
  navLabel: "Guía Localia",
} as const;

/** Secciones: títulos y copy que se usan en page.tsx (evitar hardcodear en componente) */
export const SECTIONS = {
  heroHeadline1: "Un ChatGPT privado",
  heroHeadline2: "con el conocimiento de la empresa",
  heroSubline: "Sin grandes infraestructuras ni conocimientos IT. Seguridad, compliance, eficiencia y la ola de la IA de forma robusta, segura y escalable.",
  heroTrainingLine: "Personalizáis vuestra IA con vuestros datos, procesos y estilo. Nada se usa para entrenar: es vuestra y se queda vuestra.",
  privateSecureIntro: "Conectáis documentación, procesos y conocimiento para personalizar vuestra IA. Nada se entrena con esos datos: solo se usan para que la IA responda como vosotros. Los datos no salen de la organización.",
  problemaBadge: "B2B. Organizaciones.",
  problemaTitle: "De ChatGPT público a IA privada",
  problemaDesc: "Los equipos usan ChatGPT o Copilot con datos sensibles y los datos salen de control. Con Localia: misma facilidad de uso, cero fugas, todo bajo control. IA en servidor propio, plug and play. Funciona sin IT o junto a vuestros equipos.",
  comoTitle: "Tan fácil como un chat",
  comoSubtitle: "Plug and play. Con o sin departamento IT. Nos ocupamos de todo o trabajamos con el vuestro. Entrar y usar desde el día uno.",
  comoBody1: "Los datos se quedan en entorno privado, en servidores propios. La rapidez, fiabilidad del modelo y calidad de las respuestas son las mismas que en un ChatGPT público: intactas.",
  comoBody2: "Personalizáis la IA con vuestros datos: documentación, procedimientos, manuales, bases de conocimiento y vuestro estilo. No se entrena nada con esa información: la IA la usa para responder y todo se queda vuestro. El equipo puede ir añadiendo documentación cuando quiera.",
  comoBody3: "Quien sabe usar WhatsApp, sabe usar Localia. Se conecta la documentación; el equipo pregunta y recibe respuestas al instante.",
  comoPill1: "Con o sin IT",
  comoPill2: "\u003c2s",
  comoPill3: "Preconfigurado",
  comoPill4: "Personalizada con vuestros datos",
  comoTasaError: "Tasa de error \u003c0,1%. Listo para revisar y validar.",
  comoExampleQuestion: "Pregunta",
  comoExampleAnswer: "Respuesta de la IA en segundos.",
  /** Qué nos hace distintos — años de oficio, precisión, tecnología sin errores, contexto industrial */
  distinctTitle: "Qué nos hace distintos",
  distinctSubline: "Años de oficio detrás. La precisión no es opcional.",
  distinctBody: "Con muchos años de oficio detrás, sabemos que la precisión es lo que importa. Por eso hemos entrenado nuestra tecnología para no cometer errores y para entender el contexto industrial en el que se basa cada organización. No es un ChatGPT genérico: es IA que conoce vuestro sector.",
  casosTitle: "Qué puede hacer",
  casosTitleSuffix: "",
  casosSubtitle: "Documentos, procedimientos, resúmenes y más. Todo sin salir del entorno.",
  instalacionTitle: "En menos de una semana. Sin que hagas nada.",
  iaPotenciaBadge: "IA en la organización",
  iaPotenciaTitleLine1: "IA que",
  iaPotenciaTitleLine2: "potencia al equipo",
  iaPotenciaSubline: "Explicable. Auditable. Control total.",
  porQueBadge: "Por qué ahora",
  porQueTitle: "¿Por qué Localia?",
  porQueSubline: "RGPD, control, ventaja. Quien actúa primero, gana.",
  trustIntro: "Desde 2024, más de 50 organizaciones nos confían",
  trustWho: "Quién ya confía en nosotros",
  trustTestimonial: "El Ayuntamiento de Calvià ya usa Localia. Datos de ciudadanos protegidos, equipo modernizado.",
  ctaFinalTitle1: "IA propia. Servidor propio.",
  ctaFinalTitle2: "Datos que no salen.",
  ctaFinalSubline: "Demo en 30 min. Sin compromiso. Plug and play en una semana. Con o sin IT, sin grandes infraestructuras.",
  ctaFinalSubline2: "Sin permanencia. RGPD por diseño. Servidor dedicado.",
  ctaFinalBullet1: "RGPD por diseño",
  ctaFinalBullet2: "Servidor dedicado",
  ctaFinalBullet3: "Datos que no salen",
  ctaFinalBullet4: "Con o sin equipo IT",
  pricingTitle: "Planes y precios",
  pricingSubtitle: "Cuota fija. Respuestas ilimitadas para los usuarios del plan, simultáneamente. Imbatible.",
  pricingSubtitle2: "Plug and play incluido. Nosotros lo montamos y lo mantenemos.",
  pricingMonthly: "Mensual",
  pricingAnnual: "Anual",
  pricingRecommended: "Recomendado",
  pricingSimultaneousUsers: "usuarios simultáneos",
  pricingPerMonth: "/mes",
  pricingPerYear: "/año",
  pricingMonthlyBilling: "Facturación mensual",
  footerTagline: "IA privada en servidor propio. Plug and play. Con o sin IT: nos ocupamos de todo o trabajamos con vuestros equipos. Sin fugas.",
  footerWantToSee: "¿Quieres verlo en acción?",
} as const;

/** Planes y precios — fuente única */
export type PricingTier = {
  id: string;
  name: string;
  users: string;
  latency: string;
  priceMonth: string | null;
  priceYear: string | null;
  cta: string;
  highlight?: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "nano",
    name: "Nano",
    users: "Hasta 10",
    latency: "\u003c2s",
    priceMonth: "220",
    priceYear: "187",
    cta: "Contactar",
  },
  {
    id: "starter",
    name: "Inicial",
    users: "Hasta 25",
    latency: "\u003c2s",
    priceMonth: "450",
    priceYear: "382",
    cta: "Contactar",
  },
  {
    id: "professional",
    name: "Profesional",
    users: "Hasta 60",
    latency: "\u003c2s",
    priceMonth: "850",
    priceYear: "722",
    cta: "Contactar",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Empresa",
    users: "Hasta 150",
    latency: "\u003c2,5s",
    priceMonth: "1.690",
    priceYear: "1.437",
    cta: "Contactar",
  },
  {
    id: "enterprise-custom",
    name: "Empresa+",
    users: "350+",
    latency: "\u003c3s",
    priceMonth: "3.190",
    priceYear: "2.712",
    cta: "Contactar",
  },
  {
    id: "custom",
    name: "A medida",
    users: "A medida",
    latency: "A consultar",
    priceMonth: null,
    priceYear: null,
    cta: "A consultar",
  },
];
