# Portfolio Website

A modern, sci-fi-themed portfolio website showcasing the work and skills of Daniel Heredia, a Software Engineer specializing in React, Next.js, and AI agentic systems.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite
- **Sci-Fi Theme**: Terminal-inspired design with custom animations
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Sections**:
  - Hero section with status badges and terminal output
  - About section
  - Skills showcase (Frontend, Backend & Databases, AI/LLM Tools, DevOps & Tools)
  - Experience timeline
  - Projects gallery with detailed descriptions
  - Contact form
- **AI Chatbot Integration**: Interactive chatbot demonstration embedded in the portfolio

## 🛠️ Tech Stack

### Core Technologies
- **React** 19.2.3
- **TypeScript** 5.9.3
- **Vite** 7.2.4
- **TailwindCSS** 3.4.18

### UI Libraries & Components
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Intersection Observer** - Scroll-based animations

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **React Compiler** - Performance optimization

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and SVGs
│   ├── components/     # React components
│   │   ├── layout/     # Layout components (Section, MaxWidthWrapper, etc.)
│   │   ├── sections/   # Page sections (Hero, About, Skills, etc.)
│   │   └── ui/         # Reusable UI components (Button, Card, Dialog, etc.)
│   ├── data/           # Data files (projects, skills, experience)
│   ├── lib/            # Utility functions
│   ├── styles/         # Theme configuration
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── package.json
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # TailwindCSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5174`

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 🎨 Customization

### Updating Personal Information

- **Hero Section**: Edit `src/components/sections/Hero.tsx`
- **About Section**: Edit `src/components/sections/About.tsx`
- **Skills**: Update `src/data/skills.ts`
- **Experience**: Update `src/data/experience.ts`
- **Projects**: Update `src/data/projects.ts`
- **Contact**: Edit `src/components/sections/Contact.tsx`

### Styling

The project uses TailwindCSS with custom theme colors defined in `tailwind.config.js`. The sci-fi theme colors include:
- `sci-green` - Primary accent color
- `sci-orange` - Secondary accent color
- `sci-dark` - Dark background
- `sci-text` - Text colors

Custom styles are defined in `src/index.css` and `src/App.css`.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy

## 📄 License

This project is private and proprietary.

## 👤 Author

**Daniel Heredia**
- Software Engineer
- Location: Ottawa, ON
- Specializing in React, Next.js, TypeScript, and AI agentic systems

---

> PORTFOLIO SYSTEM v1.0 | DANIEL HEREDIA © 2024
