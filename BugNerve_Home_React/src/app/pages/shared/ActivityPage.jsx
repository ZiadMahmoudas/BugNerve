import { FiActivity, FiGitCommit, FiRefreshCw, FiZap } from 'react-icons/fi'
import RolePageShell from '../../layout/RolePageShell'
import PageHeader from '../../components/PageHeader'
import { activity } from '../../data/mockData'

const iconFor={git:FiGitCommit,ai:FiZap,sync:FiRefreshCw,status:FiActivity}
export default function ActivityPage({ role, theme, onToggleTheme }) {
  const guide={title:'Activity',purpose:'Activity is the human-readable event stream for bugs, assignments, AI runs and integrations. It helps users follow what changed without reading audit tables.',role:role==='developer'?'Developer':'Tester',actions:['Review recent status changes','Open linked bug or code events','See AI and integration events related to your work'],api:['GET /api/activity?scope=me','GET /api/notifications']}
  return <RolePageShell role={role} theme={theme} onToggleTheme={onToggleTheme} guide={guide}><PageHeader eyebrow="Timeline" title="Activity" description="A chronological view of the changes that matter to your role."/><section className="app-panel activity-page"><div className="activity-day"><span>Today</span>{activity.map((item)=>{const Icon=iconFor[item.type]||FiActivity;return <article key={`${item.at}-${item.title}`}><span className="activity-page__icon"><Icon/></span><div><h4>{item.title}</h4><p>{item.by}</p></div><time>{item.at}</time></article>})}</div></section></RolePageShell>
}
