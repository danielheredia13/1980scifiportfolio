import { Section } from "@/components/layout/Section"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <Section id="about">
      <MaxWidthWrapper>
        <SectionTitle>ABOUT</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Main Content */}
          
            <Card>
              <CardContent className="pt-6 text-md">
                <p className="text-sci-text font-mono leading-relaxed mb-4">
                  At Hound Express, I championed modern frontend frameworks
                  while working with legacy systems, demonstrating adaptability
                  and technical leadership. My experience managing client
                  interactions across diverse cultural backgrounds enhances my
                  ability to create intuitive, accessible user experiences.
                </p>
                <p className="text-sci-text font-mono leading-relaxed">
                  Today, I focus on building intelligent web applications using
                  React, Next.js, TypeScript, and AI frameworks like LangChain
                  and LangGraph, creating solutions that bridge the gap between
                  complex AI capabilities and user-friendly interfaces.
                </p>
              </CardContent>
            </Card>
         

          {/* Quick Facts */}
          <div >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-mono text-sci-orange mb-4 border-b border-sci-green pb-2">
                  QUICK FACTS
                </h3>
                <div className="space-y-4 font-mono text-md">
                  <div>
                    <span className="text-sci-textDark">LOCATION:</span>
                    <span className="text-sci-text ml-2">Ottawa, ON, Canada</span>
                  </div>
                  <div>
                    <span className="text-sci-textDark">LANGUAGES:</span>
                    <span className="text-sci-text ml-2">English, Spanish</span>
                  </div>
                  <div>
                    <span className="text-sci-textDark">EDUCATION:</span>
                    <span className="text-sci-text ml-2">
                      Bachelor of Business Administration
                    </span>
                  </div>
                  <div>
                    <span className="text-sci-textDark">CURRENT FOCUS:</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Express</Badge>
                      <Badge variant="secondary">AI Agents</Badge>
                    </div>
                  </div>
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </MaxWidthWrapper>
    </Section>
  )
}

