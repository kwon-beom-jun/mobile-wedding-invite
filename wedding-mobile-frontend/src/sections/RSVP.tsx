import { useState } from 'react'
import './sections.css'

export default function RSVP() {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState(1)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const sanitizeGuests = (raw: string) => {
    const digits = raw.replace(/[^0-9]/g, '')
    const n = parseInt(digits, 10)
    if (isNaN(n) || n < 1) return 1
    return n
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="rsvp" className="section container padded">
      <h2 className="section-title">참석 의사 전달</h2>
      <div className="guestbook-card">
        {sent ? (
          <div className="toast">전달되었습니다. 감사합니다!</div>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <div className="field">
              <label className="label">이름</label>
              <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" required />
            </div>

            <div className="field">
              <label className="label">인원</label>
              <input
                className="input"
                type="number"
                min={1}
                step={1}
                inputMode="numeric"
                value={guests}
                onChange={(e) => setGuests(sanitizeGuests(e.target.value))}
                onBlur={() => setGuests((g) => (g < 1 ? 1 : g))}
                onKeyDown={(e) => {
                  if (['e', 'E', '+', '-', '.'].includes(e.key)) e.preventDefault()
                }}
              />
            </div>

            <div className="field">
              <label className="label">메시지</label>
              <textarea className="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="축하 메시지를 남겨주세요" />
            </div>

            <button className="btn primary" type="submit">보내기</button>
          </form>
        )}
      </div>
    </section>
  )
}


