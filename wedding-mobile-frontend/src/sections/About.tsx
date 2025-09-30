import './sections.css'

export default function About() {
  return (
    <section id="about" className="section container padded">
      <div className="about-section-container-padded">
        <h2 className="section-title">소개</h2>
        <div className="about-grid">
          <div className="about-card">
            <img
              className="about-photo"
              src="image/19.jpg"
              alt="신랑"
            />
            <div className="about-caption">
              <span className="about-role">신랑</span>
              <span className="about-name">신랑이름</span>
            </div>
            <p className="about-desc">아버지·어머님의 아들</p>
          </div>
          <div className="about-card">
            <img
              className="about-photo"
              src="image/14.jpg"
              alt="신부"
            />
            <div className="about-caption">
              <span className="about-role">신부</span>
              <span className="about-name">신부이름</span>
            </div>
            <p className="about-desc">아버지·어머님의 딸</p>
          </div>
        </div>
      </div>
      <p className="section-text">
        성실하고 따뜻한 마음으로 평생 함께할 준비가 되었습니다. <br />
        밝은 미소로 서로의 하루를 빛내며 사랑을 키워가겠습니다.
      </p>
    </section>
  )
}


