import type { Metadata } from 'next'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contacto — Agenda tu Demo',
  description:
    'Agenda una demo gratuita con Alianza RH. Habla con nuestros especialistas en reclutamiento y descubre cómo podemos ayudar a tu empresa a contratar mejor talento en menos tiempo.',
}

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'contacto@alianzarh.com',
    href: 'mailto:contacto@alianzarh.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
    label: 'Teléfono',
    value: '81 2332 1719',
    href: 'tel:+528123321719',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    label: 'Ubicación',
    value: 'Monterrey, Nuevo León, México',
    href: null,
  },
]

export default function ContactoPage() {
  return (
    <>
      <section className="bg-brand-dark pt-32 pb-16 section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #357ee3 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />
        <div className="container-max relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-brand-purple font-semibold text-xs uppercase tracking-widest mb-4">
            Hablemos
          </p>
          <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Agenda tu demo gratuita
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            30 minutos que pueden cambiar completamente cómo tu empresa contrata talento.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <aside>
              <h2 className="font-display text-2xl font-extrabold text-brand-dark mb-3">
                Qué esperar en tu sesión
              </h2>
              <p className="text-brand-gray text-sm leading-relaxed mb-8">
                Una conversación sin presión. Conocerás exactamente cómo hacemos el reclutamiento, entenderás qué necesita tu equipo, y te llevarás una propuesta hecha a tu medida.
              </p>

              <ul className="flex flex-col gap-5 mb-10">
                {[
                  { step: '01', text: 'Diagnóstico de tu situación actual' },
                  { step: '02', text: 'Demostración con un caso de tu industria' },
                  { step: '03', text: 'Plan de acción personalizado' },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <span className="font-display text-xs font-extrabold text-brand-blue/50 mt-0.5 tabular-nums">
                      {item.step}
                    </span>
                    <span className="text-brand-dark text-sm leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 pt-8 flex flex-col gap-5">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-brand-gray text-xs mb-0.5">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-brand-dark text-sm font-semibold hover:text-brand-blue transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-brand-dark text-sm font-semibold">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
