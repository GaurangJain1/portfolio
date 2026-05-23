'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxPhotoProps {
  src: string
  alt?: string
  /** 0–1 amount of parallax shift. Default 0.2 */
  intensity?: number
}

export function ParallaxPhoto({ src, alt = '', intensity = 0.2 }: ParallaxPhotoProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Translate from -intensity*100% to +intensity*100% as section scrolls
  const y = useTransform(scrollYProgress, [0, 1], [`${-intensity * 100}%`, `${intensity * 100}%`])

  return (
    <div ref={ref} className="section-photo" aria-hidden="true">
      <motion.div
        style={{
          y,
          position: 'absolute',
          inset: `-${intensity * 100 + 10}% 0`,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Accessible hidden description */}
      <span className="sr-only">{alt}</span>
    </div>
  )
}

/**
 * Mobile version — no parallax (performance & motion sensitivity).
 * Shows photo as a regular stacked block.
 */
export function StaticPhoto({ src, alt = '' }: { src: string; alt?: string }) {
  return (
    <div
      className="section-photo"
      style={{ backgroundImage: `url(${src})` }}
      aria-label={alt}
      role="img"
    />
  )
}
