import Icon from './Icon.jsx'
import { site } from '../config/site.js'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-text reveal">
          <span className="eyebrow">
            <Icon name="code" size={16} stroke /> {site.title}
          </span>
          <h1>
            你好，我是 <span className="grad">{site.name}</span>
            <br />
            {site.tagline}
          </h1>
          <p className="lead">{site.bio}</p>
          <div className="cta">
            <a className="btn btn-primary" href="#projects">
              查看项目 <Icon name="arrow" size={16} stroke />
            </a>
            <a className="btn btn-ghost" href="#contact">
              联系我
            </a>
          </div>
          <div className="hero-socials">
            {site.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" title={s.label}>
                <Icon name={s.type} size={20} stroke={['email', 'website', 'code'].includes(s.type)} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-card reveal">
          <img src={site.avatar} alt={`${site.name} 头像`} />
          <span className="badge">@{site.nickname}</span>
        </div>
      </div>
    </section>
  )
}
