import avatar from '../assets/avatar.png'
import { useApp } from '../context/AppContext'
import { coreStack, profileMeta, t, ui } from '../data/content'

export function Hero() {
  const { lang } = useApp()

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <div className="hero__identity fade-in" style={{ animationDelay: '0.05s' }}>
          <img
            src={avatar}
            alt={profileMeta.name}
            className="hero__avatar"
            width={96}
            height={96}
          />
          <p className="hero__eyebrow">{t(ui.hero.available, lang)}</p>
        </div>

        <h1 className="hero__name fade-in" style={{ animationDelay: '0.12s' }}>
          {profileMeta.name}
        </h1>

        <p className="hero__role fade-in" style={{ animationDelay: '0.2s' }}>
          {t(ui.hero.role, lang)}
        </p>

        <p className="hero__headline fade-in" style={{ animationDelay: '0.28s' }}>
          {t(ui.hero.headline, lang)}
        </p>

        <p className="hero__lead fade-in" style={{ animationDelay: '0.36s' }}>
          {t(ui.hero.lead, lang)}
        </p>

        <ul className="hero__stack fade-in" style={{ animationDelay: '0.44s' }}>
          {coreStack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="hero__actions fade-in" style={{ animationDelay: '0.52s' }}>
          <a className="btn btn--primary" href="#work">
            {t(ui.hero.ctaWork, lang)}
          </a>
          <a className="btn btn--ghost" href={`mailto:${profileMeta.email}`}>
            {t(ui.hero.ctaMail, lang)}
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#work" aria-label={t(ui.hero.scroll, lang)}>
        <span>{t(ui.hero.scroll, lang)}</span>
        <i />
      </a>
    </section>
  )
}
