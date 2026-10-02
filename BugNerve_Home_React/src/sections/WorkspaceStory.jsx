import { FiArrowUpRight, FiCheck, FiCircle } from 'react-icons/fi'
import SectionHeading from '../components/ui/SectionHeading'

const IMG = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=85'

export default function WorkspaceStory() {
  return (
    <section data-reveal="left" className="section workspace-story">
      <div className="container workspace-story__grid">
        <div className="workspace-story__copy">
          <SectionHeading eyebrow="Made for real teams" title="Everyone sees the work that matters to them." text="A Tester can report and verify. A Developer can focus on assigned work. A Team Leader can review recommendations and assign clearly. An Admin can manage the workspace without getting in everyone else’s way." />
          <div className="role-pills"><span>Admin / Owner</span><span>Team Leader</span><span>Developer</span><span>Tester</span></div>
          <a href="#pricing" className="text-link">See plans and access <FiArrowUpRight /></a>
        </div>
        <div className="role-visual">
          <img src={IMG} alt="Engineering team discussing work" loading="lazy" />
          <div className="role-visual__gradient" />
          <div className="role-visual__panel">
            <div className="role-visual__head"><span><FiCircle /> Developer · My Work</span><small>BugNerve Core</small></div>
            <div className="task-row"><b>BUG-1248</b><span>Users get signed out unexpectedly</span><strong>In progress</strong></div>
            <div className="task-row"><b>BUG-1187</b><span>Search stops returning recent items</span><strong>Assigned</strong></div>
            <div className="role-visual__reason"><FiCheck /><div><small>Why this was assigned to you</small><p>Strong experience with this part of the project · good workload fit</p></div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
