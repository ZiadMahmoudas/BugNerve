import { FiCheckCircle, FiClock, FiStar, FiUsers } from 'react-icons/fi'
import SectionHeading from '../components/ui/SectionHeading'

const UNSPLASH = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=85'

export default function DeveloperIntelligence() {
  return (
    <section data-reveal="left" className="section developer-intelligence" id="developer-intelligence">
      <div className="container developer-intelligence__layout">
        <div className="developer-photo">
          <img src={UNSPLASH} alt="Software team collaborating in an office" loading="lazy" />
          <div className="developer-photo__overlay" />
          <div className="developer-photo__floating">
            <span className="rank">#1</span>
            <div><small>Best-fit teammate</small><h3>Ahmed Hassan</h3><p>Strong sign-in experience · available now</p></div>
            <strong>92%</strong>
          </div>
        </div>
        <div className="showcase-copy">
          <SectionHeading eyebrow="Find the right developer" title="Match the bug with the person most likely to help." text="Instead of assigning by memory or availability alone, BugNerve brings together team experience, similar past fixes and current workload to build a shortlist." />
          <div className="score-list">
            <Score icon={FiStar} label="Relevant experience" value="95%" />
            <Score icon={FiCheckCircle} label="Similar past fixes" value="91%" />
            <Score icon={FiUsers} label="Familiarity with this area" value="88%" />
            <Score icon={FiClock} label="Workload fit" value="83%" />
          </div>
          <div className="evidence-note"><small>Why Ahmed?</small><p>He has handled similar sign-in problems before, knows this area of the project well, and currently has room in his workload.</p></div>
        </div>
      </div>
    </section>
  )
}

function Score({ icon: Icon, label, value }) {
  return <div className="score-row"><Icon /><span>{label}</span><div><i style={{ width: value }} /></div><strong>{value}</strong></div>
}
