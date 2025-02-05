import { ReactNode } from 'react'

interface SectionProps {
  id: string
  title?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`mb-16 ${className}`}>
      {title && <h2 className="text-3xl font-bold mb-6 tracking-tight">{title}</h2>}
      {children}
    </section>
  )
}

