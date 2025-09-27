import './sections.css'

export default function Map() {
  return (
    <section id="map" className="section container">
      <h2 className="section-title">오시는 길</h2>
      <div className="map-embed">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.943824180987!2d127.1018999!3d37.514575799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca52dcf2c6e19%3A0x9d27f1a7b5d59490!2z7YyM67mE7Iuc7J2Y7Lm064uI66m0IOq1rOqzoA!5e0!3m2!1sko!2skr!4v1699860000000!5m2!1sko!2skr"
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <ul className="map-tips">
        <li className="map-tips-li">지하철 2호선 잠실역 10번 출구 도보 5분</li>
        <li className="map-tips-li">주차 2시간 무료</li>
      </ul>
    </section>
  )
}


