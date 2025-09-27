import './sections.css'
import Calendar from './Calendar'

export default function Details() {
  return (
    <section id="details" className="section container padded">
      <h2 className="section-title">예식 안내</h2>
      <div className="details-card">
        <div className="details-row">
          <span className="label">일시</span>
          <span className="value">2025년 10월 24일 금요일 오후 3시 30분</span>
        </div>
        <div className="details-row">
          <span className="label">장소</span>
          <span className="value">더블유컨벤션 5층 그랜드볼룸</span>
        </div>
        <div className="details-row">
          <span className="label">주소</span>
          <span className="value">서울 송파구 올림픽로 300</span>
        </div>
      </div>
      <div style={{ marginTop: 12 }}>
        <Calendar />
      </div>
    </section>
  )
}


