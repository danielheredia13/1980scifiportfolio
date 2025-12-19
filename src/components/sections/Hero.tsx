
import { Button } from "@/components/ui/button"
import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"
import { TerminalOutput } from "@/components/ui/TerminalOutput"
import { ArrowDown } from "lucide-react"

export function Hero() {
 

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }



 

  return (
    <section
      id="hero"
      className="pt-20 pb-5 flex items-center justify-center relative sci-grid-bg"
    >
      <div className="absolute inset-0 sci-scanlines pointer-events-none" />
      <MaxWidthWrapper className="text-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          {/* Status Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <Badge variant="outline" className="font-mono text-sm">
              STATUS: ONLINE
            </Badge>
            <Badge variant="outline" className="font-mono text-sm">
              LOCATION: OTTAWA, ON
            </Badge>
            <Badge variant="outline" className="font-mono text-sm">
              STACK: REACT | NEXT.JS | TYPESCRIPT
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-sci-orange sci-terminal">
              DANIEL HEREDIA
            </h1>
            <div className="h-1 w-32 mx-auto bg-sci-orange shadow-sci-glow" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-mono text-sci-text mt-6">
              SOFTWARE ENGINEER
            </h2>
          </div>

          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-sci-text max-w-2xl mx-auto font-mono leading-relaxed">
            Building intelligent web applications with React, Next.js, and AI
            agentic systems. Transforming business insights into powerful solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group"
            >
              VIEW PROJECT
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
            >
              CONTACT ME
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Terminal Output - Chatbot Invitation */}
          <div className="pt-6">
            <TerminalOutput
              text={
                   `> The chatbot featured in my portfolio is part of a the project "AI Agentic Chatbot 
                  Platform", listed in the Project section and available as a practical demonstration of its capabilities.`
              }
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

