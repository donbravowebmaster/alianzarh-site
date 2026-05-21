'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ── WIDGET 1: SELECCIONADOR DE LIDERAZGO INTERACTIVO ────────────────────────
const leadershipTabs = [
  {
    role: 'Dirección y Estrategia de Reclutamiento',
    founder: 'Socio Fundador - 25+ Años de Experiencia',
    description:
      'Coordinación de procesos de alta complejidad, búsqueda de directores y gerentes de primera línea en toda la República Mexicana. Criterio formado en cientos de comités de selección.',
    metrics: [
      { name: 'Experiencia Nacional', value: '25 Años', percent: 100, label: 'Liderazgo en Selección' },
      { name: 'Éxito de Cobertura', value: '98.4%', percent: 98, label: 'En puestos directivos' },
      { name: 'Retención al Primer Año', value: '92%', percent: 92, label: 'Garantía de adaptación' },
    ],
    badge: 'Dirección Estratégica',
  },
  {
    role: 'Cultura y Clima Organizacional',
    founder: 'Socio Fundador - 15+ Años de Experiencia',
    description:
      'Evaluación profunda de la afinidad candidato-empresa. Diseñamos filtros que van más allá del currículum, analizando la personalidad, el estilo de liderazgo y los valores clave del postulante.',
    metrics: [
      { name: 'Alineación Psicométrica', value: '95%', percent: 95, label: 'Precisión de perfiles' },
      { name: 'Reducción de Rotación', value: '-40%', percent: 85, label: 'En empresas cliente' },
      { name: 'Adaptación Cultural', value: 'Excelente', percent: 90, label: 'Criterio Alianza RH' },
    ],
    badge: 'Cultura y Valores',
  },
  {
    role: 'Búsqueda Directa y Anuncios Inteligentes',
    founder: 'Socio Fundador - 10+ Años de Experiencia',
    description:
      'Estrategia de reclutamiento digital enfocada en alcance real y resultados medibles. Utilizamos las plataformas de publicidad más poderosas para conectar con los mejores talentos de forma directa y efectiva.',
    metrics: [
      { name: 'Cobertura Digital', value: '+ de 500K', percent: 95, label: 'Alcance potencial mensual' },
      { name: 'ROI Optimizado', value: 'Real Time', percent: 100, label: 'Medición de resultados' },
      { name: 'Canales Activos', value: 'Meta • Google • LinkedIn', percent: 100, label: 'Publicidad digital integrada' },
    ],
    badge: 'Búsqueda Directa',
  },
]

export function LeadershipSelector() {
  const [activeTab, setActiveTab] = useState(0)
  const current = leadershipTabs[activeTab]

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-slate-100/50 p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
      {/* Luces decorativas */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      {/* Cabecera / Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-5 mb-6">
        {leadershipTabs.map((tab, idx) => (
          <button
            key={tab.role}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
              activeTab === idx
                ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/25 scale-[1.02]'
                : 'bg-brand-surface text-brand-dark/70 hover:bg-gray-100'
            }`}
          >
            Pilar {idx + 1}
          </button>
        ))}
      </div>

      {/* Contenido Dinámico */}
      <div className="space-y-6">
        <div>
          <div className="inline-block bg-brand-blue/10 text-brand-blue text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md mb-2">
            {current.badge}
          </div>
          <h4 className="font-display text-xl sm:text-2xl font-extrabold text-brand-dark leading-tight">
            {current.role}
          </h4>
          <p className="text-brand-blue font-bold text-xs sm:text-sm mt-1">
            {current.founder}
          </p>
          <p className="text-brand-gray text-xs sm:text-sm leading-relaxed mt-3">
            {current.description}
          </p>
        </div>

        {/* Métricas con barras */}
        <div className="space-y-4 pt-2">
          {current.metrics.map((metric) => (
            <div key={metric.name}>
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className="text-brand-dark">{metric.name}</span>
                <span className="text-brand-blue font-mono">{metric.value}</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-blue to-brand-purple rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${metric.percent}%` }}
                />
              </div>
              <p className="text-[10px] text-brand-gray/80 mt-0.5">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── WIDGET 2: BENTO GRID INTERACTIVO DE VALORES ──────────────────────────────
export function ValuesBentoGrid() {
  const [cvSimulation, setCvSimulation] = useState(false)
  const [activeCoverageStep, setActiveCoverageStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCoverageStep((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Tarjeta 1 (md:col-span-2) — Precisión sobre volumen con mini simulador */}
      <article className="md:col-span-2 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-blue/20 transition-all duration-300 relative overflow-hidden group">
        <div>
          <div className="w-8 h-0.5 bg-brand-blue mb-5" aria-hidden="true" />
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-brand-dark mb-3">
            Entregamos candidatos listos, no montañas de currículums.
          </h3>
          <p className="text-brand-gray text-xs sm:text-sm leading-relaxed max-w-xl">
            No te inundamos con 50 currículums genéricos descargados con prisa. Te presentamos una terna depurada de 3 a 5 candidatos finalistas evaluados a profundidad. Tu tiempo es valioso.
          </p>
        </div>

        {/* Simulador Interactivo */}
        <div className="mt-6 bg-brand-surface rounded-xl p-4 sm:p-5 border border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center relative">
          <div className="w-full sm:w-1/2 space-y-3">
            <span className="text-[10px] font-extrabold text-brand-gray/60 uppercase tracking-widest block">
              Comparativa de proceso
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-brand-dark/80">Revisión de perfiles:</span>
                <span className={`font-bold font-mono ${cvSimulation ? 'text-brand-blue' : 'text-brand-gray'}`}>
                  {cvSimulation ? '5 Candidatos Premium' : '50 Candidatos Genéricos'}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-brand-dark/80">Tiempo de entrevistas:</span>
                <span className="font-bold text-emerald-500 font-mono">
                  {cvSimulation ? '3 Horas totales' : '18 Horas estimadas'}
                </span>
              </div>
            </div>
            <button
              onClick={() => setCvSimulation(!cvSimulation)}
              className="w-full py-2 px-3.5 bg-brand-dark text-white rounded-lg text-xs font-bold hover:bg-brand-blue hover:shadow-md hover:shadow-brand-blue/25 active:scale-[0.98] transition-all duration-200"
            >
              {cvSimulation ? 'Ver método tradicional' : 'Simular Método Alianza RH'}
            </button>
          </div>

          <div className="w-full sm:w-1/2 flex justify-center items-center h-28 bg-white rounded-lg border border-gray-100 relative overflow-hidden">
            {cvSimulation ? (
              <div className="space-y-1.5 w-full px-4 animate-fade-in">
                <span className="text-[9px] font-extrabold text-emerald-500 block text-center mb-1">
                  ✓ 15 HORAS AHORRADAS (90% EFICACIA)
                </span>
                {[
                  { name: 'Ing. Alejandro S. (Monterrey)', afinidad: '98% Afinidad' },
                  { name: 'Lic. Mariana R. (Querétaro)', afinidad: '96% Afinidad' },
                  { name: 'Mtro. Héctor G. (CDMX)', afinidad: '94% Afinidad' },
                ].map((item, i) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center text-[10px] bg-emerald-50/50 border border-emerald-100 rounded-md p-1.5 animate-float"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <span className="font-bold text-slate-800 truncate">{item.name}</span>
                    <span className="text-emerald-600 font-mono shrink-0 font-extrabold">{item.afinidad}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-5 gap-1.5 p-3 w-full opacity-60">
                {Array.from({ length: 15 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-5 rounded bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center text-[8px] text-slate-400 font-mono animate-pulse"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    CV
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent flex items-center justify-center">
                  <span className="text-[10px] font-extrabold text-slate-500 bg-white border border-slate-100 px-2 py-1 rounded-md shadow-sm">
                    Revisión Manual Lenta
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Tarjeta 2 (md:col-span-1) — Transparencia total con Mock de seguimiento */}
      <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-blue/20 transition-all duration-300">
        <div>
          <div className="w-8 h-0.5 bg-brand-blue mb-5" aria-hidden="true" />
          <h3 className="font-display text-xl font-bold text-brand-dark mb-3">
            Cuentas claras y procesos a la vista.
          </h3>
          <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
            Eliminamos las llamadas constantes y las cajas negras. Te damos visibilidad total del avance de tus vacantes mediante informes directos, sin excusas ni retrasos.
          </p>
        </div>

        {/* Panel Mini Mock */}
        <div className="mt-5 bg-brand-dark text-white rounded-xl p-4 border border-white/5 space-y-3 font-sans">
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <span className="text-[9px] font-extrabold text-white/50 uppercase tracking-wider">
              Estatus en Vivo
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="text-[11px]">
              <p className="font-bold">Gerente de Operaciones</p>
              <div className="w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-brand-blue w-4/5" />
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-white/60">
              <span>Etapa actual: Filtro Técnico</span>
              <span className="font-bold text-brand-purple">4 Seleccionados</span>
            </div>
          </div>
        </div>
      </article>

      {/* Tarjeta 3 (md:col-span-1) — Relación a largo plazo con insignia dorada */}
      <article className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-blue/20 transition-all duration-300 group">
        <div>
          <div className="w-8 h-0.5 bg-brand-blue mb-5" aria-hidden="true" />
          <h3 className="font-display text-xl font-bold text-brand-dark mb-3">
            Garantizamos que tu contratación sea rentable.
          </h3>
          <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
            El éxito no es cerrar una vacante hoy. Es que el profesional aporte valor constante a tu empresa. Respaldamos nuestro compromiso con una garantía de reemplazo formal de hasta 90 días por contrato.
          </p>
        </div>

        {/* Insignia en CSS/SVG */}
        <div className="mt-5 flex justify-center items-center bg-brand-surface border border-gray-100 rounded-xl p-4 transition-all duration-300 group-hover:bg-brand-blue/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
            <div>
              <p className="text-brand-dark font-extrabold text-sm">Garantía Escrita</p>
              <p className="text-brand-gray text-[11px] font-medium">90 Días de Cobertura de Respaldo</p>
            </div>
          </div>
        </div>
      </article>

      {/* Tarjeta 4 (md:col-span-2) — Tecnología con propósito */}
      <article className="md:col-span-2 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-blue/20 transition-all duration-300 relative overflow-hidden">
        <div>
          <div className="w-8 h-0.5 bg-brand-blue mb-5" aria-hidden="true" />
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-brand-dark mb-3">
            Herramientas inteligentes para decisiones humanas.
          </h3>
          <p className="text-brand-gray text-xs sm:text-sm leading-relaxed max-w-xl">
            Adoptamos tecnología avanzada no por presumir una tendencia, sino para eliminar las tareas lentas y mecánicas. Al dejar que el sistema filtre currículums y envíe evaluaciones iniciales de forma automática, nuestro equipo de consultores puede enfocarse por completo en lo que realmente importa: entrevistas humanas profundas.
          </p>
        </div>

        {/* Mini Gráfico de Distribución del Trabajo */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold text-brand-gray/60 uppercase block">Distribución de Esfuerzo</span>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-blue block shrink-0" />
                <span className="text-brand-dark font-bold">10% Tareas de Computación</span>
              </div>
              <p className="text-[10px] text-brand-gray pl-4">Filtrado rápido y envío de pruebas</p>
              
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-purple block shrink-0" />
                <span className="text-brand-dark font-bold">90% Criterio y Consulta</span>
              </div>
              <p className="text-[10px] text-brand-gray pl-4">Entrevistas humanas, valores y referencias</p>
            </div>
          </div>
          <div className="h-16 flex items-center justify-center bg-brand-surface rounded-xl border border-gray-100 relative">
            <div className="w-full flex h-4 rounded-full bg-slate-100 max-w-[200px] overflow-hidden">
              <div className="h-full bg-brand-blue w-[10%] animate-pulse" />
              <div className="h-full bg-brand-purple w-[90%]" />
            </div>
            <span className="absolute bottom-1 right-2 text-[8px] font-mono text-brand-gray">Filtro Alianza RH</span>
          </div>
        </div>
      </article>

    </div>
  )
}

// ── WIDGET 3: SIMULADOR DE ALCANCE NACIONAL (MAPA INTERACTIVO CSS/SVG) ──────
type Vacancies = {
  operativo: string
  administrativo: string
  gerencial: string
}

type ClientNode = {
  id: string
  name: string
  x: number
  y: number
  profile: string
  detail: string
  industria: string
  vacantes: Vacancies
}

const mapNodes: ClientNode[] = [
  {
    id: 'mty',
    name: 'Monterrey (Oficina Central)',
    x: 486,
    y: 156,
    profile: 'Centro de Reclutamiento',
    detail: 'Sede de operaciones nacional. Coordinamos búsquedas ejecutivas, técnicas y operativas con un equipo de headhunters de élite.',
    industria: 'Corporativo y Multisectorial',
    vacantes: {
      operativo: 'Técnico de Mantenimiento / Montacarguista / Operador CNC calificado',
      administrativo: 'Analista Contable Senior / Especialista en Nóminas y Compensaciones',
      gerencial: 'Director de Operaciones Industriales / Gerente de Planta de Manufactura'
    }
  },
  {
    id: 'cdmx',
    name: 'CDMX',
    x: 486,
    y: 408,
    profile: 'Directores de Finanzas y Tecnología',
    detail: 'Reclutamiento especializado para corporativos multinacionales, firmas de servicios financieros e instituciones de tecnología.',
    industria: 'Servicios Financieros y Fintech',
    vacantes: {
      operativo: 'Supervisor de Operaciones de Almacén / Almacenista Calificado',
      administrativo: 'Desarrollador Fullstack Senior / Diseñador UX/UI / Contador Bilingüe',
      gerencial: 'Director de Finanzas (CFO) / Gerente Regional de Ventas B2B'
    }
  },
  {
    id: 'gdl',
    name: 'Guadalajara',
    x: 252,
    y: 312,
    profile: 'Líderes de Ingeniería y Sistemas',
    detail: 'Contacto directo y headhunting para perfiles del ecosistema digital, tecnológico y de manufactura de Jalisco.',
    industria: 'Tecnología e Innovación',
    vacantes: {
      operativo: 'Técnico en Soporte Electrónico / Ensamblador de Precisión',
      administrativo: 'Ingeniero de Software React y Node.js / Ejecutivo de Cuentas Clave B2B',
      gerencial: 'Gerente de Ingeniería de Sistemas / Director de Tecnología (CTO)'
    }
  },
  {
    id: 'qro',
    name: 'Querétaro / Bajío',
    x: 432,
    y: 360,
    profile: 'Gerentes de Operaciones y Logística',
    detail: 'Selección de directivos de planta e ingenieros clave para los sectores de manufactura automotriz, aeroespacial y logística.',
    industria: 'Manufactura Automotriz y Logística',
    vacantes: {
      operativo: 'Operador de Inyección de Plásticos / Inspector de Calidad Aeronáutica',
      administrativo: 'Comprador Industrial Bilingüe / Coordinador de Logística y Tráfico',
      gerencial: 'Gerente de Planta Automotriz / Director de Cadena de Suministro (Supply Chain)'
    }
  },
  {
    id: 'tij',
    name: 'Tijuana / Frontera',
    x: 72,
    y: 96,
    profile: 'Directores de Cadena de Suministro',
    detail: 'Perfiles especializados en maquiladoras, comercio exterior bilateral y operaciones transfronterizas de alto nivel.',
    industria: 'Manufactura Global y Aduanas',
    vacantes: {
      operativo: 'Supervisor de Línea de Producción / Técnico de Maquinaria Especializada',
      administrativo: 'Especialista en Aduanas e Importaciones / Comprador Senior Bilingüe',
      gerencial: 'Director de Operaciones Binacionales / Gerente de Planta de Dispositivos Médicos'
    }
  }
]

export function NationalCoverageMap() {
  const [activeNode, setActiveNode] = useState<ClientNode>(mapNodes[0])

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div>
        <span className="inline-block bg-brand-blue/20 text-brand-blue text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md mb-3">
          Cobertura Nacional
        </span>
        <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Presencia en todo México
        </h3>
        <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed max-w-2xl">
          Operamos desde Monterrey pero tenemos alcance estratégico en los principales hubs industriales del país.
        </p>
      </div>

      {/* Grid: Botones + Info */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* Columna Izquierda: Botones de Ciudades */}
        <div className="lg:col-span-1">
          <div className="space-y-2 sticky top-24">
            {mapNodes.map((node) => (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`w-full text-left px-5 py-4 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeNode.id === node.id
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {node.name}
              </button>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Información */}
        <div className="lg:col-span-2">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">

            {/* Encabezado con Industria */}
            <div className="mb-6 pb-6 border-b border-white/10">
              <span className="inline-block bg-brand-blue/20 text-brand-blue text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md mb-3">
                Región Seleccionada
              </span>
              <h4 className="font-display text-2xl font-extrabold text-white mb-1">
                {activeNode.name}
              </h4>
              <p className="text-brand-blue font-bold text-sm">{activeNode.industria}</p>
            </div>

            {/* Descripción */}
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              {activeNode.detail}
            </p>

            {/* Perfiles por Nivel */}
            <div className="space-y-4">
              <h5 className="font-bold text-white text-xs uppercase tracking-wider">Perfiles que Reclutamos</h5>

              {/* Gerencial */}
              <div className="bg-brand-purple/15 border border-brand-purple/30 rounded-xl p-4">
                <p className="font-bold text-xs text-brand-purple uppercase tracking-wider mb-2">Gerencial</p>
                <p className="text-sm text-white/70 leading-relaxed">{activeNode.vacantes.gerencial}</p>
              </div>

              {/* Administrativo */}
              <div className="bg-brand-blue/15 border border-brand-blue/30 rounded-xl p-4">
                <p className="font-bold text-xs text-brand-blue uppercase tracking-wider mb-2">Especializado</p>
                <p className="text-sm text-white/70 leading-relaxed">{activeNode.vacantes.administrativo}</p>
              </div>

              {/* Operativo */}
              <div className="bg-emerald-500/15 border border-emerald-500/30 rounded-xl p-4">
                <p className="font-bold text-xs text-emerald-400 uppercase tracking-wider mb-2">Operativo</p>
                <p className="text-sm text-white/70 leading-relaxed">{activeNode.vacantes.operativo}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
