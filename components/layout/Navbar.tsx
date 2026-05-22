'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50
        transition-[background-color,border-color,box-shadow] duration-300 ease-out
        ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-lg shadow-brand-dark/5'
            : 'bg-transparent'
        }`}
    >
      <nav
        className={`container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-out ${
          scrolled ? 'py-3.5' : 'py-5'
        }`}
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className={`flex items-center shrink-0 rounded
            focus-visible:outline-none focus-visible:ring-2
            ${
              scrolled
                ? 'focus-visible:ring-brand-blue/60 focus-visible:ring-offset-brand-surface'
                : 'focus-visible:ring-white/60 focus-visible:ring-offset-brand-dark'
            }
            focus-visible:ring-offset-2`}
          aria-label="Alianza RH — Inicio"
        >
          <Image
            src={scrolled ? '/logo-principal.svg' : '/logo-blanco.svg'}
            alt="Alianza RH"
            width={152}
            height={51}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-semibold tracking-wide
                  transition-colors duration-150 ease-out rounded
                  focus-visible:outline-none focus-visible:ring-2
                  ${
                    scrolled
                      ? 'text-brand-dark/80 hover:text-brand-blue focus-visible:ring-brand-blue/50 focus-visible:ring-offset-brand-surface'
                      : 'text-white/75 hover:text-white focus-visible:ring-white/50 focus-visible:ring-offset-brand-dark'
                  }
                  focus-visible:ring-offset-2`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/contacto"
            className={`bg-brand-blue hover:bg-brand-blue-dark text-white
              text-sm font-semibold px-5 py-2.5 rounded-lg
              transition-[background-color,box-shadow,transform] duration-200 ease-out
              hover:shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-brand-blue focus-visible:ring-offset-2
              ${
                scrolled
                  ? 'focus-visible:ring-offset-brand-surface'
                  : 'focus-visible:ring-offset-brand-dark'
              }`}
          >
            Cotizar Vacante
          </Link>

          {/* Divisor vertical sutil */}
          <span className={`h-5 w-px ${scrolled ? 'bg-gray-200' : 'bg-white/20'}`} aria-hidden="true" />

          {/* Iconos de Redes Sociales */}
          <div className="flex items-center gap-3.5">
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn de Alianza RH"
              className={`transition-[color,transform] duration-150 hover:-translate-y-0.5 rounded focus-visible:outline-none focus-visible:ring-2
                ${scrolled ? 'text-brand-dark/50 hover:text-brand-blue focus-visible:ring-brand-blue/50' : 'text-white/60 hover:text-white focus-visible:ring-white/50'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook de Alianza RH"
              className={`transition-[color,transform] duration-150 hover:-translate-y-0.5 rounded focus-visible:outline-none focus-visible:ring-2
                ${scrolled ? 'text-brand-dark/50 hover:text-brand-blue focus-visible:ring-brand-blue/50' : 'text-white/60 hover:text-white focus-visible:ring-white/50'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram de Alianza RH"
              className={`transition-[color,transform] duration-150 hover:-translate-y-0.5 rounded focus-visible:outline-none focus-visible:ring-2
                ${scrolled ? 'text-brand-dark/50 hover:text-brand-blue focus-visible:ring-brand-blue/50' : 'text-white/60 hover:text-white focus-visible:ring-white/50'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Hamburguer — p-3 para touch target ≥ 44px */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className={`md:hidden flex flex-col gap-1.5 p-3 rounded
            focus-visible:outline-none focus-visible:ring-2
            ${
              scrolled
                ? 'text-brand-dark focus-visible:ring-brand-blue/50'
                : 'text-white focus-visible:ring-white/50'
            }`}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span
            aria-hidden="true"
            className={`block w-6 h-0.5 rounded
              transition-[transform,background-color] duration-200 ease-out
              ${scrolled ? 'bg-brand-dark' : 'bg-white'}
              ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            aria-hidden="true"
            className={`block w-6 h-0.5 rounded
              transition-[opacity,transform,background-color] duration-200 ease-out
              ${scrolled ? 'bg-brand-dark' : 'bg-white'}
              ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`}
          />
          <span
            aria-hidden="true"
            className={`block w-6 h-0.5 rounded
              transition-[transform,background-color] duration-200 ease-out
              ${scrolled ? 'bg-brand-dark' : 'bg-white'}
              ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className={`md:hidden border-t
            ${
              scrolled
                ? 'bg-white/98 backdrop-blur-md border-gray-100'
                : 'bg-brand-dark/98 backdrop-blur-md border-white/10'
            }`}
        >
          <ul className="px-6 py-8 flex flex-col gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-semibold transition-colors duration-150 ease-out rounded
                    focus-visible:outline-none focus-visible:ring-2
                    ${
                      scrolled
                        ? 'text-brand-dark/80 hover:text-brand-blue focus-visible:ring-brand-blue/50'
                        : 'text-white/80 hover:text-white focus-visible:ring-white/50'
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contacto"
                onClick={() => setMobileOpen(false)}
                className="block bg-brand-blue text-white text-base font-semibold
                  px-6 py-4 rounded-xl text-center
                  transition-[background-color] duration-200 ease-out
                  hover:bg-brand-blue-dark
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-brand-blue focus-visible:ring-offset-2
                  focus-visible:ring-offset-brand-dark"
              >
                Cotizar Vacante
              </Link>
            </li>
            <li className={`pt-4 flex items-center justify-center gap-6 border-t ${scrolled ? 'border-gray-100' : 'border-white/10'}`}>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn de Alianza RH"
                className={`transition-colors duration-150 rounded focus-visible:outline-none focus-visible:ring-2 p-1.5
                  ${scrolled ? 'text-brand-dark/50 hover:text-brand-blue focus-visible:ring-brand-blue/50' : 'text-white/60 hover:text-white focus-visible:ring-white/50'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook de Alianza RH"
                className={`transition-colors duration-150 rounded focus-visible:outline-none focus-visible:ring-2 p-1.5
                  ${scrolled ? 'text-brand-dark/50 hover:text-brand-blue focus-visible:ring-brand-blue/50' : 'text-white/60 hover:text-white focus-visible:ring-white/50'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram de Alianza RH"
                className={`transition-colors duration-150 rounded focus-visible:outline-none focus-visible:ring-2 p-1.5
                  ${scrolled ? 'text-brand-dark/50 hover:text-brand-blue focus-visible:ring-brand-blue/50' : 'text-white/60 hover:text-white focus-visible:ring-white/50'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
