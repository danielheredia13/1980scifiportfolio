import { NavBar } from "./components/NavBar"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Skills } from "./components/sections/Skills"
import { Experience } from "./components/sections/Experience"
import { Projects } from "./components/sections/Projects"
import { Contact } from "./components/sections/Contact"

function App() {
  return (
    <div className="min-h-screen ">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-sci-green py-6 text-center">
        <p className="text-sci-textDark font-mono text-sm">
          &gt; PORTFOLIO SYSTEM v1.0 | DANIEL HEREDIA © {new Date().getFullYear()}
        </p>
      </footer>
      <script src="http://localhost:5000/api/widget.js?chatbotId=693ae239fe0c75f3bf158200" async></script>
    </div>
  )
}

export default App
