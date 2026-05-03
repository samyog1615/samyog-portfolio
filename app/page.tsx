import Cursor from '@/components/Cursor'
import Spotlight from '@/components/Spotlight'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Armory from '@/components/Armory'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Spotlight />
      <Nav />
      <main>
        <Hero />
        <Armory />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
