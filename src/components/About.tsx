import { useApp } from '../context/AppContext'
import {
  certifications,
  education,
  profileMeta,
  t,
  ui,
} from '../data/content'
import { Reveal } from './Reveal'

export function About() {
  const { lang } = useApp()

  return (
    <section className="section section--alt" id="about">
      <div className="container about">
        <Reveal className="section__header">
          <p className="section__eyebrow">{t(ui.about.eyebrow, lang)}</p>
          <h2 className="section__title">{t(ui.about.title, lang)}</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__copy">
            <p>{t(ui.about.p1, lang)}</p>
            <p>{t(ui.about.p2, lang)}</p>
          </Reveal>

          <Reveal className="about__aside" delay={100}>
            <div className="about__block">
              <h3>{t(ui.about.education, lang)}</h3>
              <p className="about__strong">{t(education.school, lang)}</p>
              <p>
                {t(education.degree, lang)} · {education.period}
              </p>
            </div>

            <div className="about__block">
              <h3>{t(ui.about.certifications, lang)}</h3>
              {certifications.map((cert) => (
                <p key={cert.name}>
                  <span className="about__strong">{cert.name}</span>
                  <span>
                    {' '}
                    · {t(cert.detail, lang)} · {cert.year}
                  </span>
                </p>
              ))}
            </div>

            <div className="about__block">
              <h3>{profileMeta.location.split(',')[0]}</h3>
              <p>
                <a href={`mailto:${profileMeta.email}`}>{profileMeta.email}</a>
              </p>
              <p>
                <a href={profileMeta.phoneHref}>{profileMeta.phoneDisplay}</a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
