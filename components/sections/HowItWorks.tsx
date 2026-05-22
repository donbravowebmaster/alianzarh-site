const steps = [
  {
    num: '01',
    title: 'Nos cuentas qué necesitas',
    body: 'En 30 minutos conocemos el perfil, la cultura y el momento de tu empresa. Sin cuestionarios interminables.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Activamos la búsqueda inteligente',
    body: 'Activamos la publicidad de tus vacantes y los filtros automáticos. El sistema trabaja de fondo mientras tú te enfocas en tu negocio.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Recibes candidatos, no CVs',
    body: 'Te presentamos perfiles evaluados, filtrados y con datos concretos. Tú decides a quién entrevistar.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-blue font-semibold text-xs uppercase tracking-widest mb-4">
            Cómo funciona
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
            De la vacante al candidato ideal: 3 pasos, de 14 días a 4 semanas.
          </h2>
          <p className="text-brand-gray text-base mt-4">
            Proceso directo y sin rodeos. Como debe ser en Monterrey.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <article key={step.num} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-4 relative">
                {/* Número + ícono con fondo sólido para enmascarar la línea */}
                <div
                  className="flex items-center gap-4 relative z-10 bg-white pr-4"
                >
                  <div
                    className="w-11 h-11 rounded-full bg-brand-blue/10 border border-brand-blue/20
                      flex items-center justify-center shrink-0 text-brand-blue"
                  >
                    {step.icon}
                  </div>
                  <span className="font-display text-xs font-extrabold text-brand-blue/40 tabular-nums">
                    {step.num}
                  </span>
                </div>

                {/* Línea conectora — solo para los primeros pasos en desktop */}
                {idx < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 -right-10 h-px border-t-2 border-dashed border-brand-blue/20 -z-10"
                    aria-hidden="true"
                  />
                )}
              </div>

              <h3 className="font-display text-lg font-bold text-brand-dark">
                {step.title}
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
