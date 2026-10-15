import Hero from '../components/sections/Hero.jsx'
import SelectedWork from '../components/sections/SelectedWork.jsx'
import Services from '../components/sections/Services.jsx'
import Process from '../components/sections/Process.jsx'
import About from '../components/sections/About.jsx'
import Contact from '../components/sections/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <Process />
      <About />
      <Contact />
    </>
  )
}
