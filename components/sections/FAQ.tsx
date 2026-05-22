'use client'

import { useState, useId } from 'react'

export const faqItems = [
  {
    question: '¿Cuánto tiempo tarda en ver los primeros candidatos?',
    answer:
      'El tiempo de cobertura varía según la complejidad del perfil: para vacantes administrativas y operativas, presentamos candidatos finalistas en un máximo de 14 días. Para puestos especializados o gerenciales, el proceso conlleva de 3 a 4 semanas debido a la profundidad del reclutamiento activo, la investigación de mercado y las pruebas psicométricas y de adaptación cultural.',
  },
  {
    question: '¿En qué industrias tienen experiencia?',
    answer:
      'Tecnología, manufactura, retail, servicios financieros, logística y salud. Si tu industria no está en la lista, cuéntanos: en varios casos hemos trabajado con sectores nuevos para nosotros y los resultados han sido los mismos.',
  },
  {
    question: '¿En qué es diferente a publicar en una bolsa de trabajo?',
    answer:
      'En una bolsa de trabajo esperas a que los candidatos te encuentren. Con Alianza RH, nosotros los buscamos activamente mediante anuncios digitales y herramientas de selección inteligente. De esta forma, llegamos a profesionales que ya están trabajando con éxito en otras empresas y no están buscando empleo activamente, quienes suelen ser los perfiles más calificados.',
  },
  {
    question: '¿Qué pasa si el candidato colocado no funciona?',
    answer:
      'Ofrecemos una garantía de reposición por escrito en cada contratación. Si el candidato se retira voluntariamente de la empresa o no supera la evaluación de desempeño y adaptación cultural durante el periodo de garantía acordado por contrato, iniciamos una nueva búsqueda completa sin ningún costo adicional para ti.',
  },
  {
    question: '¿Cuánto cuesta el servicio?',
    answer:
      'Depende del perfil, la urgencia y el volumen de vacantes. No trabajamos con tarifas fijas publicadas porque cada proceso es diferente. Lo que sí podemos decirte: el costo de una mala contratación generalmente supera 3 veces lo que cuesta hacerlo bien desde el principio. Al cotizar con nosotros te damos una propuesta concreta y a la medida para tu caso.',
  },
]

type FAQItemProps = {
  question: string
  answer: string
  defaultOpen?: boolean
}

function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const uid = useId()
  const triggerId = `faq-trigger-${uid}`
  const panelId = `faq-panel-${uid}`

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        id={triggerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4
          text-brand-dark font-semibold text-[0.9375rem] leading-snug
          hover:text-brand-blue cursor-pointer
          transition-colors duration-150 ease-out
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded"
      >
        <span>{question}</span>

        {/* Ícono + / × animado con transform (no anima width/height) */}
        <span
          aria-hidden="true"
          className={`shrink-0 w-6 h-6 rounded-full border border-brand-blue/30
            flex items-center justify-center text-brand-blue
            transition-[transform,background-color] duration-200 ease-out
            ${isOpen ? 'rotate-45 bg-brand-blue/10' : 'rotate-0 bg-transparent'}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      {/* Panel — técnica grid-template-rows: 0fr → 1fr (no anima height) */}
      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-300 ease-out overflow-hidden"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="text-brand-gray text-sm leading-relaxed pb-5 pr-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      {/* JSON-LD FAQPage — SSR en App Router, visible para Googlebot */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section id="faq" className="bg-white section-padding">
        <div className="container-max">
          <header className="max-w-2xl mx-auto mb-12">
            <p className="text-brand-blue font-semibold text-xs uppercase tracking-widest mb-4">
              Resolvemos tus dudas
            </p>
            <h2
              id="faq-heading"
              className="font-display text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight mb-3"
            >
              Preguntas frecuentes
            </h2>
            <p className="text-brand-gray text-lg">
              Respuestas directas para quien toma la decisión.
            </p>
          </header>

          <div
            className="max-w-2xl mx-auto"
            role="list"
            aria-labelledby="faq-heading"
          >
            {faqItems.map((item, i) => (
              <div key={item.question} role="listitem">
                <FAQItem
                  question={item.question}
                  answer={item.answer}
                  defaultOpen={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
