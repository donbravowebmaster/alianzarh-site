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
        className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4"
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

        <div className="hidden md:flex items-center">
          <Link
            href="/contacto"
            className={`bg-brand-blue hover:bg-brand-blue-dark text-white
              text-sm font-semibold px-5 py-2.5 rounded-lg
              transition-[background-color,box-shadow] duration-200 ease-out
              hover:shadow-lg hover:shadow-brand-blue/30
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
          </ul>
        </div>
      )}
    </header>
  )
}
