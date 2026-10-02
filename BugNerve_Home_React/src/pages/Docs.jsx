import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  FiBookOpen,
  FiChevronDown,
  FiChevronRight,
  FiCode,
  FiGitBranch,
  FiMenu,
  FiSearch,
  FiShield,
  FiX,
  FiZap,
} from 'react-icons/fi'
import Reveal from '../components/ui/Reveal'

const groups = [
  {
    title: 'Getting Started',
    links: [
      'What is BugNerve?',
      'Create your account',
      'Create a workspace',
      'Create your first project',
      'Invite your team',
      'Roles & permissions',
      '14-day Pro trial',
    ],
  },
  {
    title: 'Bug Management',
    links: [
      'Create a bug',
      'Bug fields & metadata',
      'Bug lifecycle',
      'Comments & attachments',
      'Manual assignment',
      'Verification & reopening',
      'Related & duplicate bugs',
    ],
  },
  {
    title: 'AI Triage',
    links: [
      'AI triage overview',
      'Severity prediction',
      'Priority prediction',
      'Component prediction',
      'Duplicate detection',
      'Confidence scores',
      'Human review',
      'Low-confidence results',
    ],
  },
  {
    title: 'Developer Intelligence',
    links: [
      'Developer ranking',
      'Git expertise analysis',
      'Code ownership',
      'Similar bug fixes',
      'Workload signals',
      'Recommendation factors',
      'Developer profiles',
    ],
  },
  {
    title: 'Integrations',
    links: [
      'GitHub connection',
      'GitLab connection',
      'Jira connection',
      'Repository sync',
      'External identities',
      'Webhooks',
      'Sync troubleshooting',
    ],
  },
  {
    title: 'API & Webhooks',
    links: [
      'Authentication API',
      'Projects API',
      'Bugs API',
      'AI analysis API',
      'Integrations API',
      'Webhook events',
    ],
  },
  {
    title: 'Admin & Security',
    links: [
      'Workspace administration',
      'Project roles',
      'Audit logs',
      'Tokens & sessions',
      'Data privacy',
      'Subscription & feature access',
    ],
  },
]

function DocsSearch({ value, onChange, inputRef, compact = false, onResult }) {
  const results = useMemo(() => {
    const q = value.trim().toLowerCase()
    if (!q) return []
    return groups
      .flatMap(group => group.links.map(link => ({ group: group.title, link })))
      .filter(item => `${item.group} ${item.link}`.toLowerCase().includes(q))
      .slice(0, 7)
  }, [value])

  return (
    <div className={`docs-search-wrap ${compact ? 'is-compact' : ''}`}>
      <label className="docs-search" aria-label="Search documentation">
        <span className="docs-search__icon"><FiSearch /></span>
        <input
          ref={inputRef}
          value={value}
          onChange={event => onChange(event.target.value)}
          placeholder="Search docs, AI, Jira, roles…"
          autoComplete="off"
        />
        {!compact && <kbd><span>⌘</span>K</kbd>}
        {value && (
          <button
            type="button"
            className="docs-search__clear"
            aria-label="Clear search"
            onClick={event => {
              event.preventDefault()
              onChange('')
              inputRef?.current?.focus()
            }}
          >
            <FiX />
          </button>
        )}
      </label>

      {value.trim() && (
        <div className="docs-search-results" role="listbox">
          {results.length ? results.map(item => (
            <a
              href="#"
              key={`${item.group}-${item.link}`}
              onClick={event => {
                event.preventDefault()
                onResult?.(item)
                onChange('')
              }}
            >
              <span>
                <small>{item.group}</small>
                <strong>{item.link}</strong>
              </span>
              <FiChevronRight />
            </a>
          )) : (
            <div className="docs-search-results__empty">
              <FiSearch />
              <span>No topic matches “{value}”</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function DocsNavigation({ onNavigate, mobile = false }) {
  const [expanded, setExpanded] = useState(0)

  return (
    <nav className={mobile ? 'docs-nav docs-nav--mobile' : 'docs-nav'} aria-label="Documentation topics">
      {groups.map((group, groupIndex) => {
        const isOpen = !mobile || expanded === groupIndex
        return (
          <section className={`docs-nav__group ${isOpen ? 'is-open' : ''}`} key={group.title}>
            {mobile ? (
              <button
                className="docs-nav__heading docs-nav__heading--button"
                type="button"
                onClick={() => setExpanded(current => current === groupIndex ? -1 : groupIndex)}
                aria-expanded={isOpen}
              >
                <span>{String(groupIndex + 1).padStart(2, '0')}</span>
                <h4>{group.title}</h4>
                <FiChevronDown className="docs-nav__heading-chevron" />
              </button>
            ) : (
              <div className="docs-nav__heading">
                <span>{String(groupIndex + 1).padStart(2, '0')}</span>
                <h4>{group.title}</h4>
              </div>
            )}

            <div className="docs-nav__links" aria-hidden={mobile ? !isOpen : undefined}>
              {group.links.map(link => (
                <a
                  href="#"
                  key={link}
                  tabIndex={mobile && !isOpen ? -1 : undefined}
                  onClick={event => {
                    event.preventDefault()
                    onNavigate?.()
                  }}
                >
                  <span>{link}</span>
                  <FiChevronRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>
        )
      })}
    </nav>
  )
}

export default function Docs() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [drawerQuery, setDrawerQuery] = useState('')
  const searchRef = useRef(null)
  const drawerSearchRef = useRef(null)

  useEffect(() => {
    document.body.classList.toggle('docs-drawer-open', mobileOpen)
    return () => document.body.classList.remove('docs-drawer-open')
  }, [mobileOpen])

  useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        return
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        if (mobileOpen) drawerSearchRef.current?.focus()
        else searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 901px)')
    const onChange = event => {
      if (event.matches) setMobileOpen(false)
    }
    onChange(media)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const openMobileNav = () => {
    setMobileOpen(true)
    setDrawerQuery('')
    window.setTimeout(() => drawerSearchRef.current?.focus(), 480)
  }

  const closeMobileNav = () => {
    setMobileOpen(false)
    setDrawerQuery('')
  }

  const drawer = (
    <div
      className={`docs-mobile-drawer ${mobileOpen ? 'is-open' : ''}`}
      aria-hidden={!mobileOpen}
      onMouseDown={event => {
        if (event.currentTarget === event.target) closeMobileNav()
      }}
    >
      <aside className="docs-mobile-drawer__panel" data-lenis-prevent aria-label="Documentation navigation">
        <div className="docs-mobile-drawer__header">
          <div className="docs-mobile-drawer__identity">
            <span className="docs-mobile-drawer__mark"><FiBookOpen /></span>
            <div>
              <span>BugNerve Docs</span>
              <strong>Documentation</strong>
            </div>
          </div>
          <button type="button" onClick={closeMobileNav} aria-label="Close documentation topics">
            <FiX />
          </button>
        </div>

        <div className="docs-mobile-drawer__search">
          <DocsSearch
            value={drawerQuery}
            onChange={setDrawerQuery}
            inputRef={drawerSearchRef}
            compact
            onResult={closeMobileNav}
          />
        </div>

        <div className="docs-mobile-drawer__body" data-lenis-prevent data-lenis-prevent-wheel data-lenis-prevent-touch>
          <div className="docs-mobile-drawer__caption">Browse by category</div>
          <DocsNavigation mobile onNavigate={closeMobileNav} />
        </div>

        <div className="docs-mobile-drawer__footer">
          <span>Can’t find it?</span>
          <a href="#" onClick={event => event.preventDefault()}>Ask the team <FiChevronRight /></a>
        </div>
      </aside>
    </div>
  )

  return (
    <section className="docs-page">
      <div className="container docs-page__header">
        <Reveal direction="up">
          <div className="eyebrow"><span className="eyebrow__dot" />Documentation</div>
          <h1>Understand BugNerve from workflow to integration.</h1>
          <p>Product documentation for the public prototype. Search, browse concepts, and follow the same terminology used by the application.</p>

          <div className="docs-toolbar">
            <DocsSearch value={query} onChange={setQuery} inputRef={searchRef} />
            <button className="docs-mobile-trigger" type="button" onClick={openMobileNav}>
              <span className="docs-mobile-trigger__icon"><FiMenu /></span>
              <span className="docs-mobile-trigger__copy">
                <small>Documentation</small>
                <strong>Topics</strong>
              </span>
              <FiChevronRight className="docs-mobile-trigger__arrow" />
            </button>
          </div>
        </Reveal>
      </div>

      <div className="container docs-layout">
        <aside className="docs-sidebar">
          <div className="docs-sidebar__sticky">
            <div className="docs-sidebar__label">Browse documentation</div>
            <DocsNavigation />
          </div>
        </aside>

        <main>
          <Reveal direction="right">
            <article className="docs-article">
              <span className="docs-chip"><FiBookOpen /> Overview</span>
              <h2>BugNerve in one workflow</h2>
              <p>BugNerve is an AI-assisted bug triage and developer intelligence platform. Testers report bugs, AI produces recommendations, Team Leaders review those recommendations, Developers resolve assigned issues, and Testers verify the result.</p>

              <div className="docs-callout">
                <FiZap />
                <div>
                  <strong>Human-in-the-loop</strong>
                  <p>AI output is decision support. The final triage and assignment decision belongs to the team.</p>
                </div>
              </div>

              <h3>Core architecture</h3>
              <div className="docs-architecture">
                <span><FiCode />React</span>
                <b>→</b>
                <span><FiShield />ASP.NET Core</span>
                <b>→</b>
                <span><FiGitBranch />PostgreSQL + AI + Integrations</span>
              </div>

              <h3>Recommended reading order</h3>
              <ol>
                <li>Create a workspace and project.</li>
                <li>Understand project roles and feature access.</li>
                <li>Create and triage a bug.</li>
                <li>Review duplicate and developer recommendations.</li>
                <li>Connect repository and issue-tracker data.</li>
                <li>Finish with security, audit and integration behavior.</li>
              </ol>

              <div className="docs-placeholder-grid">
                <div><span>01</span><strong>Start with the workflow</strong><p>Understand who creates, reviews, resolves and verifies bugs.</p></div>
                <div><span>02</span><strong>Then learn the AI layer</strong><p>Severity, priority, component, duplicate and developer ranking.</p></div>
                <div><span>03</span><strong>Finish with integrations</strong><p>GitHub, GitLab and Jira connect engineering context to BugNerve.</p></div>
              </div>
            </article>
          </Reveal>
        </main>
      </div>

      {typeof document !== 'undefined' ? createPortal(drawer, document.body) : drawer}
    </section>
  )
}
