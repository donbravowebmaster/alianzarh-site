# FASE 2 — WIREFRAME HOME: Alianza RH
# Skill: wireframe-prototyping | Fidelidad: Media-Alta (Pre-Dev Handoff)
# Viewport base: 1280px desktop / 375px mobile
# Bloques: DARK Hero → LIGHT Content → DARK CTA final

═══════════════════════════════════════════════════════════════════════
 LEYENDA DE NOTACIÓN
═══════════════════════════════════════════════════════════════════════
 [BTN-PRIMARY]   Botón acción principal (brand-blue, filled)
 [BTN-GHOST]     Botón secundario (border, sin relleno)
 [BTN-LINK]      Texto-link sin borde
 ■■■■■■          Imagen / visual / placeholder gráfico
 ░░░░░░          Fondo claro / superficie
 ▓▓▓▓▓▓          Fondo oscuro
 ──────          Divisor / separador visual
 ⬡               Ícono SVG (Heroicons / custom)
 (?)             Elemento interactivo / hover state
 ↔ 55% | 45%    Proporción de columnas
 MOB ▼           Comportamiento en mobile (375px)

═══════════════════════════════════════════════════════════════════════
 SECCIÓN 0: NAVBAR (fixed, z-50)
═══════════════════════════════════════════════════════════════════════

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  Estado inicial: transparent (sobre hero oscuro)
  Estado scroll >24px: bg-brand-dark/96 + backdrop-blur + border-b
┌────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  [■■ LOGO alianza RH ■■]    Servicios  Nosotros  Contacto          │
│  ← 160px w-auto              text-white/75 → hover: white          │
│                                                        [Agendar Demo]│
│                                                        bg-brand-blue │
└────────────────────────────────────────────────────────────────────┘

 MOB ▼ (375px):
┌──────────────────────────────┐
│  [■ LOGO ■]          [≡ ham] │  ← button aria-label, aria-expanded
│  (hamburger → animated X)    │
├──────────────────────────────┤
│  Servicios                   │  ← dropdown panel
│  Nosotros                    │
│  Contacto                    │
│  [Agendar Demo]              │  ← full-width btn
└──────────────────────────────┘

═══════════════════════════════════════════════════════════════════════
 SECCIÓN 1: HERO
 BG: brand-dark (#0d1117) │ TRANSICIÓN: dark → white (fade h-24 btm)
═══════════════════════════════════════════════════════════════════════

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  Capas de fondo (z-index ascendente):
  1. bg-brand-dark base
  2. Dot-grid pattern radial (opacity 4%, color brand-blue)
  3. Glow blob top-right: brand-blue/10, blur-3xl, w-[600px]
  4. Glow blob btm-left: brand-purple/8, blur-3xl, w-[400px]

  Contenido: grid lg:grid-cols-2, gap-16, items-center
  Padding: pt-32 lg:pt-28 + section-padding

┌────────────────────────────────┬─────────────────────────────────┐
│  ← COL IZQUIERDA (55%) ────── │ ─── COL DERECHA (45%) → ───────│
│                                │                                  │
│  ┌──────────────────────────┐  │                                  │
│  │ ● Reclutamiento del S.XXI│  │  ╔════════════════════════════╗  │
│  └──────────────────────────┘  │  ║ Pipeline activo        ●  ║  │
│  pill: bg-white/8, borde       │  ║ ─────────────────────────  ║  │
│  white/15, text-white/80       │  ║ Aplicaron    ████████  128 ║  │
│  dot: brand-purple, pulse      │  ║ Filtrados    ███████    89 ║  │
│                                │  ║ Entrevistas  ████       42 ║  │
│  H1: (Syne, ExtraBold, 5xl→7xl│  ║ Finalistas   █          12 ║  │
│  leading 1.06, text-white)     │  ║ Contratados  █           8 ║  │
│                                │  ║ ─────────────────────────  ║  │
│  "Tu siguiente contratación"   │  ║ Tiempo promedio: 14 días   ║  │
│  "no debería tardar 6 semanas."│  ║ vs. 45 días industria  ↑   ║  │
│  ↑ line 1: text-white          │  ╚════════════════════════════╝  │
│  ↑ línea 2: text-gradient-blue │                                  │
│  (blue→purple CSS gradient)    │  [badge float: -top-4 -right-4]  │
│                                │  ┌──────────────────────┐        │
│  SUBHEADLINE: (Jakarta, lg→xl, │  │  78% más rápido      │        │
│  text-white/65, max-w-xl)      │  └──────────────────────┘        │
│                                │  bg-brand-purple, font-bold       │
│  "Alianza RH automatiza..."    │  border-radius: rounded-full      │
│  (ver copy FASE 3)             │                                  │
│                                │  [notif float: -btm-5 -left-5]   │
│  ┌──────────────────────────┐  │  ┌───────────────────────────┐   │
│  │[BTN-PRIMARY] Agendar Demo│  │  │ ✓  Candidato contratado   │   │
│  │  Gratuita  →             │  │  │    Ing. de Software · 2m  │   │
│  └──────────────────────────┘  │  └───────────────────────────┘   │
│  hover: shadow-brand-blue/25   │  bg-white, rounded-2xl, shadow-xl │
│  hover: -translate-y-0.5       │                                  │
│                                │                                  │
│  [BTN-GHOST] Ver Servicios     │                                  │
│  border-white/25, hover white/50│                                 │
│                                │                                  │
│  ──────────────────────────    │                                  │
│  (border-t border-white/10)    │                                  │
│                                │                                  │
│  500+      12,000+     78%     │                                  │
│  Empresas  Colocaciones Reducción│                                │
│  atendidas exitosas   en tiempo│                                  │
│  (Syne ExtraBold 3xl) (white/45)│                                │
└────────────────────────────────┴─────────────────────────────────┘

  ░░░░░░░ FADE brand-dark → white (h-24, gradient-to-t) ░░░░░░░░

 MOB ▼ (375px):
┌──────────────────────────────┐
│  [● Reclutamiento del S.XXI] │
│                               │
│  Tu siguiente contratación   │
│  no debería tardar           │
│  6 semanas.                  │ ← H1 menor (4xl), permite 3 líneas
│                               │
│  Alianza RH usa automati-    │
│  zación y pauta digital...   │
│                               │
│  [Agendar Demo Gratuita →]   │ ← full-width
│  [Ver Servicios         ]    │ ← full-width ghost
│                               │
│  500+   12K+   78%           │ ← 3-col, border-t
│
│  ← Dashboard visual OCULTO → │ ← hidden lg: block only
└──────────────────────────────┘

═══════════════════════════════════════════════════════════════════════
 SECCIÓN 2: TRUST BAR (transición rápida)
 BG: white │ PROPÓSITO: anclar credibilidad antes de los pain points
═══════════════════════════════════════════════════════════════════════

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  py-10, border-b border-gray-100

┌────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   ⬡ Empresas que ya     ────────────────────────────────────────   │
│      confían en Alianza RH:                                         │
│                                                                      │
│   [LOGO 1]  [LOGO 2]  [LOGO 3]  [LOGO 4]  [LOGO 5]  [LOGO 6]     │
│   ■■■■■■    ■■■■■■    ■■■■■■    ■■■■■■    ■■■■■■    ■■■■■■       │
│   (grayscale, opacity-50, hover: opacity-100)                       │
│                                                                      │
└────────────────────────────────────────────────────────────────────┘

 MOB ▼: logos en scroll horizontal (overflow-x-auto, flex)

═══════════════════════════════════════════════════════════════════════
 SECCIÓN 3: PAIN POINTS
 BG: white │ TRANSICIÓN: mantiene blanco
═══════════════════════════════════════════════════════════════════════

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  section-padding (py-20 lg:py-28)

┌────────────────────────────────────────────────────────────────────┐
│                           ENCABEZADO                                 │
│          [text-brand-blue, xs, uppercase, tracking-widest]          │
│              "El problema real"                                     │
│                                                                      │
│         H2: "¿Por qué sigues tardando semanas"                     │
│              "en cubrir una vacante?"                               │
│              (Syne ExtraBold 4xl→5xl, text-brand-dark)             │
│                                                                      │
│         Sub: "No es falta de candidatos. Es el proceso."           │
│              (Jakarta 18px, text-brand-gray, max-w-xl, mx-auto)    │
└────────────────────────────────────────────────────────────────────┘

┌──────────────────┬──────────────────┬──────────────────────────────┐
│  PAIN CARD 1     │  PAIN CARD 2     │  PAIN CARD 3                 │
│  ─────────────   │  ─────────────   │  ─────────────────────────   │
│  ⬡ (warning svg) │  ⬡ (clock svg)  │  ⬡ (user-question svg)      │
│  bg-red-50       │  bg-red-50       │  bg-red-50                   │
│  rounded-xl w-12 │  rounded-xl w-12 │  rounded-xl w-12             │
│                  │                  │                               │
│  "El 60% no      │  "Cada semana sin│  "300 CVs entran."           │
│  dura 3 meses"   │  cubrir cuesta   │  "5 sirven."                 │
│                  │  dinero real"    │                               │
│  (h3, Syne Bold  │  (h3, Syne Bold  │  (h3, Syne Bold xl)          │
│  xl, brand-dark) │  xl, brand-dark) │                               │
│                  │                  │                               │
│  [body copy]     │  [body copy]     │  [body copy]                 │
│  text-brand-gray │  text-brand-gray │  text-brand-gray             │
│  sm, leading-rel │  sm, leading-rel │  sm, leading-rel             │
│                  │                  │                               │
│  border-gray-100 │  border-gray-100 │  border-gray-100             │
│  hover:border-   │  hover:border-   │  hover:border-brand-blue/20  │
│  brand-blue/20   │  brand-blue/20   │                               │
│  hover:shadow-xl │  hover:shadow-xl │  hover:shadow-xl             │
└──────────────────┴──────────────────┴──────────────────────────────┘
  grid md:grid-cols-3, gap-8

 MOB ▼: grid 1 col, gap-6, cards full-width

═══════════════════════════════════════════════════════════════════════
 SECCIÓN 4: SOLUTION / FEATURES
 BG: brand-surface (#f4f7fc) │ TRANSICIÓN: white → light-surface
═══════════════════════════════════════════════════════════════════════

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  section-padding

┌────────────────────────────────────────────────────────────────────┐
│                          ENCABEZADO                                  │
│             "Nuestra solución"  [text-brand-blue, pill]             │
│                                                                      │
│       H2: "Dos ventajas que el reclutamiento"                      │
│            "tradicional no puede darte"                             │
│            (Syne ExtraBold 4xl→5xl)                                 │
│                                                                      │
│       Sub: "Automatización de procesos + pauta digital."           │
│            "Así reducimos el tiempo de contratación en un 78%."    │
│            (Jakarta 18px, text-brand-gray)                          │
└────────────────────────────────────────────────────────────────────┘

  ┌─── FEATURE DESTACADA 1 (full-width o 50%) ───────────────────────┐
  │  BG: white, border-brand-blue/20, rounded-2xl, p-8              │
  │  BADGE: "Diferenciador #1"  bg-brand-blue/10 text-brand-blue    │
  │                                                                   │
  │  ⬡ (megaphone/ads icon)    → group-hover: text-white            │
  │  bg-brand-surface          → group-hover: bg-brand-blue         │
  │                                                                   │
  │  H3: "Reclutamiento por pauta digital"                          │
  │  Body: "Llegamos a los candidatos que NO buscan activamente      │
  │         empleo. Los mejores perfiles ya trabajan en algún lado." │
  └──────────────────────────────────────────────────────────────────┘

  ┌─── FEATURE DESTACADA 2 (full-width o 50%) ───────────────────────┐
  │  BADGE: "Diferenciador #2"  bg-brand-purple/10 text-brand-purple │
  │  H3: "Automatización del proceso de selección"                   │
  │  Body: "El sistema filtra, evalúa y avanza candidatos solo.      │
  │         Tu equipo entra cuando ya hay finalistas."               │
  └──────────────────────────────────────────────────────────────────┘

  ┌──────────┬──────────┬──────────┬──────────────────────────────────┐
  │ Feature  │ Feature  │ Feature  │  Feature                         │
  │  Mini 1  │  Mini 2  │  Mini 3  │   Mini 4                        │
  │  ────    │  ────    │  ────    │   ────                          │
  │  ⬡ icon  │  ⬡ icon  │  ⬡ icon  │   ⬡ icon                       │
  │          │          │          │                                   │
  │ Filtros  │ Panel en │ Base de  │  Reportes                       │
  │ con tech │ real-time│ candidatos│  y analytics                   │
  │  [body]  │  [body]  │  [body]  │   [body]                        │
  └──────────┴──────────┴──────────┴──────────────────────────────────┘
  grid sm:2 lg:4, gap-6

 MOB ▼: 2 features destacadas → full-width stacked
         Mini grid → 2 col

═══════════════════════════════════════════════════════════════════════
 SECCIÓN 5: HOW IT WORKS (NUEVA SECCIÓN)
 BG: white │ TRANSICIÓN: surface → white
═══════════════════════════════════════════════════════════════════════

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
┌────────────────────────────────────────────────────────────────────┐
│                          ENCABEZADO                                  │
│              "Cómo funciona"  [text-brand-blue, pill]              │
│                                                                      │
│        H2: "De la vacante al candidato ideal:"                     │
│             "3 pasos, 14 días"                                     │
└────────────────────────────────────────────────────────────────────┘

     ┌──────────────────────────────────────────────────────────┐
     │  STEP 1          STEP 2          STEP 3                  │
     │  ─────────       ─────────       ─────────               │
     │  [01]            [02]            [03]                    │
     │  bg-brand-blue/  Diagnóstico     Activamos               │
     │  10 circle       y estrategia    tu pipeline             │
     │                                                           │
     │  "Nos cuentas     "Configuramos  "Recibes                │
     │   qué perfiles    la pauta y el  candidatos              │
     │   necesitas"      flujo automát."filtrados y             │
     │                                  evaluados"              │
     │  [connector line between steps: dashed, brand-blue/30]  │
     └──────────────────────────────────────────────────────────┘
  grid grid-cols-3, gap-8 | step numbers: Syne ExtraBold, text-xs

 MOB ▼: flex-col, step numbers + vertical connector line

═══════════════════════════════════════════════════════════════════════
 SECCIÓN 6: SOCIAL PROOF
 BG: brand-surface │ TRANSICIÓN: white → light-surface
═══════════════════════════════════════════════════════════════════════

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
┌────────────────────────────────────────────────────────────────────┐
│                     MÉTRICAS (4-col grid)                           │
│  bg-white, rounded-2xl, overflow-hidden (gap-px bg-gray-100)       │
│                                                                      │
│  ┌────────┬────────┬────────┬──────────────────────────────────┐   │
│  │  500+  │  12K+  │  78%   │  NPS 92                          │   │
│  │Empresas│Colocac.│Reducción│Satisfacción                     │   │
│  │        │exitosas│en tiempo│                                  │   │
│  └────────┴────────┴────────┴──────────────────────────────────┘   │
│  text-4xl→5xl, Syne ExtraBold, tabular-nums                        │
│  label: text-sm, font-semibold | sub: text-xs, gray                │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                  TESTIMONIOS (3-col grid)                           │
│                                                                      │
│  ┌─────────────────┐ ┌─────────────────┐ ┌──────────────────────┐ │
│  │ ★★★★★           │ │ ★★★★★           │ │ ★★★★★                │ │
│  │                 │ │                 │ │                      │ │
│  │ "Cubrimos 5     │ │ "La pauta       │ │ "Redujimos el costo  │ │
│  │  posiciones de  │ │  trajo perfiles  │ │  por contratación   │ │
│  │  ingeniería que  │ │  que nunca       │ │  en un 40%..."      │ │
│  │  llevábamos 4   │ │  hubiéramos      │ │                     │ │
│  │  meses buscan." │ │  encontrado..."  │ │                     │ │
│  │                 │ │                 │ │                      │ │
│  │ ── ── ── ──     │ │ ── ── ── ──     │ │ ── ── ── ──          │ │
│  │ [■] Directora   │ │ [■] CEO         │ │ [■] Gte. Operaciones │ │
│  │ de RH           │ │ Startup Fintech  │ │ Manufactura          │ │
│  └─────────────────┘ └─────────────────┘ └──────────────────────┘ │
│  figure element, bg-white, rounded-2xl, p-8                        │
│  avatar: w-10 h-10 rounded-full bg-brand-blue initials             │
└────────────────────────────────────────────────────────────────────┘

 MOB ▼: métricas → 2x2 grid | testimonios → 1-col stacked

═══════════════════════════════════════════════════════════════════════
 SECCIÓN 7: FAQ
 BG: white │ TRANSICIÓN: surface → white
═══════════════════════════════════════════════════════════════════════

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
┌────────────────────────────────────────────────────────────────────┐
│  H2: "Preguntas frecuentes"                                        │
│  "Respuestas directas para decisores de RH"                        │
└────────────────────────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────────────────────┐
  │ PREGUNTA 1:  ¿Cuánto tiempo tarda en ver candidatos? [+] [?]   │
  ├──────────────────────────────────────────────────────────────────┤
  │ RESPUESTA:   [body copy — visible al hacer click]               │
  └──────────────────────────────────────────────────────────────────┘
  ┌──────────────────────────────────────────────────────────────────┐
  │ PREGUNTA 2:  ¿En qué industrias tienen experiencia?  [+]        │
  └──────────────────────────────────────────────────────────────────┘
  ┌──────────────────────────────────────────────────────────────────┐
  │ PREGUNTA 3:  ¿Cómo es diferente a una bolsa de trabajo? [+]    │
  └──────────────────────────────────────────────────────────────────┘
  ┌──────────────────────────────────────────────────────────────────┐
  │ PREGUNTA 4:  ¿Qué pasa si el candidato no funciona? [+]        │
  └──────────────────────────────────────────────────────────────────┘
  ┌──────────────────────────────────────────────────────────────────┐
  │ PREGUNTA 5:  ¿Cuál es el modelo de cobro? [+]                  │
  └──────────────────────────────────────────────────────────────────┘

  Accordion: details/summary o controlled state
  border-b border-gray-100, py-5, transition height 300ms

  [BTN-LINK] ¿Tienes otra pregunta? Escríbenos →
  text-brand-blue, underline, hover:opacity-80

 MOB ▼: full-width accordion items, tap target ≥ 44px

═══════════════════════════════════════════════════════════════════════
 SECCIÓN 8: CONTACT CTA (FINAL)
 BG: brand-dark │ TRANSICIÓN: white → dark
═══════════════════════════════════════════════════════════════════════

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  Glow centrado: radial-gradient brand-blue/10, blur-3xl
  section-padding

┌──────────────────────────────┬─────────────────────────────────────┐
│  ← COL IZQUIERDA (COPY) ──  │ ─── COL DERECHA (FORM) ─────────── │
│  "Empieza hoy" [pill purple] │                                      │
│                              │  ┌───────────────────────────────┐  │
│  H2: "30 minutos pueden      │  │  H3: Agenda tu demo gratuita  │  │
│       cambiar cómo           │  │                               │  │
│       contratas talento."    │  │  [label] Nombre completo *    │  │
│                              │  │  [input──────────────────────]│  │
│  "Sin venta agresiva.        │  │                               │  │
│   Solo diagnóstico +         │  │  [label] Empresa *            │  │
│   propuesta real."           │  │  [input──────────────────────]│  │
│                              │  │                               │  │
│  ✓ Demo sin costo            │  │  [label] Email corporativo *  │  │
│  ✓ Diagnóstico de tu proceso │  │  [input──────────────────────]│  │
│  ✓ Propuesta a tu medida     │  │                               │  │
│  ✓ Sin compromisos           │  │  [label] Teléfono             │  │
│                              │  │  [input──────────────────────]│  │
│  (list items: flex gap-3,    │  │                               │  │
│   icon: brand-blue ring)     │  │  [label] Vacantes a cubrir    │  │
│                              │  │  [select▼────────────────────]│  │
│                              │  │                               │  │
│                              │  │  [label] ¿Qué perfiles buscas?│  │
│                              │  │  [textarea─────────────────   │  │
│                              │  │          ─────────────────]   │  │
│                              │  │                               │  │
│                              │  │  [BTN-PRIMARY full-width]     │  │
│                              │  │  "Solicitar Demo Gratuita"    │  │
│                              │  │                               │  │
│                              │  │  [privacidad text, xs]        │  │
│                              │  └───────────────────────────────┘  │
│                              │  form card: bg-white/5,             │
│                              │  border-white/10, rounded-2xl       │
└──────────────────────────────┴─────────────────────────────────────┘
  grid lg:grid-cols-2, gap-16

  ESTADO SUBMITTED:
  ┌───────────────────────────────┐
  │         [✓ circle green]      │
  │   Solicitud recibida          │
  │   Un especialista te contacta │
  │   en < 24 horas hábiles.      │
  └───────────────────────────────┘
  aria-live="polite" en el wrapper

 MOB ▼: left col + form → stacked 1-col, form: full-width

═══════════════════════════════════════════════════════════════════════
 SECCIÓN 9: FOOTER
 BG: brand-darker (#060a0f)
═══════════════════════════════════════════════════════════════════════

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
┌────────┬────────────┬──────────────┬──────────────────────────────┐
│  LOGO  │ Navegación │  Soluciones  │  Contacto                    │
│        │            │              │                              │
│ Tagline│ Inicio     │ Automatización│ hola@alianzarh.com         │
│        │ Servicios  │ Pauta Digital │ +52 55 0000 0000           │
│ [LI]   │ Nosotros   │ Headhunting   │ CDMX, México              │
│ [FB]   │ Contacto   │ Filtros      │                              │
└────────┴────────────┴──────────────┴──────────────────────────────┘
  grid grid-cols-1 md:2 lg:4, gap-12

  ────────────────────────────────────────────────────────
  © 2025 Alianza RH         Privacidad  |  Términos
  ────────────────────────────────────────────────────────

═══════════════════════════════════════════════════════════════════════
 ANOTACIONES DE INTERACCIÓN Y ESTADOS
═══════════════════════════════════════════════════════════════════════

HOVER STATES (150-300ms ease-out, transform+opacity only):
  Cards:     border-brand-blue/20 + shadow-xl
  BTN-PRIMARY: -translate-y-0.5 + shadow-brand-blue/25
  BTN-GHOST:   border-white/50 + bg-white/5
  Nav links:   text-white (from white/75)
  Features:    icon bg-brand-blue icon text-white

FOCUS STATES (Vercel Guidelines compliance):
  All inputs:  focus-visible:ring-2 focus-visible:ring-brand-blue
  All buttons: focus-visible:ring-2 focus-visible:ring-brand-blue
  Nav links:   focus-visible:ring-2 focus-visible:ring-white/50

REDUCED MOTION (prefers-reduced-motion: reduce):
  All animations: duration 0ms or opacity-only

SCROLL ANIMATIONS (Intersection Observer, stagger 50ms):
  Stats section: opacity 0→1 + translateY 16px→0
  Cards:         opacity 0→1 + translateY 24px→0 (stagger)
  Testimonios:   opacity 0→1 (no translate, subtler)

═══════════════════════════════════════════════════════════════════════
 FLUJO DE CONVERSIÓN (User Journey)
═══════════════════════════════════════════════════════════════════════

AWARENESS:     Hero H1 → captura el problema específico
INTEREST:      Pain Points → validación emocional ("así me siento yo")
DESIRE:        Solutions + Metrics → "esto resuelve mi problema"
PROOF:         Social Proof → "otros ya lo lograron"
OBJECTIONS:    FAQ → elimina dudas finales
ACTION:        Contact CTA → fricción mínima, beneficio claro

CTA SECUNDARIA en Navbar: sticky, visible en todo el scroll
CTA TERCIARIA en hero BTN-GHOST → ver servicios (buyer en consideration)
