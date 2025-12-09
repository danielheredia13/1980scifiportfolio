import { Section } from "@/components/layout/Section"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { experience } from "@/data/experience"

export function Experience() {
  return (
    <Section id="experience">
      <MaxWidthWrapper>
        <SectionTitle>EXPERIENCE</SectionTitle>
        <div className="space-y-6">
          {experience.map((item, index) => (
            <Card
              key={index}
              className="hover:sci-border-glow transition-all relative"
            >
              {/* Timeline indicator */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-sci-orange opacity-30" />
              <div className="absolute left-[-8px] top-8 w-4 h-4 bg-sci-orange border-2 border-sci-dark rounded-full" />

              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl md:text-2xl">
                      {item.title}
                    </CardTitle>
                    <p className="text-sci-neonOrange font-mono text-sm md:text-base mt-1">
                      {item.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sci-textDark font-mono text-sm">
                      {item.period}
                    </p>
                    <p className="text-sci-textDark font-mono text-xs mt-1">
                      {item.location}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 ml-4">
                  {item.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-sci-text font-mono text-sm md:text-base flex items-start"
                    >
                      <span className="text-sci-orange mr-2">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </Section>
  )
}

