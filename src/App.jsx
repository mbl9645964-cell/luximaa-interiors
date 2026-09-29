import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Services from './components/Services'
import Philosophy from './components/Philosophy'
import Stats from './components/Stats'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Materials from './components/Materials'
import CTASection from './components/CTASection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Projects />
        <Services />
        <Philosophy />
        <Stats />
        <Process />
        <Testimonials />
        <Materials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
