import { AppProvider, useApp } from './context/AppContext'
import { About } from './components/About'
import { CaseStudy } from './components/CaseStudy'
import { Contact, Footer } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { Skills } from './components/Skills'

function Portfolio() {
  const { caseId } = useApp()

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      {caseId ? <CaseStudy id={caseId} /> : null}
    </>
  )
}

export default function App() {
  return (
    <AppProvider>
      <Portfolio />
    </AppProvider>
  )
}
