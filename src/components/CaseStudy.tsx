import { useEffect, type CSSProperties } from 'react'
import { useApp } from '../context/AppContext'
import { projects, t, ui } from '../data/content'

type CaseStudyProps = {
  id: string
}

export function CaseStudy({ id }: CaseStudyProps) {
  const { lang, closeCase } = useApp()
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCase()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeCase])

  if (!project) {
    return (
      <div className="case" role="dialog" aria-modal="true">
        <div className="case__panel">
          <button type="button" className="case__back" onClick={closeCase}>
            ← {t(ui.caseStudy.back, lang)}
          </button>
          <p>{t(ui.caseStudy.notFound, lang)}</p>
        </div>
      </div>
    )
  }

  const cs = project.caseStudy

  return (
    <div className="case" role="dialog" aria-modal="true" aria-labelledby="case-title">
      <div className="case__backdrop" onClick={closeCase} aria-hidden="true" />
      <div className="case__panel">
        <div className="case__top">
          <button type="button" className="case__back" onClick={closeCase}>
            ← {t(ui.caseStudy.back, lang)}
          </button>
          <div className="case__actions">
            {project.live && (
              <a
                className="btn btn--ghost"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                {t(ui.work.live, lang)}
              </a>
            )}
            <a
              className="btn btn--primary"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              {t(ui.work.github, lang)}
            </a>
          </div>
        </div>

        <div
          className="case__hero"
          style={{ '--project-accent': project.accent } as CSSProperties}
        >
          <img src={project.image} alt={t(project.name, lang)} />
        </div>

        <header className="case__header">
          <p className="section__eyebrow">{t(ui.work.caseStudy, lang)}</p>
          <h2 id="case-title">{t(project.name, lang)}</h2>
          <p>{t(project.tagline, lang)}</p>
        </header>

        <dl className="case__meta">
          <div>
            <dt>{t(ui.caseStudy.role, lang)}</dt>
            <dd>{t(project.role, lang)}</dd>
          </div>
          <div>
            <dt>{t(ui.caseStudy.period, lang)}</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>{t(ui.caseStudy.team, lang)}</dt>
            <dd>{t(project.team, lang)}</dd>
          </div>
        </dl>

        <div className="case__grid">
          <section>
            <h3>{t(ui.caseStudy.overview, lang)}</h3>
            <p>{t(cs.overview, lang)}</p>
          </section>
          <section>
            <h3>{t(ui.caseStudy.challenge, lang)}</h3>
            <p>{t(cs.challenge, lang)}</p>
          </section>
          <section>
            <h3>{t(ui.caseStudy.solution, lang)}</h3>
            <p>{t(cs.solution, lang)}</p>
          </section>
          <section>
            <h3>{t(ui.caseStudy.outcome, lang)}</h3>
            <p>{t(cs.outcome, lang)}</p>
          </section>
        </div>

        <section className="case__bullets">
          <ul>
            {cs.bullets.map((item) => (
              <li key={item.en}>{t(item, lang)}</li>
            ))}
          </ul>
        </section>

        <section className="case__stack">
          <h3>{t(ui.caseStudy.stack, lang)}</h3>
          <ul className="tech-row">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
