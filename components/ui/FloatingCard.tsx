'use client'

import { cn } from '@/lib/utils'

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}

const padMap = { sm: 'p-4', md: 'p-5', lg: 'p-6' }

export function FloatingCard({
  children,
  className = '',
  padding = 'md',
}: FloatingCardProps) {
  return (
    <div className={cn('floating-card', padMap[padding], className)}>
      {children}
    </div>
  )
}
