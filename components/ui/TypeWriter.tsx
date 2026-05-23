'use client'

import { useEffect, useState } from 'react'

interface TypeWriterProps {
  text: string
  speed?: number          // ms per character
  delay?: number          // ms before starting
  className?: string
  showCursor?: boolean
  onDone?: () => void
}

export function TypeWriter({
  text,
  speed = 60,
  delay = 300,
  className = '',
  showCursor = true,
  onDone,
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone]           = useState(false)
  const [started, setStarted]     = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) {
      setDone(true)
      onDone?.()
      return
    }
    const t = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(t)
  }, [started, displayed, text, speed, onDone])

  return (
    <span className={className}>
      {displayed}
      {showCursor && !done && (
        <span className="typewriter-cursor" aria-hidden="true" />
      )}
    </span>
  )
}
