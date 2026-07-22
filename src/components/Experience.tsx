import { useApp } from '../context/AppContext'
import { experiences, t, ui } from '../data/content'
import { Reveal } from './Reveal'

function companyLabel(
  company: string | { en: string; vi: string },
  lang: 'en' | 'vi',
) {
  return typeof company === 'string' ? company : t(company, lang)
}

export function Experience() {
  const { lang } = useApp()

  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <Reveal className="section__header">
          <p className="section__eyebrow">{t(ui.experience.eyebrow, lang)}</p>
          <h2 className="section__title">{t(ui.experience.title, lang)}</h2>
          <p className="section__desc">{t(ui.experience.desc, lang)}</p>
        </Reveal>

        <ol className="timeline">
          {experiences.map((job, index) => (
            <Reveal
              key={companyLabel(job.company, 'en')}
              delay={index * 90}
              as="li"
              className="timeline__item"
            >
              <div className="timeline__rail" aria-hidden="true">
                <span className="timeline__dot" />
              </div>

              <div className="timeline__content">
                <div className="timeline__top">
                  <div>
                    <h3>{companyLabel(job.company, lang)}</h3>
                    <p className="timeline__role">
                      {t(job.role, lang)}
                      {job.team ? ` · ${t(job.team, lang)}` : ''}
                    </p>
                  </div>
                  <time>{job.period}</time>
                </div>

                <ul className="timeline__points">
                  {job.highlights.map((point) => (
                    <li key={point.en}>{t(point, lang)}</li>
                  ))}
                </ul>

                {job.stack.length > 0 && (
                  <ul className="tech-row" aria-label="Technologies">
                    {job.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                )}

                {'link' in job && job.link && (
                  <a
                    className="text-link"
                    href={job.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t(ui.experience.related, lang)}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
