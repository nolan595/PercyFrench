import Hero from '@/components/Hero'
import About from '@/components/About'
import ImpactStats from '@/components/ImpactStats'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ImpactStats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
