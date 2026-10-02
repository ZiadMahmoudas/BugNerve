import { SiGithub, SiGitlab, SiJira } from 'react-icons/si'
import { FiCheckCircle, FiRefreshCw } from 'react-icons/fi'
import SectionHeading from '../components/ui/SectionHeading'

const integrations = [
  { icon: SiGithub, name: 'GitHub', text: 'Use past changes and team activity to understand who has experience with different parts of the project.', state: 'Connected' },
  { icon: SiGitlab, name: 'GitLab', text: 'Keep the same BugNerve workflow while learning from your team’s existing GitLab activity.', state: 'Ready' },
  { icon: SiJira, name: 'Jira', text: 'Keep issues and statuses connected so teams can use BugNerve without giving up the tracker they already know.', state: 'Sync ready' },
]

export default function Integrations() {
  return (
    <section data-reveal="up" className="section integrations" id="integrations">
      <div className="container">
        <SectionHeading eyebrow="Works with your tools" title="Keep the tools your team already uses." text="BugNerve is designed to add clarity around your current workflow, not force everyone to start over with a completely different way of working." />
        <div className="integration-grid">
          {integrations.map(({ icon: Icon, name, text, state }) => (
            <article className="integration-card" key={name}>
              <div className="integration-card__top"><span><Icon /></span><small><FiCheckCircle /> {state}</small></div>
              <h3>{name}</h3><p>{text}</p>
              <div className="integration-card__meta"><span><FiRefreshCw /> stays connected</span><b>Learn more →</b></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
