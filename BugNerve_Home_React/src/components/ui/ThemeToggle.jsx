import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="theme-toggle" type="button" onClick={onToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb">{theme === 'dark' ? <FiMoon /> : <FiSun />}</span>
      </span>
    </button>
  )
}
