import { useNavigate, useParams } from 'react-router-dom'
import { FiActivity, FiArrowLeft, FiCheckCircle, FiCode, FiGitCommit, FiLink, FiMessageSquare, FiPaperclip, FiUserCheck, FiZap } from 'react-icons/fi'
import RolePageShell from '../../layout/RolePageShell'
import PageHeader from '../../components/PageHeader'
import StatusPill from '../../components/StatusPill'
import { bugs } from '../../data/roleData'
import { roleBases } from '../../config/roleNavigation'

export default function BugDetailPage({ role, theme, onToggleTheme }) {
  const { bugId } = useParams()
  const navigate = useNavigate()
  const bug = bugs.find((item)=>item.id===bugId) || bugs[0]
  const guide = { title:`${bug.id} details`, purpose:'This is the shared source-of-truth view for one bug. Every role sees the same core facts, but the available actions change with permissions.', role: role==='leader'?'Team Leader':role==='developer'?'Developer':'Tester', actions:['Read the original report and evidence','Review lifecycle activity','Inspect AI suggestions','Follow assignment and linked code', role==='leader'?'Make final triage and assignment decision':role==='developer'?'Start work and resolve the issue':'Verify the fix when resolved'], api:['GET /api/bugs/{id}','GET /api/bugs/{id}/comments','GET /api/bugs/{id}/ai-analysis','GET /api/bugs/{id}/recommendations'] }
  return <RolePageShell role={role} theme={theme} onToggleTheme={onToggleTheme} guide={guide}>
    <PageHeader eyebrow={`${bug.id} · Bug details`} title={bug.title} description="One issue, one timeline, and role-aware actions around the same source of truth." secondary="Back to bugs" onSecondary={()=>navigate(`${roleBases[role]}/bugs`)} />
    <section className="bug-page-status"><div><StatusPill tone={bug.severity==='Critical'?'red':'orange'}>{bug.severity}</StatusPill><StatusPill tone="orange">{bug.priority}</StatusPill><StatusPill tone="blue">{bug.component}</StatusPill><StatusPill tone="purple">{bug.status}</StatusPill></div><span>Reported by {bug.reporter || 'Maya Ali'} · updated 18 min ago</span></section>
    <div className="bug-page-grid">
      <div className="bug-page-main">
        <section className="app-panel content-section"><span className="section-icon"><FiMessageSquare/></span><div><small>DESCRIPTION</small><h3>What happened</h3><p>{bug.description || 'Users are unexpectedly returned to the login screen while still working. The behavior appears after the application refreshes the session in the background.'}</p></div></section>
        <section className="app-panel content-section"><span className="section-icon"><FiActivity/></span><div><small>STEPS TO REPRODUCE</small><h3>Reproduction path</h3><ol><li>Sign in to the application.</li><li>Keep the workspace open for an extended session.</li><li>Continue working after the background token refresh.</li><li>The user is redirected to the login screen unexpectedly.</li></ol></div></section>
        <section className="app-panel content-section"><span className="section-icon"><FiPaperclip/></span><div><small>EVIDENCE</small><h3>Attachments</h3><div className="attachment-row"><span>session-refresh.log</span><small>LOG · 84 KB</small><button>Preview</button></div><div className="attachment-row"><span>logout-state.png</span><small>PNG · 418 KB</small><button>Preview</button></div></div></section>
        <section className="app-panel content-section"><span className="section-icon"><FiActivity/></span><div><small>LIFECYCLE</small><h3>Activity</h3><div className="activity-timeline"><p><i/><span><b>Bug reported</b><small>Maya Ali · 09:02</small></span></p><p><i/><span><b>AI analysis completed</b><small>{bug.confidence}% overall confidence · 09:03</small></span></p><p><i/><span><b>Assigned to {bug.assignee}</b><small>Team Leader decision · 09:11</small></span></p><p><i/><span><b>Status changed to {bug.status}</b><small>18 minutes ago</small></span></p></div></div></section>
      </div>
      <aside className="bug-page-side">
        <section className="app-panel ai-side-card"><div className="side-card-title"><FiZap/><div><small>AI INSIGHT</small><h3>First-pass analysis</h3></div></div><div className="prediction-line"><span>Impact</span><b>{bug.severity}</b><strong>{bug.confidence}%</strong></div><div className="prediction-line"><span>Urgency</span><b>{bug.priority}</b><strong>89%</strong></div><div className="prediction-line"><span>Component</span><b>{bug.component}</b><strong>92%</strong></div><p>AI output is decision support. The Team Leader keeps final authority.</p></section>
        <section className="app-panel"><div className="side-card-title"><FiUserCheck/><div><small>ASSIGNMENT</small><h3>{bug.assignee}</h3></div></div><p className="panel-copy">Matched using component experience, similar fixes, file history and workload.</p>{role==='leader' && <button className="primary full">Review recommendation</button>}{role==='developer' && <button className="primary full">Start / continue work</button>}</section>
        <section className="app-panel"><div className="side-card-title"><FiCode/><div><small>CODE CONTEXT</small><h3>Linked work</h3></div></div><div className="code-link"><FiGitCommit/><span><b>a91f2d</b><small>Fix token refresh race</small></span></div><div className="code-link"><FiLink/><span><b>PR #428</b><small>Authentication cleanup</small></span></div></section>
        {role==='tester' && <section className="app-panel verification-cta"><FiCheckCircle/><h3>Waiting for the fix?</h3><p>When the developer marks this bug resolved, it appears in your Verification page.</p></section>}
      </aside>
    </div>
  </RolePageShell>
}
