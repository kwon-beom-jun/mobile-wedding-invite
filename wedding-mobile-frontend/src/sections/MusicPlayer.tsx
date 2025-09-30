import { useEffect, useRef, useState } from 'react'
import './sections.css'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [needsStart, setNeedsStart] = useState(false)

  useEffect(() => {
    const base = (import.meta as any).env.BASE_URL || '/'
    const src = `${base}wedding-wedding-trailer-music.mp3`
    const audio = new Audio(src)
    audio.loop = true
    audioRef.current = audio

    const tryAutoplay = async () => {
      try {
        audio.currentTime = 0
        await audio.play()
        setPlaying(true)
        setNeedsStart(false)
      } catch (e) {
        setPlaying(false)
        setNeedsStart(true)
      }
    }
    tryAutoplay()

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      try {
        await audio.play()
        setPlaying(true)
        setNeedsStart(false)
      } catch (e) {}
    }
  }

  const handleStart = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      audio.currentTime = 0
      await audio.play()
      setPlaying(true)
      setNeedsStart(false)
    } catch {}
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const share = async () => {
    const data = { title: document.title, url: window.location.href }
    try {
      if ((navigator as any).share) {
        await (navigator as any).share(data)
      } else {
        await navigator.clipboard.writeText(data.url)
        alert('링크가 복사되었습니다.')
      }
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className="fab">
      {needsStart && (
        <button className="start-audio" onClick={handleStart}>음악 시작</button>
      )}
      <button className={`music-btn ${playing ? 'playing' : ''}`} aria-label="배경음악" onClick={toggle}>
        <span className={`music-icon ${playing ? 'pause' : 'play'}`}>
          {playing ? (
            // pause icon SVG (consistent across platforms)
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" rx="1.5" fill="currentColor" />
              <rect x="14" y="4" width="4" height="16" rx="1.5" fill="currentColor" />
            </svg>
          ) : (
            // play icon SVG
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path d="M8 5l11 7-11 7V5z" fill="currentColor" />
            </svg>
          )}
        </span>
      </button>
      <button className="fab-btn top" aria-label="맨 위로" onClick={scrollTop}><span className="wide-chev">˄</span></button>
      <button className="fab-btn share" aria-label="공유" onClick={share}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M8.6 13.5 15.4 17.5" />
          <path d="M15.4 6.5 8.6 10.5" />
        </svg>
      </button>
    </div>
  )
}


