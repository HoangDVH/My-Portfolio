import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import { profileMeta, t, ui } from '../data/content'

export function Nav() {
  const { lang, theme, toggleLang, toggleTheme, caseId } = useApp()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#work', label: t(ui.nav.work, lang) },
    { href: '#experience', label: t(ui.nav.experience, lang) },
    { href: '#skills', label: t(ui.nav.skills, lang) },
    { href: '#about', label: t(ui.nav.about, lang) },
    { href: '#contact', label: t(ui.nav.contact, lang) },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (mq.matches) setOpen(false)
    }
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open || caseId ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open, caseId])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden="true" />
          {profileMeta.brand}
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__controls">
          <button
            type="button"
            className="nav__chip"
            onClick={toggleLang}
            aria-label={lang === 'en' ? 'Switch to Vietnamese' : 'Switch to English'}
          >
            {lang === 'en' ? 'VI' : 'EN'}
          </button>
          <button
            type="button"
            className="nav__chip"
            onClick={toggleTheme}
            aria-label={
              theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            }
          >
            {theme === 'light' ? t(ui.theme.dark, lang) : t(ui.theme.light, lang)}
          </button>
          <a
            className="nav__cv"
            href={profileMeta.cv}
            target="_blank"
            rel="noreferrer"
            download="Dau-Vu-Hoang-CV.pdf"
          >
            {t(ui.nav.cv, lang)}
          </a>
          <a className="nav__cta" href={`mailto:${profileMeta.email}`}>
            {t(ui.nav.hire, lang)}
          </a>
        </div>

        <button
          type="button"
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`} hidden={!open}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="nav__drawer-controls">
          <button type="button" className="nav__chip" onClick={toggleLang}>
            {lang === 'en' ? 'Tiếng Việt' : 'English'}
          </button>
          <button type="button" className="nav__chip" onClick={toggleTheme}>
            {theme === 'light' ? t(ui.theme.dark, lang) : t(ui.theme.light, lang)}
          </button>
        </div>
        <a
          href={profileMeta.cv}
          target="_blank"
          rel="noreferrer"
          download="Dau-Vu-Hoang-CV.pdf"
          onClick={() => setOpen(false)}
        >
          {t(ui.nav.cv, lang)}
        </a>
        <a href={`mailto:${profileMeta.email}`} onClick={() => setOpen(false)}>
          {t(ui.nav.hire, lang)}
        </a>
      </div>
    </header>
  )
}
