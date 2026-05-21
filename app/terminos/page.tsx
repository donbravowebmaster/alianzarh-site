import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos de Servicio',
  description:
    'Términos y condiciones de uso del sitio web de Alianza RH y la prestación de servicios de reclutamiento.',
}

export default function TerminosPage() {
  return (
    <>
      {/* ── SECCIÓN 1: HERO ── */}
      <section className="bg-brand-dark pt-36 pb-16 section-padding relative overflow-hidden flex items-center min-h-[320px]">
        {/* Grid decorativo */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #357ee3 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />
        <div className="container-max relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Términos de Servicio
          </h1>
          <p className="text-white/60 text-base sm:text-lg">
            Última actualización: 21 de mayo de 2026
          </p>
        </div>
      </section>

      {/* ── SECCIÓN 2: CONTENIDO EDITORIAL ── */}
      <section className="bg-brand-surface py-16 sm:py-24 relative">
        <div className="container-max max-w-3xl mx-auto px-4">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-100/50">
            <div className="prose prose-slate max-w-none text-brand-dark text-sm sm:text-base leading-relaxed space-y-6">
              <p>
                Bienvenido al sitio web de <strong>Alianza RH</strong>. Al acceder y utilizar este sitio, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna de estas condiciones, le pedimos amablemente que no utilice nuestro sitio.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                1. Uso Autorizado del Sitio Web
              </h2>
              <p className="text-brand-gray text-sm">
                Este sitio web tiene como finalidad principal proporcionar información general sobre los servicios de reclutamiento especializado, atracción de talento y headhunting corporativo de Alianza RH, así como permitir a clientes y candidatos agendar sesiones de demostración o diagnóstico. Queda estrictamente prohibido el uso de este sitio para fines fraudulentos, envío de correo basura (spam) o actividades que perjudiquen su funcionamiento.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                2. Propiedad Intelectual
              </h2>
              <p className="text-brand-gray text-sm">
                Todo el contenido disponible en este sitio, incluyendo pero no limitado a textos, logotipos, diseños, códigos fuente, gráficos e interfaces visuales, es propiedad exclusiva de Alianza RH o de sus respectivos licenciantes, y está protegido por las leyes de propiedad intelectual en México e internacionales. Su reproducción, distribución o modificación sin autorización escrita está estrictamente prohibida.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                3. Limitación de Responsabilidad
              </h2>
              <p className="text-brand-gray text-sm">
                Alianza RH realiza esfuerzos constantes para garantizar que la información en este sitio sea precisa y actualizada. Sin embargo, no garantizamos de forma implícita o explícita la total exactitud o disponibilidad del sitio en todo momento. La contratación formal de nuestros servicios de atracción de talento se rige únicamente por los contratos y propuestas firmados individualmente por cada cliente corporativo.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                4. Enlaces a Terceros
              </h2>
              <p className="text-brand-gray text-sm">
                Este sitio puede contener enlaces a redes sociales y plataformas de terceros (como LinkedIn o Vercel). Estos enlaces se proporcionan únicamente para su conveniencia y Alianza RH no tiene control ni asume responsabilidad sobre las políticas, términos de uso o contenidos de dichos sitios externos.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                5. Modificaciones a los Términos
              </h2>
              <p className="text-brand-gray text-sm">
                Nos reservamos el derecho de modificar o actualizar estos Términos de Servicio en cualquier momento y sin previo aviso. Le sugerimos revisar periódicamente esta sección para estar al tanto de cualquier cambio.
              </p>

              <div className="pt-8 border-t border-gray-100 text-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-brand-blue/10 hover:shadow-xl hover:shadow-brand-blue/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Volver al inicio
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
