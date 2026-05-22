import Link from 'next/link'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    title: 'Automatización del proceso',
    description:
      'Flujos de selección configurables que clasifican, filtran y avanzan candidatos automáticamente. Tu equipo interviene solo donde agrega valor.',
    tag: 'Core',
    tagColor: 'bg-brand-blue/10 text-brand-blue',
    href: '/servicios#automatizacion',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 1 8.835-2.535m0 0A23.74 23.74 0 0 1 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
      </svg>
    ),
    title: 'Anuncios digitales de empleo',
    description:
      'Encontramos al candidato ideal directamente en sus redes sociales y plataformas profesionales. Llegamos a personas con el perfil exacto, incluso si no buscan empleo activamente.',
    tag: 'Diferenciador',
    tagColor: 'bg-brand-purple/10 text-brand-purple',
    href: '/servicios#pauta',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: 'Filtros de talento con tecnología',
    description:
      'Evaluaciones automáticas que identifican habilidades, experiencia verificada y alineación cultural antes de la primera entrevista presencial.',
    tag: 'Core',
    tagColor: 'bg-brand-blue/10 text-brand-blue',
    href: '/servicios#filtros',
  },
]

export function Solutions() {
  return (
    <section className="bg-brand-surface section-padding">
      <div className="container-max">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-blue font-semibold text-xs uppercase tracking-widest mb-4">
            Nuestra solución
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight mb-6">
            La tecnología hace el trabajo pesado
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Combinamos herramientas inteligentes, anuncios de empleo y la experiencia de nuestro equipo para entregarte a los mejores profesionales en menos tiempo.
          </p>
        </header>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1.5 group flex flex-col justify-between min-h-[380px] h-full"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-[background-color,color] duration-300 ease-out">
                    {feature.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${feature.tagColor}`}>
                    {feature.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-brand-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              <div className="flex items-center text-xs font-bold text-brand-blue group-hover:text-brand-blue/80 transition-colors duration-200 mt-auto pt-4">
                <span>Saber más</span>
                <svg className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
