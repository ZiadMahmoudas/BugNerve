import { FiArrowRight, FiUsers } from 'react-icons/fi'
import Button from '../components/ui/Button'

export default function FinalCTA() {
  return (
    <section data-reveal="up" className="final-cta">
      <div className="container">
        <div className="final-cta__box">
          <div className="final-cta__glow" />
          <span className="final-cta__icon"><FiUsers /></span>
          <h2>Give every bug a clearer next step.</h2>
          <p>Report the problem, understand what matters, find the best-fit developer, and keep the final decision with your team.</p>
          <div><Button href="/register">Start free</Button><a href="#faq" className="cta-text-link">Read common questions <FiArrowRight /></a></div>
        </div>
      </div>
    </section>
  )
}
