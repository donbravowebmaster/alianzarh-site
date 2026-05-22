'use client'

import { useState, useEffect } from 'react'

// ── WIDGET 1: PIPELINE AUTOMATION PREVIEW ──────────────────────────────
interface Candidate {
  name: string
  role: string
  score: number
  stage: 'aplicacion' | 'prefiltrado' | 'evaluacion' | 'entrevista' | 'oferta'
  status: 'active' | 'success' | 'filtered'
}

export function PipelineAutomationPreview() {
  const [candidates, setCandidates] = useState<Candidate[]>([
    { name: 'Mariana Garza', role: 'Gerente de Operaciones', score: 94, stage: 'prefiltrado', status: 'active' },
    { name: 'Carlos Ruiz', role: 'Dev Lead (Fullstack)', score: 88, stage: 'evaluacion', status: 'active' },
    { name: 'Sofía Torres', role: 'Subdirectora Comercial', score: 96, stage: 'entrevista', status: 'active' },
    { name: 'Roberto Díaz', role: 'Analista de Logística', score: 62, stage: 'aplicacion', status: 'filtered' },
  ])

  const [activeStep, setActiveStep] = useState(0)

  // Simulation: Move candidate stages periodically to show automation
  useEffect(() => {
    const interval = setInterval(() => {
      setCandidates((prev) =>
        prev.map((c, i) => {
          if (c.status === 'filtered') return c
          if (i === 0 && c.stage === 'prefiltrado') return { ...c, stage: 'evaluacion' }
          if (i === 1 && c.stage === 'evaluacion') return { ...c, stage: 'entrevista' }
          if (i === 2 && c.stage === 'entrevista') return { ...c, stage: 'oferta' }
          // Reset cycle
          if (i === 0 && c.stage === 'evaluacion') return { ...c, stage: 'prefiltrado' }
          if (i === 1 && c.stage === 'entrevista') return { ...c, stage: 'evaluacion' }
          if (i === 2 && c.stage === 'oferta') return { ...c, stage: 'entrevista' }
          return c
        })
      )
      setActiveStep((prev) => (prev + 1) % 4)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const advanceCandidate = (index: number) => {
    setCandidates((prev) =>
      prev.map((c, i) => {
        if (i !== index || c.status === 'filtered') return c
        const stages: Candidate['stage'][] = ['aplicacion', 'prefiltrado', 'evaluacion', 'entrevista', 'oferta']
        const currentIdx = stages.indexOf(c.stage)
        const nextIdx = (currentIdx + 1) % stages.length
        return { ...c, stage: stages[nextIdx] }
      })
    )
  }

  const getStageLabel = (stage: Candidate['stage']) => {
    const labels = {
      aplicacion: 'Aplicó',
      prefiltrado: 'Pre-filtrado',
      evaluacion: 'Evaluación',
      entrevista: 'Entrevista',
      oferta: 'Oferta Final',
    }
    return labels[stage]
  }

  return (
    <div className="bg-brand-dark/95 border border-white/10 rounded-2xl p-6 sm:p-8 w-full max-w-lg mx-auto shadow-2xl relative overflow-hidden text-white font-sans">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div>
          <span className="inline-block bg-brand-purple/20 text-brand-purple text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
            Simulador en Vivo
          </span>
          <h4 className="text-base font-bold text-white mt-1">Filtro de Candidatos</h4>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-white/60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Filtros Activos en Vivo
        </div>
      </div>

      {/* Candidates List */}
      <div className="flex flex-col gap-3">
        {candidates.map((candidate, idx) => (
          <div
            key={candidate.name}
            className={`flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border transition-all duration-300
              ${
                candidate.status === 'filtered'
                  ? 'bg-red-500/5 border-red-500/20 opacity-60'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">{candidate.name}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold
                    ${candidate.score >= 90 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-brand-blue/20 text-brand-blue-light'}`}
                >
                  {candidate.score}% Fit
                </span>
              </div>
              <p className="text-xs text-white/50">{candidate.role}</p>
            </div>

            <div className="flex items-center gap-2.5 mt-2.5 sm:mt-0">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-lg tracking-wide transition-all duration-300
                  ${
                    candidate.status === 'filtered'
                      ? 'bg-red-500/20 text-red-400'
                      : candidate.stage === 'oferta'
                      ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/20 animate-pulse'
                      : 'bg-white/10 text-white/80'
                  }`}
              >
                {candidate.status === 'filtered' ? 'Descartado por Requisitos' : getStageLabel(candidate.stage)}
              </span>

              {candidate.status !== 'filtered' && (
                <button
                  type="button"
                  onClick={() => advanceCandidate(idx)}
                  className="bg-white/10 hover:bg-white/20 border border-white/10 p-3 sm:p-2 rounded-xl text-white/80 hover:text-white transition-all duration-150 active:scale-95 touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center"
                  title="Avanzar etapa manualmente"
                  aria-label={`Avanzar a ${candidate.name}`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 text-[11px] text-center text-white/40 italic">
        *Haz clic en el botón de flecha para simular la toma de decisiones del sistema.
      </div>
    </div>
  )
}

// ── WIDGET 2: DIGITAL ADS PREVIEW ──────────────────────────────────────
export function DigitalAdsPreview() {
  const [sourcingActive, setSourcingActive] = useState(true)
  const [metrics, setMetrics] = useState({
    impressions: 48250,
    clicks: 3840,
    candidates: 128,
  })

  // Metric Sourcing Simulation
  useEffect(() => {
    if (!sourcingActive) return

    const interval = setInterval(() => {
      setMetrics((prev) => ({
        impressions: prev.impressions + Math.floor(Math.random() * 4) + 1,
        clicks: prev.clicks + (Math.random() > 0.6 ? 1 : 0),
        candidates: prev.candidates + (Math.random() > 0.9 ? 1 : 0),
      }))
    }, 1500)

    return () => clearInterval(interval)
  }, [sourcingActive])

  return (
    <div className="bg-brand-dark/95 border border-white/10 rounded-2xl p-6 sm:p-8 w-full max-w-lg mx-auto shadow-2xl text-white font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div>
          <span className="inline-block bg-brand-blue/20 text-brand-blue text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
            Monitoreo en Vivo
          </span>
          <h4 className="text-base font-bold text-white mt-1">Publicidad de Vacante Activa</h4>
        </div>
        <button
          type="button"
          onClick={() => setSourcingActive((v) => !v)}
          className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-all duration-200
            ${
              sourcingActive
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                : 'bg-white/5 border-white/10 text-white/50'
            }`}
        >
          <span className={`w-2 h-2 rounded-full ${sourcingActive ? 'bg-emerald-500 animate-ping' : 'bg-white/30'}`} />
          {sourcingActive ? 'Buscando en Vivo' : 'Pausado'}
        </button>
      </div>

      {/* Targets Info */}
      <div className="bg-white/5 rounded-xl border border-white/10 p-4 mb-6">
        <h5 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Público Objetivo Buscado</h5>
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span className="text-white/60">Zonas:</span> <strong className="text-white">México (Nacional)</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span className="text-white/60">Plataformas:</span> <strong className="text-white">LinkedIn y Redes</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
            <span className="text-white/60">Puestos:</span> <strong className="text-white">Gerentes y Especialistas</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
            <span className="text-white/60">Estatus:</span> <strong className="text-emerald-400">Trabajando (Interesado)</strong>
          </div>
        </div>
      </div>

      {/* Metrics Counters */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center">
          <span className="text-[10px] text-white/50 uppercase font-semibold">Impresiones</span>
          <p className="text-lg sm:text-xl font-extrabold text-white mt-1 transition-all duration-300">
            {metrics.impressions.toLocaleString()}
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center">
          <span className="text-[10px] text-white/50 uppercase font-semibold">Clicks</span>
          <p className="text-lg sm:text-xl font-extrabold text-brand-blue mt-1 transition-all duration-300">
            {metrics.clicks.toLocaleString()}
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center">
          <span className="text-[10px] text-white/50 uppercase font-semibold">Interesados</span>
          <p className="text-lg sm:text-xl font-extrabold text-brand-purple mt-1 transition-all duration-300">
            {metrics.candidates.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Mini Radar pulse */}
      {sourcingActive && (
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-brand-blue-light/80 bg-brand-blue/5 border border-brand-blue/15 rounded-xl py-2 px-3 animate-pulse">
          <svg className="w-4 h-4 animate-spin text-brand-blue" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Mostrando anuncios a profesionales con el perfil ideal...
        </div>
      )}
    </div>
  )
}

// ── WIDGET 3: HEADHUNTING PREVIEW ──────────────────────────────────────
interface SkillRating {
  name: string
  pct: number
  desc: string
}

export function HeadhuntingPreview() {
  const skills: SkillRating[] = [
    { name: 'Dirección y Liderazgo', pct: 95, desc: '12 años dirigiendo operaciones y coordinando equipos de trabajo en manufactura.' },
    { name: 'Compatibilidad con tu Empresa', pct: 92, desc: 'Excelente actitud de trabajo, enfocado en metas y colaboración en equipo.' },
    { name: 'Experiencia en el Puesto', pct: 89, desc: 'Amplio conocimiento en control de calidad, eficiencia en procesos y seguridad.' },
  ]

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const handleBarInteraction = (idx: number) => {
    if (hoveredIdx === idx) {
      setHoveredIdx(null)
    } else {
      setHoveredIdx(idx)
    }
  }

  return (
    <div className="bg-brand-dark/95 border border-white/10 rounded-2xl p-6 sm:p-8 w-full max-w-lg mx-auto shadow-2xl text-white font-sans relative overflow-hidden">
      {/* Sello de Garantía con Efecto de Resplandor */}
      <div className="absolute -top-3 -right-3 w-28 h-28 bg-gradient-to-br from-brand-purple to-brand-blue opacity-15 rounded-full blur-xl pointer-events-none" />

      {/* Sello Físico */}
      <div className="absolute top-4 right-4 flex items-center justify-center bg-brand-purple/20 border border-brand-purple/40 text-brand-purple text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md animate-glow-pulse">
        60 Días Garantía*
      </div>

      {/* Executive Card */}
      <div className="mb-5">
        <span className="inline-block bg-white/10 text-white/70 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2">
          Expediente Confidencial
        </span>
        <h4 className="text-lg font-bold text-white">Ing. Alejandro Flores</h4>
        <p className="text-xs text-white/50">Candidato ID: #HH-8049 (Director de Operaciones)</p>
      </div>

      {/* Skills Bars */}
      <div className="flex flex-col gap-4">
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            className="cursor-pointer group select-none touch-manipulation"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => handleBarInteraction(idx)}
          >
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-white/80 group-hover:text-white transition-colors duration-150">{skill.name}</span>
              <span className="text-brand-purple font-bold">{skill.pct}%</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-brand-blue to-brand-purple h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${skill.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Details Box */}
      <div className="bg-white/5 rounded-xl border border-white/10 p-4 mt-5 min-h-[90px] flex items-center transition-all duration-300">
        {hoveredIdx !== null ? (
          <div>
            <span className="text-[10px] text-brand-blue font-bold uppercase tracking-wider">Comentario del Consultor</span>
            <p className="text-xs text-white/80 mt-1 leading-relaxed">{skills[hoveredIdx].desc}</p>
          </div>
        ) : (
          <p className="text-xs text-white/40 italic text-center w-full">
            *Pasa el cursor o pulsa sobre cada habilidad para ver el comentario de nuestro consultor.
          </p>
        )}
      </div>
    </div>
  )
}

// ── WIDGET 4: TALENT ASSESSMENT PREVIEW ─────────────────────────────────
export function TalentAssessmentPreview() {
  const [activeTab, setActiveTab] = useState<'tecnico' | 'cultural' | 'referencias'>('tecnico')

  return (
    <div className="bg-brand-dark/95 border border-white/10 rounded-2xl p-6 sm:p-8 w-full max-w-lg mx-auto shadow-2xl text-white font-sans relative overflow-hidden">
      {/* Target Glow */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
        <div>
          <span className="inline-block bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
            Scorecard Completada
          </span>
          <h4 className="text-base font-bold text-white mt-1">Evaluación de Candidato</h4>
        </div>
        <div className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-500/20">
          Recomendado
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 mb-5 text-xs font-semibold gap-1">
        <button
          type="button"
          onClick={() => setActiveTab('tecnico')}
          className={`flex-1 pb-3 transition-colors duration-150 border-b-2 text-center
            ${activeTab === 'tecnico' ? 'border-brand-blue text-white' : 'border-transparent text-white/50 hover:text-white'}`}
        >
          Prueba Técnica
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('cultural')}
          className={`flex-1 pb-3 transition-colors duration-150 border-b-2 text-center
            ${activeTab === 'cultural' ? 'border-brand-blue text-white' : 'border-transparent text-white/50 hover:text-white'}`}
        >
          Personalidad y Valores
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('referencias')}
          className={`flex-1 pb-3 transition-colors duration-150 border-b-2 text-center
            ${activeTab === 'referencias' ? 'border-brand-blue text-white' : 'border-transparent text-white/50 hover:text-white'}`}
        >
          Referencias (3/3)
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[140px] flex flex-col justify-center">
        {activeTab === 'tecnico' && (
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/70">Conocimientos Prácticos del Puesto</span>
                <span className="font-bold text-emerald-400">95/100</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full animate-grow-bar" style={{ width: '95%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/70">Resolución de Problemas</span>
                <span className="font-bold text-emerald-400">90/100</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full animate-grow-bar" style={{ width: '90%' }} />
              </div>
            </div>
            <p className="text-[11px] text-white/40 mt-1">
              *Evaluación de conocimientos prácticos diseñada según la vacante.
            </p>
          </div>
        )}

        {activeTab === 'cultural' && (
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs bg-white/5 border border-white/10 p-2.5 rounded-lg">
              <span className="text-white/80 font-medium">Trabajo en Equipo</span>
              <span className="text-brand-purple font-bold">Excelente</span>
            </div>
            <div className="flex items-center justify-between text-xs bg-white/5 border border-white/10 p-2.5 rounded-lg">
              <span className="text-white/80 font-medium">Enfoque en Objetivos</span>
              <span className="text-brand-purple font-bold">Excelente</span>
            </div>
            <div className="flex items-center justify-between text-xs bg-white/5 border border-white/10 p-2.5 rounded-lg">
              <span className="text-white/80 font-medium">Iniciativa y Autonomía</span>
              <span className="text-brand-purple font-bold">Excelente</span>
            </div>
          </div>
        )}

        {activeTab === 'referencias' && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-xs text-white/90">
              <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✓</span>
              <span><strong>Llamadas a jefes anteriores:</strong> 100% validadas y recomendadas</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/90">
              <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✓</span>
              <span><strong>Historial laboral y trayectoria:</strong> Verificado sin inconsistencias</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/90">
              <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✓</span>
              <span><strong>Títulos y estudios académicos:</strong> Comprobados oficialmente</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
