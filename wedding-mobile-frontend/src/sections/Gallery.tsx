import { useState } from 'react'
import './sections.css'

const sampleImages = Array.from({ length: 60 }).map((_, i) => `image/${i+4}.jpg`)

export default function Gallery() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? 33 : 9
  const toggle = () => {
    setExpanded((v) => {
      const next = !v
      if (!next) {
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
      }
      return next
    })
  }
  return (
    <section id="gallery" className="section container">
      <h2 className="section-title">갤러리</h2>
      <div className="gallery-grid">
        {sampleImages.slice(0, visible).map((src, idx) => (
          <img key={idx} className="gallery-item" src={src} alt={`gallery-${idx}`} />
        ))}
      </div>
      <div className="gallery-actions">
        <button className="gallery-more link" onClick={toggle}>{expanded ? '접기' : '더보기 ˅'}</button>
      </div>
    </section>
  )
}


