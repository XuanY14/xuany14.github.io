import Icon from './Icon.jsx'
import { site } from '../config/site.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Projects</span>
          <h2>项目作品</h2>
          <p>一些我做过或正在做的东西</p>
        </div>
        <div className="projects-grid">
          {site.projects.map((p) => (
            <div className="card reveal" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="card-links">
                {p.link && p.link !== '#' && (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    <Icon name="extern" size={15} stroke /> 预览
                  </a>
                )}
                {p.repo && p.repo !== '#' && (
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    <Icon name="github" size={15} /> 源码
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
