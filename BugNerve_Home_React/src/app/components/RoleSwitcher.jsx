import { FiCheck, FiChevronDown, FiShield, FiUsers, FiCode, FiClipboard } from 'react-icons/fi'
import { roles } from '../data/roleData'

const icons = { admin: FiShield, leader: FiUsers, developer: FiCode, tester: FiClipboard }

export default function RoleSwitcher({ role, onRoleChange, open, setOpen }) {
  const current = roles[role]
  return (
    <div className="role-switcher">
      <button className="role-switcher__trigger" onClick={() => setOpen(!open)}>
        <span className="role-switcher__dot" style={{ background: current.color }} />
        <span><small>Preview as</small><b>{current.label}</b></span>
        <FiChevronDown />
      </button>
      {open && (
        <div className="role-switcher__menu">
          <div className="role-switcher__caption">Demo role switcher</div>
          {Object.values(roles).map((item) => {
            const Icon = icons[item.key]
            return (
              <button key={item.key} onClick={() => { onRoleChange(item.key); setOpen(false) }}>
                <span className="role-switcher__icon" style={{ '--role-color': item.color }}><Icon /></span>
                <span><b>{item.label}</b><small>{item.subtitle}</small></span>
                {role === item.key && <FiCheck className="role-switcher__check" />}
              </button>
            )
          })}
          <p>Demo only. In production the backend resolves roles from project membership.</p>
        </div>
      )}
    </div>
  )
}
