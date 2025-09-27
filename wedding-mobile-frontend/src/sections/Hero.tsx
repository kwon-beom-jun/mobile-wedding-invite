import './sections.css'

type HeroProps = {
  coupleNames?: string
  dateText?: string
  coverImageUrl?: string
}

export default function Hero({
  coupleNames = '신랑 · 신부',
  dateText = '2025. 11. 08 (SAT) 12:30',
  // coverImageUrl = 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop',
  coverImageUrl = 'https://images.unsplash.com/photo-1758221943117-6e1f900b957a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}: HeroProps) {
  return (
    <section id="home" className="hero">
      <img className="hero-bg" src={coverImageUrl} alt="cover" />
      <div className="hero-overlay" />
      <div className="hero-content container">
        <p className="hero-subtitle">모시는 글</p>
        <h1 className="hero-title">{coupleNames}</h1>
        <p className="hero-date">{dateText}</p>
      </div>
    </section>
  )
}


