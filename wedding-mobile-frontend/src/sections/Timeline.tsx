import { useEffect, useState } from 'react'
import './sections.css'

type Elapsed = { years: number; months: number; days: number; hours: number; minutes: number; seconds: number; totalDays: number }

const START_DATE = new Date(2019, 9, 13, 0, 0, 0) // 2019-10-13

function calculateElapsed(from: Date, to: Date): Elapsed {
  let years = to.getFullYear() - from.getFullYear()
  let months = to.getMonth() - from.getMonth()
  let days = to.getDate() - from.getDate()
  let hours = to.getHours() - from.getHours()
  let minutes = to.getMinutes() - from.getMinutes()
  let seconds = to.getSeconds() - from.getSeconds()

  if (seconds < 0) { seconds += 60; minutes-- }
  if (minutes < 0) { minutes += 60; hours-- }
  if (hours < 0) { hours += 24; days-- }
  if (days < 0) {
    const lastMonth = new Date(to.getFullYear(), to.getMonth(), 0)
    days += lastMonth.getDate()
    months--
  }
  if (months < 0) { months += 12; years-- }

  const totalDays = Math.floor((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24))
  return { years, months, days, hours, minutes, seconds, totalDays }
}

export default function Timeline() {
  const [elapsed, setElapsed] = useState<Elapsed>(() => calculateElapsed(START_DATE, new Date()))

  useEffect(() => {
    const t = setInterval(() => {
      setElapsed(calculateElapsed(START_DATE, new Date()))
    }, 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="timeline" className="section container padded">
      <h2 className="section-title">함께한 시간</h2>
      <div className="timeline">
        <p className="timeline-start">2019년 10월 13일</p>
        <p className="timeline-elapsed">
          {elapsed.years}년 {elapsed.months}개월 {elapsed.days}일 {elapsed.hours}시간 {elapsed.minutes}분 {elapsed.seconds}초
        </p>
        <p className="timeline-days">총 {elapsed.totalDays}일 지났습니다.</p>
      </div>
    </section>
  )
}


