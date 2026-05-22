'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const stats = [
  { value: '30+ Años', label: 'Trayectoria del equipo' },
  { value: 'Hasta 60 días*', label: 'Garantía de reposición' },
  { value: '14 Días - 4 Sem.', label: 'Cobertura según perfil' },
]

const pipeline = [
  { label: 'Aplicaron', count: 128, pct: 100, color: 'bg-[#475569]' },
  { label: 'Pre-filtrados', count: 89, pct: 69, color: 'bg-[#2563eb]' },
  { label: 'Entrevistas', count: 42, pct: 33, color: 'bg-[#3b82f6]' },
  { label: 'Finalistas', count: 12, pct: 10, color: 'bg-[#d946ef]' },
  { label: 'Contratados', count: 8, pct: 6, color: 'bg-[#c379d8]' },
]

const roles = [
  { title: 'Auxiliar Contable', location: 'Monterrey' },
  { title: 'Técnico en Refrigeración', location: 'Apodaca' },
  { title: 'Analista de Datos Jr.', location: 'San Pedro' },
  { title: 'Gerente Regional de Ventas', location: 'Monterrey' },
]

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
        setFade(true)
      }, 400) // matches transition duration
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-brand-dark overflow-hidden flex items-center">
      {/* Dot-grid — opacity mínima, sin render-blocking (CSS background-image) */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #357ee3 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      {/* Glow blobs — solo transform+opacity, no re-layout */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none animate-blob-slow"
        style={{ background: 'radial-gradient(circle, #357ee3 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-3xl pointer-events-none animate-blob-slow"
        style={{ background: 'radial-gradient(circle, #c379d8 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* ── Contenido principal ────────────────────────────────────── */}
      {/* pt-28 = navbar 72px + 8px gap. section-padding: py-20 lg:py-28 */}
      <div className="container-max section-padding relative z-10 w-full pt-28 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Columna izquierda: texto ──────────────────────────── */}
          <div>
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2.5 bg-white/8 border border-white/15
              text-white/80 text-xs font-semibold uppercase tracking-widest
              px-4 py-2 rounded-full mb-7 sm:mb-8">
              {/* animate-pulse solo en el dot (propósito funcional: indicador live) */}
              <span
                className="w-1.5 h-1.5 rounded-full bg-brand-purple motion-safe:animate-pulse"
                aria-hidden="true"
              />
              Reclutamiento Activo y Cobertura Ágil
            </div>

            {/* H1 — mobile-first: 4xl base → 5xl sm → [4rem] lg → [4.5rem] xl */}
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem]
                font-extrabold text-white leading-[1.06] mb-5 sm:mb-6"
            >
              <span className="block text-brand-blue text-sm sm:text-base lg:text-lg font-bold uppercase tracking-[0.2em] mb-4">
                Agencia de Reclutamiento en Monterrey
              </span>
              Tu siguiente contratación de personal
              <br />
              <span className="text-gradient-blue">
                no debería tardar 6 semanas.
              </span>
            </h1>

            {/* Subheadline — base → lg/xl */}
            <p className="text-white/65 text-base sm:text-lg lg:text-xl leading-relaxed
              max-w-xl mb-8 lg:mb-10">
              Como agencia de reclutamiento especializado, Alianza RH simplifica la preselección inicial y utiliza{' '}
              <strong className="text-white font-semibold">anuncios digitales dirigidos</strong>{' '}
              para atraer a profesionales calificados. Cobertura ágil:{' '}
              <strong className="text-white font-semibold">máximo 14 días</strong> para vacantes administrativas y operativas, y de{' '}
              <strong className="text-white font-semibold">3 a 4 semanas</strong> para puestos especializados o gerenciales.
            </p>

            {/* CTAs — stacked en mobile, side-by-side en sm+ */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 lg:mb-14">
              <Link
                href="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5
                  bg-brand-blue hover:bg-brand-blue-dark text-white font-bold
                  text-base px-7 py-4 rounded-xl
                  transition-[background-color,box-shadow,transform] duration-200 ease-out
                  hover:shadow-xl hover:shadow-brand-blue/25 hover:-translate-y-0.5
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-brand-blue focus-visible:ring-offset-2
                  focus-visible:ring-offset-brand-dark"
              >
                Cotizar una Vacante
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                  border border-white/25 hover:border-white/50 hover:bg-white/5
                  text-white font-semibold text-base px-7 py-4 rounded-xl
                  transition-[border-color,background-color] duration-200 ease-out
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-white/50 focus-visible:ring-offset-2
                  focus-visible:ring-offset-brand-dark"
              >
                Ver Servicios
              </Link>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6 sm:gap-10 border-t border-white/10 pt-8 lg:pt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-white/45 text-xs sm:text-sm mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha: dashboard visual ────────────────── */}
          {/* Visible en todos los viewports, adaptado con escalado responsivo y animaciones fluidas */}
          <div className="flex justify-center items-center mt-12 lg:mt-0 w-full px-4 sm:px-0 z-10">
            <div className="relative w-full max-w-md scale-[0.88] xs:scale-95 sm:scale-100 origin-center transition-transform duration-300">
              
              {/* Volumetric glow backdrop for depth and premium ambient styling */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#357ee3]/15 to-[#c379d8]/15 rounded-[24px] blur-2xl -z-10" />

               {/* Card principal del pipeline */}
              <div className="bg-[#0b0f19]/85 backdrop-blur-md border border-white/10 rounded-[24px] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.55)] relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white font-bold text-base sm:text-lg tracking-wide">Pipeline de Selección</span>
                  <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
                    Método Activo
                  </span>
                </div>

                <div className="space-y-4">
                  {pipeline.map((stage) => (
                    <div key={stage.label}>
                      <div className="flex justify-between text-xs sm:text-sm text-white/70 mb-1.5 font-medium">
                        <span>{stage.label}</span>
                        <span className="font-bold text-white tabular-nums">{stage.count}</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden relative">
                        <div
                          className={`h-full rounded-full ${stage.color} animate-grow-bar`}
                          style={{ width: `${stage.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/40 text-xs sm:text-sm font-medium">Garantía de reposición</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-white font-bold text-sm sm:text-base tabular-nums">hasta 60 días*</span>
                    <span className="text-emerald-400 text-xs sm:text-sm font-semibold">estándar</span>
                  </div>
                </div>
              </div>

              {/* Badge flotante — Atracción Activa */}
              <div className="absolute -top-3.5 -right-2 sm:-right-4 bg-gradient-to-r from-[#b357e3] to-[#c379d8] text-white
                text-xs font-extrabold px-4 sm:px-5 py-2.5 rounded-full border border-white/20
                shadow-[0_0_20px_rgba(195,121,216,0.6)] animate-glow-pulse z-20">
                Atracción Activa
              </div>

              {/* Notificación flotante — Candidato contratado */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white rounded-[20px] p-4
                shadow-[0_15px_30px_rgba(0,0,0,0.25)] border border-slate-100 flex items-center gap-3.5 min-w-[240px] animate-float z-20">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-emerald-500"
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={3}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-slate-900 text-xs sm:text-sm font-bold">Candidato contratado</p>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-medium mt-0.5">
                    {roles[currentRoleIndex].title} · {roles[currentRoleIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade de transición dark → white hacia la siguiente sección */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
