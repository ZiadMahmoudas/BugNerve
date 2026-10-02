import { FaGithub } from 'react-icons/fa'
import { FiArrowLeft, FiCheck, FiShield, FiUserCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Brand from '../components/ui/Brand'
import ThemeToggle from '../components/ui/ThemeToggle'
import Reveal from '../components/ui/Reveal'

export default function InvitePage({ theme, onToggleTheme }) {
  return (
    <main className="invite-page">
      <div className="auth-page__toolbar invite-page__toolbar">
        <Link to="/register" aria-label="Back to register"><FiArrowLeft /></Link>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
      <div className="invite-page__brand"><Brand /></div>
      <Reveal direction="up">
        <section className="invite-card">
          <div className="invite-card__icon"><FiUserCheck /></div>
          <span>PROJECT INVITATION</span>
          <h1>Join BugNerve Core</h1>
          <p>Ziad Mahmoud invited you to collaborate on this project. Your permissions are already defined by the invitation.</p>
          <div className="invite-meta">
            <div><small>Workspace</small><strong>BugNerve Team</strong></div>
            <div><small>Project</small><strong>BugNerve Core</strong></div>
            <div><small>Project role</small><strong>Developer</strong></div>
            <div><small>Plan</small><strong>Pro Trial</strong></div>
          </div>
          <div className="invite-rule"><FiShield /><div><b>Role security</b><p>The invite assigns <strong>Developer</strong>. You cannot switch yourself to Team Leader or Tester during sign up; an authorized workspace/project manager changes roles later.</p></div></div>
          <button className="btn btn--primary invite-accept"><FiCheck /> Accept invitation</button>
          <button className="oauth-btn" type="button"><FaGithub /> Continue with GitHub</button>
        </section>
      </Reveal>
    </main>
  )
}
