import { FiAlertTriangle, FiCheckCircle, FiLayers, FiMapPin, FiTarget } from 'react-icons/fi'
import SectionHeading from '../components/ui/SectionHeading'

export default function AITriage() {
  return (
    <section data-reveal="right" className="section ai-triage" id="ai-triage">
      <div className="container split-showcase">
        <div className="showcase-copy">
          <SectionHeading eyebrow="Understand the problem" title="Know what you are dealing with before you assign it." text="BugNerve reads the report and turns it into practical questions your team already asks every day." />
          <div className="check-list">
            <Check icon={FiAlertTriangle} title="How serious is it?" text="See the likely impact of the problem at a glance." />
            <Check icon={FiTarget} title="How soon should we handle it?" text="Get a suggested urgency so important issues do not get buried." />
            <Check icon={FiMapPin} title="Where does it likely belong?" text="Point the report toward the most relevant part of the product or project." />
            <Check icon={FiLayers} title="Have we seen this before?" text="Surface similar reports that may already have an answer or an owner." />
            <Check icon={FiCheckCircle} title="Can we trust the suggestion?" text="Show how confident BugNerve is so the team knows when to double-check." />
          </div>
        </div>
        <div className="triage-demo">
          <div className="triage-demo__glow" />
          <div className="triage-card triage-card--bug">
            <div className="triage-card__label"><span>New report</span><b>BUG-1248</b></div>
            <h3>Users get signed out unexpectedly</h3>
            <p>The app sends users back to the login screen while they are still working.</p>
            <div className="code-block"><span>Context</span><code>Web app · Sign-in · Started today</code></div>
          </div>
          <div className="triage-core"><FiTarget /><span>BugNerve</span><small>building a clear picture</small></div>
          <div className="triage-card triage-card--result">
            <div><span>Impact</span><b className="red">Critical</b><strong>94%</strong></div>
            <div><span>Urgency</span><b className="orange">High</b><strong>89%</strong></div>
            <div><span>Affected area</span><b>Sign-in</b><strong>92%</strong></div>
            <div><span>Similar report</span><b>BUG-731</b><strong>87%</strong></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Check({ icon: Icon, title, text }) {
  return <div className="check-item"><span><Icon /></span><div><h4>{title}</h4><p>{text}</p></div></div>
}
