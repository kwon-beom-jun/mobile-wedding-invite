import { useState } from 'react'
import './sections.css'

type Entry = { label: string; account: string; meta: string }

const groomEntries: Entry[] = [
  { label: '신랑', account: '국민 123456-12-345678', meta: '예금주 신랑이름' },
  { label: '신랑 아버지', account: '국민 222222-22-222222', meta: '예금주 김OO' },
  { label: '신랑 어머니', account: '국민 333333-33-333333', meta: '예금주 박OO' },
]
const brideEntries: Entry[] = [
  { label: '신부', account: '신한 987-654-321000', meta: '예금주 신부이름' },
  { label: '신부 아버지', account: '신한 444-444-444444', meta: '예금주 이OO' },
  { label: '신부 어머니', account: '신한 555-555-555555', meta: '예금주 최OO' },
]

export default function Account() {
  const [open, setOpen] = useState<'groom' | 'bride' | null>(null)
  const copy = (text: string) => navigator.clipboard.writeText(text)
  return (
    <section id="account" className="section container padded">
      <h2 className="section-title">마음 전하실 곳</h2>
      <p className="account-note">
        참석이 어려워 직접 축하를 전하지 못하는 분들을 위해. <br />
        계좌번호를 기재했습니다. <br />
        너른 마음으로 양해 부탁드립니다. <br />
        전해 주시는 진심은 소중히 간직하고 보답하겠습니다. <br />
      </p>
      <div className="accordion">
        <div className="accordion-group">
          <div className="accordion-header" onClick={() => setOpen((v) => v === 'groom' ? null : 'groom')}>
            <span>신랑측</span>
            <span className="chev">{open === 'groom' ? '˄' : '˅'}</span>
          </div>
          {open === 'groom' && (
            <div className="accordion-list">
              {groomEntries.map((e, i) => (
                <div className="account-entry" key={i}>
                  <div className="account-lines">
                    <div className="account-line-1">{e.label}</div>
                    <div className="account-line-2">{e.account}</div>
                    <div className="account-line-3">{e.meta}</div>
                  </div>
                  <button className="account-copy" onClick={() => copy(`${e.account} ${e.meta}`)}>복사</button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="accordion-group">
          <div className="accordion-header" onClick={() => setOpen((v) => v === 'bride' ? null : 'bride')}>
            <span>신부측</span>
            <span className="chev">{open === 'bride' ? '˄' : '˅'}</span>
          </div>
          {open === 'bride' && (
            <div className="accordion-list">
              {brideEntries.map((e, i) => (
                <div className="account-entry" key={i}>
                  <div className="account-lines">
                    <div className="account-line-1">{e.label}</div>
                    <div className="account-line-2">{e.account}</div>
                    <div className="account-line-3">{e.meta}</div>
                  </div>
                  <button className="account-copy" onClick={() => copy(`${e.account} ${e.meta}`)}>복사</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}


