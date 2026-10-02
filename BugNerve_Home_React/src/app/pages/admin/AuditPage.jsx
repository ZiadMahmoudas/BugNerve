import { FiDownload, FiFilter } from 'react-icons/fi'
import RolePageShell from '../../layout/RolePageShell'
import PageHeader from '../../components/PageHeader'
import DataTable from '../../components/DataTable'
import { auditRows } from '../../data/mockData'

export default function AuditPage({theme,onToggleTheme}){const guide={title:'Audit Logs',purpose:'Audit logs are the immutable administrative history of important changes: who changed what and when.',role:'Admin / Owner',actions:['Filter by user, action or entity','Review before/after values','Export logs'],api:['GET /api/audit-logs']};const cols=[{key:'time',label:'Date / time'},{key:'user',label:'User'},{key:'action',label:'Action'},{key:'entity',label:'Entity'},{key:'before',label:'Before'},{key:'after',label:'After'}];return <RolePageShell role="admin" theme={theme} onToggleTheme={onToggleTheme} guide={guide}><PageHeader eyebrow="Traceability" title="Audit Logs" description="A clear history of sensitive workspace, membership and triage changes." action="Export" actionIcon={FiDownload}/><section className="page-toolbar"><button><FiFilter/> Filters</button><select><option>All actions</option><option>Role changes</option><option>Bug changes</option><option>Integration changes</option></select></section><section className="app-panel page-panel"><DataTable columns={cols} rows={auditRows}/></section></RolePageShell>}
