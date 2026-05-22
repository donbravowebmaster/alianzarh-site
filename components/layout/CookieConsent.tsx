'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieConsent() {
  const [shouldRender, setShouldRender] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // 1. Verificar si el usuario ya dio su consentimiento
    const consent = localStorage.getItem('alianzarh_cookie_consent')
    if (!consent) {
      // Retrasar la aparición 1.2 segundos para una experiencia de usuario sumamente pulida
      const timer = setTimeout(() => {
        setShouldRender(true)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    setIsClosing(true)
    localStorage.setItem('alianzarh_cookie_consent', 'accepted')
    // Esperar a que termine la animación de salida (300ms) antes de desmontar
    setTimeout(() => {
      setShouldRender(false)
    }, 300)
  }

  const handleDecline = () => {
    setIsClosing(true)
    localStorage.setItem('alianzarh_cookie_consent', 'declined')
    setTimeout(() => {
      setShouldRender(false)
    }, 300)
  }

  if (!shouldRender) return null

  return (
    <div
      role="region"
      aria-label="Consentimiento de cookies"
      className={`fixed z-50 transition-all duration-300 ease-out
        /* Vista móvil: anclado al fondo y ancho completo */
        bottom-0 left-0 right-0 w-full p-4 sm:p-5
        /* Vista de escritorio: flotando en la esquina inferior derecha */
        md:bottom-6 md:right-6 md:left-auto md:w-[440px] md:p-0
        ${isClosing ? 'translate-y-8 opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'}`}
    >
      <div
        className="bg-[#0f172a]/95 backdrop-blur-xl border border-white/10
          rounded-2xl sm:rounded-2xl shadow-2xl p-6 sm:p-7 relative overflow-hidden"
      >
        {/* Línea decorativa del gradiente de marca en la parte superior */}
        <div
          className="absolute top-0 left-0 right-0 h-1 bg-brand-blue"
          style={{ background: 'linear-gradient(90deg, #357ee3 0%, #c379d8 100%)' }}
          aria-hidden="true"
        />

        <div className="flex gap-4 items-start mb-4">
          {/* Icono de galleta estilizado */}
          <div
            className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20
              flex items-center justify-center shrink-0 text-lg mt-0.5"
            aria-hidden="true"
          >
            🍪
          </div>
          <div>
            <h4 className="font-display text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              Control de Privacidad
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
            </h4>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              Utilizamos cookies para optimizar tu experiencia y analizar el tráfico del sitio. Al hacer clic en{' '}
              <strong className="text-white">"Aceptar todo"</strong>, nos ayudas a mejorar tu navegación de acuerdo
              con nuestra{' '}
              <Link
                href="/privacidad"
                className="text-brand-blue underline hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-blue focus-visible:rounded"
              >
                política de privacidad
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Acciones del banner */}
        <div className="flex flex-col sm:flex-row gap-2.5 sm:justify-end">
          <button
            onClick={handleDecline}
            className="px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5
              text-xs sm:text-sm font-semibold text-white/80 hover:text-white transition-all
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20
              text-center order-2 sm:order-1"
          >
            Solo esenciales
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 rounded-xl bg-brand-blue text-white
              text-xs sm:text-sm font-bold transition-all hover:bg-brand-blue-dark
              hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-0.5
              active:translate-y-0
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2
              focus-visible:ring-offset-[#0f172a]
              text-center order-1 sm:order-2"
            style={{
              backgroundImage: 'linear-gradient(135deg, #357ee3 0%, #c379d8 100%)',
            }}
          >
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  )
}
