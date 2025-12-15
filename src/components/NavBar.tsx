import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "HOME", id: "hero" },
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "PROJECT", id: "projects" },
  { label: "CONTACT", id: "contact" },
]

export function NavBar() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-sci-dark/95 backdrop-blur-sm border-b border-sci-green sci-border-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo/Title */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-mono text-sci-orange text-md hover:text-sci-neonOrange transition-colors"
            >
              &gt; DANIEL_HEREDIA
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "font-mono text-md",
                  activeSection === item.id
                    ? "text-sci-orange border-b-2 border-sci-orange rounded-t-md rounded-b-none"
                    : "text-sci-text hover:text-sci-orange"
                )}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sci-orange hover:text-sci-neonOrange transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-sci-green py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "font-mono text-sm justify-start",
                    activeSection === item.id
                      ? "text-sci-orange bg-sci-darkGreen"
                      : "text-sci-text hover:text-sci-orange"
                  )}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

