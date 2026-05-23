'use client'

import { FloatingCard }  from '@/components/ui/FloatingCard'
import { SectionBadge }  from '@/components/ui/SectionBadge'
import { ScrollReveal }  from '@/components/ui/ScrollReveal'
import { ParallaxPhoto } from '@/components/ui/ParallaxPhoto'
import { TypeWriter }    from '@/components/ui/TypeWriter'
import { blogPosts }     from '@/data/content'

// Path: /public/photos/blogs.jpg
// Shoot: outdoor / window light / relaxed reading pose, warm tones
const PHOTO = '/photos/blogs.jpg'

export function Blogs() {
  return (
    <section id="blogs" className="portfolio-section">
      <ParallaxPhoto src={PHOTO} alt="Reading and writing space" />
      <div className="section-overlay" />
      <SectionBadge current={4} total={6} className="absolute top-20 right-4 md:right-6 z-20" />

      {/* ── Desktop ── */}
      <div className="relative z-10 w-full absolute inset-0 hidden md:block">
        {/* Cards — top right */}
        <div className="absolute top-24 right-10" style={{ width: 'min(480px, 48vw)' }}>
          <ScrollReveal delay={0.15} direction="right">
            <div className="flex flex-col gap-4">
              {blogPosts.map((post, i) => (
                <FloatingCard key={post.id} className="group cursor-pointer" padding="md">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-sans font-medium text-sm text-neutral-900 leading-snug group-hover:text-neutral-600 transition-colors">
                      {post.title}
                    </h3>
                    <span className="font-mono text-[10px] text-neutral-400 flex-shrink-0 mt-0.5">
                      {post.readTime}
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-neutral-500 leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                    <span className="ml-auto font-mono text-[10px] text-neutral-400">
                      {post.date}
                    </span>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Heading — bottom left */}
        <div className="absolute bottom-16 left-10">
          <ScrollReveal delay={0.1}>
            <h2 className="pixel-heading text-2xl xl:text-3xl">
              <TypeWriter text="Words I wrote." speed={70} delay={400} />
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden relative z-10 w-full">
        <div className="bg-neutral-950 px-5 py-7">
          <SectionBadge current={4} total={6} className="mb-4" />
          <h2 className="pixel-heading text-lg mb-6">Words I wrote.</h2>
          <div className="flex flex-col gap-4">
            {blogPosts.map(post => (
              <FloatingCard key={post.id} padding="md">
                <div className="flex justify-between gap-2 mb-2">
                  <h3 className="font-sans font-medium text-sm text-neutral-900 leading-snug">{post.title}</h3>
                  <span className="font-mono text-[10px] text-neutral-400 flex-shrink-0">{post.readTime}</span>
                </div>
                <p className="font-mono text-[11px] text-neutral-500 leading-relaxed mb-2">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1.5 items-center">
                  {post.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
                  <span className="ml-auto font-mono text-[10px] text-neutral-400">{post.date}</span>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
