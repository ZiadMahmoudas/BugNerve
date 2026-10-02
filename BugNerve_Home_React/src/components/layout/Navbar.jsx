import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiLogIn, FiMenu, FiX } from 'react-icons/fi'
import { NavLink, useLocation } from 'react-router-dom'
import Brand from '../ui/Brand'
import Button from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'

const links = [
  ['Product', '/product'],
  ['AI Triage', '/ai-triage'],
  ['Developer Intelligence', '/developer-intelligence'],
  ['Integrations', '/integrations'],
  ['How It Works', '/how-it-works'],
  ['Pricing', '/pricing'],
  ['About', '/about'],
  ['Contact', '/contact'],
  ['Documentation', '/docs'],
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScroll = useRef(0)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const current = Math.max(window.scrollY, 0)
      const previous = lastScroll.current
      setScrolled(current > 18)

      if (open || current < 90) {
        setHidden(false)
      } else if (current > previous + 5) {
        setHidden(true)
      } else if (current < previous - 5) {
        setHidden(false)
      }

      lastScroll.current = current
    }

    lastScroll.current = window.scrollY
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  useEffect(() => {
    setOpen(false)
    setHidden(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1016px)')
    const closeDrawerOnDesktop = event => {
      if (event.matches) setOpen(false)
    }
    closeDrawerOnDesktop(media)
    media.addEventListener('change', closeDrawerOnDesktop)
    return () => media.removeEventListener('change', closeDrawerOnDesktop)
  }, [])

  return (
    <header className={`nav-shell ${scrolled ? 'is-scrolled' : ''} ${hidden ? 'is-hidden' : ''} ${open ? 'menu-is-open' : ''}`}>
      <div className="container nav">
        <Brand compact />

        <nav className="nav__links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <NavLink to={href} key={label} className={({ isActive }) => isActive ? 'is-active' : ''}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <NavLink className="nav__signin" to="/login">Sign in</NavLink>
          <Button href="/register" className="nav__cta">Start free</Button>
        </div>

        <div className="nav__mobile-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            className="nav__menu"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        onMouseDown={event => {
          if (event.currentTarget === event.target) setOpen(false)
        }}
      >
        <aside id="mobile-navigation" className="mobile-menu__panel" aria-label="Mobile navigation" data-lenis-prevent>
          <div className="mobile-menu__top">
            <Brand compact />
            <button
              className="mobile-menu__close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              <FiX />
            </button>
          </div>

          <div className="mobile-menu__inner" data-lenis-prevent data-lenis-prevent-wheel data-lenis-prevent-touch>
            <div className="mobile-menu__intro">
              <span>Explore BugNerve</span>
              <p>Understand each bug, find the right developer, and keep every decision clear.</p>
            </div>

            <nav className="mobile-menu__grid" aria-label="Mobile primary navigation">
              {links.map(([label, href], index) => (
                <NavLink
                  to={href}
                  key={label}
                  style={{ '--menu-index': index }}
                  className={({ isActive }) => isActive ? 'is-active' : ''}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{label}</strong>
                  <FiArrowUpRight />
                </NavLink>
              ))}
            </nav>

            <div className="mobile-menu__footer">
              <NavLink className="mobile-menu__signin" to="/login">
                <FiLogIn />
                <span>
                  <small>Already using BugNerve?</small>
                  <strong>Sign in to your workspace</strong>
                </span>
              </NavLink>

              <div className="mobile-menu__trial">
                <span>14-day Pro trial</span>
                <small>No credit card required to start.</small>
              </div>

              <Button href="/register" className="mobile-menu__cta">
                Start free
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </header>
  )
}
