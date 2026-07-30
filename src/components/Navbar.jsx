import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { site } from '../config/site.js'

const links = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '关于' },
  { href: '#skills', label: '技能' },
  { href: '#projects', label: '项目' },
  { href: '#contact', label: '联系' },
  { href: '#comments', label: '留言' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="logo">{site.name.charAt(0)}</span>
          <span>{site.name}</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="切换主题"
            title={theme === 'dark' ? '切换到亮色' : '切换到暗色'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} stroke />
          </button>
          <button
            className="icon-btn nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="菜单"
          >
            <Icon name={open ? 'close' : 'menu'} size={18} stroke />
          </button>
        </div>
      </div>
    </header>
  )
}
