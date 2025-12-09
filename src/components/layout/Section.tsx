import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-5 relative sci-grid-bg",
        className
      )}
    >
      <div className="absolute inset-0 sci-scanlines pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </section>
  )
}

