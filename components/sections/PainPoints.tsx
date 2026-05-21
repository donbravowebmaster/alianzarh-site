const pains = [
  {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: 'Alta rotación de personal',
    description:
      'El 60% de los candidatos no supera el tercer mes. Los procesos manuales generan desalineación de expectativas y errores de contratación que se repiten.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
    title: 'Procesos lentos y costosos',
    description:
      'Un proceso de selección tardío puede costar hasta 3 veces el salario del puesto. Cada semana sin cubrir una vacante impacta directamente en tu operación.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
    title: 'Candidatos no calificados',
    description:
      'Las bolsas de trabajo genéricas saturan tu pipeline con perfiles irrelevantes. Tu equipo de RH desperdicia horas en filtros que deberían ser automáticos.',
  },
]

export function PainPoints() {
  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-blue font-semibold text-xs uppercase tracking-widest mb-4">
            El problema real
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
            ¿Por qué el reclutamiento tradicional ya no es suficiente?
          </h2>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain) => (
            <article
              key={pain.title}
              className="border border-gray-100 rounded-2xl p-8 hover:border-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/5 transition-[border-color,box-shadow] duration-300 ease-out group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                {pain.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-brand-dark mb-3">
                {pain.title}
              </h3>
              <p className="text-brand-gray leading-relaxed text-[0.9375rem]">
                {pain.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
