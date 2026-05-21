import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad',
  description:
    'Aviso de Privacidad de Alianza RH. Información sobre el tratamiento, protección y uso de tus datos personales.',
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
            Aviso de Privacidad
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
                En <strong>Alianza RH</strong>, nos tomamos muy en serio la privacidad y protección de los datos personales de nuestros clientes, prospectos y candidatos. De conformidad con la legislación aplicable en materia de protección de datos personales, emitimos el presente Aviso de Privacidad.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                1. Identidad y Domicilio del Responsable
              </h2>
              <p className="text-brand-gray text-sm">
                Alianza RH, con domicilio en Monterrey, Nuevo León, México, es responsable del tratamiento y resguardo de sus datos personales. Para cualquier duda o aclaración referente a sus datos, puede contactarnos a través del correo electrónico <a href="mailto:contacto@alianzarh.com" className="text-brand-blue hover:underline">contacto@alianzarh.com</a>.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                2. Datos Personales Recabados
              </h2>
              <p className="text-brand-gray text-sm">
                Para llevar a cabo las finalidades descritas en este aviso, recabamos los siguientes datos de contacto e identificación mediante nuestros formularios:
              </p>
              <ul className="list-disc pl-5 text-brand-gray text-sm space-y-1.5" role="list">
                <li>Nombre completo</li>
                <li>Nombre de la empresa u organización</li>
                <li>Correo electrónico corporativo</li>
                <li>Número telefónico de contacto</li>
                <li>Información sobre necesidades de contratación y vacantes de interés</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                3. Finalidad del Tratamiento de los Datos
              </h2>
              <p className="text-brand-gray text-sm">
                Los datos personales recabados serán utilizados estrictamente para las siguientes finalidades necesarias:
              </p>
              <ul className="list-disc pl-5 text-brand-gray text-sm space-y-1.5" role="list">
                <li>Agendar y llevar a cabo la sesión de demostración o diagnóstico de reclutamiento solicitada.</li>
                <li>Elaborar propuestas económicas a la medida de las necesidades de su empresa.</li>
                <li>Establecer contacto directo para dar seguimiento a sus solicitudes de vacantes o perfiles.</li>
                <li>Enviar información relevante sobre el sector de recursos humanos, boletines informativos o actualizaciones de nuestros servicios (usted puede cancelar esta suscripción en cualquier momento).</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                4. Transferencia de Datos
              </h2>
              <p className="text-brand-gray text-sm">
                Alianza RH no vende, alquila ni comparte sus datos personales con terceros no autorizados. Sus datos únicamente podrán ser compartidos en casos de requerimiento legal por autoridades competentes.
              </p>

              <h2 className="font-display text-xl font-bold text-brand-dark pt-4 border-t border-gray-100">
                5. Derechos ARCO y Revocación de Consentimiento
              </h2>
              <p className="text-brand-gray text-sm">
                Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO) al tratamiento de sus datos personales. Para ejercer cualquiera de estos derechos o revocar el consentimiento previamente otorgado, deberá enviar una solicitud por escrito a nuestro equipo de privacidad al correo: <a href="mailto:contacto@alianzarh.com" className="text-brand-blue hover:underline">contacto@alianzarh.com</a>.
              </p>

              <div className="pt-8 border-t border-gray-100 text-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-brand-blue/10 hover:shadow-xl hover:shadow-brand-blue/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Volver al formulario de contacto
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
