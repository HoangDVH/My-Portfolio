import type { CSSProperties } from 'react'
import { useApp } from '../context/AppContext'
import { projects, t, ui } from '../data/content'
import { ProjectGallery } from './ProjectGallery'
import { Reveal } from './Reveal'

export function Projects() {
  const { lang, openCase } = useApp()
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal className="section__header">
          <p className="section__eyebrow">{t(ui.work.eyebrow, lang)}</p>
          <h2 className="section__title">{t(ui.work.title, lang)}</h2>
          <p className="section__desc">{t(ui.work.desc, lang)}</p>
        </Reveal>

        <div className="project-list">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <article
                className="project"
                style={{ '--project-accent': project.accent } as CSSProperties}
              >
                <div className="project__meta">
                  <span className="project__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{project.period}</span>
                  <span>{t(project.role, lang)}</span>
                  <span>{t(project.team, lang)}</span>
                </div>

                <div className="project__body">
                  <h3 className="project__name">{t(project.name, lang)}</h3>
                  <p className="project__tagline">{t(project.tagline, lang)}</p>

                  <ul className="project__highlights">
                    {project.highlights.map((item) => (
                      <li key={item.en}>{t(item, lang)}</li>
                    ))}
                  </ul>

                  <ul className="tech-row" aria-label="Tech stack">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  <div className="project__links">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn--primary btn--sm"
                      >
                        {t(ui.work.live, lang)}
                      </a>
                    )}
                    <button
                      type="button"
                      className="btn btn--ghost btn--sm"
                      onClick={() => openCase(project.id)}
                    >
                      {t(ui.work.caseStudy, lang)}
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-link"
                    >
                      {t(ui.work.github, lang)}
                    </a>
                  </div>
                </div>

                <div className="project__visual">
                  <ProjectGallery
                    images={project.images}
                    alt={t(project.name, lang)}
                    accent={project.accent}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
