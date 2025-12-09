import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-bold text-sci-orange font-mono mb-8 md:mb-12",
        "border-b-2 border-sci-orange pb-4 inline-block",
        className
      )}
    >
      {children}
    </h2>
  )
}

