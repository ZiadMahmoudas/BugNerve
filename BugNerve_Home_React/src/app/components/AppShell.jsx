import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  FiBell,
  FiBookOpen,
  FiCheck,
  FiChevronDown,
  FiCommand,
  FiCopy,
  FiLogOut,
  FiMenu,
  FiMoon,
  FiPlus,
  FiSearch,
  FiSun,
  FiUser,
  FiX,
  FiZap,
} from 'react-icons/fi'
import Brand from '../../components/ui/Brand'
import { roles } from '../data/roleData'
import { roleBases, roleNavigation, rolePath } from '../config/roleNavigation'
import RoleSwitcher from './RoleSwitcher'
import CreateBugModal from './CreateBugModal'
import StudyDrawer from './StudyDrawer'

export default function AppShell({ role, setRole, children, theme, onToggleTheme, pageGuide }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileNav, setMobileNav] = useState(false)
  const [roleOpen, setRoleOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [createOpen, setCreateOpen] = useState(false)
  const [studyOpen, setStudyOpen] = useState(false)
  const info = roles[role]
  const nav = roleNavigation[role]
  const base = roleBases[role]

  const activeItem = useMemo(() => {
    const relative = location.pathname.replace(base, '').replace(/^\//, '')
    if (!relative || relative.startsWith('bugs/')) return relative.startsWith('bugs/') ? nav.find((item) => item.key === 'bugs') : nav[0]
    return nav.find((item) => relative === item.path || relative.startsWith(`${item.path}/`)) || nav[0]
  }, [location.pathname, base, nav])

  useEffect(() => {
    setMobileNav(false)
    setProfileOpen(false)
    setCopied(false)
    setStudyOpen(false)
  }, [location.pathname, role])

  const copyRoute = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {}
  }

  return (
    <div className="app-root">
      <aside className={`app-sidebar ${mobileNav ? 'is-open' : ''}`}>
        <div className="app-sidebar__brand"><Brand compact /></div>
        <button className="app-workspace">
          <span className="app-workspace__logo">BN</span>
          <span><b>BugNerve Core</b><small>Workspace · Pro Trial</small></span>
          <FiChevronDown />
        </button>

        <nav className="app-sidebar__nav">
          <span className="app-sidebar__label">Workspace</span>
          {nav.map((item) => {
            const Icon = item.icon
            return (
              <NavLink key={item.key} end={item.path === ''} to={rolePath(role, item.path)} className={({ isActive }) => isActive || activeItem?.key === item.key ? 'is-active' : ''}>
                <i><Icon /></i><span>{item.label}</span>{item.badge && <em>{item.badge}</em>}
              </NavLink>
            )
          })}
        </nav>

        <div className="app-sidebar__bottom">
          <Link to="/docs"><FiBookOpen/> Documentation</Link>
          <button onClick={() => setProfileOpen(!profileOpen)} className="app-user-mini">
            <span className="app-avatar">{info.name.split(' ').map((x) => x[0]).join('').slice(0, 2)}</span>
            <span><b>{info.name}</b><small>{info.label}</small></span>
            <FiChevronDown />
          </button>
        </div>
      </aside>

      {mobileNav && <button className="app-sidebar-overlay" onClick={() => setMobileNav(false)} aria-label="Close navigation" />}

      <div className="app-main">
        <header className="app-topbar">
          <button className="app-mobile-menu" onClick={() => setMobileNav((value) => !value)}>{mobileNav ? <FiX/> : <FiMenu/>}</button>
          <div className="app-breadcrumb"><span>BugNerve Core</span><b>/</b><strong>{activeItem?.label || 'Overview'}</strong></div>
          <button className="app-search" onClick={() => navigate(rolePath(role, role === 'developer' ? 'bugs' : role === 'tester' ? 'my-bugs' : role === 'admin' ? 'projects' : 'bugs'))}>
            <FiSearch/><span>Search bugs, commits, developers...</span><kbd><FiCommand/> K</kbd>
          </button>
          <div className="app-topbar__actions">
            <span className="app-service"><i/> AI online</span>
            <button className="app-icon-btn" title="Notifications"><FiBell/><small>2</small></button>
            <button className="app-create" onClick={() => setCreateOpen(true)}><FiPlus/> <span>Create bug</span></button>
            <button className="app-theme-mini" onClick={onToggleTheme} title="Toggle theme">{theme === 'dark' ? <FiSun/> : <FiMoon/>}</button>
          </div>
        </header>

        <div className="app-demo-bar">
          <div><FiZap/><span><b>Interactive role prototype</b> — every sidebar item is a real route you can open and share.</span></div>
          <div className="app-demo-bar__controls">
            {pageGuide && <button className="copy-demo-link guide-button" onClick={() => setStudyOpen(true)}><FiBookOpen/> Explain page</button>}
            <button className="copy-demo-link" onClick={copyRoute}>{copied ? <FiCheck/> : <FiCopy/>}{copied ? 'Copied' : 'Copy link'}</button>
            <RoleSwitcher role={role} onRoleChange={setRole} open={roleOpen} setOpen={setRoleOpen}/>
          </div>
        </div>

        <main className="app-content">{children}</main>
      </div>

      {profileOpen && (
        <div className="app-profile-popover">
          <button><FiUser/> My profile</button>
          <button><FiLogOut/> Sign out</button>
        </div>
      )}

      <CreateBugModal open={createOpen} onClose={() => setCreateOpen(false)} reporterRole={info.label} />
      {pageGuide && <StudyDrawer open={studyOpen} onClose={() => setStudyOpen(false)} guide={pageGuide} />}
    </div>
  )
}
