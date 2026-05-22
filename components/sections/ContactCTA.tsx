'use client'

import { useState, FormEvent } from 'react'

type FormState = {
  nombre: string
  empresa: string
  email: string
  telefono: string
  vacantes: string
  mensaje: string
  honeypot: string
}

const initialForm: FormState = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  vacantes: '',
  mensaje: '',
  honeypot: '',
}

const inputClass = [
  'w-full bg-[#161b22] border border-white/10',
  'text-white placeholder:text-white/30',
  'rounded-xl px-4 py-3.5 text-sm',
  'transition-[border-color,background-color,box-shadow] duration-150 ease-out',
  'focus-visible:outline-none focus-visible:ring-2',
  'focus-visible:ring-brand-blue focus-visible:border-brand-blue',
  'focus-visible:bg-[#1d232e] focus-visible:border-brand-blue/80',
].join(' ')

const labelClass = 'block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide'

const requiredMark = <span className="text-brand-purple" aria-hidden="true">*</span>

function Spinner() {
  return (
    <svg
      className="w-4 h-4 motion-safe:animate-spin"
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

export function ContactCTA() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!form.nombre.trim() || !form.empresa.trim() || !form.email.trim()) {
      setError('Por favor, completa todos los campos requeridos (*).')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitted(true)
        setForm(initialForm)
      } else {
        setError(data.error || 'Ocurrió un error al enviar el formulario. Intenta de nuevo.')
      }
    } catch (err) {
      console.error('Error al enviar formulario:', err)
      setError('Hubo un problema de conexión. Por favor, verifica tu internet e intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="bg-brand-dark section-padding relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]
          opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #357ee3 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Copy izquierdo ──────────────────────────────────── */}
          <div>
            <p className="text-brand-purple font-semibold text-xs uppercase tracking-widest mb-4">
              Empieza hoy
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              30 minutos pueden cambiar cómo contratas talento.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Analizamos dónde se están deteniendo tus candidatos y trazamos un plan de 
              reclutamiento activo a la medida de tu sector. Información clara y 
              accionable desde la primera llamada.
            </p>

            <ul className="flex flex-col gap-4" role="list">
              {[
                'Detección de pérdida de candidatos en el embudo',
                'Propuesta de canales de atracción para tus vacantes',
                'Tiempos y costos estimados de cobertura',
                'Sin contratos obligatorios ni venta agresiva',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                  <span
                    className="w-5 h-5 rounded-full bg-brand-blue/20 border border-brand-blue/40
                      flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 text-brand-blue"
                      fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Formulario ─────────────────────────────────────── */}
          <div className="bg-[#111622] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {/* aria-live="polite": anuncia cambio de estado al screen reader */}
            <div aria-live="polite" aria-atomic="true">
              {submitted ? (
                <div className="text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30
                      flex items-center justify-center mx-auto mb-5"
                  >
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Solicitud recibida
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Un especialista revisará tu información y te contactará en menos de{' '}
                    <strong className="text-white">24 horas hábiles</strong> para darte una propuesta.
                    Si prefieres, escríbenos a{' '}
                    <a
                      href="mailto:contacto@alianzarh.com"
                      className="text-brand-blue underline hover:opacity-80
                        transition-[opacity] duration-150 ease-out
                        focus-visible:outline-none focus-visible:ring-1
                        focus-visible:ring-brand-blue focus-visible:rounded"
                    >
                      contacto@alianzarh.com
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Campo oculto Honeypot contra spam */}
                  <div className="absolute opacity-0 -z-50 w-0 h-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="cta-honeypot">Dejar vacío si eres humano</label>
                    <input
                      id="cta-honeypot"
                      name="honeypot"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.honeypot}
                      onChange={handleChange}
                    />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-6">
                    Cotizar una Vacante
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="cta-nombre" className={labelClass}>
                        Nombre completo {requiredMark}
                      </label>
                      <input
                        id="cta-nombre"
                        name="nombre"
                        type="text"
                        required
                        aria-required="true"
                        autoComplete="name"
                        placeholder="Tu nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-empresa" className={labelClass}>
                        Empresa {requiredMark}
                      </label>
                      <input
                        id="cta-empresa"
                        name="empresa"
                        type="text"
                        required
                        aria-required="true"
                        autoComplete="organization"
                        placeholder="Nombre de tu empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="cta-email" className={labelClass}>
                        Email corporativo {requiredMark}
                      </label>
                      <input
                        id="cta-email"
                        name="email"
                        type="email"
                        required
                        aria-required="true"
                        autoComplete="email"
                        inputMode="email"
                        placeholder="tu@empresa.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-telefono" className={labelClass}>
                        Teléfono
                      </label>
                      <input
                        id="cta-telefono"
                        name="telefono"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="+52 55 0000 0000"
                        value={form.telefono}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="cta-vacantes" className={labelClass}>
                      Vacantes a cubrir
                    </label>
                    <select
                      id="cta-vacantes"
                      name="vacantes"
                      autoComplete="off"
                      value={form.vacantes}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled>Selecciona un rango</option>
                      <option value="1-3">1 a 3 posiciones</option>
                      <option value="4-10">4 a 10 posiciones</option>
                      <option value="11-30">11 a 30 posiciones</option>
                      <option value="30+">Más de 30 posiciones</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="cta-mensaje" className={labelClass}>
                      ¿Qué perfiles buscas?
                    </label>
                    <textarea
                      id="cta-mensaje"
                      name="mensaje"
                      rows={3}
                      autoComplete="off"
                      placeholder="Cuéntanos brevemente los puestos o perfiles que necesitas cubrir…"
                      value={form.mensaje}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <div className="mb-6 p-4 bg-red-950/40 border border-red-500/30 rounded-xl text-red-200 text-sm font-medium flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0 text-red-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2
                      bg-brand-blue text-white font-bold py-4 rounded-xl text-base
                      transition-[background-color,box-shadow,opacity] duration-200 ease-out
                      hover:bg-brand-blue-dark hover:shadow-xl hover:shadow-brand-blue/25
                      focus-visible:outline-none focus-visible:ring-2
                      focus-visible:ring-brand-blue focus-visible:ring-offset-2
                      focus-visible:ring-offset-brand-dark
                      disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner />
                        Enviando…
                      </>
                    ) : (
                      'Enviar Solicitud'
                    )}
                  </button>

                  <p className="text-white/30 text-xs text-center mt-4">
                    Al enviar aceptas nuestra{' '}
                    <a
                      href="/privacidad"
                      className="underline hover:text-white/60
                        transition-[color] duration-150 ease-out
                        focus-visible:outline-none focus-visible:ring-1
                        focus-visible:ring-white/50 focus-visible:rounded"
                    >
                      política de privacidad
                    </a>
                    . Sin spam ni seguimiento comercial agresivo.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
