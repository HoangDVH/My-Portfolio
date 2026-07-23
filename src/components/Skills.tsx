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
          <div className="skills-support__list">
            {skillGroupLabels.map((label, index) => {
              const items = supportingItems(skillItems[index])
              if (items.length === 0) return null
              return (
                <div key={label.en} className="skills-support__row">
                  <p className="skills-support__label">{t(label, lang)}</p>
                  <ul className="skills-chips">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Reveal>

        <Reveal className="skills-meta" delay={100}>
          <div className="skills-meta__block">
            <p className="skills-support__label">{t(ui.skills.languages, lang)}</p>
            <ul className="skills-chips skills-chips--soft">
              {spokenLanguages.map((item) => (
                <li key={item.name.en}>
                  {t(item.name, lang)}
                  <span>{t(item.level, lang)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="skills-meta__block">
            <p className="skills-support__label">{t(ui.skills.professional, lang)}</p>
            <ul className="skills-chips skills-chips--soft">
              {softSkills.map((skill) => (
                <li key={skill.en}>{t(skill, lang)}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
