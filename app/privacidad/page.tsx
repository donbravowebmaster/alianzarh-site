import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad Integral',
  description:
    'Aviso de Privacidad Integral de Alianza RH de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares en México.',
}

export default function PrivacidadPage() {
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
            Aviso de Privacidad Integral
          </h1>
          <p className="text-white/60 text-base sm:text-lg">
            Conforme a la Ley Federal de Protección de Datos Personales (LFPDPPP) · México
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
              
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-8 text-xs sm:text-sm text-brand-gray">
                <strong>Estimado Usuario:</strong> En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en lo sucesivo la &quot;Ley&quot; o &quot;LFPDPPP&quot;), su Reglamento y los Lineamientos del Aviso de Privacidad publicados por el INAI, <strong>Alianza RH</strong> pone a su disposición el presente Aviso de Privacidad Integral para informarle sobre las características del tratamiento que daremos a sus datos personales.
              </div>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                1. Identidad y Domicilio del Responsable
              </h2>
              <p className="text-brand-gray text-sm">
                <strong>Alianza RH</strong> (en adelante, el &quot;Responsable&quot;), con domicilio operativo en Monterrey, Nuevo León, México, es el responsable del uso, resguardo y protección de sus datos personales. Para salvaguardar la integridad de su información, disponemos de una cuenta de atención y contacto oficial a través del correo electrónico: <a href="mailto:contacto@alianzarh.com" className="text-brand-blue hover:underline">contacto@alianzarh.com</a>.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                2. Datos Personales que Someteremos a Tratamiento
              </h2>
              <p className="text-brand-gray text-sm">
                Para cumplir con las finalidades comerciales y operativas descritas en este aviso, el Responsable recabará las siguientes categorías de datos personales mediante formularios digitales en nuestro sitio web, llamadas telefónicas o correos electrónicos:
              </p>
              <ul className="list-disc pl-5 text-brand-gray text-sm space-y-2" role="list">
                <li><strong>Datos de Identificación:</strong> Nombre completo, puesto o cargo dentro de su organización.</li>
                <li><strong>Datos de Contacto:</strong> Correo electrónico corporativo, número telefónico (móvil y/o de oficina), perfil profesional de LinkedIn.</li>
                <li><strong>Datos Organizacionales:</strong> Razón social o nombre comercial de la empresa a la que representa, sector de negocio, número de empleados y necesidades de contratación.</li>
              </ul>
              <p className="text-brand-gray text-sm italic font-medium">
                * Le informamos que Alianza RH no recaba ni solicita bajo ninguna circunstancia datos personales sensibles (tales como origen racial, estado de salud presente o futuro, información genética, creencias religiosas, filosóficas y morales, afiliación sindical u opiniones políticas).
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                3. Finalidades del Tratamiento
              </h2>
              <p className="text-brand-gray text-sm">
                Los datos personales que recabamos de usted serán utilizados para las siguientes finalidades primarias y necesarias para el servicio que solicita:
              </p>
              <ul className="list-disc pl-5 text-brand-gray text-sm space-y-2" role="list">
                <li><strong>Proveer los Servicios Solicitados:</strong> Agendar, coordinar y llevar a cabo sesiones virtuales de diagnóstico de reclutamiento o demostración de nuestro pipeline tecnológico de selección.</li>
                <li><strong>Cotizaciones e Integración de Propuestas:</strong> Elaborar propuestas económicas y de servicios especializadas y personalizadas para cubrir vacantes en su organización.</li>
                <li><strong>Seguimiento de Servicios:</strong> Mantener comunicación activa respecto a los procesos de reclutamiento vigentes contratados por su organización.</li>
              </ul>
              <p className="text-brand-gray text-sm font-semibold">
                Finalidades Secundarias (Opcionales):
              </p>
              <p className="text-brand-gray text-sm">
                De manera adicional, utilizaremos su información para finalidades secundarias que no dan origen ni son indispensables para la relación jurídica, pero que nos permiten brindarle una mejor atención:
              </p>
              <ul className="list-disc pl-5 text-brand-gray text-sm space-y-2" role="list">
                <li>Enviar boletines informativos sobre tendencias de capital humano, reclutamiento y mercado de trabajo en México.</li>
                <li>Enviar promociones, invitaciones a webinars y publicidad sobre nuevos servicios tecnológicos de Alianza RH.</li>
              </ul>
              <p className="text-brand-gray text-xs">
                En caso de que no desee que sus datos personales sean tratados para estas finalidades secundarias, usted puede enviar desde este momento un correo a <a href="mailto:contacto@alianzarh.com" className="text-brand-blue hover:underline">contacto@alianzarh.com</a> indicando en el cuerpo del mensaje su negativa de consentimiento comercial. Esto no afectará la prestación de los servicios primarios contratados.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                4. Limitación de Uso y Transferencia de Datos
              </h2>
              <p className="text-brand-gray text-sm">
                Alianza RH se compromete a no transferir, vender, arrendar ni compartir su información personal con terceros ajenos al negocio, salvo en los siguientes supuestos previstos por el artículo 37 de la LFPDPPP:
              </p>
              <ul className="list-disc pl-5 text-brand-gray text-sm space-y-2" role="list">
                <li>Cuando la transferencia esté prevista en una Ley o Tratado en los que México sea parte.</li>
                <li>Cuando la transferencia sea necesaria para la salvaguarda de un interés público o para la procuración o administración de justicia.</li>
                <li>Cuando la transferencia sea necesaria para el mantenimiento o cumplimiento de una relación jurídica entre el Responsable y el Titular de los datos.</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                5. Medios para Ejercer los Derechos ARCO
              </h2>
              <p className="text-brand-gray text-sm">
                Usted goza en todo momento de los derechos constitucionales de <strong>Acceso, Rectificación, Cancelación y Oposición (Derechos ARCO)</strong> sobre sus datos personales. Para el ejercicio de estos derechos, o para revocar el consentimiento previamente otorgado, el titular o su representante legal deberán enviar una solicitud en formato libre al correo electrónico <a href="mailto:contacto@alianzarh.com" className="text-brand-blue hover:underline">contacto@alianzarh.com</a>.
              </p>
              <p className="text-brand-gray text-sm font-semibold">
                La solicitud de derechos ARCO deberá contener:
              </p>
              <ol className="list-decimal pl-5 text-brand-gray text-sm space-y-2" role="list">
                <li>Nombre completo del titular de los datos.</li>
                <li>Documento escaneado que acredite la identidad del titular (INE, Pasaporte o Cédula Profesional vigente). Si actúa a través de representante legal, el poder notarial o carta poder firmada ante dos testigos.</li>
                <li>Descripción clara y precisa de los datos respecto de los cuales busca ejercer alguno de los derechos ARCO.</li>
                <li>Cualquier otro elemento o documento que facilite la localización de sus datos personales.</li>
              </ol>
              <p className="text-brand-gray text-sm">
                <strong>Plazos de Respuesta Legales:</strong> De acuerdo al artículo 32 de la Ley, Alianza RH le notificará la resolución adoptada en un plazo máximo de <strong>20 (veinte) días hábiles</strong> contados desde la fecha en que se recibió la solicitud completa. Si la solicitud resulta procedente, se hará efectiva dentro de los <strong>15 (quince) días hábiles</strong> siguientes a la fecha en que se le notifique la respuesta.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                6. Uso de Tecnologías de Rastreo (Cookies y Web Beacons)
              </h2>
              <p className="text-brand-gray text-sm">
                Le informamos que en nuestro portal web utilizamos cookies y web beacons que recopilan información técnica para mejorar su experiencia de usuario y facilitar la carga rápida del sitio. Estos datos incluyen la dirección IP de origen, tipo de navegador web, sistema operativo y la duración de la navegación. Usted puede deshabilitar el uso de cookies directamente desde la configuración de su navegador web en cualquier momento.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                7. Modificaciones al Aviso de Privacidad
              </h2>
              <p className="text-brand-gray text-sm">
                El presente Aviso de Privacidad puede sufrir modificaciones o actualizaciones derivadas de nuevos requerimientos legales, necesidades internas del negocio o cambios en nuestra infraestructura tecnológica. Alianza RH se compromete a mantener actualizado el presente aviso en esta página web para su libre consulta.
              </p>
            </div>

            {/* Botón de Retorno (Fuera de prose para evitar conflictos de estilos) */}
            <div className="pt-8 mt-8 border-t border-gray-100 text-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/25 hover:-translate-y-0.5 transition-[background-color,box-shadow,transform] duration-200 ease-out whitespace-nowrap"
              >
                Volver al formulario de contacto
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
