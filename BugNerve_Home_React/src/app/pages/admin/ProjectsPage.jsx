import { useState } from 'react'
import { FiFolderPlus, FiLayers, FiPlus, FiUsers } from 'react-icons/fi'
import RolePageShell from '../../layout/RolePageShell'
import PageHeader from '../../components/PageHeader'
import DataTable from '../../components/DataTable'
import StatusPill from '../../components/StatusPill'
import Modal from '../../components/Modal'
import { projectRows } from '../../data/mockData'

export default function ProjectsPage({ theme, onToggleTheme }) {
  const [open,setOpen]=useState(false)
  const guide={title:'Projects',purpose:'Projects are the boundary for components, members, bugs and connected repositories. A workspace can contain multiple projects.',role:'Admin / Owner',actions:['Create a project','Inspect member and bug counts','Open project settings'],api:['GET /api/projects','POST /api/projects','PATCH /api/projects/{id}']}
  const cols=[{key:'key',label:'Key'},{key:'name',label:'Project',render:r=><div className="issue-cell"><b>{r.name}</b><span>{r.integrations}</span></div>},{key:'members',label:'Members'},{key:'open',label:'Open bugs'},{key:'critical',label:'Critical'},{key:'status',label:'Status',render:r=><StatusPill tone={r.status==='Active'?'green':'orange'}>{r.status}</StatusPill>}]
  return <RolePageShell role="admin" theme={theme} onToggleTheme={onToggleTheme} guide={guide}><PageHeader eyebrow="Workspace structure" title="Projects" description="Keep product areas isolated while sharing the same BugNerve workspace and subscription." action="Create project" actionIcon={FiFolderPlus} onAction={()=>setOpen(true)}/><section className="app-panel page-panel"><div className="page-panel__head"><div><span>12 projects</span><h3>Workspace projects</h3></div></div><DataTable columns={cols} rows={projectRows}/></section><Modal open={open} onClose={()=>setOpen(false)} eyebrow="New project" title="Create a project" size="md"><div className="simple-form"><label>Project name<input placeholder="Mobile Application"/></label><label>Project key<input placeholder="MOBILE"/></label><label>Description<textarea rows="3" placeholder="What does this project contain?"/></label><div className="modal-actions"><button className="secondary" onClick={()=>setOpen(false)}>Cancel</button><button className="primary" onClick={()=>setOpen(false)}><FiPlus/> Create project</button></div></div></Modal></RolePageShell>
}
