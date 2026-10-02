import { featureCards } from '../data/homeData'
import SectionHeading from '../components/ui/SectionHeading'

export default function ProductIntro() {
  return (
    <section data-reveal="left" className="section product-intro" id="product">
      <div className="container">
        <SectionHeading eyebrow="Why BugNerve" title="Stop guessing who should handle the next bug." text="BugNerve turns a messy bug report into a clear next step: understand the problem, avoid duplicated work, find the right developer, then let the team decide." />
        <div className="feature-grid">
          {featureCards.map(({ icon: Icon, title, text, tone }) => (
            <article className={`feature-card feature-card--${tone}`} key={title}>
              <div className="feature-card__icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="feature-card__line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
