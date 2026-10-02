import { FiCode, FiGitBranch, FiGitCommit, FiRefreshCw, FiUsers } from 'react-icons/fi'
import RolePageShell from '../../layout/RolePageShell'
import PageHeader from '../../components/PageHeader'
import DataTable from '../../components/DataTable'
import StatusPill from '../../components/StatusPill'
import StatCard from '../../components/StatCard'
import { repoRows } from '../../data/mockData'

export default function RepositoriesPage({ role, theme, onToggleTheme }) {
  const guide={title:'Repositories',purpose:'Repository intelligence gives BugNerve evidence about who worked on which files and components. That evidence feeds developer recommendation.',role:role==='leader'?'Team Leader':'Developer',actions:['Inspect connected repositories','See commit and contributor coverage','Review linked bugs and code ownership'],api:['GET /api/repositories','GET /api/repositories/{id}/commits','GET /api/repositories/{id}/contributors','GET /api/repositories/{id}/files']}
  const columns=[{key:'name',label:'Repository',render:(row)=><div className="issue-cell"><b>{row.name}</b><span>{row.provider} · {row.branch}</span></div>},{key:'commits',label:'Commits'},{key:'contributors',label:'Contributors'},{key:'linkedBugs',label:'Linked bugs'},{key:'health',label:'Sync',render:(row)=><StatusPill tone="green">{row.health}</StatusPill>}]
  return <RolePageShell role={role} theme={theme} onToggleTheme={onToggleTheme} guide={guide}><PageHeader eyebrow="Developer intelligence" title="Repositories" description="Repository history becomes evidence for code ownership, component experience and previous bug fixes." action="Sync repositories" actionIcon={FiRefreshCw}/><div className="stat-strip"><StatCard label="Commits indexed" value="2,740" note="Across connected repositories" icon={FiGitCommit}/><StatCard label="Contributors" value="14" note="Mapped to BugNerve users" icon={FiUsers} tone="green"/><StatCard label="Tracked files" value="8,912" note="Ownership signals available" icon={FiCode} tone="purple"/><StatCard label="Linked bugs" value="176" note="Bug ↔ commit evidence" icon={FiGitBranch} tone="orange"/></div><section className="app-panel page-panel"><div className="page-panel__head"><div><span>Repository coverage</span><h3>Connected codebases</h3></div></div><DataTable columns={columns} rows={repoRows}/></section></RolePageShell>
}
