const metrics = [
  { value: '500+', label: 'Empresas atendidas', sub: 'en México y LATAM' },
  { value: '12K+', label: 'Colocaciones exitosas', sub: 'en los últimos 3 años' },
  { value: '78%', label: 'Reducción en tiempo', sub: 'vs. procesos tradicionales' },
  { value: '92', label: 'NPS de satisfacción', sub: 'de empresas cliente' },
]

const testimonials = [
  {
    quote:
      'En menos de 3 semanas cubrieron 5 vacantes críticas de ingeniería que llevábamos 4 meses buscando. El seguimiento digital en tiempo real nos dio total claridad en todo el proceso.',
    author: 'Directora de RH',
    company: 'Empresa de Tecnología · 200 empleados',
    initials: 'MR',
  },
  {
    quote:
      'La búsqueda directa fue un diferenciador total. Llegaron profesionales excelentes que nunca habríamos encontrado en bolsas de trabajo comunes. Llegar a candidatos de gran nivel que ya estaban trabajando cambió las reglas del juego.',
    author: 'CEO & Fundador',
    company: 'Startup Fintech · Serie A',
    initials: 'AV',
  },
  {
    quote:
      'Redujimos nuestro costo por contratación en un 40% y el tiempo de onboarding bajó considerablemente porque los candidatos llegaban mucho mejor calificados.',
    author: 'Gerente de Operaciones',
    company: 'Empresa de Manufactura · 800 empleados',
    initials: 'LT',
  },
]

export function SocialProof() {
  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <header className="text-center max-w-xl mx-auto mb-16">
          <p className="text-brand-blue font-semibold text-xs uppercase tracking-widest mb-4">
            Resultados reales
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
            Empresas que contratan diferente
          </h2>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden mb-20">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white px-8 py-10 text-center">
              <div className="font-display text-4xl lg:text-5xl font-extrabold text-brand-dark mb-2 tabular-nums">
                {m.value}
              </div>
              <div className="text-brand-dark font-semibold text-sm mb-1">{m.label}</div>
              <div className="text-brand-gray text-xs">{m.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="bg-brand-surface rounded-2xl p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-5" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-brand-dark text-[0.9375rem] leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-brand-dark font-semibold text-sm">{t.author}</div>
                  <div className="text-brand-gray text-xs">{t.company}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
