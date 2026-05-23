'use client'

import { FloatingCard }  from '@/components/ui/FloatingCard'
import { SectionBadge }  from '@/components/ui/SectionBadge'
import { ScrollReveal }  from '@/components/ui/ScrollReveal'
import { ParallaxPhoto } from '@/components/ui/ParallaxPhoto'
import { TypeWriter }    from '@/components/ui/TypeWriter'
import { projects }      from '@/data/projects'
import { categoryColors } from '@/lib/utils'

// Path: /public/photos/projects.jpg
// Shoot: hands on laptop / dual monitor, natural light
const PHOTO = '/photos/projects.jpg'

export function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <ParallaxPhoto src={PHOTO} alt="Working on projects" />
      <div className="section-overlay" />
      <SectionBadge current={2} total={6} className="absolute top-20 right-4 md:right-6 z-20" />

      {/* ── Desktop ── */}
      <div className="relative z-10 w-full h-full absolute inset-0 hidden md:flex items-end pb-10 px-10 gap-6">
        {/* Cards grid — top portion */}
        <div className="absolute top-20 left-10 right-10">
          <ScrollReveal delay={0.1}>
            <p className="pixel-heading text-xs text-white/60 mb-4 tracking-widest">
              2. Projects
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={0.1 + i * 0.08} direction="up">
                <FloatingCard className="h-full group" padding="md">
                  {/* Category dot + year */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: categoryColors[project.category] }}
                    />
                    <span className="font-mono text-[10px] text-neutral-400">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-sans font-medium text-sm text-neutral-900 mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[11px] text-neutral-500 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto border-t border-neutral-100 pt-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] text-neutral-500 hover:text-neutral-900 transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] text-neutral-500 hover:text-neutral-900 transition-colors"
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </FloatingCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Heading — bottom */}
        <div className="w-full">
          <h2 className="pixel-heading text-2xl xl:text-3xl">
            <TypeWriter text="Things I built." speed={70} delay={300} />
          </h2>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden relative z-10 w-full">
        <div className="bg-neutral-950 px-5 py-7">
          <SectionBadge current={2} total={6} className="mb-4" />
          <h2 className="pixel-heading text-lg mb-6">Things I built.</h2>

          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <FloatingCard key={project.id} padding="md">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: categoryColors[project.category] }}
                  />
                  <span className="font-mono text-[10px] text-neutral-400">{project.year}</span>
                </div>
                <h3 className="font-sans font-medium text-sm text-neutral-900 mb-1.5">
                  {project.title}
                </h3>
                <p className="font-mono text-[11px] text-neutral-500 leading-relaxed mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 border-t border-neutral-100 pt-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="font-mono text-[10px] text-neutral-500">GitHub ↗</a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                       className="font-mono text-[10px] text-neutral-500">Live ↗</a>
                  )}
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
