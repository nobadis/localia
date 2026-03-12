export function FeaturesSection() {
  const features = [
    {
      title: "Responsive",
      description: "Diseño adaptado a cualquier pantalla. Mobile-first.",
      icon: "📱",
    },
    {
      title: "Rápido",
      description: "Optimizado para rendimiento y carga instantánea.",
      icon: "⚡",
    },
    {
      title: "Accesible",
      description: "Cumple WCAG. Pensado para todos los usuarios.",
      icon: "♿",
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-gray-50">
      <div className="container-tight">
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
          Construido con las mejores prácticas
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Tecnología moderna, código limpio, UX excepcional.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="text-3xl" role="img" aria-hidden>
                {feature.icon}
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
