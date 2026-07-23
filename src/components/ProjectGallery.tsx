import { useState, type CSSProperties } from 'react'

type ProjectGalleryProps = {
  images: string[]
  alt: string
  accent?: string
}

export function ProjectGallery({ images, alt, accent }: ProjectGalleryProps) {
  const shots = images.length > 0 ? images : []
  const [active, setActive] = useState(0)

  if (shots.length === 0) return null

  const current = Math.min(active, shots.length - 1)

  return (
    <div
      className="project-gallery"
      style={accent ? ({ '--project-accent': accent } as CSSProperties) : undefined}
    >
      <div className="project-gallery__main">
        <img src={shots[current]} alt={`${alt} — ${current + 1}`} />
      </div>

      {shots.length > 1 && (
        <div className="project-gallery__thumbs" role="tablist" aria-label={`${alt} gallery`}>
          {shots.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              role="tab"
              aria-selected={index === current}
              className={`project-gallery__thumb ${index === current ? 'is-active' : ''}`}
              onClick={() => setActive(index)}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
