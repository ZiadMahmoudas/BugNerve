import Reveal from '../ui/Reveal'

export default function StatStrip({ items }) {
  return (
    <section className="stat-strip">
      <div className="container stat-strip__grid">
        {items.map((item, index) => (
          <Reveal direction="up" delay={index * 70} key={item.label}>
            <div className="stat-strip__item"><strong>{item.value}</strong><span>{item.label}</span></div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
