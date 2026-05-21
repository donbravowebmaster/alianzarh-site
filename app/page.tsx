import { Hero } from '@/components/sections/Hero'
import { PainPoints } from '@/components/sections/PainPoints'
import { Solutions } from '@/components/sections/Solutions'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FAQ } from '@/components/sections/FAQ'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <>
      {/* ── Dark ────────────────────────────────────────────── */}
      <Hero />

      {/* ── Light ───────────────────────────────────────────── */}
      <PainPoints />

      {/* ── Light Surface ───────────────────────────────────── */}
      <Solutions />

      {/* ── Light ───────────────────────────────────────────── */}
      <HowItWorks />

      {/* ── Light ───────────────────────────────────────────── */}
      <FAQ />

      {/* ── Dark ────────────────────────────────────────────── */}
      <ContactCTA />
    </>
  )
}
