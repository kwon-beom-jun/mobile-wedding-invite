import { useEffect, useState } from 'react'
import './sections.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const applyScrollLock = () => {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`
      }
    }
    const removeScrollLock = () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    if (open) applyScrollLock(); else removeScrollLock()
    return () => { removeScrollLock() }
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    setTimeout(() => {
      const target = document.getElementById(id)
      if (!target) return
      const header = document.querySelector('.app-header') as HTMLElement | null
      const extra = 0
      const offset = (header?.offsetHeight ?? 0) + extra
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }, 120)
  }

  return (
    <>
      <header className="app-header">
        <div className="app-header__left">
          {open ? (
            <button aria-label="닫기" className="hamburger open" onClick={() => setOpen(false)}>×</button>
          ) : (
            <button aria-label="메뉴" className="hamburger" onClick={() => setOpen(true)}>
              <span />
              <span />
              <span />
            </button>
          )}
        </div>
        <div className="app-header__title">신랑 <span className="heart">♥</span> 신부</div>
        <div className="app-header__right" />
      </header>

      <div className={`drawer ${open ? 'open' : ''}`}>
        <div className="drawer__panel">
          <button aria-label="닫기" className="drawer__close-top" onClick={() => setOpen(false)}>×</button>
          <div className="drawer__box">
          <nav className="drawer__nav">
            <a onClick={() => go('home')}>메인</a>
            <a onClick={() => go('intro')}>인사말</a>
            <a onClick={() => go('about')}>소개</a>
            <a onClick={() => go('gallery')}>갤러리</a>
            <a onClick={() => go('map')}>오시는 길</a>
            <a onClick={() => go('account')}>계좌번호</a>
            <a onClick={() => go('guestbook')}>방명록</a>
            <a onClick={() => go('timeline')}>함께한 시간</a>
          </nav>
          </div>
          
        </div>
        <div className="drawer__backdrop" onClick={() => setOpen(false)} />
      </div>
    </>
  )
}


