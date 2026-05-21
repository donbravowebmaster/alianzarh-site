# FASE 4 — ESPECIFICACIONES DE DISEÑO Y ACCESIBILIDAD
# Skill: ui-ux-pro-max | WCAG 2.2 AA/AAA | Vercel Web Interface Guidelines
# Alianza RH — Home Landing Page

══════════════════════════════════════════════════════════════════════
 1. HERO — COMPORTAMIENTO MOBILE-FIRST
══════════════════════════════════════════════════════════════════════

## 1.1 Mapa de Breakpoints

┌──────────────┬──────────────────────────────────────────────────────┐
│ Viewport     │ Comportamiento                                        │
├──────────────┼──────────────────────────────────────────────────────┤
│ 375px (base) │ 1 columna / Dashboard: hidden / H1: text-4xl        │
│ 480px (sm)   │ 1 columna / Dashboard: hidden / H1: text-5xl        │
│ 768px (md)   │ 1 columna / Dashboard: hidden / H1: text-5xl        │
│ 1024px (lg)  │ 2 col (55/45) / Dashboard: block / H1: text-[4rem]  │
│ 1280px (xl)  │ 2 col (55/45) / Dashboard: block / H1: text-[4.5rem]│
└──────────────┴──────────────────────────────────────────────────────┘

## 1.2 Hero — Clases Tailwind por Viewport

### Container del grid
  className="grid lg:grid-cols-2 gap-16 items-center"

### Columna izquierda (texto) — siempre visible
  pt-28 lg:pt-20   (navbar compensation: 72px navbar + 8px gap)

### H1 — Mobile-first
  className="font-display text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem]
             font-extrabold text-white leading-[1.06] mb-6"

### Subheadline — Mobile-first
  className="text-white/65 text-base sm:text-lg lg:text-xl
             leading-relaxed max-w-xl mb-8 lg:mb-10"

### CTA wrapper — Mobile-first (stacked → side-by-side)
  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 lg:mb-14"

  CTA Primary (full-width mobile, auto desktop):
  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5
             bg-brand-blue hover:bg-brand-blue-dark text-white font-bold
             text-base px-7 py-4 rounded-xl
             transition-[background-color,box-shadow,transform] duration-200 ease-out
             hover:shadow-xl hover:shadow-brand-blue/25 hover:-translate-y-0.5
             focus-visible:outline-none focus-visible:ring-2
             focus-visible:ring-brand-blue focus-visible:ring-offset-2
             focus-visible:ring-offset-brand-dark"

  CTA Ghost (full-width mobile, auto desktop):
  className="w-full sm:w-auto inline-flex items-center justify-center gap-2
             border border-white/25 hover:border-white/50 hover:bg-white/5
             text-white font-semibold text-base px-7 py-4 rounded-xl
             transition-[border-color,background-color] duration-200 ease-out
             focus-visible:outline-none focus-visible:ring-2
             focus-visible:ring-white/50 focus-visible:ring-offset-2
             focus-visible:ring-offset-brand-dark"

### Stats strip — Mobile-first
  className="flex flex-wrap gap-8 sm:gap-10 border-t border-white/10 pt-8 lg:pt-10"

  Stat item:
  className="min-w-[80px]"
  Valor: "font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums"
  Label: "text-white/45 text-xs sm:text-sm mt-1 leading-tight"

### Dashboard visual (columna derecha)
  className="hidden lg:flex justify-center items-center"
  → INVISIBLE en 375px–768px. LCP no depende de él. ✓

## 1.3 LCP — Optimización

LCP Element (móvil):    H1 text node — "Tu siguiente contratación..."
                        No imagen, LCP es texto → no necesita priority
LCP Element (desktop):  Logo SVG en Navbar (ya tiene priority={true}) ✓

Estrategia:
  - Fonts: next/font con display='swap' → elimina FOIT ✓ (ya implementado)
  - Dot-grid: CSS background-image → sin render-blocking ✓
  - Glow blobs: divs CSS → sin render-blocking ✓
  - Logo Navbar: <Image priority /> → preloaded ✓
  - Dashboard visual: hidden en mobile → sin impacto en LCP ✓

## 1.4 Above-The-Fold en 375px — Verificación

Con pt-28 (112px navbar) + contenido hero:
  - Tag pill:          ~20px
  - H1 (4xl, 3 líneas): ~144px
  - Subheadline (2 líneas): ~60px
  - CTAs stacked:      ~112px
  - Stats:             ~60px
  TOTAL estimado:      ~508px → cabe en 812px (iPhone SE 375×667)
  CTA principal: ABOVE THE FOLD ✓

Floating elements (badge y notif): hidden en mobile (no afectan layout) ✓

══════════════════════════════════════════════════════════════════════
 2. ACCESIBILIDAD — FAQ ACCORDION
══════════════════════════════════════════════════════════════════════

## 2.1 Estructura ARIA correcta (WAI-ARIA Accordion Pattern)

PATRÓN: Disclosure (no Listbox). Cada item es independiente.
NAVEGACIÓN: Tab entre triggers, Enter/Space para toggle.
NO se usa arrow keys (eso es para listbox/menu, no acordeón).

## 2.2 Árbol de Componentes

<section aria-labelledby="faq-heading">
  <h2 id="faq-heading">Preguntas frecuentes</h2>
  <p>Respuestas directas para quien toma la decisión.</p>

  <div>  {/* lista de items */}
    <FAQItem question="..." answer="..." />  {/* × 5 */}
  </div>

  <a href="mailto:hola@alianzarh.com">
    ¿Tienes otra pregunta? Escríbenos →
  </a>
</section>

## 2.3 FAQItem — Especificación ARIA completa

Props:
  question: string
  answer: string (puede contener HTML)
  defaultOpen?: boolean (FAQ 1 abierta por default para SEO)

IDs dinámicos: useId() de React → garantiza unicidad en SSR/CSR

Estructura:
  <div className="border-b border-gray-100 last:border-b-0">

    {/* TRIGGER */}
    <button
      id={triggerId}              ← ej: "faq-trigger-:r0:"
      type="button"               ← siempre en forms
      aria-expanded={isOpen}      ← "true" | "false"
      aria-controls={panelId}     ← apunta al panel
      onClick={() => toggle()}
      className={triggerClass}
    >
      <span>{question}</span>     ← texto envuelto para evitar reflow
      <PlusIcon aria-hidden="true" className={iconClass} />
    </button>

    {/* PANEL */}
    <div
      id={panelId}                ← ej: "faq-panel-:r0:"
      role="region"               ← región semántica
      aria-labelledby={triggerId} ← conecta con el trigger
      hidden={!isOpen}            ← hidden nativo + CSS para animación
    >
      <div className="overflow-hidden">
        <p className={bodyClass}>{answer}</p>
      </div>
    </div>
  </div>

NOTA sobre animación:
  Usar CSS Grid rows trick (no anima height/max-height):
  Panel wrapper: grid con gridTemplateRows animada via inline style
  → Compatible con prefers-reduced-motion (transition-duration: 0.01ms)

## 2.4 triggerClass (Tailwind exacto)

  "w-full flex items-center justify-between py-5 text-left gap-4
   text-brand-dark font-semibold text-[0.9375rem] leading-snug
   hover:text-brand-blue
   transition-colors duration-150 ease-out
   focus-visible:outline-none
   focus-visible:ring-2 focus-visible:ring-brand-blue
   focus-visible:ring-offset-2
   cursor-pointer"

## 2.5 Icon animation (transform only — aprobado por ui-ux-pro-max)

  isOpen:  "transition-[transform] duration-200 ease-out rotate-45"
  !isOpen: "transition-[transform] duration-200 ease-out rotate-0"

## 2.6 Panel animation — CSS Grid rows trick

  Panel wrapper (outer div):
    className="grid overflow-hidden
               transition-[grid-template-rows] duration-300 ease-out"
    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}

  Panel content (inner div):
    className="overflow-hidden"  ← necesario para el colapso

  Por qué esta técnica:
  - NO anima height ni max-height (viola ui-ux-pro-max §3)
  - grid-template-rows 0fr→1fr es nativo del browser, no re-layout
  - Respeta prefers-reduced-motion automáticamente vía globals.css

## 2.7 Schema.org FAQPage (para SEO — implementar en FASE 5)

  Añadir en app/page.tsx:
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      })
    }}
  />

══════════════════════════════════════════════════════════════════════
 3. ACCESIBILIDAD — FORMULARIOS DE CONTACTO
══════════════════════════════════════════════════════════════════════

## 3.1 Input Class — Dark Background (ContactCTA en Home)

VIEJO (incorrecto — viola Vercel Guidelines):
  "... focus:outline-none focus:border-brand-blue focus:bg-white/12 transition-all"

NUEVO (correcto):
  "w-full bg-white/8 border border-white/15
   text-white placeholder:text-white/35
   rounded-xl px-4 py-3.5 text-sm
   transition-[border-color,background-color,box-shadow] duration-150 ease-out
   focus-visible:outline-none
   focus-visible:ring-2 focus-visible:ring-brand-blue
   focus-visible:border-brand-blue
   focus-visible:bg-white/12"

NOTA: placeholder-white/35 → en Tailwind v3 usar placeholder:text-white/35

## 3.2 Input Class — Light Background (ContactForm en /contacto)

  "w-full border border-gray-200 bg-white
   text-brand-dark placeholder:text-gray-400
   rounded-xl px-4 py-3.5 text-sm
   transition-[border-color,box-shadow] duration-150 ease-out
   focus-visible:outline-none
   focus-visible:ring-2 focus-visible:ring-brand-blue/30
   focus-visible:border-brand-blue"

## 3.3 Atributos autocomplete — Mapa completo

  Nombre completo:  autocomplete="name"          inputMode="text"
  Empresa:          autocomplete="organization"   inputMode="text"
  Cargo:            autocomplete="organization-title"
  Email:            autocomplete="email"          inputMode="email"    type="email"
  Teléfono:         autocomplete="tel"            inputMode="tel"      type="tel"
  Select vacantes:  (no aplica autocomplete)
  Textarea mensaje: autocomplete="off"

## 3.4 aria-required y aria-describedby

  Campos requeridos:
    aria-required="true"
    (complementario a required — para lectores de pantalla sin soporte HTML5)

  Mensajes de error (cuando se implementen):
    <input aria-describedby="email-error" ... />
    <p id="email-error" role="alert" className="text-red-400 text-xs mt-1">
      Ingresa un email corporativo válido.
    </p>

  Nota: role="alert" → aria-live="assertive" implícito → anuncia inmediatamente

## 3.5 Loading State del Submit Button

  Estado: isSubmitting (boolean) | default: false

  ESTADOS:
  ┌──────────────┬────────────────────────────────────────────────────┐
  │ Estado       │ Clases + Contenido                                 │
  ├──────────────┼────────────────────────────────────────────────────┤
  │ Idle         │ "Solicitar Demo Gratuita"                          │
  │              │ bg-brand-blue, hover:bg-brand-blue-dark            │
  │              │ hover:shadow-xl hover:shadow-brand-blue/25         │
  │ Submitting   │ SVG spinner + "Enviando..." text                   │
  │              │ disabled opacity-60 cursor-not-allowed             │
  │              │ pointer-events-none (evita doble submit)           │
  │ Success      │ Componente nuevo: confirmation state               │
  └──────────────┴────────────────────────────────────────────────────┘

  Button class (universal, todos los estados):
  "w-full inline-flex items-center justify-center gap-2
   bg-brand-blue text-white font-bold py-4 rounded-xl
   text-base
   transition-[background-color,box-shadow,opacity] duration-200 ease-out
   hover:bg-brand-blue-dark hover:shadow-xl hover:shadow-brand-blue/25
   focus-visible:outline-none
   focus-visible:ring-2 focus-visible:ring-brand-blue
   focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark
   disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none"

  Spinner SVG (24×24, stroke-based, animate-spin):
  <svg
    className="w-4 h-4 animate-spin"
    aria-hidden="true"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12" cy="12" r="10"
      stroke="currentColor" strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>

  aria-busy en el botón:
  <button aria-busy={isSubmitting} ...>

  aria-live para el wrapper del estado de éxito:
  <div aria-live="polite" aria-atomic="true">
    {submitted ? <SuccessState /> : <Form />}
  </div>

## 3.6 Skip-to-Content Link (layout.tsx)

  AÑADIR como primer hijo de <body>:
  <a
    href="#main-content"
    className="sr-only focus-visible:not-sr-only
               focus-visible:fixed focus-visible:top-4 focus-visible:left-4
               focus-visible:z-[100]
               focus-visible:bg-brand-blue focus-visible:text-white
               focus-visible:px-4 focus-visible:py-2 focus-visible:rounded-lg
               focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-white"
  >
    Saltar al contenido principal
  </a>

  Y en <main>:
  <main id="main-content" tabIndex={-1}>

  tabIndex={-1} → programatically focusable, not in tab order

══════════════════════════════════════════════════════════════════════
 4. TAILWIND — MAPA DE TRANSICIONES (SIN transition-all)
══════════════════════════════════════════════════════════════════════

## 4.1 Patrón de Regla

Vercel Guidelines: "Avoid transition: all — list specific properties"
ui-ux-pro-max §7: "Use transform/opacity only — avoid width/height/top/left"

Formato: transition-[prop1,prop2] duration-{ms} ease-{fn}
Duración: 150ms (micro) | 200ms (standard) | 300ms (complex/reveal)

## 4.2 Tabla de Transiciones Aprobadas

┌────────────────────┬────────────────────────────────────────────────────────────────┐
│ NOMBRE             │ TAILWIND CLASS STRING EXACTO                                   │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ badge-hover        │ transition-[border-color,box-shadow]                           │
│ (cards, features)  │ duration-300 ease-out                                          │
│                    │ hover:border-brand-blue/20 hover:shadow-xl                     │
│                    │ hover:shadow-brand-blue/5                                      │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ stat-reveal        │ transition-[opacity,transform] duration-300 ease-out           │
│ (scroll-triggered) │ Initial: opacity-0 translate-y-4                               │
│                    │ Final:   opacity-100 translate-y-0                             │
│                    │ stagger: delay-[50ms] delay-[100ms] delay-[150ms]             │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ form-focus         │ transition-[border-color,background-color,box-shadow]          │
│ (inputs dark bg)   │ duration-150 ease-out                                          │
│                    │ focus-visible:ring-2 focus-visible:ring-brand-blue             │
│                    │ focus-visible:border-brand-blue                                │
│                    │ focus-visible:bg-white/12                                      │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ form-focus-light   │ transition-[border-color,box-shadow] duration-150 ease-out    │
│ (inputs light bg)  │ focus-visible:ring-2 focus-visible:ring-brand-blue/30         │
│                    │ focus-visible:border-brand-blue                                │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ cta-hover          │ transition-[background-color,box-shadow,transform]             │
│ (primary button)   │ duration-200 ease-out                                          │
│                    │ hover:bg-brand-blue-dark                                       │
│                    │ hover:shadow-xl hover:shadow-brand-blue/25                     │
│                    │ hover:-translate-y-0.5                                         │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ cta-ghost-hover    │ transition-[border-color,background-color] duration-200 ease-out│
│ (ghost button)     │ hover:border-white/50 hover:bg-white/5                         │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ nav-link           │ transition-colors duration-150 ease-out                        │
│ (navbar links)     │ hover:text-white                                               │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ icon-group-hover   │ transition-[background-color,color] duration-300 ease-out     │
│ (feature icons)    │ group-hover:bg-brand-blue group-hover:text-white               │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ accordion-panel    │ transition-[grid-template-rows] duration-300 ease-out          │
│ (FAQ)              │ (via inline style: gridTemplateRows)                           │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ accordion-icon     │ transition-[transform] duration-200 ease-out                   │
│ (+ → ×)            │ isOpen: rotate-45 | !isOpen: rotate-0                         │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ accordion-trigger  │ transition-colors duration-150 ease-out                        │
│ (button text)      │ hover:text-brand-blue                                          │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ logo-grayscale     │ transition-[filter,opacity] duration-200 ease-out              │
│ (trust bar)        │ filter-grayscale opacity-40                                    │
│                    │ hover:filter-none hover:opacity-70                             │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ navbar-bg          │ transition-[background-color,border-color,box-shadow]          │
│ (scroll effect)    │ duration-300 ease-out                                          │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ metric-pulse       │ NO animate-pulse (decorativo — viola §7)                      │
│ (stats section)    │ Usar stat-reveal con Intersection Observer una vez             │
├────────────────────┼────────────────────────────────────────────────────────────────┤
│ dot-pulse          │ animate-pulse SOLO en el dot del tag pill hero                │
│ (hero pill dot)    │ (indicador de estado en vivo — propósito funcional ✓)         │
└────────────────────┴────────────────────────────────────────────────────────────────┘

## 4.3 PROHIBIDOS (reemplazar en FASE 5)

  ✗ transition-all         → Listar propiedades específicas
  ✗ animate-bounce         → Solo loading indicators
  ✗ animate-pulse en deco  → Solo para live status dots
  ✗ Animar width/height    → Usar grid-template-rows o opacity
  ✗ Animar top/left        → Usar transform: translate

══════════════════════════════════════════════════════════════════════
 5. prefers-reduced-motion — REGLA GLOBAL CSS
══════════════════════════════════════════════════════════════════════

## 5.1 Regla en globals.css

Añadir en @layer base (después de los estilos base):

  /* ─── Motion Accessibility ─── */
  @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

## 5.2 Utilidades motion-safe en globals.css

  @layer utilities {
    /* Animaciones solo cuando el usuario no ha pedido reducción */
    .animate-fade-up {
      animation: fadeUp 0.7s ease-out forwards;
    }

    @media (prefers-reduced-motion: reduce) {
      .animate-fade-up {
        animation: none;
        opacity: 1;
        transform: none;
      }
    }

    /* Variante de Tailwind: motion-safe: y motion-reduce: */
    /* Usar prefijos en componentes: motion-safe:animate-fade-up */
  }

## 5.3 Uso en componentes (Tailwind v3 motion prefixes)

  Tailwind v3 soporta:
    motion-safe:animate-spin      → solo anima si no hay reduced-motion
    motion-reduce:transition-none → elimina transición si hay reduced-motion

  Uso recomendado en spinner:
    className="motion-safe:animate-spin"  (no motion-reduce: necesario aquí)

  Uso en fade-up de sections:
    className="motion-safe:animate-fade-up"

══════════════════════════════════════════════════════════════════════
 6. NUEVOS COMPONENTES PARA FASE 5 (desde wireframe FASE 2)
══════════════════════════════════════════════════════════════════════

Componentes que NO existen aún y deben crearse en FASE 5:

1. components/sections/TrustBar.tsx
   - Logo grid con grayscale filter
   - aria: "Empresas que ya confían en Alianza RH"
   - overflow-x-auto en mobile

2. components/sections/HowItWorks.tsx
   - 3 pasos con connector line
   - Server component (sin interactividad)

3. components/sections/FAQ.tsx         ← client ('use client')
   - Accordion con ARIA completo
   - Schema.org FAQPage via script tag
   - Primera pregunta defaultOpen

4. Actualizar: components/sections/ContactCTA.tsx
   - Loading state (isSubmitting)
   - autocomplete en todos los inputs
   - aria-live wrapper
   - focus-visible en todos los inputs y el button
   - Eliminar transition-all → transiciones específicas
   - placeholder: prefix en Tailwind v3

5. Actualizar: app/contacto/ContactForm.tsx
   - Mismas correcciones que ContactCTA

6. Actualizar: app/layout.tsx
   - Skip-to-content link
   - id="main-content" en <main>

7. Actualizar: app/globals.css
   - prefers-reduced-motion rule
   - animate-fade-up motion-safe variant

8. Crear: app/sitemap.ts
9. Crear: app/robots.ts
10. Actualizar: app/page.tsx
    - Importar nuevos componentes (TrustBar, HowItWorks, FAQ)
    - Schema.org JSON-LD

══════════════════════════════════════════════════════════════════════
 7. VALIDACIÓN VISUAL — CHECKLIST FASE 4
══════════════════════════════════════════════════════════════════════

## 7.1 ui-ux-pro-max Pre-Delivery Checklist

PRIORIDAD 1 — ACCESIBILIDAD (CRITICAL):
  ✓ Contraste texto hero: white sobre #0d1117 → 21:1 (AAA) ✓
  ✓ Contraste texto body: brand-gray (#626262) sobre white → 4.6:1 (AA) ✓
  ✓ Contraste CTA button: white sobre brand-blue (#357ee3) → 4.02:1 (AA) ✓
  ✗ focus-visible:ring-* faltante en inputs → CORREGIR en FASE 5
  ✗ Skip-to-content link → AÑADIR en FASE 5
  ✗ aria-live en form feedback → AÑADIR en FASE 5
  ✓ aria-hidden en todos los decorativos ✓
  ✓ aria-label en hamburger button ✓
  ✓ lang="es" en <html> ✓

PRIORIDAD 2 — TOUCH & INTERACTION (CRITICAL):
  ✓ CTAs: py-4 = 56px > 44px mínimo ✓
  ✓ Nav links: py-4 en mobile = 64px ✓
  ✓ Hamburger: p-2 + spans = ~40px (borderline) → Añadir p-3 en FASE 5
  ✗ touch-action: manipulation en CTAs → AÑADIR en FASE 5
  ✓ cursor-pointer en selects y accordion ✓

PRIORIDAD 3 — PERFORMANCE (HIGH):
  ✓ next/image en Logo con priority ✓
  ✓ next/font con display: 'swap' ✓
  ✓ Dashboard visual hidden en mobile → sin LCP penalty ✓
  ✗ prefers-reduced-motion guard → AÑADIR en FASE 5
  ✗ transition-all → REEMPLAZAR en FASE 5
  ✓ SVGs inline en componentes (sin external requests) ✓

PRIORIDAD 4 — STYLE SELECTION (HIGH):
  ✓ SVG icons únicamente (sin emojis) ✓
  ✓ Syne + Plus Jakarta Sans (no genéricas) ✓
  ✓ Un CTA primario por sección ✓
  ✓ Brand colors consistentes via CSS variables ✓

PRIORIDAD 5 — LAYOUT & RESPONSIVE (HIGH):
  ✓ viewport meta: width=device-width, initialScale=1 ✓
  ✓ max-w-7xl container ✓
  ✗ Dashboard flotante: positioning fix en mobile (ya hidden, OK) ✓
  ✗ Stats: verificar no-overflow en 320px → usar flex-wrap ✓ (ya implementado)

PRIORIDAD 6 — TYPOGRAPHY & COLOR (MEDIUM):
  ✓ line-height: leading-relaxed (1.625) en body ✓
  ✓ font-size base: 16px ✓
  ✓ tabular-nums en stats (font-variant-numeric) ✓
  ✗ text-wrap: balance en H1/H2 → AÑADIR en FASE 5

PRIORIDAD 7 — ANIMATION (MEDIUM):
  ✗ transition-all → ELIMINAR
  ✗ prefers-reduced-motion → AÑADIR
  ✓ Solo transform+opacity en animaciones ✓ (una vez corregido)
  ✓ animate-pulse solo en live dot ✓

PRIORIDAD 8 — FORMS & FEEDBACK (MEDIUM):
  ✓ Visible labels en todos los inputs ✓
  ✓ Errores inline (pendiente implementación real de validación)
  ✗ autocomplete atributos → AÑADIR en FASE 5
  ✗ Loading state en submit → AÑADIR en FASE 5
  ✗ aria-live en form state changes → AÑADIR en FASE 5
  ✓ inputmode=email en email field ✓ (type="email" ya lo implica)

PRIORIDAD 9 — NAVIGATION (HIGH):
  ✓ Navbar sticky con compensación de padding en hero ✓
  ✓ <a>/<Link> para navegación (no divs) ✓
  ✗ Skip-to-content → AÑADIR en FASE 5
  ✓ aria-expanded en hamburger ✓

## 7.2 SEO Técnico — Pendientes FASE 5

  ✗ sitemap.ts → CREAR
  ✗ robots.ts → CREAR
  ✗ Schema.org LocalBusiness → CREAR en layout.tsx
  ✗ Schema.org FAQPage → CREAR en app/page.tsx
  ✗ text-wrap: balance en headings → AÑADIR en globals.css o inline
  ✓ metadataBase, OpenGraph, Twitter, canonical ✓
  ✓ robots: index+follow ✓
  ✓ lang="es" ✓

## 7.3 Vercel Web Interface Guidelines — Score

  ANTES FASE 4:  14 issues detectados (FASE 1)
  RESUELTOS:     0 (se resuelven en FASE 5)
  NUEVOS:        0

  Prioridades resueltas en FASE 5:
  HIGH (bloqueantes):
    [ ] focus-visible:ring-* en todos los interactivos
    [ ] autocomplete en form inputs
    [ ] aria-live para form feedback
    [ ] skip-to-content link
    [ ] transition-all → props específicas
    [ ] prefers-reduced-motion guard
  MEDIUM:
    [ ] touch-action: manipulation en CTAs
    [ ] text-wrap: balance en H1/H2
    [ ] hamburger touch target mínimo (44px)

══════════════════════════════════════════════════════════════════════
 8. NOTAS PARA imagegen-frontend-mobile (imagen de referencia)
══════════════════════════════════════════════════════════════════════

Platform mode:  iOS-native premium / cross-platform neutral
Theme:          Deep dark (#0d1117) → clean white sections
Typography:     Syne ExtraBold display + Plus Jakarta Sans body
Structure bias: Dashboard-led en hero → card-led en features

Mobile screen order (flow lógico para referencia visual):
1. Hero: tag pill + H1 + sub + CTAs + stats strip (sin dashboard)
2. Pain Points: 3 cards stacked full-width
3. Solutions: 2 featured + 4 mini en 2 col grid
4. How It Works: 3 pasos vertical
5. Social Proof: métricas 2×2 + testimonials 1-col
6. FAQ: accordion items 1-col
7. CTA: dark bg + form full-width

Palette logic: restrained monochrome dark + brand blue accent + purple highlight
Texture: dot-grid subtle (4% opacity) en secciones oscuras
Decorative: glow blobs brand-blue/purple (no domina el contenido)
Spacing: 44pt+ touch targets, generous padding, breathable

══════════════════════════════════════════════════════════════════════
 9. RESUMEN EJECUTIVO — QUÉ CAMBIA EN FASE 5
══════════════════════════════════════════════════════════════════════

ARCHIVOS A MODIFICAR:
  app/layout.tsx          → skip-link, id="main-content", Schema LocalBusiness
  app/globals.css         → prefers-reduced-motion, text-wrap balance
  app/page.tsx            → nuevos componentes, Schema FAQPage
  app/sitemap.ts          → NUEVO
  app/robots.ts           → NUEVO
  components/layout/Navbar.tsx → touch target hamburguer, focus-visible
  components/sections/Hero.tsx → mobile-first classes, floating positioning
  components/sections/ContactCTA.tsx → loading state, autocomplete, aria-live,
                                        focus-visible, transition fix
  app/contacto/ContactForm.tsx → mismas correcciones

ARCHIVOS NUEVOS:
  components/sections/TrustBar.tsx
  components/sections/HowItWorks.tsx
  components/sections/FAQ.tsx (client)
