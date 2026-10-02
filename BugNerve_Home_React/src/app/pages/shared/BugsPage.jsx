import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiFilter, FiPlus, FiSearch } from 'react-icons/fi'
import RolePageShell from '../../layout/RolePageShell'
import PageHeader from '../../components/PageHeader'
import DataTable from '../../components/DataTable'
import StatusPill from '../../components/StatusPill'
import CreateBugModal from '../../components/CreateBugModal'
import { bugs } from '../../data/roleData'
import { roleBases } from '../../config/roleNavigation'

const guides = {
  leader: { title:'Bugs', purpose:'The Team Leader uses this page to scan the project bug backlog, find unassigned or critical issues and open a bug before making triage or assignment decisions.', role:'Team Leader', actions:['Filter by severity, priority, component and status','Open bug details','Create a bug','Move into AI review when needed'], api:['GET /api/projects/{projectId}/bugs','GET /api/bugs/{id}','POST /api/bugs'] },
  developer: { title:'Bugs', purpose:'Developers can browse bugs they are allowed to see while My Work remains focused on their assigned queue.', role:'Developer', actions:['Open an assigned or related bug','Inspect status and component','Follow linked work'], api:['GET /api/projects/{projectId}/bugs?scope=developer','GET /api/bugs/{id}'] },
  tester: { title:'Bugs', purpose:'Testers can inspect the shared bug list while My Bugs stays limited to their own reports.', role:'Tester', actions:['Search existing bugs before reporting a duplicate','Open bug details','Create a new bug'], api:['GET /api/projects/{projectId}/bugs','POST /api/bugs'] },
}

export default function BugsPage({ role, theme, onToggleTheme, mineOnly = false }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [createOpen, setCreateOpen] = useState(false)
  const rows = useMemo(() => bugs.filter((bug) => !query || `${bug.id} ${bug.title} ${bug.component}`.toLowerCase().includes(query.toLowerCase())).filter((bug) => !mineOnly || bug.reporter === 'Maya Ali'), [query, mineOnly])
  const base = roleBases[role]
  const columns = [
    { key:'id', label:'Issue', render:(bug)=><div className="issue-cell"><b>{bug.id}</b><span>{bug.title}</span></div> },
    { key:'severity', label:'Severity', render:(bug)=><StatusPill tone={bug.severity==='Critical'?'red':bug.severity==='High'||bug.severity==='Major'?'orange':'blue'}>{bug.severity}</StatusPill> },
    { key:'priority', label:'Priority', render:(bug)=><StatusPill tone={bug.priority==='P1'?'orange':'blue'}>{bug.priority}</StatusPill> },
    { key:'component', label:'Component' },
    { key:'assignee', label:'Assignee' },
    { key:'status', label:'Status', render:(bug)=><StatusPill tone={bug.status==='In progress'?'blue':bug.status==='AI review'?'purple':bug.status==='Resolved'?'green':'slate'}>{bug.status}</StatusPill> },
  ]
  return <RolePageShell role={role} theme={theme} onToggleTheme={onToggleTheme} guide={guides[role] || guides.tester}>
    <PageHeader eyebrow={mineOnly?'Personal issue history':'Bug management'} title={mineOnly?'My reported bugs':'Bugs'} description={mineOnly?'Track the issues you reported and see where each one is in the lifecycle.':'Search, filter and inspect the project backlog without losing the AI and assignment context.'} action="Create bug" onAction={()=>setCreateOpen(true)} />
    <section className="page-toolbar"><label><FiSearch/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search by issue, title or component..."/></label><button><FiFilter/> Filters <span>4</span></button><select><option>All statuses</option><option>New</option><option>AI review</option><option>Assigned</option><option>In progress</option><option>Resolved</option></select></section>
    <section className="app-panel page-panel"><div className="page-panel__head"><div><span>{rows.length} issues</span><h3>{mineOnly?'Your reporting history':'Project backlog'}</h3></div><button className="text-action"><FiPlus/> Saved view</button></div><DataTable columns={columns} rows={rows} onRow={(bug)=>navigate(`${base}/bugs/${bug.id}`)} /></section>
    <CreateBugModal open={createOpen} onClose={()=>setCreateOpen(false)} reporterRole={role==='tester'?'Tester':role==='leader'?'Team Leader':'Developer'} />
  </RolePageShell>
}
