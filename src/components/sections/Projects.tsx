import { useState } from "react"
import { Section } from "@/components/layout/Section"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { projects } from "@/data/projects"
import { ExternalLink } from "lucide-react"

export function Projects() {
  return (
    <Section id="projects">
      <MaxWidthWrapper>
        <SectionTitle>PROJECT</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </MaxWidthWrapper>
    </Section>
  )
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="hover:sci-border-glow transition-all flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{project.name}</CardTitle>
        <CardDescription className="font-mono text-md">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs font-mono">
              {tech}
            </Badge>
          ))}
          
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {project.liveUrl && (
          <Button
            size="sm"
            variant="outline"
            asChild
            className="flex-1 min-w-[120px]"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center">
              <ExternalLink className="mr-2 h-3 w-3" />
              Live Site
              </div>
            </a>
          </Button>
        )}
       
        {project.longDescription && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="secondary" className="flex-1 min-w-[120px]">
                Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{project.name}</DialogTitle>
                <DialogDescription className="font-mono">
                  {project.longDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                {project.features && (
                  <div>
                    <h4 className="text-sci-orange font-mono mb-2">Features:</h4>
                    <ul className="space-y-1 ml-4">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sci-text font-mono text-sm flex items-start"
                        >
                          <span className="text-sci-orange mr-2">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="text-sci-orange font-mono mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </CardFooter>
    </Card>
  )
}

