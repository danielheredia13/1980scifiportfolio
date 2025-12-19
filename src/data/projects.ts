export interface Project {
  name: string
  description: string
  longDescription?: string
  technologies: string[]
  features?: string[]
  liveUrl?: string
  githubUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    name: "AI Agentic Chatbot Platform",
    description:
      `Full agentic chatbot system using RAG (Retrieval-Augmented Generation), enabling multi-step reasoning and tool-calling.
       Implemented a multi-bot architecture with per-bot configuration, isolated knowledge sources, and persistent storage. 
       Integrated vector search, file ingestion pipelines, and structured dataset processing`,
    longDescription:
      "A comprehensive AI-powered chatbot platform designed to make advanced AI capabilities accessible to non-technical users. The platform leverages RAG (Retrieval-augmented generation) and agent orchestration to provide intelligent customer service solutions, knowledge management systems, and more. Built with modern web technologies and AI frameworks to deliver scalable, efficient AI interactions.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Tanstack Query",
      "Preact",
      "Node.js",
      "Express",
      "Supabase",
      "MongoDB",
      "Mongoose",
      "Clerk",
      "LangChain",
      "LangGraph",
      "Git",
      "GitHub",
    ],
    features: [
      "RAG (Retrieval-augmented generation) for intelligent responses",
      "Customer service automation",
      "Knowledge base integration",
      "User authentication and management",
      "Real-time chat interface",
    ],
    liveUrl: "https://lolo-gold.vercel.app/",
    demoUrl: "https://lolo-gold.vercel.app/projectdemo",
  },
]


/*
"AI agentic chatbot platform for non-technical people, RAG (Retrieval-augmented generation) and agent orchestration for functions such as customer service on websites, knowledge source in companies and many more.",
   
      "A comprehensive AI-powered chatbot platform designed to make advanced AI capabilities accessible to non-technical users. The platform leverages RAG (Retrieval-augmented generation) and agent orchestration to provide intelligent customer service solutions, knowledge management systems, and more. Built with modern web technologies and AI frameworks to deliver scalable, efficient AI interactions.",

*/ 
