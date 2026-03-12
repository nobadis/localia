import type { Metadata } from "next";
import Link from "next/link";
import { DOCS, CONTACT_EMAIL } from "@/content/landing";

export const metadata: Metadata = {
  title: "El poder de una IA privada",
  description:
    "Guía para aprovechar la IA en la gestión del conocimiento de tu empresa con seguridad y privacidad. Localia.",
};

export default function GuiaIAPrivadaPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
          <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            ← Localia
          </Link>
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500">
            Guía en español
          </p>
          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            El poder de una IA privada
          </h1>
          <p className="mt-2 text-gray-600">
            Guía para aprovechar la IA en la gestión del conocimiento de tu empresa con seguridad y privacidad.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <article className="prose prose-gray prose-lg max-w-none">
          <p className="lead text-gray-700">
            Si estás leyendo esta guía, es probable que uses la IA como early adopter, creas que tu empresa podría beneficiarse de ella y no sepas por dónde empezar. Si cumples al menos dos de esos tres criterios, esta guía es para ti. Es una guía viva que construimos desde Localia a partir de nuestra práctica desplegando IAs privadas y de los avances del sector.
          </p>

          <h2>1. ¿Qué es una IA privada (Private GPT, Private LLM o como quieras llamarla)?</h2>
          <p>
            Una <strong>IA privada</strong> (Private GPT o Private LLM) es un modelo de lenguaje desarrollado y/o personalizado para usarse dentro de una organización concreta, con la información y el conocimiento que posee esa organización y en exclusiva para los usuarios de esa organización.
          </p>
          <p>
            Esta definición contrasta con la de <strong>IA pública (Public GPT)</strong>: un modelo de propósito general, abierto a todo el mundo y pensado para abarcar el máximo conocimiento posible. En la práctica hay muchos matices (por ejemplo, modelos públicos usados en servidores privados o soluciones proxy que protegen tus datos). Iremos entrando en detalle más adelante.
          </p>

          <h2>2. ¿Cuáles son los elementos de una IA privada?</h2>
          <p>Para alinear a todo el mundo, un glosario básico:</p>
          <ul>
            <li><strong>Modelo de lenguaje grande (LLM):</strong> Herramienta de IA que entiende y genera texto muy parecido al humano. Sirve para consultas, informes, traducción, contenido creativo. Para datos sensibles, un LLM alojado en tu entorno garantiza privacidad y seguridad óptimas.</li>
            <li><strong>Conocimiento de la empresa:</strong> Todos los datos acumulados (documentos, correos, bases de datos, etc.). La IA aprende de ellos para dar respuestas e insights útiles.</li>
            <li><strong>Servidores:</strong> La infraestructura donde corre la IA privada. On-premise vs nube afecta a coste, rendimiento y soberanía de datos.</li>
            <li><strong>Privacidad:</strong> Que los datos sensibles no se expongan ni se acceda a ellos sin autorización (entrenamiento y consultas).</li>
            <li><strong>Seguridad:</strong> Proteger el sistema frente a acceso no autorizado, brechas y ciberataques: cifrado, autenticación, control de acceso, auditorías.</li>
          </ul>

          <h2>3. ¿Qué se puede hacer con una IA privada?</h2>
          <p>Las aplicaciones son a la vez generales y específicas. Cuatro categorías:</p>
          <ul>
            <li><strong>Gestión del conocimiento mejorada:</strong> Cribar y organizar grandes cantidades de datos no estructurados para que los empleados accedan antes a insights y tomen mejores decisiones.</li>
            <li><strong>Mejor experiencia de cliente:</strong> Atender consultas y soporte en lenguaje natural con respuestas personalizadas y contextuales.</li>
            <li><strong>Innovación acelerada:</strong> Generar ideas y detectar oportunidades para mantenerse por delante en mercados competitivos.</li>
            <li><strong>Impulso de la productividad:</strong> Integrar LLMs en los flujos de trabajo para aumentar la velocidad de entrega y reducir el estrés.</li>
          </ul>

          <h2>4. ¿Qué consideraciones de privacidad y seguridad hay que tener?</h2>
          <ul>
            <li><strong>Control de acceso a los datos:</strong> Evitar que personas no autorizadas obtengan información sensible al consultar el LLM (búsquedas semánticas, políticas de acceso claras).</li>
            <li><strong>APIs de terceros:</strong> Enviar datos confidenciales a un proveedor externo conlleva riesgos. Para datos muy sensibles o regulados, modelos open source on-premise suelen ser la opción viable.</li>
            <li><strong>Cifrado:</strong> Cifrar datos en reposo y en tránsito.</li>
            <li><strong>Auditorías periódicas:</strong> Revisar vulnerabilidades y mejorar la seguridad de forma continua.</li>
            <li><strong>Cumplimiento normativo:</strong> RGPD, CCPA, HIPAA, PCI-DSS u otra normativa aplicable.</li>
          </ul>

          <h2>5. ¿Cómo implementar una IA privada en mi empresa?</h2>
          <p>La respuesta honesta: <strong>depende.</strong> Depende del tipo de LLM que puedas usar, de tus bases de conocimiento, de tu accesibilidad y de tus necesidades de privacidad y seguridad.</p>
          <p>Tres escenarios típicos:</p>
          <ol>
            <li><strong>Producto de caja</strong> que cubra tus necesidades: la oferta sigue siendo limitada para casos que exigen varias fuentes de conocimiento de forma segura y a medida.</li>
            <li><strong>Desarrollar internamente:</strong> hay iniciativas open source y soporte de proveedores, pero necesitas un equipo técnico fuerte y especializado en IA.</li>
            <li><strong>Trabajar con un partner de desarrollo:</strong> es el enfoque híbrido que seguimos en <strong>Localia</strong>. Tratamos la IA privada como mezcla de servicio y producto: soluciones a medida que aprovechan conocimiento y casos de uso ya probados. Así acortamos mucho el camino desde la definición hasta los primeros prototipos utilizables, y luego iteramos en plazos cortos.</li>
          </ol>
          <p>
            En <strong>Localia</strong> no somos “PrivateGPT”: somos tu IA privada local. Ofrecemos un ChatGPT privado con todo el conocimiento de tu empresa, en tu servidor, con tus reglas de acceso y sin que tengas que construir ni mantener la pila tú mismo.
          </p>

          <h2>Backend y escalabilidad</h2>
          <p>
            Para equipos que quieran backends orientados a eventos y escalables, nos alineamos con stacks modernos.{" "}
            <a href={DOCS.boosterIntro} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-700">
              Booster Framework
            </a>{" "}
            es una herramienta open source para acelerar el desarrollo de backends: event-sourcing, CQRS, serverless, APIs en tiempo real. Localia se centra en la capa de IA privada; tu backend puede usar Booster cuando necesites escalar.
          </p>
          <p>
            <a href={DOCS.boosterFramework} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
              Documentación de Booster Framework →
            </a>
          </p>

          <hr className="my-10 border-gray-200" />

          <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">
            <p className="font-semibold text-gray-900">¿Te encaja una IA privada para tu organización?</p>
            <p className="mt-2 text-gray-600">
              En Localia desplegamos soluciones de IA privada en empresas e instituciones. Cuéntanos tus necesidades e ideas y nos pondremos en contacto si podemos ayudarte.
            </p>
            <p className="mt-4">
              <a href={`mailto:${CONTACT_EMAIL}?subject=Demo%20Localia`} className="font-medium text-indigo-600 hover:text-indigo-700">
                Contactar con Localia →
              </a>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
