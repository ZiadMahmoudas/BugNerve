import { FiZap } from 'react-icons/fi'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function ClosingCTA({ title = 'Make every bug report actionable.', text = 'Bring AI triage, repository intelligence, and human judgment into one connected workflow.' }) {
  return (
    <section className="marketing-closing">
      <div className="container">
        <Reveal direction="up">
          <div className="marketing-closing__box">
            <span className="marketing-closing__icon"><FiZap /></span>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="marketing-closing__actions"><Button href="/register">Start free</Button><Button href="/contact" variant="ghost">Request a demo</Button></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
