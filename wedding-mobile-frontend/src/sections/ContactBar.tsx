import './sections.css'

export default function ContactBar() {
  const openPhone = (tel: string) => {
    window.location.href = `tel:${tel}`
  }
  const openMap = () => {
    const url = 'https://map.naver.com/v5/search/%EB%8D%94%EB%B8%94%EC%9C%A0%EC%BB%A8%EB%B2%A4%EC%85%98'
    window.open(url, '_blank')
  }
  const openAccount = () => {
    document.getElementById('account')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className="contact-bar">
      <button className="contact-item" onClick={() => openPhone('01012345678')}>연락하기</button>
      <button className="contact-item" onClick={openMap}>오시는길</button>
      <button className="contact-item" onClick={openAccount}>마음전하기</button>
    </nav>
  )
}


