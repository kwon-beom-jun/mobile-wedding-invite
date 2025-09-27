import './App.css'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import About from './sections/About'
import Details from './sections/Details'
import Gallery from './sections/Gallery'
import Map from './sections/Map'
import Account from './sections/Account'
import RSVP from './sections/RSVP'
import Timeline from './sections/Timeline'
import Footer from './sections/Footer'
import ContactBar from './sections/ContactBar'
import MusicPlayer from './sections/MusicPlayer'
import Header from './sections/Header'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    let lastY = window.scrollY
    const observer = new IntersectionObserver(
      (entries) => {
        const currentY = window.scrollY
        const scrollingDown = currentY > lastY
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            if (scrollingDown) {
              el.classList.remove('no-anim')
              el.classList.add('in-view')
            } else {
              el.classList.add('no-anim')
              el.classList.add('in-view')
            }
          } else {
            el.classList.remove('in-view')
            el.classList.remove('no-anim')
          }
        })
        lastY = currentY
      },
      { threshold: 0.2 }
    )
    const sections = document.querySelectorAll('.section')
    sections.forEach((el) => el.classList.add('reveal'))
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <Header />
      <Hero />
      <Intro />
      <About />
      <Details />
      <Gallery />
      <Map />
      <Account />
      <RSVP />
      <Timeline />
      <Footer />
      <ContactBar />
      <MusicPlayer />
    </div>
  )
}

export default App
