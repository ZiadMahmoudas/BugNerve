import Reveal from '../ui/Reveal'

export default function FeatureGrid({ items, className = '' }) {
  return (
    <div className={`marketing-feature-grid ${className}`}>
      {items.map((item, index) => {
        const Icon = item.icon
        return (
          <Reveal key={item.title} direction={index % 3 === 0 ? 'left' : index % 3 === 2 ? 'right' : 'up'} delay={(index % 3) * 70}>
            <article className="marketing-feature-card">
              {Icon && <div className="marketing-feature-card__icon"><Icon /></div>}
              {item.kicker && <span className="marketing-feature-card__kicker">{item.kicker}</span>}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.meta && <small>{item.meta}</small>}
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}
