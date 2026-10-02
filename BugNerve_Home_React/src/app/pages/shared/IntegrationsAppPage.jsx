import { FiCheckCircle, FiRefreshCw, FiSettings, FiWifi, FiXCircle } from 'react-icons/fi'
import RolePageShell from '../../layout/RolePageShell'
import PageHeader from '../../components/PageHeader'
import StatusPill from '../../components/StatusPill'
import { integrations } from '../../data/mockData'

export default function IntegrationsAppPage({ role, theme, onToggleTheme }) {
  const guide={title:'Integrations',purpose:'This page connects BugNerve to GitHub, GitLab and Jira. Those tools enrich BugNerve, but PostgreSQL remains the application source of truth.',role:role==='admin'?'Admin / Owner':'Team Leader',actions:['Inspect provider health','Trigger synchronization','Open provider settings','Disconnect or reconnect an integration'],api:['GET /api/integrations','POST /api/integrations/{provider}/connect','POST /api/integrations/{id}/sync','POST /api/webhooks/{provider}']}
  return <RolePageShell role={role} theme={theme} onToggleTheme={onToggleTheme} guide={guide}>
    <PageHeader eyebrow="Connected development" title="Integrations" description="Keep issue context, repository history and team workflow connected without forcing the team to replace its existing tools." />
    <div className="integration-grid app-page-grid">{integrations.map((item)=><article className="integration-app-card" key={item.name}><div className="integration-app-card__top"><span className={`provider-logo provider-logo--${item.name.toLowerCase()}`}>{item.name[0]}</span><StatusPill tone="green"><FiCheckCircle/> Connected</StatusPill></div><small>{item.type}</small><h3>{item.name}</h3><p>{item.detail}</p><div className="integration-meta"><span><FiWifi/> Last sync {item.lastSync}</span><span><FiCheckCircle/> Healthy</span></div><footer><button className="secondary compact"><FiRefreshCw/> Sync now</button><button className="secondary compact"><FiSettings/> Manage</button></footer></article>)}</div>
    <section className="app-panel page-panel app-section-gap"><div className="page-panel__head"><div><span>Integration principle</span><h3>Connected, not dependent.</h3></div></div><div className="integration-flow"><span>GitHub / GitLab / Jira</span><i>→</i><span>BugNerve integration layer</span><i>→</i><span>Normalized project data</span><i>→</i><span>AI + human workflow</span></div></section>
  </RolePageShell>
}
