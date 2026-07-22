import { useApp } from '../context/AppContext'
import {
  coreStack,
  skillGroupLabels,
  skillItems,
  softSkills,
  spokenLanguages,
  t,
  ui,
} from '../data/content'
import { Reveal } from './Reveal'

const coreSet = new Set(coreStack.map((s) => s.toLowerCase()))

function supportingItems(items: readonly string[]) {
  return items.filter((item) => {
    const key = item.toLowerCase().replace('javascript (es6+)', 'javascript')
    if (coreSet.has(key)) return false
    if (key === 'reactjs' && coreSet.has('react')) return false
    return true
  })
}

export function Skills() {
  const { lang } = useApp()

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <Reveal className="section__header section__header--wide">
          <p className="section__eyebrow">{t(ui.skills.eyebrow, lang)}</p>
          <h2 className="section__title">{t(ui.skills.title, lang)}</h2>
          <p className="section__desc">{t(ui.skills.desc, lang)}</p>
        </Reveal>

        <Reveal className="skills-core" delay={40}>
          <p className="skills-core__label">{t(ui.skills.core, lang)}</p>
          <ul className="skills-core__list">
            {coreStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="skills-support" delay={80}>
          <dl className="skills-support__list">
            {skillGroupLabels.map((label, index) => {
              const items = supportingItems(skillItems[index])
              if (items.length === 0) return null
              return (
                <div key={label.en} className="skills-support__row">
                  <dt>{t(label, lang)}</dt>
                  <dd>{items.join(' · ')}</dd>
                </div>
              )
            })}
          </dl>
        </Reveal>

        <Reveal className="skills-meta" delay={100}>
          <p>
            <span>{t(ui.skills.languages, lang)}</span>
            {spokenLanguages
              .map((item) => `${t(item.name, lang)} (${t(item.level, lang)})`)
              .join(' · ')}
          </p>
          <p>
            <span>{t(ui.skills.professional, lang)}</span>
            {softSkills.map((skill) => t(skill, lang)).join(' · ')}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
