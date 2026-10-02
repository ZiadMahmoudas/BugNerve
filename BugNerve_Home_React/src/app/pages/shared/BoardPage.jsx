import { FiAlertCircle, FiFilter, FiMoreHorizontal, FiUser } from 'react-icons/fi'
import RolePageShell from '../../layout/RolePageShell'
import PageHeader from '../../components/PageHeader'
import StatusPill from '../../components/StatusPill'
import { bugs } from '../../data/roleData'

const columns = ['New','Assigned','In progress','Resolved','Verified']
export default function BoardPage({ role, theme, onToggleTheme }) {
  const guide={title:'Bug board',purpose:'The board is a visual view of the same bug lifecycle. It does not create a second source of truth; cards represent bugs stored in the core tracker.',role:role==='leader'?'Team Leader':role==='developer'?'Developer':'Project member',actions:['Scan work by lifecycle status','Open a bug card','Move permitted bugs between workflow stages'],api:['GET /api/projects/{projectId}/bugs','PATCH /api/bugs/{id}/status']}
  return <RolePageShell role={role} theme={theme} onToggleTheme={onToggleTheme} guide={guide}><PageHeader eyebrow="Workflow" title="Bug board" description="A Kanban view of the bug lifecycle, using the same data as the list and detail pages."/><section className="board-toolbar"><span><FiAlertCircle/> 47 open issues</span><button><FiFilter/> Filter board</button></section><div className="kanban-board">{columns.map((column,index)=><section className="kanban-column" key={column}><header><div><i style={{background:['#1585ff','#6366f1','#f59e0b','#06b6d4','#10b981'][index]}}/><b>{column}</b></div><span>{index===0?8:index===1?11:index===2?14:index===3?7:9}</span></header><div className="kanban-stack">{bugs.slice(index%2,index%2+3).map((bug)=><article className="kanban-card" key={`${column}-${bug.id}`}><div><small>{bug.id}</small><button><FiMoreHorizontal/></button></div><h4>{bug.title}</h4><p>{bug.component}</p><footer><StatusPill tone={bug.priority==='P1'?'orange':'blue'}>{bug.priority}</StatusPill><span><FiUser/>{bug.assignee==='Unassigned'?'—':bug.assignee.split(' ')[0]}</span></footer></article>)}</div></section>)}</div></RolePageShell>
}
