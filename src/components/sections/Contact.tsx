import { Section } from "@/components/layout/Section"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <Section id="contact">
      <MaxWidthWrapper>
        <SectionTitle>CONTACT</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-mono text-sci-orange mb-6 border-b border-sci-green pb-2">
                GET IN TOUCH
              </h3>
              <div className="space-y-4 font-mono">
                <a
                  href="mailto:danielheredia13@gmail.com"
                  className="flex items-center gap-3 text-sci-text hover:text-sci-orange transition-colors group"
                >
                  <Mail className="h-5 w-5 text-sci-orange group-hover:scale-110 transition-transform" />
                  <span>danielheredia13@gmail.com</span>
                </a>
                <a
                  href="tel:+13432626041"
                  className="flex items-center gap-3 text-sci-text hover:text-sci-orange transition-colors group"
                >
                  <Phone className="h-5 w-5 text-sci-orange group-hover:scale-110 transition-transform" />
                  <span>+1 (343) 2626041</span>
                </a>
                <div className="flex items-center gap-3 text-sci-text">
                  <MapPin className="h-5 w-5 text-sci-orange" />
                  <span>Ottawa, ON, Canada</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-sci-green">
                <h4 className="text-sci-orange font-mono mb-4">CONNECT</h4>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="font-mono"
                  >
                    <a
                      href="https://linkedin.com/in/daniel-jose-heredia-rincon-711b5063"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                      </div>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="font-mono"
                  >
                    <a
                      href="https://github.com/danielheredia13"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                      </div>
                    </a>
                  </Button>
                  
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status Message */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-mono text-sci-orange mb-6 border-b border-sci-green pb-2">
                STATUS
              </h3>
              <div className="space-y-4 font-mono text-md">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sci-text">Available for opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sci-orange rounded-full" />
                  <span className="text-sci-text">Open to freelance projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sci-orange rounded-full" />
                  <span className="text-sci-text">Interested in AI/ML projects</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-sci-green">
                <p className="text-sci-text font-mono text-md leading-relaxed">
                  &gt; Feel free to reach out for collaboration opportunities,
                  freelance projects, or just to connect about technology and
                  development.
                  <br />
                  <br />
                  &gt; I'm particularly interested in projects involving React,
                  Next.js, TypeScript, and AI agentic systems.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </MaxWidthWrapper>
    </Section>
  )
}

