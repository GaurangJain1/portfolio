'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { href: '#home',      label: 'Home' },
  { href: '#projects',  label: 'Projects' },
  { href: '#research',  label: 'Research' },
  { href: '#blogs',     label: 'Blogs' },
  { href: '#experiments', label: 'Experiments' },
  { href: '#contact',   label: 'Contact' },
]

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState('home')
  const [scrolled, setScrolled] = useState(false)

  /* Track scroll to highlight active section */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      {/* Desktop pill nav */}
      <nav
        className="nav-pill hidden md:flex items-center gap-1 px-3 py-2"
        aria-label="Main navigation"
      >
        {navLinks.map(({ href, label }) => {
          const id      = href.replace('#', '')
          const isActive = active === id
          return (
            <button
              key={href}
              onClick={() => handleLinkClick(href)}
              className={`
                relative px-3 py-1.5 rounded-full text-xs font-mono
                transition-colors duration-200
                ${isActive ? 'text-white' : 'text-white/60 hover:text-white/90'}
              `}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-white/15"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          )
        })}
      </nav>

      {/* Mobile hamburger */}
      <div className="md:hidden flex w-full justify-end">
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="nav-pill p-2.5 text-white"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <div className="w-5 flex flex-col gap-1.5 items-end">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-white rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block h-0.5 w-3.5 bg-white rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-white rounded-full origin-center"
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="
              md:hidden absolute top-16 right-4
              nav-pill py-2 px-3 flex flex-col gap-1 min-w-[160px]
            "
          >
            {navLinks.map(({ href, label }) => {
              const id      = href.replace('#', '')
              const isActive = active === id
              return (
                <button
                  key={href}
                  onClick={() => handleLinkClick(href)}
                  className={`
                    text-left px-3 py-2 rounded-xl text-xs font-mono
                    transition-colors duration-150
                    ${isActive
                      ? 'text-white bg-white/15'
                      : 'text-white/60 hover:text-white hover:bg-white/10'}
                  `}
                >
                  {label}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
