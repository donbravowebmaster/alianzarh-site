import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

const solutionLinks = [
  { href: '/servicios#automatizacion', label: 'Filtro de Candidatos' },
  { href: '/servicios#pauta', label: 'Publicidad de Vacantes' },
  { href: '/servicios#headhunting', label: 'Headhunting de Directivos' },
  { href: '/servicios#filtros', label: 'Evaluación y Pruebas' },
]

const legalLinks = [
  { href: '/privacidad', label: 'Política de Privacidad' },
  { href: '/terminos', label: 'Términos de Servicio' },
]

export function Footer() {
  return (
    <footer className="bg-brand-darker text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* ── Logo + descripción ── */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Alianza RH — Inicio">
              <Image
                src="/logo-blanco.svg"
                alt="Alianza RH"
                width={140}
                height={47}
                className="h-9 w-auto mb-5"
              />
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-4">
              Reclutamiento especializado y headhunting con criterio humano y 
              tecnología avanzada. Nacidos en Monterrey, conectamos talento clave 
              con empresas en todo México.
            </p>

            {/* Badge de ubicación regio */}
            <div className="inline-flex items-center gap-1.5 text-white/35 text-xs">
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Monterrey, Nuevo León, México
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn de Alianza RH"
                className="text-white/40 hover:text-brand-blue transition-colors duration-150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook de Alianza RH"
                className="text-white/40 hover:text-brand-blue transition-colors duration-150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Navegación ── */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navegación
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Soluciones ── */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Soluciones
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contacto ── */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contacto
            </h3>
            <ul className="flex flex-col gap-4" role="list">
              <li>
                <a
                  href="mailto:contacto@alianzarh.com"
                  className="text-white/50 hover:text-white text-sm transition-colors duration-150"
                >
                  contacto@alianzarh.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+528123321719"
                  className="text-white/50 hover:text-white text-sm transition-colors duration-150"
                >
                  81 2332 1719
                </a>
              </li>
              <li className="text-white/40 text-sm leading-snug">
                Monterrey, Nuevo León
                <br />
                México
              </li>
            </ul>
          </div>
        </div>

        {/* ── Barra inferior ── */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Alianza RH &middot; Monterrey, N.L. Todos los derechos reservados.
          </p>
          <ul className="flex items-center gap-6" role="list">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/30 hover:text-white/60 text-xs transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
