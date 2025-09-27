import './sections.css'
import { useEffect, useMemo, useState } from 'react'
import RcCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function Calendar() {
  const targetDate = useMemo(() => new Date(2025, 9, 24), []) // 2025-10-24
  const [value, setValue] = useState<Date>(targetDate)
  const [remain, setRemain] = useState<{ days: number; hours: number; minutes: number; seconds: number; totalMs: number }>(() => {
    const ms = targetDate.getTime() - Date.now()
    const safe = Math.max(0, ms)
    const d = Math.floor(safe / (1000 * 60 * 60 * 24))
    const h = Math.floor((safe / (1000 * 60 * 60)) % 24)
    const m = Math.floor((safe / (1000 * 60)) % 60)
    const s = Math.floor((safe / 1000) % 60)
    return { days: d, hours: h, minutes: m, seconds: s, totalMs: safe }
  })

  useEffect(() => {
    const t = setInterval(() => {
      const ms = targetDate.getTime() - Date.now()
      const safe = Math.max(0, ms)
      const d = Math.floor(safe / (1000 * 60 * 60 * 24))
      const h = Math.floor((safe / (1000 * 60 * 60)) % 24)
      const m = Math.floor((safe / (1000 * 60)) % 60)
      const s = Math.floor((safe / 1000) % 60)
      setRemain({ days: d, hours: h, minutes: m, seconds: s, totalMs: safe })
    }, 1000)
    return () => clearInterval(t)
  }, [targetDate])

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const sameDay = date.getFullYear() === targetDate.getFullYear() && date.getMonth() === targetDate.getMonth() && date.getDate() === targetDate.getDate()
      if (sameDay) return 'calendar-highlight'
    }
    return undefined
  }

  return (
    <div className="calendar-wrap">
      <RcCalendar
        value={value}
        onChange={(v: any) => setValue(v as Date)}
        tileClassName={tileClassName}
        locale="ko-KR"
        minDetail="month"
        maxDetail="month"
        next2Label={null}
        prev2Label={null}
        nextLabel={null}
        prevLabel={null}
        navigationLabel={({ date }) => `${date.getFullYear()}. ${date.getMonth() + 1}`}
        formatDay={(_, date) => String(date.getDate())}
      />
      <p className="calendar-caption">예식일: 2025년 10월 24 (금)</p>
        <p className="calendar-remaining">
          남은 시간: {remain.days}일 {remain.hours}시간 {remain.minutes}분 {remain.seconds}초
        </p>
    </div>
  )
}


