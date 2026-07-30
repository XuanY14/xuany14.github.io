import { site } from '../config/site.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <span>
          © {year} {site.name} · 用 ❤️ 与 React 构建
        </span>
        <span>
          基于 <a href="https://vitejs.dev" target="_blank" rel="noreferrer">Vite</a> +{' '}
          <a href="https://react.dev" target="_blank" rel="noreferrer">React</a> · 部署于{' '}
          <a href="https://pages.github.com" target="_blank" rel="noreferrer">GitHub Pages</a>
        </span>
      </div>
    </footer>
  )
}
