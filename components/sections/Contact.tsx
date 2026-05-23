'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FloatingCard }  from '@/components/ui/FloatingCard'
import { SectionBadge }  from '@/components/ui/SectionBadge'
import { ScrollReveal }  from '@/components/ui/ScrollReveal'
import { ParallaxPhoto } from '@/components/ui/ParallaxPhoto'
import { TypeWriter }    from '@/components/ui/TypeWriter'

// Path: /public/photos/contact.jpg
// Shoot: desk flat-lay or relaxed window portrait, warm and approachable
const PHOTO = '/photos/contact.jpg'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

interface FormState {
  name:    string
  email:   string
  subject: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', subject: '', message: '' }

export function Contact() {
  const [form, setForm]     = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError]   = useState('')

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error ?? 'Something went wrong')

      setStatus('success')
      setForm(INITIAL)
    } catch (err: unknown) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  const ContactForm = (
    <FloatingCard padding="lg" className="w-full">
      <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-5">
        Send a message
      </p>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8"
          >
            <div className="text-2xl mb-3">✓</div>
            <p className="font-mono text-sm text-neutral-700 mb-1">Message sent!</p>
            <p className="font-mono text-[11px] text-neutral-400">I&apos;ll get back to you soon.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 font-mono text-[11px] text-neutral-500 underline"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={set('name')}
                  required
                />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set('email')}
                  required
                />
              </div>
            </div>

            <div>
              <label className="form-label">Subject</label>
              <input
                className="form-input"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={set('subject')}
                required
              />
            </div>

            <div>
              <label className="form-label">Message</label>
              <textarea
                className="form-input min-h-[100px]"
                placeholder="Tell me something interesting..."
                value={form.message}
                onChange={set('message')}
                required
                rows={4}
              />
            </div>

            {status === 'error' && (
              <p className="font-mono text-[11px] text-red-500">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="
                w-full py-3 rounded-xl font-mono text-xs font-medium
                bg-neutral-900 text-white
                hover:bg-neutral-700 active:scale-[0.98]
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-200
              "
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </FloatingCard>
  )

  const socialLinks = [
    { label: 'GitHub',   href: 'https://github.com/yourusername' },
    { label: 'Twitter',  href: 'https://twitter.com/yourusername' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
    { label: 'Email',    href: 'mailto:you@example.com' },
  ]

  return (
    <section id="contact" className="portfolio-section">
      <ParallaxPhoto src={PHOTO} alt="Contact desk setup" />
      <div className="section-overlay" />
      <SectionBadge current={6} total={6} className="absolute top-20 right-4 md:right-6 z-20" />

      {/* ── Desktop ── */}
      <div className="relative z-10 w-full absolute inset-0 hidden md:block">
        {/* Contact card — center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 'min(520px, 52vw)' }}
        >
          <ScrollReveal delay={0.1} direction="up">
            {ContactForm}
          </ScrollReveal>
        </div>

        {/* Social links — bottom left */}
        <div className="absolute bottom-16 left-10">
          <ScrollReveal delay={0.2}>
            <h2 className="pixel-heading text-2xl xl:text-3xl mb-6">
              <TypeWriter text="Let's talk." speed={80} delay={400} />
            </h2>
            <div className="flex gap-4">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-white/60 hover:text-white transition-colors"
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden relative z-10 w-full">
        <div className="bg-neutral-950 px-5 py-7">
          <SectionBadge current={6} total={6} className="mb-4" />
          <h2 className="pixel-heading text-lg mb-6">Let&apos;s talk.</h2>

          {ContactForm}

          <div className="flex gap-4 mt-6 justify-center">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-white/50 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
