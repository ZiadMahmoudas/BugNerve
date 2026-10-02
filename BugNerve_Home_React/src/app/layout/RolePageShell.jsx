import { useNavigate } from 'react-router-dom'
import AppShell from '../components/AppShell'
import { roleBases } from '../config/roleNavigation'

export default function RolePageShell({ role, theme, onToggleTheme, guide, children }) {
  const navigate = useNavigate()
  const changeRole = (nextRole) => navigate(roleBases[nextRole] || '/app')
  return <AppShell role={role} setRole={changeRole} theme={theme} onToggleTheme={onToggleTheme} pageGuide={guide}>{children}</AppShell>
}
