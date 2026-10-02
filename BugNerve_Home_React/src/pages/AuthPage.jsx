import { useMemo, useState } from 'react'
import { FaGithub, FaGitlab, FaJira } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiChevronDown,
  FiKey,
  FiLock,
  FiMail,
  FiShield,
  FiUser,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Brand from '../components/ui/Brand'
import Reveal from '../components/ui/Reveal'
import ThemeToggle from '../components/ui/ThemeToggle'
import { images } from '../data/publicContent'

const roleOptions = [
  {
    value: 'team-leader',
    label: 'Team Leader',
    description: 'Review AI triage, prioritize issues, and assign developers.',
  },
  {
    value: 'developer',
    label: 'Developer',
    description: 'Work on assigned bugs, link commits, and resolve issues.',
  },
  {
    value: 'tester',
    label: 'Tester',
    description: 'Report bugs, attach evidence, and verify resolved issues.',
  },
]

export default function AuthPage({ mode = 'login', theme, onToggleTheme }) {
  const register = mode === 'register'
  const [showSuccess, setShowSuccess] = useState(false)
  const [setupMode, setSetupMode] = useState('create')
  const [primaryRole, setPrimaryRole] = useState('team-leader')

  const selectedRole = useMemo(
    () => roleOptions.find(role => role.value === primaryRole) ?? roleOptions[0],
    [primaryRole],
  )

  return (
    <section className="auth-page auth-page--v6">
      <div
        className="auth-page__visual"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(3,8,16,.18),rgba(3,8,16,.92)),url(${images.auth})`,
        }}
      >
        <Brand href="/" />

        <div className="auth-page__visual-copy auth-page__visual-copy--v6">
          <span>{register ? 'START YOUR BUGNERVE WORKSPACE' : 'WELCOME BACK TO BUGNERVE'}</span>
          <h2>
            {register
              ? 'One workspace. Clear roles. Smarter triage.'
              : 'Pick up exactly where your engineering team left off.'}
          </h2>
          <p>
            {register
              ? 'Create the workspace, choose how you contribute, then invite the rest of the team. Workspace access and project roles stay clear from day one.'
              : 'Your bugs, AI triage decisions, repository context, and team activity stay connected in one focused workspace.'}
          </p>

          {register && (
            <div className="auth-role-map auth-role-map--v6">
              <div><b>Owner / Admin</b><span>Workspace, billing, members & integrations</span></div>
              <div><b>Team Leader</b><span>Reviews AI, prioritizes & assigns</span></div>
              <div><b>Developer</b><span>Works on assigned bugs & links code</span></div>
              <div><b>Tester</b><span>Reports issues & verifies fixes</span></div>
            </div>
          )}
        </div>
      </div>

      <div className="auth-page__form-wrap">
        <div className="auth-page__toolbar">
          <Link to="/" aria-label="Back to home"><FiArrowLeft /></Link>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <Reveal direction="right" className="auth-reveal">
          <form className="auth-card auth-card--v6" onSubmit={e => { e.preventDefault(); setShowSuccess(true) }}>
            <div className="auth-card__mobile-brand"><Brand /></div>
            <span>{register ? 'CREATE ACCOUNT' : 'SIGN IN'}</span>
            <h1>{register ? 'Create your BugNerve account' : 'Sign in to your workspace'}</h1>
            <p>
              {register
                ? 'Start with a 14-day Pro trial. You can create a workspace or join an existing team through an invitation.'
                : 'Use your email or a connected provider to continue.'}
            </p>

            {register && (
              <div className="setup-mode" aria-label="Account setup mode">
                <button type="button" className={setupMode === 'create' ? 'is-active' : ''} onClick={() => setSetupMode('create')}>
                  <FiShield />
                  <span><b>Create workspace</b><small>You become Workspace Owner / Admin</small></span>
                </button>
                <button type="button" className={setupMode === 'join' ? 'is-active' : ''} onClick={() => setSetupMode('join')}>
                  <FiUsers />
                  <span><b>Join a team</b><small>Your project role comes from the invitation</small></span>
                </button>
              </div>
            )}

            {register && setupMode === 'join' && (
              <label>
                <span>Invitation code</span>
                <div><FiKey /><input placeholder="BN-TEAM-7F2K" /></div>
              </label>
            )}

            {register && <label><span>Full name</span><div><FiUser /><input placeholder="Ziad Mahmoud" /></div></label>}
            <label><span>Email</span><div><FiMail /><input type="email" placeholder="you@example.com" /></div></label>

            {register && setupMode === 'create' && (
              <div className="role-select-field">
                <label htmlFor="primary-role"><span>Your primary project role</span></label>
                <div className="role-select-control">
                  <FiBriefcase />
                  <select id="primary-role" value={primaryRole} onChange={e => setPrimaryRole(e.target.value)}>
                    {roleOptions.map(role => <option key={role.value} value={role.value}>{role.label}</option>)}
                  </select>
                  <FiChevronDown className="role-select-chevron" />
                </div>
                <div className="role-select-help">
                  <FiZap />
                  <span><b>{selectedRole.label}:</b> {selectedRole.description}</span>
                </div>
              </div>
            )}

            <label><span>Password</span><div><FiLock /><input type="password" placeholder="••••••••" /></div></label>
            {register && <label><span>Confirm password</span><div><FiLock /><input type="password" placeholder="••••••••" /></div></label>}

            {register && (
              <div className="role-explainer role-explainer--v6">
                <strong>{setupMode === 'create' ? 'Role choice personalizes your first project' : 'Your invitation controls project permissions'}</strong>
                <p>
                  {setupMode === 'create'
                    ? `You remain Workspace Owner / Admin. “${selectedRole.label}” becomes your initial project role and can be changed later from Team Management.`
                    : 'For security, the invited Team Leader / Developer / Tester role is assigned by the workspace administrator, not self-selected during registration.'}
                </p>
              </div>
            )}

            <button className="btn btn--primary auth-submit" type="submit">
              <span>{register ? (setupMode === 'create' ? 'Create account & workspace' : 'Accept invite & continue') : 'Sign in'}</span>
              <FiArrowRight />
            </button>

            <div className="auth-divider"><span>or continue with</span></div>
            <div className="oauth-grid">
              <button className="oauth-btn" type="button"><FaGithub /> GitHub</button>
              <button className="oauth-btn oauth-btn--google" type="button"><FcGoogle /> Google</button>
            </div>

            {register && setupMode === 'create' && (
              <div className="auth-integrations auth-integrations--v6">
                <div className="auth-integrations__head">
                  <div>
                    <small>CONNECT AFTER SIGNUP</small>
                    <strong>Engineering integrations</strong>
                  </div>
                  <span>Optional during onboarding</span>
                </div>
                <div className="auth-integration-grid">
                  <span><FaGithub /><b>GitHub</b><small>Repositories & commits</small></span>
                  <span><FaGitlab /><b>GitLab</b><small>Repos & merge activity</small></span>
                  <span><FaJira /><b>Jira</b><small>Issue & workflow sync</small></span>
                </div>
                <p>Jira is connected as a workspace integration after signup; it is not used to choose a project role.</p>
              </div>
            )}

            {showSuccess && <div className="auth-success"><FiCheckCircle />Demo flow submitted successfully.</div>}

            <div className="auth-switch">
              {register ? 'Already have an account?' : 'New to BugNerve?'} <Link to={register ? '/login' : '/register'}>{register ? 'Sign in' : 'Create account'}</Link>
              {register && <><span className="auth-switch__dot">•</span><Link to="/invite">Preview invite flow</Link></>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
