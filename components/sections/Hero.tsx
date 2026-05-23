'use client'

import { FloatingCard }  from '@/components/ui/FloatingCard'
import { TypeWriter }    from '@/components/ui/TypeWriter'
import { SectionBadge }  from '@/components/ui/SectionBadge'
import { ScrollReveal }  from '@/components/ui/ScrollReveal'
import { ParallaxPhoto } from '@/components/ui/ParallaxPhoto'

// ─── replace with your actual hero photo ───────────────────────────
// Shoot: you at your desk, window behind you, slightly from above.
// Path: /public/photos/hero.jpg  (2000×1200px, under 400KB)
const PHOTO = '/photos/hero.jpg'
// ────────────────────────────────────────────────────────────────────

const roles = ['Frontend Developer', 'Backend Engineer', 'ML Tinkerer']

export function Hero() {
  return (
    <section id="home" className="portfolio-section">
      {/* Photo bg with parallax */}
      <ParallaxPhoto src={PHOTO} alt="Developer at their desk" />
      <div className="section-overlay" />

      {/* Badge */}
      <SectionBadge
        current={1}
        total={6}
        className="absolute top-20 right-4 md:right-6"
      />

      {/* ── Desktop layout: card floats top-left, heading bottom-left ── */}
      <div className="relative z-10 w-full h-full absolute inset-0 hidden md:block">
        {/* Floating card — top left */}
        <ScrollReveal delay={0.2} direction="left" className="absolute top-24 left-10">
          <FloatingCard className="w-72">
            <div className="flex items-center gap-3 mb-4">
              {/* Avatar placeholder — replace with <Image> */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center text-white text-sm font-mono font-bold flex-shrink-0">
                YN
              </div>
              <div>
                <p className="font-sans font-medium text-sm text-neutral-900 leading-tight">
                  Your Name
                </p>
                <p className="font-mono text-xs text-neutral-500 mt-0.5">
                  @yourusername
                </p>
              </div>
            </div>

            <p className="font-mono text-[11px] leading-relaxed text-neutral-600 border-t border-neutral-100 pt-3">
              Building things at the intersection of good UX and solid engineering.
              Currently obsessed with LLMs, design systems, and fast APIs.
            </p>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {['React', 'Python', 'TypeScript', 'Figma'].map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </FloatingCard>
        </ScrollReveal>

        {/* Heading — bottom left */}
        <div className="absolute bottom-16 left-10 right-10">
          <ScrollReveal delay={0.1}>
            <p className="font-mono text-white/60 text-xs mb-3 tracking-widest uppercase">
              Hello, I&apos;m
            </p>
            <h1 className="pixel-heading text-3xl xl:text-4xl mb-4 leading-snug">
              <TypeWriter text="Your Name." speed={80} delay={600} />
            </h1>
            <p className="font-mono text-white/75 text-sm max-w-md leading-relaxed">
              <TypeWriter
                text="Frontend dev · backend tinkerer · occasional ML experiment."
                speed={30}
                delay={1800}
                showCursor={false}
              />
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Mobile layout: photo stacked, content below ── */}
      <div className="md:hidden relative z-10 w-full">
        {/* Photo zone — handled by .section-photo absolute positioning */}
        {/* Content zone */}
        <div className="bg-neutral-950 px-5 py-7">
          <SectionBadge current={1} total={6} className="mb-4" />

          <p className="font-mono text-white/50 text-[10px] mb-2 tracking-widest uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="pixel-heading text-xl mb-4 leading-snug">
            Your Name.
          </h1>
          <p className="font-mono text-white/70 text-xs leading-relaxed mb-5">
            Frontend dev · backend tinkerer · occasional ML experiment.
          </p>

          <FloatingCard className="w-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-white text-xs font-mono font-bold flex-shrink-0">
                YN
              </div>
              <div>
                <p className="font-sans font-medium text-sm text-neutral-900">Your Name</p>
                <p className="font-mono text-[11px] text-neutral-500">@yourusername</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['React', 'Python', 'TypeScript', 'Figma'].map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  )
}
