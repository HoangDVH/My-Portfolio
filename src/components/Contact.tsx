import { useApp } from '../context/AppContext'
import { profileMeta, t, ui } from '../data/content'
import { Reveal } from './Reveal'

export function Contact() {
  const { lang } = useApp()

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">{t(ui.contact.eyebrow, lang)}</p>
          <h2 className="contact__title">{t(ui.contact.title, lang)}</h2>
          <p className="contact__lead">{t(ui.contact.lead, lang)}</p>

          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${profileMeta.email}`}>
              {t(ui.contact.emailMe, lang)}
            </a>
            <a
              className="btn btn--ghost"
              href={profileMeta.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn--ghost"
              href={profileMeta.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <dl className="contact__meta">
            <div>
              <dt>{t(ui.contact.email, lang)}</dt>
              <dd>
                <a href={`mailto:${profileMeta.email}`}>{profileMeta.email}</a>
              </dd>
            </div>
            <div>
              <dt>{t(ui.contact.phone, lang)}</dt>
              <dd>
                <a href={profileMeta.phoneHref}>{profileMeta.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>{t(ui.contact.based, lang)}</dt>
              <dd>{profileMeta.location}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  const { lang } = useApp()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {profileMeta.name}
        </p>
        <p>{t(ui.footer.role, lang)}</p>
      </div>
    </footer>
  )
}
