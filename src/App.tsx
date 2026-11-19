import { MotionConfig } from 'framer-motion'
import { Loader } from './components/Loader'
import { Footer } from './layouts/Footer'
import { Navbar } from './layouts/Navbar'
import { About } from './sections/About'
import { Approach } from './sections/Approach'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Platforms } from './sections/Platforms'
import { Projects } from './sections/Projects'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Loader />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:rounded-lg focus:bg-violet focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Platforms />
        <Experience />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
