import { FiCheck, FiChevronRight, FiCommand, FiShield, FiUsers, FiZap } from 'react-icons/fi'
import Button from '../components/ui/Button'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__pill"><FiZap /> Smarter bug handling, with people still in control</div>
          <h1>Find the right developer for <span>every bug.</span></h1>
          <p>BugNerve helps your team understand what went wrong, spot repeated issues, and match each bug with the teammate best suited to handle it — without taking the final decision away from you.</p>
          <div className="hero__actions">
            <Button href="#product">See how it works</Button>
            <Button href="#pricing" variant="ghost">Start 14-day Pro trial</Button>
          </div>
          <div className="hero__trust">
            <span><FiShield /> Your team approves every decision</span>
            <span><FiUsers /> Built around real team roles</span>
            <span><FiZap /> Smarter recommendations when you need them</span>
          </div>
        </div>

        <div className="hero-console" aria-label="BugNerve product preview">
          <div className="hero-console__chrome">
            <div className="chrome-dots"><span /><span /><span /></div>
            <div className="console-search"><FiCommand /> BUG-1248</div>
            <div className="console-live"><span /> Ready</div>
          </div>
          <div className="hero-console__body">
            <div className="issue-panel">
              <div className="issue-panel__meta"><span className="issue-key">BUG-1248</span><span className="status status--new">New</span></div>
              <h3>Users get signed out unexpectedly</h3>
              <p>The app sends users back to the login screen while they are still working.</p>
              <div className="issue-lines"><span /><span /><span /></div>
              <div className="issue-footer"><div className="avatar-stack"><i>ZH</i><i>AH</i></div><span>Sign-in & access</span></div>
            </div>
            <div className="ai-panel">
              <div className="ai-panel__head"><span><FiZap /> BugNerve suggestion</span><b>Ready to review</b></div>
              <Prediction label="Impact" value="Critical" score="94%" tone="red" />
              <Prediction label="Urgency" value="High · P1" score="89%" tone="orange" />
              <Prediction label="Affected area" value="Sign-in" score="92%" tone="blue" />
              <div className="duplicate-row"><span>Similar issue found</span><b>BUG-731 · 87%</b></div>
              <div className="recommendation-mini">
                <div><span className="mini-avatar">AH</span><div><small>Best-fit teammate</small><strong>Ahmed Hassan</strong></div></div>
                <strong>92%</strong>
              </div>
              <button className="review-btn"><FiCheck /> Review suggestion <FiChevronRight /></button>
            </div>
          </div>
          <div className="hero-console__rail"><span>Report</span><b /> <span>Understand</span><b /> <span>Match</span><b /> <span>Decide</span></div>
        </div>
      </div>
    </section>
  )
}

function Prediction({ label, value, score, tone }) {
  return (
    <div className="prediction">
      <div className="prediction__top"><span>{label}</span><b className={`prediction__value prediction__value--${tone}`}>{value}</b><strong>{score}</strong></div>
      <div className="prediction__bar"><i className={`bar--${tone}`} style={{ width: score }} /></div>
    </div>
  )
}
