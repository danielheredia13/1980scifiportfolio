import { cn } from "@/lib/utils"

interface TerminalOutputProps {
  text: string
  onClick?: () => void
  className?: string
}

export function TerminalOutput({ text, onClick, className }: TerminalOutputProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "sci-hud sci-border-glow px-4 py-3 rounded-md max-w-2xl mx-auto transition-all",
        "hover:border-sci-orange hover:shadow-[0_0_20px_rgba(255,102,0,0.6)]",
        "font-mono text-sm md:text-base",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="sci-terminal-text">
          {text} <span className="sci-cursor-blink sci-terminal-text self-end">▊</span>
        </span>
        
      </div>
    </div>
  )
}

