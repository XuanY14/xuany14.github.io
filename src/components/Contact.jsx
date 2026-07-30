import Icon from './Icon.jsx'
import { site } from '../config/site.js'

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="contact-wrap reveal">
          <span className="eyebrow" style={{ color: 'var(--accent)', fontWeight: 700 }}>
            Contact
          </span>
          <h2 style={{ fontSize: 30, fontWeight: 800, marginTop: 10 }}>保持联系</h2>
          <p>{site.contactText}</p>
          <a className="btn btn-primary" href={`mailto:${site.email}`}>
            <Icon name="email" size={16} /> {site.email}
          </a>
          <div className="hero-socials" style={{ justifyContent: 'center', marginTop: 26 }}>
            {site.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" title={s.label}>
                <Icon name={s.type} size={20} stroke={['email', 'website', 'code'].includes(s.type)} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
