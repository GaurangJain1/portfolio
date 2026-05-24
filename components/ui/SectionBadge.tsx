interface SectionBadgeProps {
  current: number
  total: number
  className?: string
}

export function SectionBadge({ current, total, className = '' }: SectionBadgeProps) {
  // return (
  //   <div className={`section-badge ${className}`}>
  //     {current}/{total}
  //   </div>
  // )
}
