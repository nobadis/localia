"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LandingNavbar } from "@/components/layout/LandingNavbar";
import { stagger, fadeUp, scaleIn } from "@/lib/motion";
import {
  HERO,
  HERO_ALT,
  PRIVATE_SECURE,
  CAPACIDADES,
  PASOS_INSTALACION,
  FAQ,
  CONTACT_EMAIL,
  DEMO_SUBJECT,
  DOCS,
  GUIA_IA_PRIVADA,
} from "@/content/landing";
import {
  ArrowRight,
  Shield,
  Server,
  MessageSquare,
  Scale,
  Wrench,
  CheckCircle2,
  Lock,
  ChevronRight,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <LandingNavbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-950 text-white min-h-[100dvh] flex items-center pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,.12)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-indigo-600/8 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-40 right-[15%] w-56 h-56 bg-violet-600/8 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 w-full">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-5 py-2 text-sm text-gray-400 backdrop-blur-sm mb-8">
              <Shield className="h-4 w-4 text-indigo-400" />
              {HERO.badge}
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.15]">
              {HERO_ALT.title}
            </motion.h1>

            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed">
              {HERO_ALT.subtitle}
            </motion.p>

            <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-xl text-base text-gray-500">
              {HERO.tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="rounded-xl bg-white/[0.06] border border-white/[0.08] p-4 text-left flex gap-3">
                <Lock className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{PRIVATE_SECURE.private.title}</p>
                  <p className="text-sm text-gray-400 mt-0.5">{PRIVATE_SECURE.private.description}</p>
                </div>
              </div>
              <div className="rounded-xl bg-white/[0.06] border border-white/[0.08] p-4 text-left flex gap-3">
                <Shield className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{PRIVATE_SECURE.secure.title}</p>
                  <p className="text-sm text-gray-400 mt-0.5">{PRIVATE_SECURE.secure.description}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(DEMO_SUBJECT)}`}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 shadow-2xl shadow-white/10 font-semibold text-base px-8">
                    {HERO.ctaPrimary}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </motion.div>
              </a>
              <a href="#problema">
                <Button size="lg" variant="outline" className="font-semibold text-base px-8">
                  {HERO.ctaSecondary}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </section>

      {/* EL PROBLEMA */}
      <section id="problema" className="relative py-24 sm:py-32 scroll-mt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,.04)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
              El problema que nadie quiere admitir en voz alta
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-8 space-y-6 text-lg text-gray-600 leading-relaxed text-left">
              <p>
                Tus empleados ya usan inteligencia artificial. Cada día. Para redactar, para resumir, para buscar respuestas. Y la mayoría lo hace con ChatGPT, con Copilot, con herramientas gratuitas que envían todo lo que escriben a servidores en otro continente.
              </p>
              <p>
                Contratos de clientes. Datos de empleados. Información confidencial de tu organización. Todo viajando fuera de tu control, cada vez que alguien pulsa enviar.
              </p>
              <p>
                No es un problema de intención. Es un problema de herramientas. Tus empleados no hacen nada malo. Simplemente no tienen una alternativa que funcione igual de bien, que sea igual de fácil, y que mantenga los datos dentro de casa. <strong className="text-gray-900">Hasta ahora.</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LOCALIA ES TU IA PRIVADA */}
      <section className="relative py-24 sm:py-32 bg-gray-950 text-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex mb-6">
              <Badge className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Tu servidor</Badge>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold sm:text-4xl tracking-tight">
              Localia es tu IA privada
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-gray-400 leading-relaxed">
              Una inteligencia artificial instalada en un servidor dedicado exclusivamente para tu organización. Todo lo que escribes, todo lo que preguntas, todo lo que genera la IA, se queda en tu servidor. No sale. Nunca. Ningún proveedor lo lee. Ningún modelo se entrena con tus datos.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-gray-400 leading-relaxed">
              Tú tienes el control. Nosotros te lo instalamos, lo mantenemos, y nos aseguramos de que siempre funcione.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TAN FÁCIL COMO ENVIAR UN MENSAJE */}
      <section id="como-funciona" className="relative py-24 sm:py-32 overflow-hidden bg-white scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,.03)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
            <motion.div variants={fadeUp} className="flex-1">
              <div className="inline-flex rounded-2xl bg-indigo-50 p-4 mb-6">
                <MessageSquare className="h-10 w-10 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
                Tan fácil como enviar un mensaje
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                No necesitas saber qué es un modelo de lenguaje. No necesitas un informático. No necesitas configurar nada.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Abres Localia, ves las preguntas más frecuentes de tu organización ya preparadas, haces clic en la que necesitas, o escribes lo que quieras. La IA responde. En segundos. Sin complicaciones.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed font-medium">
                Si tus empleados saben usar WhatsApp, saben usar Localia.
              </p>
            </motion.div>
            <motion.div variants={scaleIn} className="flex-1 rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
              <div className="space-y-4">
                <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
                  <p className="text-sm text-gray-500">Pregunta preconfigurada</p>
                  <p className="font-medium text-gray-900">¿Cómo redacto el informe mensual?</p>
                </div>
                <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-4">
                  <p className="text-sm text-indigo-600 font-medium">Respuesta de la IA</p>
                  <p className="text-gray-700 text-sm mt-1">En segundos, con el estilo de tu organización.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DISEÑADA PARA TU ORGANIZACIÓN */}
      <section className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex mb-6">
              <Badge className="bg-violet-100 text-violet-700 border border-violet-200">Personalización</Badge>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
              Diseñada para tu organización, no para cualquiera
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Cada instalación de Localia es única. Antes de activar tu servicio, configuramos la IA con el lenguaje de tu sector, los procedimientos de tu organización, las preguntas que tu equipo hace cada semana. El resultado es una IA que parece conocer tu empresa desde siempre. No es una herramienta genérica. Es tu herramienta.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CUMPLIMIENTO LEGAL */}
      <section className="relative py-24 sm:py-32 bg-gray-950 text-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col md:flex-row md:items-center gap-12">
            <motion.div variants={fadeUp} className="flex-1">
              <div className="inline-flex rounded-2xl bg-emerald-500/10 p-4 mb-6">
                <Scale className="h-10 w-10 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">
                Cumplimiento legal sin esfuerzo
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                El Reglamento General de Protección de Datos no es opcional. Y las consecuencias de una brecha de confidencialidad tampoco. Localia está diseñada desde el primer día para que tu organización cumpla sin tener que hacer nada especial.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Los datos no salen de tu servidor. Punto. No hay política de privacidad de terceros que leer. No hay acuerdo de tratamiento de datos que negociar. No hay riesgo de que un cambio en las condiciones de servicio de un proveedor externo te deje expuesto.
              </p>
            </motion.div>
            <motion.div variants={scaleIn} className="flex-1 flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm">
                <Lock className="h-4 w-4 text-indigo-400" /> RGPD por diseño
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm">
                <Shield className="h-4 w-4 text-indigo-400" /> Sin terceros
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SIN IT */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-white">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.div variants={fadeUp} className="inline-flex rounded-2xl bg-gray-100 p-4 mb-6">
              <Wrench className="h-10 w-10 text-gray-600" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
              Sin IT. Sin infraestructura. Sin dolores de cabeza.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Localia se instala de forma remota en un servidor dedicado que alquilamos para ti. Nosotros gestionamos las actualizaciones, la seguridad, el mantenimiento y el soporte. Si algo falla, lo resolvemos antes de que nadie en tu equipo lo note. Tu organización solo tiene que usar la herramienta. De lo demás, nos encargamos nosotros.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MÁS POTENTE QUE CHATGPT + GUÍA PRIVATE GPT / BOOSTER */}
      <section className="relative py-24 sm:py-32 bg-gray-950 text-white overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold sm:text-4xl tracking-tight">
              Más potente que ChatGPT. Más segura que Copilot. Más simple que cualquiera de las dos.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-gray-400 leading-relaxed">
              Las grandes herramientas de IA están diseñadas para millones de usuarios con millones de casos de uso distintos. Son potentes, pero genéricas. Y caras, si quieres el nivel enterprise que realmente protege tus datos. Localia está diseñada para organizaciones como la tuya. Con un caso de uso claro: que tu equipo trabaje mejor, sin que ningún dato salga de casa.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href={DOCS.privateGptGuide}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition-colors"
              >
                {GUIA_IA_PRIVADA.title} — Guía
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={DOCS.boosterIntro}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-500/20 border border-indigo-400/30 px-5 py-2.5 text-sm font-medium text-indigo-300 hover:bg-indigo-500/30 transition-colors"
              >
                Booster Framework — Backend acelerado
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* QUÉ PUEDE HACER LOCALIA */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-white">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight text-center">
              Qué puede hacer Localia por tu equipo
            </motion.h2>
            <motion.ul variants={fadeUp} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {CAPACIDADES.map((item, i) => (
                <li key={i} className="flex gap-3 rounded-xl border border-gray-200 bg-gray-50/50 p-4 text-left">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* PRECIO */}
      <section id="precio" className="relative py-24 sm:py-32 bg-indigo-600 text-white overflow-hidden scroll-mt-20">
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold sm:text-4xl tracking-tight">
              El precio que tiene sentido
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-indigo-100">
              Nada de pagar por usuario. Nada de pagar por consulta. Una cuota mensual fija que incluye el servidor dedicado, el modelo de IA, la configuración personalizada, el mantenimiento y el soporte.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-lg font-medium">
              Toda tu organización. Un precio. Sin sorpresas.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-8 text-4xl font-extrabold sm:text-5xl">
              Desde 390€ al mes
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* INSTALACIÓN */}
      <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight text-center">
              Instalación en menos de una semana
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              Sin proyectos de meses. Sin consultores caros. Sin formación técnica.
            </motion.p>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PASOS_INSTALACION.map((paso, i) => (
                <motion.div
                  key={paso.titulo}
                  variants={scaleIn}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center"
                >
                  <div className="text-3xl font-black text-indigo-100 mb-3">{i + 1}</div>
                  <h3 className="font-semibold text-gray-900">{paso.titulo}</h3>
                  <p className="mt-2 text-sm text-gray-600">{paso.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL CALVIÀ */}
      <section className="relative py-24 sm:py-32 bg-gray-950 text-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex mb-6">
              <Badge className="bg-white/10 text-gray-300 border border-white/10">Early adopter</Badge>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold sm:text-3xl tracking-tight">
              Ya confían en Localia
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-gray-400 leading-relaxed">
              El Ayuntamiento de Calvià ha sido el primer ente público en adoptar Localia para su equipo, garantizando la privacidad de los datos de sus ciudadanos mientras moderniza el trabajo interno de sus empleados.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-24 sm:py-32 overflow-hidden bg-white scroll-mt-20">
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight text-center mb-12">
            Preguntas que nos hacen siempre
          </motion.h2>
          <div className="space-y-6">
            {FAQ.map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6"
              >
                <h3 className="font-semibold text-gray-900">{item.q}</h3>
                <p className="mt-2 text-gray-600">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-28 sm:py-36 text-white overflow-hidden bg-gray-950">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,.1)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight">
              Habla con nosotros
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              Tu organización merece una IA que trabaje para ti, no una que use tus datos para mejorar los modelos de otro.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-2 text-gray-500">
              Solicita una demo gratuita. Te mostramos Localia en funcionamiento en 30 minutos, configurada con un ejemplo de tu sector. Sin compromiso. Sin tecnicismos.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-12">
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(DEMO_SUBJECT)}`}>
                <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} className="inline-block">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-12 text-base shadow-2xl shadow-white/10">
                    Solicitar demo gratuita
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-gray-950 text-gray-400 pb-24 md:pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-14">
            <div className="max-w-sm">
              <span className="font-semibold text-white text-lg">LOCALIA</span>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Tu IA. Tus datos. Siempre contigo.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/15 px-3 py-1 text-[11px] font-medium">
                  <Shield className="h-3 w-3" /> RGPD
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/15 px-3 py-1 text-[11px] font-medium">
                  <Server className="h-3 w-3" /> Servidor dedicado
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <p className="text-sm text-gray-500 mb-3">¿Quieres verlo en acción?</p>
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(DEMO_SUBJECT)}`}>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 text-sm">
                    Agendar Demo
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800/50 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-gray-700">
              © {new Date().getFullYear()} LOCALIA — Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
