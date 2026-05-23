'use client'

import { FloatingCard }  from '@/components/ui/FloatingCard'
import { SectionBadge }  from '@/components/ui/SectionBadge'
import { ScrollReveal }  from '@/components/ui/ScrollReveal'
import { ParallaxPhoto } from '@/components/ui/ParallaxPhoto'
import { TypeWriter }    from '@/components/ui/TypeWriter'
import { researchNotes } from '@/data/content'

// Path: /public/photos/research.jpg
// Shoot: notebook + pen + coffee, top-down or 45° angle, natural light
const PHOTO = '/photos/research.jpg'

export function ResearchNotes() {
  return (
    <section id="research" className="portfolio-section">
      <ParallaxPhoto src={PHOTO} alt="Research notebook and coffee" />
      <div className="section-overlay" />
      <SectionBadge current={3} total={6} className="absolute top-20 right-4 md:right-6 z-20" />

      {/* ── Desktop ── */}
      <div className="relative z-10 w-full absolute inset-0 hidden md:block">
        {/* Single wide card — top left */}
        <div className="absolute top-24 left-10" style={{ width: 'min(520px, 52vw)' }}>
          <ScrollReveal delay={0.1} direction="left">
            <FloatingCard padding="lg">
              <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-4">
                Research Notes
              </p>
              <div className="flex flex-col divide-y divide-neutral-100">
                {researchNotes.map((note, i) => (
                  <div key={note.id} className="py-4 first:pt-0 last:pb-0 group cursor-pointer">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h3 className="font-sans font-medium text-sm text-neutral-900 leading-snug group-hover:text-neutral-600 transition-colors">
                        {note.title}
                      </h3>
                      <span className="font-mono text-[10px] text-neutral-400 flex-shrink-0 mt-0.5">
                        {note.readTime}
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-neutral-500 leading-relaxed mb-2">
                      {note.summary}
                    </p>
                    <div className="flex items-center gap-2">
                      {note.tags.map(tag => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                      <span className="ml-auto font-mono text-[10px] text-neutral-400">
                        {note.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </FloatingCard>
          </ScrollReveal>
        </div>

        {/* Heading — bottom */}
        <div className="absolute bottom-16 left-10">
          <ScrollReveal delay={0.2}>
            <h2 className="pixel-heading text-2xl xl:text-3xl">
              <TypeWriter text="Notes I kept." speed={70} delay={400} />
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden relative z-10 w-full">
        <div className="bg-neutral-950 px-5 py-7">
          <SectionBadge current={3} total={6} className="mb-4" />
          <h2 className="pixel-heading text-lg mb-6">Notes I kept.</h2>

          <FloatingCard padding="md">
            <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-4">
              Research Notes
            </p>
            <div className="flex flex-col divide-y divide-neutral-100">
              {researchNotes.map(note => (
                <div key={note.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex justify-between gap-2 mb-1.5">
                    <h3 className="font-sans font-medium text-sm text-neutral-900 leading-snug">
                      {note.title}
                    </h3>
                    <span className="font-mono text-[10px] text-neutral-400 flex-shrink-0">{note.readTime}</span>
                  </div>
                  <p className="font-mono text-[11px] text-neutral-500 leading-relaxed mb-2">
                    {note.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {note.tags.map(tag => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  )
}
