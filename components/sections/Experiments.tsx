'use client'

import { FloatingCard }  from '@/components/ui/FloatingCard'
import { SectionBadge }  from '@/components/ui/SectionBadge'
import { ScrollReveal }  from '@/components/ui/ScrollReveal'
import { ParallaxPhoto } from '@/components/ui/ParallaxPhoto'
import { TypeWriter }    from '@/components/ui/TypeWriter'
import { experiments }   from '@/data/content'
import { statusColors }  from '@/lib/utils'
import { cn }            from '@/lib/utils'

// Path: /public/photos/experiments.jpg
// Shoot: terminal/code visible on screen, slightly moody, night-mode aesthetic
const PHOTO = '/photos/experiments.jpg'

export function Experiments() {
  return (
    <section id="experiments" className="portfolio-section">
      <ParallaxPhoto src={PHOTO} alt="Code on screen" />
      <div className="section-overlay" />
      <SectionBadge current={5} total={6} className="absolute top-20 right-4 md:right-6 z-20" />

      {/* ── Desktop ── */}
      <div className="relative z-10 w-full absolute inset-0 hidden md:block">
        <div className="absolute top-24 left-10" style={{ width: 'min(580px, 58vw)' }}>
          <ScrollReveal delay={0.1} direction="left">
            <FloatingCard padding="lg">
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                  Experiments
                </span>
                <span className="flex-1 h-px bg-neutral-100" />
                <span className="font-mono text-[10px] text-neutral-300">
                  {experiments.length} total
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {experiments.map((exp) => (
                  <div
                    key={exp.id}
                    className="group border border-neutral-100 rounded-xl p-4 hover:border-neutral-200 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-sans font-medium text-sm text-neutral-900 leading-snug">
                        {exp.title}
                      </h3>
                      <span className={cn(
                        'text-[10px] font-mono px-2 py-0.5 rounded-full border flex-shrink-0 capitalize',
                        statusColors[exp.status]
                      )}>
                        {exp.status}
                      </span>
                    </div>

                    <p className="font-mono text-[11px] text-neutral-500 leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="flex flex-wrap gap-1 flex-1">
                        {exp.tech.map(t => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        {exp.github && (
                          <a
                            href={exp.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] text-neutral-500 hover:text-neutral-800 transition-colors"
                          >
                            GitHub ↗
                          </a>
                        )}
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] text-neutral-500 hover:text-neutral-800 transition-colors"
                          >
                            Live ↗
                          </a>
                        )}
                      </div>
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
              <TypeWriter text="Things I broke." speed={70} delay={400} />
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden relative z-10 w-full">
        <div className="bg-neutral-950 px-5 py-7">
          <SectionBadge current={5} total={6} className="mb-4" />
          <h2 className="pixel-heading text-lg mb-6">Things I broke.</h2>

          <div className="flex flex-col gap-3">
            {experiments.map(exp => (
              <FloatingCard key={exp.id} padding="md">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-sans font-medium text-sm text-neutral-900">{exp.title}</h3>
                  <span className={cn(
                    'text-[10px] font-mono px-2 py-0.5 rounded-full border flex-shrink-0 capitalize',
                    statusColors[exp.status]
                  )}>
                    {exp.status}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-neutral-500 leading-relaxed mb-2">{exp.description}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {exp.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <div className="flex gap-3">
                  {exp.github && <a href={exp.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-neutral-500">GitHub ↗</a>}
                  {exp.link && <a href={exp.link} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-neutral-500">Live ↗</a>}
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
