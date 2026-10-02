import { FiCheck, FiEdit3, FiUserCheck, FiX } from 'react-icons/fi'
import SectionHeading from '../components/ui/SectionHeading'

export default function HumanReview() {
  return (
    <section data-reveal="right" className="section human-review">
      <div className="container">
        <SectionHeading eyebrow="People stay in control" title="Recommendations help. Your team decides." text="BugNerve never needs to become the boss of your workflow. It gives the Team Leader a useful suggestion, then leaves the final choice with the people who know the project." align="center" />
        <div className="decision-flow">
          <div className="decision-card decision-card--ai"><span>01</span><h3>BugNerve suggests</h3><p>High impact · urgent · sign-in area · Ahmed is the best fit</p></div>
          <div className="decision-arrow">→</div>
          <div className="decision-card decision-card--human"><span><FiUserCheck /></span><h3>Team Leader reviews</h3><div className="decision-actions"><b><FiCheck /> Accept</b><b><FiEdit3 /> Change</b><b><FiX /> Reject</b></div></div>
          <div className="decision-arrow">→</div>
          <div className="decision-card decision-card--final"><span>03</span><h3>The team moves forward</h3><p>The approved developer receives the bug with the context they need.</p></div>
        </div>
      </div>
    </section>
  )
}
