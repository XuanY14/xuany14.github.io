import { site } from '../config/site.js'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">About</span>
          <h2>关于我</h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            {site.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p style={{ marginTop: 18, color: 'var(--text-soft)' }}>
              📍 坐标：{site.location}
            </p>
          </div>
          <div className="reveal">
            <div className="stats">
              {site.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="v">{s.value}</div>
                  <div className="l">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
