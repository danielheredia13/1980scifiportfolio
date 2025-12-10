export interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  achievements: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: "Front-End Developer",
    company: "Hound Express",
    location: "Mexico City, Mexico",
    period: "Aug 2023 - May 2024",
    achievements: [
      "Built a HR application for internal company use, frontend: Next.js, React, Javascript, Bootstrap, Git, Docker.",
      "Managed client interactions across diverse cultural backgrounds, leveraging strong intercultural communication to support global partnerships.",
      "Promoted the use of a frontend framework for the HR application; the company's main application uses HTML, CSS, JavaScript, and JQuery.",
      "Implemented several features with new UIs for the main application (Sabueso), HTML, CSS, JavaScript, JQuery, Java, Spring Boot.",
      "Implemented a new user flow for the HoundBox application, for the relaunch of the service, HTML, CSS, JavaScript, JQuery, Java, Spring Boot.",
    ],
  },
  {
    title: "Sales Manager",
    company: "Syntage",
    location: "Mexico City, Mexico",
    period: "Mar 2022 - Dec 2022",
    achievements: [
      "Identified and developed new business opportunities.",
      "Attended financial sector events to attract clients.",
      "Increased customer portfolio and engagement.",
    ],
  },
  {
    title: "Business Development Manager, LATAM",
    company: "PayCash",
    location: "Mexico City, Mexico",
    period: "Oct 2020 - Mar 2022",
    achievements: [
      "Opened 10 subsidiaries in 10 Latin American countries to replicate Mexico's business model.",
      "Coordinated the interdepartmental work for the output to production on time.",
      "Recruited the sales team for Latin America.",
      "Defined sales and marketing strategies for each country.",
    ],
  },
  {
    title: "Export Sales Manager (Latin America and Caribbean)",
    company: "Klaxcar France",
    location: "Mexico City, Mexico",
    period: "Jun 2018 - Jul 2019",
    achievements: [
      "Increased market share of Klaxcar France in the Latin American and Caribbean market.",
      "Identified and developed new business opportunities.",
      "Facilitated training seminars to distributors and retailers.",
      "Managed marketing budget.",
    ],
  },
]

