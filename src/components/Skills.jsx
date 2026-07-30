import { useEffect, useRef, useState } from 'react'
import { site } from '../config/site.js'

export default function Skills() {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true)
          ob.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <section id="skills" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Skills</span>
          <h2>技能栈</h2>
          <p>持续学习，也在持续实践</p>
        </div>
        <div className="skills reveal" ref={ref}>
          {site.skills.map((s) => (
            <div className="skill" key={s.name}>
              <div className="skill-top">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="bar">
                <i style={{ width: show ? `${s.level}%` : '0%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
