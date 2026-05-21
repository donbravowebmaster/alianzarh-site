import type { Metadata } from 'next'
import {
  LeadershipSelector,
  ValuesBentoGrid,
  NationalCoverageMap,
} from '@/components/sections/AboutInteractive'

export const metadata: Metadata = {
  title: 'Quiénes Somos | Reclutamiento y Headhunting en Monterrey | Alianza RH',
  description:
    'Conoce a Alianza RH. Reclutamiento especializado y headhunting con criterio humano y tecnología avanzada en todo México. Nacidos en Monterrey, Nuevo León.',
}

export default function NosotrosPage() {
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

        {/* Luces de fondo (Mesh) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #357ee3 0%, #c379d8 50%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        <div className="container-max relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block bg-brand-blue/15 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-widest px-5 py-1.5 rounded-full mb-5">
            CONOCE A ALIANZA RH
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Reclutamiento con criterio humano y{' '}
            <span className="text-gradient-blue">tecnología avanzada.</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Con raíces en Monterrey y cobertura en toda la República Mexicana. Transformamos la selección de personal reemplazando la lentitud administrativa por una búsqueda dinámica, activa y transparente.
          </p>
        </div>
      </section>

      {/* ── SECCIÓN 2: HISTORIA & LIDERAZGO ──────────────────────────── */}
      <section className="bg-white py-20 lg:py-24 relative border-b border-gray-100">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Columna Izquierda: Historia Editorial */}
            <div>
              <h2 className="font-display text-4xl font-extrabold text-brand-dark mb-2 tracking-tight">
                Nuestra historia
              </h2>
              <p className="text-brand-blue font-bold text-sm mb-6 flex items-center gap-1.5">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Nacidos en Monterrey, Nuevo León
              </p>
              <div className="space-y-5 text-brand-gray text-sm leading-relaxed">
                <p>
                  Alianza RH nació en la ciudad de Monterrey de la frustración de ver cómo las empresas perdían semanas críticas en procesos de selección manuales y burocráticos, solo para terminar con contrataciones incompatibles que no superaban el periodo de prueba.
                </p>
                <p>
                  Decidimos construir una metodología diferente: una que combina la agilidad y el alcance de las herramientas digitales con el criterio humano e intuición que ningún algoritmo puede simular. Trabajo serio, discreto y con resultados palpables. Así es como hacemos los negocios en el norte.
                </p>
                <p>
                  Hoy somos el socio estratégico de empresas de tecnología, manufactura, retail y servicios a nivel nacional que entienden una verdad fundamental: el talento calificado no es un gasto operativo, es su ventaja competitiva real.
                </p>
              </div>
            </div>

            {/* Columna Derecha: Selector de Liderazgo Dinámico */}
            <div>
              <LeadershipSelector />
            </div>

          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: PILARES / VALORES (BENTO GRID) ────────────────── */}
      <section className="bg-brand-surface py-20 lg:py-24 relative border-b border-gray-100">
        <div className="container-max">
          <header className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-blue font-semibold text-xs uppercase tracking-widest mb-4">
              Nuestros pilares
            </p>
            <h2 className="font-display text-4xl font-extrabold text-brand-dark leading-tight mb-4">
              Lo que nos guía cada día
            </h2>
            <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
              Trabajo serio, resultados concretos. Diseñamos un modelo enfocado en la rentabilidad de tu contratación y en el ahorro de tu tiempo.
            </p>
          </header>

          <ValuesBentoGrid />
        </div>
      </section>

      {/* ── SECCIÓN 4: SIMULADOR DE ALCANCE NACIONAL ─────────────────── */}
      <section className="bg-brand-dark py-20 lg:py-24 relative overflow-hidden">
        {/* Luces decorativas de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-max relative z-10">
          <NationalCoverageMap />
        </div>
      </section>

      {/* ── SECCIÓN 5: CTA FINAL CON ENVOLTURA PREMIUM ──────────────── */}
      <section className="bg-brand-surface py-16 relative">
        <div className="container-max">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-slate-100/50 max-w-4xl mx-auto relative overflow-hidden">
            {/* Luces decorativas */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4 leading-tight">
              ¿Listo para acelerar tu contratación?
            </h2>
            <p className="text-brand-gray mb-8 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              Agenda una sesión introductoria sin costo. Analizamos tu proceso de selección actual y te mostramos de forma práctica si somos el aliado adecuado para tu organización.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/25 hover:-translate-y-0.5 transition-all duration-200 ease-out"
            >
              Agendar sesión de diagnóstico
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
