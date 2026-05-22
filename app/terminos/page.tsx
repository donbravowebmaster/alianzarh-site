import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Uso',
  description:
    'Términos y Condiciones de Uso del sitio web y los canales digitales oficiales de Alianza RH, aplicables a empresas y representantes legales.',
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
            Términos y Condiciones de Uso
          </h1>
          <p className="text-white/60 text-base sm:text-lg">
            Regulaciones comerciales aplicables en los Estados Unidos Mexicanos
          </p>
          <p className="text-white/40 text-xs sm:text-sm mt-2">
            Última actualización: 21 de mayo de 2026
          </p>
        </div>
      </section>

      {/* ── SECCIÓN 2: CONTENIDO LEGAL ── */}
      <section className="bg-brand-surface py-16 sm:py-24 relative">
        <div className="container-max max-w-3xl mx-auto px-4">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-100/50">
            <div className="prose prose-slate max-w-none text-brand-dark text-sm sm:text-base leading-relaxed space-y-6">
              
              <p>
                Bienvenido al portal web oficial de <strong>Alianza RH</strong>. Los presentes Términos y Condiciones de Uso (en lo sucesivo los &quot;Términos&quot;) regulan el acceso, navegación y uso de nuestro portal web, así como la interacción y recopilación de solicitudes a través de nuestros formularios digitales.
              </p>
              <p>
                Al acceder, navegar o utilizar este sitio web, usted declara bajo protesta de decir verdad que actúa en nombre y representación de una persona moral legalmente constituida o que es una persona física con capacidad legal para contratar bajo la legislación mexicana, y que acepta de manera expresa y sin reserva alguna los presentes Términos. Si usted no está de acuerdo con el contenido de este documento, deberá abstenerse inmediatamente de navegar e interactuar con este portal.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                1. Propósito e Información del Portal
              </h2>
              <p className="text-brand-gray text-sm">
                La finalidad principal de este sitio web es netamente informativa y comercial en el ámbito mercantil de empresa a empresa (B2B). Proporciona información sobre soluciones de atracción de talento, reclutamiento especializado por pauta digital, headhunting corporativo y tecnologías de automatización aplicables al sector de recursos humanos.
              </p>
              <p className="text-brand-gray text-sm italic">
                * Ninguna información contenida en esta página web constituye una oferta vinculante de prestación de servicios por parte de Alianza RH. La contratación de cualquiera de nuestras soluciones comerciales se perfeccionará exclusivamente mediante la negociación y firma por escrito del respectivo Contrato de Prestación de Servicios entre las partes autorizadas de cada empresa.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                2. Propiedad Intelectual e Industrial
              </h2>
              <p className="text-brand-gray text-sm">
                Todo el contenido disponible en este portal, incluyendo de manera enunciativa más no limitativa, textos, códigos fuente de programación, interfaces gráficas de usuario (GUI), esquemas, logotipos, slogans comerciales, animaciones, diagramas (tales como el simulador del pipeline de selección), mapas e imágenes, son propiedad exclusiva de <strong>Alianza RH</strong> o cuenta con las licencias correspondientes.
              </p>
              <p className="text-brand-gray text-sm">
                Todos los derechos de propiedad intelectual se encuentran protegidos por la Ley Federal del Derecho de Autor, la Ley Federal de Protección a la Propiedad Industrial y los tratados internacionales de los que México es parte. Queda estrictamente prohibida la reproducción parcial o total, distribución, modificación, retransmisión o ingeniería inversa del portal sin el consentimiento expreso y por escrito del representante legal de Alianza RH.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                3. Uso Permitido y Limitaciones de Conducta
              </h2>
              <p className="text-brand-gray text-sm">
                El usuario se compromete a hacer uso de este sitio de conformidad con las leyes vigentes y las buenas costumbres comerciales. El usuario tiene prohibido de manera estricta:
              </p>
              <ul className="list-disc pl-5 text-brand-gray text-sm space-y-2" role="list">
                <li>Utilizar el sitio para transmitir virus, troyanos, ransomware u otras amenazas informáticas destructivas.</li>
                <li>Utilizar datos falsos, inexactos o pertenecientes a terceros sin su consentimiento expreso en los formularios de contacto del sitio web.</li>
                <li>Realizar raspado de datos (web scraping) o extraer de forma automatizada información de candidatos, vacantes o esquemas gráficos expuestos en el sitio.</li>
                <li>Hacer uso de la marca &quot;Alianza RH&quot; o sus logotipos para simular la prestación de servicios en nombre de la empresa.</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                4. Limitación de Responsabilidad
              </h2>
              <p className="text-brand-gray text-sm">
                Alianza RH implementa los más altos estándares y mejores prácticas de ciberseguridad en el hospedaje y desarrollo de su portal (utilizando redes CDN globales y compresión optimizada). Sin embargo, bajo ninguna circunstancia será responsable por:
              </p>
              <ul className="list-disc pl-5 text-brand-gray text-sm space-y-2" role="list">
                <li>Interrupciones técnicas temporales de la plataforma ajenas a nuestro control.</li>
                <li>Daños directos, indirectos o incidentales en el equipo del usuario derivados de la navegación o descargas de material en este sitio.</li>
                <li>La falta de actualización o pequeñas imprecisiones en los datos informativos expuestos sobre cobertura de vacantes, promedios de garantía de reposición o tiempos promedio de cobertura, los cuales son promedios generales y pueden variar por sector industrial.</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                5. Privacidad y Datos Personales
              </h2>
              <p className="text-brand-gray text-sm">
                El tratamiento y resguardo de cualquier dato personal recopilado a través de los formularios de este sitio se rigen exclusivamente bajo los términos expresados en nuestro <Link href="/privacidad" className="text-brand-blue font-semibold hover:underline">Aviso de Privacidad Integral</Link>, el cual está redactado en cumplimiento con la LFPDPPP mexicana y puede consultarse en cualquier momento.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                6. Modificaciones de los Términos
              </h2>
              <p className="text-brand-gray text-sm">
                Alianza RH se reserva el derecho exclusivo de realizar cambios, adiciones o adaptaciones parciales o totales a los presentes Términos de Servicio en cualquier momento y sin previo aviso, con el fin de reflejar cambios en la legislación comercial o en su modelo de negocio. La continuación en el uso del portal web posterior a cualquier modificación constituirá su aceptación incondicional de los nuevos términos.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                7. Legislación y Jurisdicción Aplicables
              </h2>
              <p className="text-brand-gray text-sm">
                Para la interpretación, cumplimiento y resolución de cualquier controversia judicial o administrativa derivada del acceso o uso de este portal web, las partes acuerdan expresamente someterse a la aplicación de las leyes federales de los Estados Unidos Mexicanos y de las leyes del Estado de Nuevo León.
              </p>
              <p className="text-brand-gray text-sm">
                Asimismo, las partes convienen de manera irrevocable someterse a la jurisdicción exclusiva de los Tribunales Judiciales competentes ubicados en la ciudad de <strong>Monterrey, Nuevo León, México</strong>, renunciando de manera expresa a cualquier otra jurisdicción o fuero que por razón de sus domicilios presentes o futuros pudiera corresponderles.
              </p>
            </div>

            {/* Botón de Retorno (Fuera de prose para evitar conflictos de estilos) */}
            <div className="pt-8 mt-8 border-t border-gray-100 text-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/25 hover:-translate-y-0.5 transition-[background-color,box-shadow,transform] duration-200 ease-out whitespace-nowrap"
              >
                Volver al inicio
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
