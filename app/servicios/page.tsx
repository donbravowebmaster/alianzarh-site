import type { Metadata } from 'next'
import Link from 'next/link'
import {
  PipelineAutomationPreview,
  DigitalAdsPreview,
  HeadhuntingPreview,
  TalentAssessmentPreview,
} from '@/components/sections/ServicePreviews'

export const metadata: Metadata = {
  title: 'Servicios de Reclutamiento Especializado | Alianza RH',
  description:
    'Headhunting de precisión, reclutamiento por pauta digital, automatización del pipeline de selección y evaluaciones inteligentes en todo México. Cubrimos tus vacantes clave.',
}

const services = [
  {
    id: 'automatizacion',
    tag: 'Eficiencia',
    title: 'Filtro Inteligente y Seguimiento de Candidatos',
    description:
      'Diseñamos un sistema que recibe, filtra y organiza a tus candidatos automáticamente. Tu equipo de recursos humanos solo dedicará tiempo a entrevistar a los mejores perfiles, eliminando la revisión manual de cientos de currículums.',
    points: [
      'Filtro automático de currículums por experiencia y habilidades',
      'Envío automático de las primeras pruebas a los candidatos',
      'Avisos automáticos al candidato sobre su avance en el proceso',
      'Conexión sencilla con tus sistemas actuales de recursos humanos',
    ],
  },
  {
    id: 'pauta',
    tag: 'Alcance Activo',
    title: 'Atracción de Talento con Publicidad Digital',
    description:
      'La mayoría de los profesionistas destacados ya tienen empleo y no buscan vacantes en bolsas de trabajo tradicionales. Creamos anuncios dirigidos en LinkedIn, Facebook e Instagram para presentarles tu oferta y atraerlos activamente.',
    points: [
      'Publicidad de tus vacantes directamente en LinkedIn, Facebook e Instagram',
      'Redacción de anuncios atractivos que despiertan el interés del candidato',
      'Anuncios dirigidos exactamente por profesión, sector de negocio y ciudad',
      'Creación de una lista propia de candidatos calificados para el futuro',
    ],
  },
  {
    id: 'headhunting',
    tag: 'Talento Crítico',
    title: 'Headhunting y Reclutamiento de Directivos',
    description:
      'Búsqueda directa y discreta para tus puestos directivos, gerenciales o de alta especialización técnica. Contactamos directamente a los mejores profesionales en tu sector a nivel nacional para presentarte a los líderes indicados.',
    points: [
      'Búsqueda activa de profesionales trabajando en tu competencia directa',
      'Acercamiento profesional y confidencial con directivos y gerentes',
      'Evaluación profunda de la forma de liderar y valores del candidato',
      'Garantía de reemplazo sin costo adicional de hasta 90 días por contrato',
    ],
  },
  {
    id: 'filtros',
    tag: 'Precisión',
    title: 'Evaluación Completa y Pruebas Técnicas',
    description:
      'Validamos los conocimientos prácticos, la personalidad y el historial laboral de tus finalistas antes de que los contrates. Evita sorpresas y toma decisiones con toda la información en tus manos.',
    points: [
      'Pruebas prácticas de conocimientos diseñadas a la medida del puesto',
      'Exámenes psicométricos para conocer su personalidad y valores',
      'Llamadas de referencia laboral minuciosas con sus jefes anteriores',
      'Ficha resumen con toda la información clave del candidato pre-filtrado',
    ],
  },
]

export default function ServiciosPage() {
  const renderVisualPreview = (id: string) => {
    switch (id) {
      case 'automatizacion':
        return <PipelineAutomationPreview />
      case 'pauta':
        return <DigitalAdsPreview />
      case 'headhunting':
        return <HeadhuntingPreview />
      case 'filtros':
        return <TalentAssessmentPreview />
      default:
        return null
    }
  }

  return (
    <>
      {/* ── SECCIÓN 1: HERO ────────────────────────────────────────── */}
      <section className="bg-brand-dark pt-36 pb-20 section-padding relative overflow-hidden flex items-center min-h-[480px]">
        {/* Grid decorativo */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #357ee3 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />

        {/* Luces de fondo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #357ee3 0%, #c379d8 50%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        <div className="container-max relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-widest px-5 py-1.5 rounded-full mb-5">
            NUESTRAS SOLUCIONES
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Servicios diseñados para{' '}
            <span className="text-gradient-blue">acelerar tu contratación.</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            De la vacante difícil a la contratación ideal. Combinamos tecnología de selección automatizada y búsqueda activa especializada para cubrir tus posiciones en la mitad del tiempo.
          </p>
        </div>
      </section>

      {/* ── SECCIÓN 2: SERVICIOS DETALLADOS ─────────────────────────── */}
      <section className="bg-white py-20 lg:py-28 relative">
        <div className="container-max">
          <div className="flex flex-col gap-24 lg:gap-32">
            {services.map((service, i) => (
              <article
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Columna izquierda: Información */}
                <div className="flex flex-col items-start">
                  <span className="inline-block bg-brand-blue/8 border border-brand-blue/15 text-brand-blue text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                    {service.tag}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark mb-5 tracking-tight leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-brand-gray text-base sm:text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  {/* Lista de beneficios */}
                  <ul className="flex flex-col gap-3.5 mb-8 w-full" role="list">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3.5 text-brand-dark text-sm sm:text-base">
                        <span
                          className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-[background-color,box-shadow,transform] duration-200 ease-out hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-0.5"
                  >
                    Consultar este servicio
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Columna derecha: Componente Interactivo */}
                <div className="flex items-center justify-center w-full">
                  {renderVisualPreview(service.id)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: LLAMADA A LA ACCIÓN FINAL ────────────────────── */}
      <section className="bg-brand-dark py-20 lg:py-28 text-center relative overflow-hidden">
        {/* Luces decorativas */}
        <div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #357ee3 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c379d8 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="container-max max-w-3xl relative z-10 px-4">
          <span className="text-brand-purple font-semibold text-xs uppercase tracking-widest mb-3.5 inline-block">
            ¿EMPEZAMOS AHORA?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            ¿Qué posición necesitas cubrir?
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Hablemos 15 minutos en una sesión honesta de diagnóstico. Analizaremos tus vacantes y te recomendaremos el proceso de selección idóneo.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-[background-color,box-shadow,transform] duration-200 ease-out hover:shadow-xl hover:shadow-brand-blue/25 hover:-translate-y-0.5"
          >
            Agendar diagnóstico sin costo
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
