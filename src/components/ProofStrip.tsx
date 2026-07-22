import { useApp } from '../context/AppContext'
import { t, ui } from '../data/content'
import { Reveal } from './Reveal'

export function ProofStrip() {
  const { lang } = useApp()

  return (
    <section className="proof" aria-label={t(ui.proof.eyebrow, lang)}>
      <div className="container">
        <Reveal className="proof__inner">
          <p className="proof__eyebrow">{t(ui.proof.eyebrow, lang)}</p>
          <ul className="proof__grid">
            {ui.proof.items.map((item) => (
              <li key={item.label.en}>
                <span className="proof__label">{t(item.label, lang)}</span>
                <strong className="proof__value">{t(item.value, lang)}</strong>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
