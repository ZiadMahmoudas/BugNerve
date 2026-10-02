import { FiCheck, FiLock, FiZap } from 'react-icons/fi'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import { pricing } from '../data/homeData'

export default function Pricing() {
  return (
    <section data-reveal="up" className="section pricing" id="pricing">
      <div className="container">
        <SectionHeading eyebrow="Simple plans" title="Start with bug tracking. Upgrade when you want smarter matching." text="Every new workspace can try Pro for 14 days. Your team roles stay exactly the same if the trial ends — only the advanced recommendation features change." align="center" />
        <div className="pricing-grid">
          {pricing.map(plan => (
            <article className={`price-card ${plan.highlighted ? 'price-card--pro' : ''}`} key={plan.name}>
              {plan.highlighted && <div className="price-card__badge"><FiZap /> 14-day Pro trial</div>}
              <div className="price-card__header"><h3>{plan.name}</h3><strong>{plan.price}</strong><p>{plan.note}</p></div>
              <div className="price-card__features">
                {plan.features.map(item => <div key={item}><FiCheck /><span>{item}</span></div>)}
              </div>
              <Button href="#top" variant={plan.highlighted ? 'primary' : 'ghost'}>{plan.highlighted ? 'Try Pro' : 'Start free'}</Button>
              {!plan.highlighted && <small className="price-card__fine"><FiLock /> Ranked best-fit developer suggestions are available in Pro.</small>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
