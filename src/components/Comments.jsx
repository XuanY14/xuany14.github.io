import { useEffect, useRef } from 'react'
import { giscus, isGiscusConfigured } from '../config/comments.js'

export default function Comments({ theme }) {
  const ref = useRef(null)

  const load = () => {
    if (!isGiscusConfigured() || !ref.current) return
    if (ref.current.querySelector('script')) return
    const s = document.createElement('script')
    s.src = 'https://giscus.app/client.js'
    s.async = true
    s.crossOrigin = 'anonymous'
    s.setAttribute('data-repo', giscus.repo)
    s.setAttribute('data-repo-id', giscus.repoId)
    s.setAttribute('data-category', giscus.category)
    s.setAttribute('data-category-id', giscus.categoryId)
    s.setAttribute('data-mapping', giscus.mapping)
    s.setAttribute('data-strict', '0')
    s.setAttribute('data-reactions-enabled', giscus.reactionsEnabled ? '1' : '0')
    s.setAttribute('data-emit-metadata', '0')
    s.setAttribute('data-input-position', 'bottom')
    s.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
    s.setAttribute('data-lang', giscus.lang)
    s.setAttribute('data-loading', 'lazy')
    ref.current.appendChild(s)
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 主题切换时同步 Giscus
  useEffect(() => {
    const iframe = document.querySelector('iframe.giscus-frame')
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        { giscus: { setConfig: { theme: theme === 'dark' ? 'dark' : 'light' } } },
        'https://giscus.app'
      )
    }
  }, [theme])

  return (
    <section id="comments">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Comments</span>
          <h2>留言区</h2>
          <p>欢迎在下方留言、提问或与我交流～</p>
        </div>
        {!isGiscusConfigured() && (
          <div className="comments-note reveal">
            评论区由 <a href="https://giscus.app" target="_blank" rel="noreferrer">Giscus</a>（GitHub Discussions）驱动。启用前请：
            <b>①</b> 在仓库 <b>Settings → Features</b> 开启 <b>Discussions</b>；
            <b>②</b> 到 <a href="https://giscus.app" target="_blank" rel="noreferrer">giscus.app</a> 获取并填写
            <code> repoId </code> / <code>categoryId</code>（详见 README）。填写后评论即可正常显示。
          </div>
        )}
        <div className="giscus" ref={ref} />
      </div>
    </section>
  )
}
