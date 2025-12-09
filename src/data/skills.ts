export interface Skill {
  name: string
  category: "Frontend" | "Backend & Databases" | "AI / LLM Tools" | "DevOps & Tools"
 
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend"},
  { name: "Next.js", category: "Frontend"},
  { name: "TypeScript", category: "Frontend"},
  { name: "JavaScript", category: "Frontend"},
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend"},
  { name: "TailwindCSS", category: "Frontend"},
  { name: "Tanstack Query", category: "Frontend" },
  { name: "Preact", category: "Frontend"},
  
  // Backend & Databases
  { name: "Node.js", category: "Backend & Databases"},
  { name: "Express", category: "Backend & Databases"},
  { name: "MongoDB", category: "Backend & Databases" },
  { name: "Mongoose", category: "Backend & Databases" },
  { name: "Supabase", category: "Backend & Databases" },
  
  // AI / LLM Tools
  { name: "LangChain", category: "AI / LLM Tools"},
  { name: "LangGraph", category: "AI / LLM Tools"},
  
  // DevOps & Tools
  { name: "Git", category: "DevOps & Tools"},
  { name: "GitHub", category: "DevOps & Tools" },
  { name: "Docker", category: "DevOps & Tools" },
]

export const skillsByCategory = {
  "Frontend": skills.filter(s => s.category === "Frontend"),
  "Backend & Databases": skills.filter(s => s.category === "Backend & Databases"),
  "AI / LLM Tools": skills.filter(s => s.category === "AI / LLM Tools"),
  "DevOps & Tools": skills.filter(s => s.category === "DevOps & Tools"),
}

