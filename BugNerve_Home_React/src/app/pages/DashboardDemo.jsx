import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiActivity, FiAlertTriangle, FiArrowRight, FiCheck, FiCheckCircle, FiChevronRight, FiCode, FiGitCommit, FiGitPullRequest, FiLayers, FiMoreHorizontal, FiPlus, FiShield, FiSliders, FiUsers, FiXCircle, FiZap } from 'react-icons/fi'
import AppShell from '../components/AppShell'
import MetricCard from '../components/MetricCard'
import Modal from '../components/Modal'
import StatusPill from '../components/StatusPill'
import { bugs, roles } from '../data/roleData'

function BugList({ compact = false, onOpen }) {
  return (
    <div className="app-table-wrap">
      <table className="app-table">
        <thead><tr><th>Issue</th><th>Severity</th><th>Priority</th><th>Component</th><th>Assignee</th><th>Status</th><th/></tr></thead>
        <tbody>
          {bugs.slice(0, compact ? 3 : 4).map((bug) => (
            <tr key={bug.id}>
              <td><b>{bug.id}</b><span>{bug.title}</span></td>
              <td><StatusPill tone={bug.severity === 'Critical' ? 'red' : bug.severity === 'High' ? 'orange' : 'blue'}>{bug.severity}</StatusPill></td>
              <td><StatusPill tone={bug.priority === 'P1' ? 'orange' : 'blue'}>{bug.priority}</StatusPill></td>
              <td>{bug.component}</td><td>{bug.assignee}</td>
              <td><StatusPill tone={bug.status === 'In progress' ? 'blue' : bug.status === 'AI review' ? 'purple' : 'slate'}>{bug.status}</StatusPill></td>
              <td><button className="table-arrow" onClick={() => onOpen?.(bug)}><FiChevronRight/></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ScenarioCard({ icon: Icon, eyebrow, title, text, action, onClick, tone = 'blue' }) {
  return <article className={`scenario-card scenario-card--${tone}`}>
    <span className="scenario-card__icon"><Icon/></span>
    <div><small>{eyebrow}</small><h3>{title}</h3><p>{text}</p></div>
    <button onClick={onClick}>{action}<FiArrowRight/></button>
  </article>
}

function AdminDashboard({ openScenario }) {
  return <>
    <div className="app-grid app-grid--2">
      <section className="app-panel app-panel--large">
        <div className="app-panel__head"><div><span>Workspace health</span><h2>Everything important, in one place.</h2></div><button>View audit log</button></div>
        <div className="health-list">
          <div><span><i className="health-dot good"/> GitHub sync</span><StatusPill tone="green">Healthy</StatusPill></div>
          <div><span><i className="health-dot warning"/> AI model v2.4</span><StatusPill tone="orange">Review</StatusPill></div>
          <div><span><i className="health-dot good"/> Jira connection</span><StatusPill tone="green">Healthy</StatusPill></div>
          <div><span><i className="health-dot good"/> Security events</span><StatusPill tone="blue">No alerts</StatusPill></div>
        </div>
      </section>
      <ScenarioCard icon={FiShield} eyebrow="Admin scenario" title="Govern the workspace" text="Review the trial, members, roles and integration health without entering the triage workflow." action="Open workspace" onClick={() => openScenario('admin')} tone="orange"/>
    </div>
    <div className="app-grid app-grid--3 app-section-gap">
      <section className="app-panel"><div className="app-panel__head"><div><span>Plan</span><h3>Pro trial</h3></div><StatusPill tone="purple">11 days</StatusPill></div><p className="panel-copy">All developer-intelligence features are enabled during the trial.</p><div className="trial-progress"><i style={{width:'42%'}}/></div><small className="panel-muted">Downgrades to Free if no subscription is added.</small></section>
      <section className="app-panel"><div className="app-panel__head"><div><span>Access</span><h3>84 members</h3></div><FiUsers/></div><p className="panel-copy">6 invites are waiting. 3 people have elevated workspace access.</p><button className="text-action">Manage people <FiArrowRight/></button></section>
      <section className="app-panel"><div className="app-panel__head"><div><span>Integrations</span><h3>8 / 9 healthy</h3></div><FiLayers/></div><p className="panel-copy">GitHub, GitLab and Jira connections are monitored separately.</p><button className="text-action">View connections <FiArrowRight/></button></section>
    </div>
  </>
}

function LeaderDashboard({ openScenario, openBug }) {
  return <>
    <div className="app-grid app-grid--leader">
      <section className="app-panel app-panel--large">
        <div className="app-panel__head"><div><span>AI triage queue</span><h2>6 decisions need a human.</h2></div><button onClick={() => openScenario('leader')}>Review next</button></div>
        <BugList compact onOpen={openBug}/>
      </section>
      <section className="app-panel workload-panel">
        <div className="app-panel__head"><div><span>Developer workload</span><h3>Team capacity</h3></div><button aria-label="More workload options"><FiMoreHorizontal/></button></div>
        {[['Ahmed Hassan',76],['Maya Ali',54],['Sara Omar',68],['Youssef Nader',39]].map(([name,score])=><div className="workload-row" key={name}><span className="mini-person">{name.split(' ').map(x=>x[0]).join('').slice(0,2)}</span><div><b>{name}</b><i><em style={{width:`${score}%`}}/></i></div><small>{score}%</small></div>)}
        <div className="ai-note"><FiZap/><span>Ahmed has the strongest Authentication context, but Sara currently has more capacity.</span></div>
      </section>
    </div>
    <div className="app-grid app-grid--2 app-section-gap">
      <section className="app-panel chart-panel"><div className="app-panel__head"><div><span>Severity trend</span><h3>Open bug pressure</h3></div><StatusPill tone="green">-12%</StatusPill></div><div className="fake-bars">{[46,62,54,73,67,88,76,63].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></section>
      <ScenarioCard icon={FiZap} eyebrow="Signature workflow" title="Review AI, then make the call" text="Accept, modify or reject severity, priority, component and developer recommendations." action="Open AI review" onClick={() => openScenario('leader')} tone="purple"/>
    </div>
  </>
}

function DeveloperDashboard({ openScenario, openBug }) {
  return <>
    <div className="app-grid app-grid--2">
      <section className="app-panel app-panel--large">
        <div className="app-panel__head"><div><span>Assigned to me</span><h2>Your focused queue.</h2></div><button>View all</button></div>
        <div className="my-work-list">
          {bugs.slice(0,3).map((bug,i)=><button key={bug.id} onClick={()=>openBug(bug)}><span><b>{bug.id}</b><strong>{bug.title}</strong></span><StatusPill tone={i===0?'blue':'orange'}>{i===0?'In progress':'Assigned'}</StatusPill><FiChevronRight/></button>)}
        </div>
      </section>
      <ScenarioCard icon={FiCode} eyebrow="Developer scenario" title="Context, not guesswork" text="See why the issue was assigned to you, the relevant files and the linked work before you start." action="Open assigned bug" onClick={() => openScenario('developer')} tone="green"/>
    </div>
    <div className="app-grid app-grid--3 app-section-gap">
      <section className="app-panel"><div className="app-panel__head"><div><span>My expertise</span><h3>Authentication</h3></div><b className="big-score">92%</b></div><div className="expertise-list"><span>API <i><em style={{width:'87%'}}/></i></span><span>Database <i><em style={{width:'71%'}}/></i></span><span>Frontend <i><em style={{width:'56%'}}/></i></span></div></section>
      <section className="app-panel"><div className="app-panel__head"><div><span>Recent code</span><h3>Linked activity</h3></div><FiGitCommit/></div><div className="activity-lines"><p><FiGitCommit/><span><b>a91f2d</b> Fix token refresh race</span></p><p><FiGitPullRequest/><span><b>PR #428</b> Authentication cleanup</span></p></div></section>
      <section className="app-panel"><div className="app-panel__head"><div><span>Workload</span><h3>4 active issues</h3></div><StatusPill tone="green">Good fit</StatusPill></div><p className="panel-copy">You are below the team average. New assignments are safe without creating overload.</p></section>
    </div>
  </>
}

function TesterDashboard({ openScenario, openBug }) {
  return <>
    <div className="app-grid app-grid--2">
      <section className="app-panel app-panel--large">
        <div className="app-panel__head"><div><span>Waiting for verification</span><h2>Close the feedback loop.</h2></div><button>View all</button></div>
        <div className="verification-list">
          {bugs.slice(0,3).map((bug,i)=><button key={bug.id} onClick={()=>openBug(bug)}><span className="verification-icon"><FiCheckCircle/></span><span><b>{bug.id}</b><strong>{bug.title}</strong><small>Resolved {i+1}h ago by {bug.assignee}</small></span><StatusPill tone="green">Verify</StatusPill><FiChevronRight/></button>)}
        </div>
      </section>
      <ScenarioCard icon={FiPlus} eyebrow="Tester scenario" title="Report a clear bug" text="Add steps, expected vs actual behavior and evidence. BugNerve handles the first triage pass after submission." action="Report a bug" onClick={() => openScenario('tester')} tone="blue"/>
    </div>
    <div className="app-grid app-grid--2 app-section-gap">
      <section className="app-panel"><div className="app-panel__head"><div><span>My reports</span><h3>Recently updated</h3></div><button>View all</button></div><BugList compact onOpen={openBug}/></section>
      <section className="app-panel"><div className="app-panel__head"><div><span>Quality signal</span><h3>2 reopened this month</h3></div><FiActivity/></div><p className="panel-copy">Reopened bugs are highlighted so failed fixes can be verified again without losing the original evidence.</p><button className="text-action">Open reopened bugs <FiArrowRight/></button></section>
    </div>
  </>
}

function AdminModal({ onClose }) {
  return <Modal open onClose={onClose} eyebrow="Admin / Owner" title="Workspace control center" size="lg">
    <div className="modal-tabs"><button className="is-active">Plan & billing</button><button>Members</button><button>Integrations</button><button>Security</button></div>
    <div className="plan-demo"><div><span>Current plan</span><h3>Pro Trial</h3><p>Full developer intelligence, Git expertise, code ownership, Jira sync and advanced analytics.</p></div><div className="plan-days"><b>11</b><span>days left</span></div></div>
    <div className="modal-grid-3"><div><small>Workspace role</small><b>Owner / Admin</b></div><div><small>Project members</small><b>84</b></div><div><small>Connected tools</small><b>GitHub · GitLab · Jira</b></div></div>
    <div className="modal-actions"><button className="secondary" onClick={onClose}>Close preview</button><button className="primary">Manage subscription</button></div>
  </Modal>
}

function LeaderModal({ onClose }) {
  const [decision, setDecision] = useState('accept')
  const [developer, setDeveloper] = useState('Ahmed Hassan')
  return <Modal open onClose={onClose} eyebrow="AI triage review" title="Review BUG-1248" size="xl">
    <div className="triage-review-demo">
      <section><span className="modal-kicker">Original bug</span><h3>Users get signed out unexpectedly</h3><p>Users are returned to the login page while still working after the session refresh runs.</p><div className="bug-evidence"><b>Steps</b><span>1. Sign in</span><span>2. Keep the app open</span><span>3. Continue working after refresh</span></div></section>
      <section className="ai-review-column"><span className="modal-kicker">AI analysis</span>{[['Impact','Critical','94%'],['Urgency','P1','89%'],['Affected area','Authentication','92%']].map(x=><div className="ai-review-row" key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><strong>{x[2]}</strong><i><em style={{width:x[2]}}/></i></div>)}<div className="ai-explain"><FiZap/><span><b>Why?</b> Similar session-refresh failures were high impact, and Authentication has the strongest matching history.</span></div></section>
      <section><span className="modal-kicker">Your final decision</span><div className="decision-buttons">{['accept','modify','reject'].map(x=><button key={x} className={decision===x?'is-active':''} onClick={()=>setDecision(x)}>{x==='accept'?<FiCheck/>:x==='reject'?<FiXCircle/>:<FiSliders/>}{x[0].toUpperCase()+x.slice(1)}</button>)}</div><label>Assign developer<select value={developer} onChange={e=>setDeveloper(e.target.value)}><option>Ahmed Hassan</option><option>Sara Omar</option><option>Maya Ali</option></select></label><div className="developer-reason"><span>92%</span><div><b>{developer}</b><p>Strong Authentication context · 7 similar fixes · healthy workload</p></div></div></section>
    </div>
    <div className="modal-actions"><button className="secondary" onClick={onClose}>Skip for now</button><button className="primary" onClick={onClose}>Save final decision <FiArrowRight/></button></div>
  </Modal>
}

function DeveloperModal({ onClose }) {
  const [stage, setStage] = useState('assigned')
  return <Modal open onClose={onClose} eyebrow="Assigned issue" title="BUG-1248 · Users get signed out unexpectedly" size="lg">
    <div className="developer-demo-top"><div><StatusPill tone="red">Critical</StatusPill><StatusPill tone="orange">P1</StatusPill><StatusPill tone="blue">Authentication</StatusPill></div><StatusPill tone={stage==='resolved'?'green':'blue'}>{stage==='resolved'?'Resolved':stage==='working'?'In progress':'Assigned'}</StatusPill></div>
    <div className="why-assigned"><FiZap/><div><b>Why BugNerve suggested you</b><p>You have the strongest recent Authentication experience, previously changed the relevant token-refresh files and resolved 7 similar bugs.</p></div></div>
    <div className="modal-grid-3"><div><small>Relevant experience</small><b>95%</b></div><div><small>Similar fixes</small><b>7</b></div><div><small>Current workload</small><b>4 issues</b></div></div>
    <div className="linked-code"><h4>Relevant code context</h4><p><FiCode/> src/auth/TokenService.ts <span>82% ownership</span></p><p><FiCode/> src/auth/SessionGuard.ts <span>68% ownership</span></p></div>
    <div className="modal-actions">{stage==='assigned' && <button className="primary" onClick={()=>setStage('working')}>Start work</button>}{stage==='working' && <button className="primary" onClick={()=>setStage('resolved')}>Mark resolved & link PR</button>}{stage==='resolved' && <button className="primary" onClick={onClose}>Send to tester verification</button>}</div>
  </Modal>
}

function TesterModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false)
  return <Modal open onClose={onClose} eyebrow="Report a bug" title={submitted?'Bug submitted successfully':'Give the team enough context'} size="lg">
    {!submitted ? <div className="bug-form-demo"><label>Title<input defaultValue="Checkout total changes after applying a coupon"/></label><label>Description<textarea defaultValue="The total shown at checkout does not match the cart after a coupon is applied."/></label><div className="modal-grid-2"><label>Expected result<input defaultValue="Total remains consistent"/></label><label>Actual result<input defaultValue="Total increases unexpectedly"/></label></div><label>Evidence<div className="dropzone">Drop screenshots, logs or files here</div></label><div className="ai-after-submit"><FiZap/><span>After submission BugNerve will suggest impact, urgency, component, duplicates and the best-fit developer.</span></div><div className="modal-actions"><button className="secondary" onClick={onClose}>Save draft</button><button className="primary" onClick={()=>setSubmitted(true)}>Submit bug</button></div></div> : <div className="success-demo"><FiCheckCircle/><h3>BUG-1294 created</h3><p>The report is saved. AI analysis has started, and a Team Leader will make the final triage decision.</p><div className="processing-line"><i/><span>Analyzing report...</span></div><button className="primary" onClick={onClose}>Back to tester dashboard</button></div>}
  </Modal>
}

function BugModal({ bug, onClose }) {
  if (!bug) return null
  return <Modal open onClose={onClose} eyebrow={bug.id} title={bug.title} size="lg">
    <div className="developer-demo-top"><div><StatusPill tone={bug.severity==='Critical'?'red':'orange'}>{bug.severity}</StatusPill><StatusPill tone="orange">{bug.priority}</StatusPill><StatusPill tone="blue">{bug.component}</StatusPill></div><StatusPill tone="blue">{bug.status}</StatusPill></div>
    <div className="bug-detail-grid"><section><h4>Description</h4><p>This demo issue includes enough context to preview how each role sees the same bug with different actions.</p><h4>Activity</h4><div className="timeline-mini"><p><i/>Bug reported by Maya Ali</p><p><i/>AI analysis completed at {bug.confidence}% confidence</p><p><i/>Assigned to {bug.assignee}</p></div></section><aside><span>AI summary</span><b>{bug.confidence}% confidence</b><p>Suggested component: {bug.component}</p><p>Best-fit teammate: {bug.assignee}</p></aside></div>
  </Modal>
}

export default function DashboardDemo({ initialRole = 'leader', theme, onToggleTheme }) {
  const navigate = useNavigate()
  const role = initialRole
  const roleRoutes = { admin: '/admin', leader: '/team-leader', developer: '/developer', tester: '/tester' }
  const changeRole = (nextRole) => navigate(roleRoutes[nextRole] || '/app')
  const [scenario, setScenario] = useState(null)
  const [selectedBug, setSelectedBug] = useState(null)
  const info = roles[role]
  const Dashboard = useMemo(() => ({ admin: AdminDashboard, leader: LeaderDashboard, developer: DeveloperDashboard, tester: TesterDashboard })[role], [role])
  const guides = {
    admin: { title: 'Admin Overview', purpose: 'The Admin / Owner sees workspace health, subscription, access and integration status rather than day-to-day triage.', role: 'Workspace Owner / Admin', actions: ['Review workspace health', 'Manage subscription', 'Open members and integrations'], api: ['GET /api/workspaces/{id}/health', 'GET /api/billing/subscription', 'GET /api/integrations'] },
    leader: { title: 'Team Leader Overview', purpose: 'This is the operational control room for human-in-the-loop triage, assignment and team capacity.', role: 'Team Leader', actions: ['Review AI queue', 'Inspect unassigned bugs', 'Compare developer workload', 'Open AI review'], api: ['GET /api/triage/queue', 'GET /api/projects/{id}/bugs', 'GET /api/developers/workload'] },
    developer: { title: 'Developer Overview', purpose: 'Developers see focused assigned work, relevant code context and personal workload instead of administrative controls.', role: 'Developer', actions: ['Open assigned bugs', 'Start work', 'Inspect relevant commits and files', 'Resolve and link a PR'], api: ['GET /api/bugs?assignedTo=me', 'PATCH /api/bugs/{id}/status', 'POST /api/bugs/{id}/links'] },
    tester: { title: 'Tester Overview', purpose: 'Testers report issues, track their reports and verify fixes after developers mark bugs resolved.', role: 'Tester', actions: ['Report a bug', 'Open my reports', 'Verify resolved bugs', 'Reopen failed fixes'], api: ['POST /api/bugs', 'GET /api/bugs?reportedBy=me', 'POST /api/bugs/{id}/verification'] },
  }
  return <AppShell role={role} setRole={changeRole} theme={theme} onToggleTheme={onToggleTheme} pageGuide={guides[role]}>
    <header className="app-page-head"><div><span className="app-page-eyebrow">{info.subtitle}</span><h1>{info.greeting}</h1><p>{info.greetingSub}</p></div><div className="app-page-head__right"><button className="date-chip">Last 30 days</button></div></header>
    <section className="app-metrics-grid">{info.metrics.map((m)=><MetricCard key={m[0]} label={m[0]} value={m[1]} note={m[2]} accent={info.color}/>)}</section>
    <Dashboard openScenario={setScenario} openBug={setSelectedBug}/>
    {scenario==='admin' && <AdminModal onClose={()=>setScenario(null)}/>} 
    {scenario==='leader' && <LeaderModal onClose={()=>setScenario(null)}/>} 
    {scenario==='developer' && <DeveloperModal onClose={()=>setScenario(null)}/>} 
    {scenario==='tester' && <TesterModal onClose={()=>setScenario(null)}/>} 
    <BugModal bug={selectedBug} onClose={()=>setSelectedBug(null)}/>
  </AppShell>
}
