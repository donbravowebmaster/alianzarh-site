import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'



const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Alianza RH',
  description:
    'Servicios de reclutamiento especializado con automatización y pauta digital para empresas en México y LATAM.',
  url: 'https://alianzarh.com',
  telephone: '+52-81-2332-1719',
  email: 'contacto@alianzarh.com',
  logo: 'https://alianzarh.com/logo-principal.svg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Monterrey',
    addressRegion: 'Nuevo León',
    addressCountry: 'MX',
  },
  areaServed: ['México', 'América Latina'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Reclutamiento',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatización de Reclutamiento' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reclutamiento por Pauta Digital' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Headhunting Especializado' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Filtros y Evaluación de Talento' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#357ee3',
}

export const metadata: Metadata = {
  title: {
    default: 'Alianza RH | Reclutamiento con Automatización y Pauta Digital',
    template: '%s | Alianza RH',
  },
  description:
    'Servicios de reclutamiento B2B con automatización de procesos y pauta digital. Cubrimos vacantes 78% más rápido que métodos tradicionales. 500+ empresas en México. Demo gratuita.',
  keywords: [
    'reclutamiento para empresas',
    'automatización de reclutamiento',
    'pauta digital para reclutamiento',
    'headhunting México',
    'servicios de reclutamiento B2B',
    'reducir tiempo de contratación',
    'reclutamiento especializado',
    'filtros de talento',
  ],
  metadataBase: new URL('https://alianzarh.com'),
  authors: [{ name: 'Alianza RH' }],
  creator: 'Alianza RH',
  publisher: 'Alianza RH',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://alianzarh.com',
    siteName: 'Alianza RH',
    title: 'Alianza RH | Reclutamiento con Automatización y Pauta Digital',
    description:
      '78% menos tiempo de contratación. Reclutamiento especializado para empresas mediante automatización + pauta digital. Demo sin costo.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alianza RH — Reclutamiento Especializado para Empresas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alianza RH | Reclutamiento con Automatización y Pauta Digital',
    description:
      '78% menos tiempo de contratación. Servicios de reclutamiento B2B con automatización y pauta digital.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://alianzarh.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Skip-to-content para usuarios de teclado — WCAG 2.4.1 */}
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4
            focus-visible:left-4 focus-visible:z-[100] focus-visible:bg-brand-blue
            focus-visible:text-white focus-visible:px-4 focus-visible:py-2
            focus-visible:rounded-lg focus-visible:font-semibold focus-visible:text-sm
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
            focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
        >
          Saltar al contenido principal
        </a>

        {/* Schema.org LocalBusiness — SSR para indexación */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <Navbar />

        {/* tabIndex={-1}: focusable programáticamente por el skip-link */}
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>

        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
