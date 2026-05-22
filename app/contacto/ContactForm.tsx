'use client'

import { useState, FormEvent } from 'react'

type FormState = {
  nombre: string
  empresa: string
  cargo: string
  email: string
  telefono: string
  vacantes: string
  urgencia: string
  mensaje: string
  honeypot: string
}

const initialForm: FormState = {
  nombre: '',
  empresa: '',
  cargo: '',
  email: '',
  telefono: '',
  vacantes: '',
  urgencia: '',
  mensaje: '',
  honeypot: '',
}

const inputClass = [
  'w-full border border-gray-200 bg-white',
  'text-gray-900 placeholder:text-gray-400',
  'rounded-xl px-4 py-3.5 text-sm',
  'transition-[border-color,box-shadow] duration-150 ease-out',
  'focus-visible:outline-none focus-visible:ring-2',
  'focus-visible:ring-brand-blue/30 focus-visible:border-brand-blue',
].join(' ')

const labelClass = 'block text-brand-dark text-xs font-semibold uppercase tracking-wide mb-1.5'

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

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    // Validación client-side básica
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
    /* aria-live="polite" — anuncia el cambio a estado de éxito al screen reader */
    <div aria-live="polite" aria-atomic="true">
      {submitted ? (
        <div className="bg-brand-surface rounded-2xl p-14 text-center border border-gray-100">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-brand-dark mb-3">
            Solicitud enviada
          </h2>
          <p className="text-brand-gray text-base leading-relaxed max-w-md mx-auto">
            Un especialista revisará tu solicitud y se pondrá en contacto contigo en las próximas{' '}
            <strong className="text-brand-dark">24 horas hábiles</strong> para agendar la demo.
            Si prefieres, escríbenos directamente a{' '}
            <a
              href="mailto:hola@alianzarh.com"
              className="text-brand-blue underline hover:opacity-80
                transition-[opacity] duration-150 ease-out
                focus-visible:outline-none focus-visible:ring-1
                focus-visible:ring-brand-blue focus-visible:rounded"
            >
              hola@alianzarh.com
            </a>
            .
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm"
        >
          {/* Campo oculto Honeypot contra spam */}
          <div className="absolute opacity-0 -z-50 w-0 h-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="honeypot">Dejar vacío si eres humano</label>
            <input
              id="honeypot"
              name="honeypot"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.honeypot}
              onChange={handleChange}
            />
          </div>

          <h2 className="font-display text-2xl font-extrabold text-brand-dark mb-7">
            Cuéntanos sobre tu empresa
          </h2>

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="nombre" className={labelClass}>
                Nombre completo {requiredMark}
              </label>
              <input
                id="nombre"
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
              <label htmlFor="cargo" className={labelClass}>
                Cargo / Puesto
              </label>
              <input
                id="cargo"
                name="cargo"
                type="text"
                autoComplete="organization-title"
                placeholder="Director RH, CEO, etc."
                value={form.cargo}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="empresa" className={labelClass}>
              Empresa {requiredMark}
            </label>
            <input
              id="empresa"
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

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email corporativo {requiredMark}
              </label>
              <input
                id="email"
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
              <label htmlFor="telefono" className={labelClass}>
                Teléfono
              </label>
              <input
                id="telefono"
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

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="vacantes" className={labelClass}>
                Vacantes a cubrir
              </label>
              <select
                id="vacantes"
                name="vacantes"
                autoComplete="off"
                value={form.vacantes}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" disabled>Seleccionar rango</option>
                <option value="1-3">1 a 3 posiciones</option>
                <option value="4-10">4 a 10 posiciones</option>
                <option value="11-30">11 a 30 posiciones</option>
                <option value="30+">Más de 30 posiciones</option>
              </select>
            </div>
            <div>
              <label htmlFor="urgencia" className={labelClass}>
                Urgencia
              </label>
              <select
                id="urgencia"
                name="urgencia"
                autoComplete="off"
                value={form.urgencia}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" disabled>Seleccionar</option>
                <option value="inmediata">Inmediata (esta semana)</option>
                <option value="pronto">Próximas 2–4 semanas</option>
                <option value="planificacion">Planificación (1–3 meses)</option>
              </select>
            </div>
          </div>

          <div className="mb-7">
            <label htmlFor="mensaje" className={labelClass}>
              ¿Qué perfiles necesitas cubrir?
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              autoComplete="off"
              placeholder="Describe brevemente los puestos, industria o desafíos de reclutamiento que enfrentas…"
              value={form.mensaje}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium flex items-center gap-2">
              <svg className="w-5 h-5 shrink-0 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
              hover:bg-brand-blue-dark hover:shadow-lg hover:shadow-brand-blue/20
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-brand-blue focus-visible:ring-offset-2
              disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none"
          >
            {isSubmitting ? (
              <>
                <Spinner />
                Enviando…
              </>
            ) : (
              'Enviar solicitud'
            )}
          </button>

          <p className="text-gray-400 text-xs text-center mt-4 leading-relaxed">
            Al enviar este formulario aceptas nuestra{' '}
            <a
              href="/privacidad"
              className="underline hover:text-brand-blue
                transition-[color] duration-150 ease-out
                focus-visible:outline-none focus-visible:ring-1
                focus-visible:ring-brand-blue focus-visible:rounded"
            >
              política de privacidad
            </a>
            . Sin spam, sin ventas agresivas.
          </p>
        </form>
      )}
    </div>
  )
}
