import { Section } from "@/components/layout/Section"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skillsByCategory } from "@/data/skills"

export function Skills() {
  const categories = Object.keys(skillsByCategory) as Array<
    keyof typeof skillsByCategory
  >

  return (
    <Section id="skills">
      <MaxWidthWrapper>
        <SectionTitle>SKILLS</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Card key={category} className="hover:sci-border-glow transition-all">
              <CardHeader>
                <CardTitle className="text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsByCategory[category].map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="font-mono text-sm"
                    >
                      {skill.name}
                     
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </Section>
  )
}

