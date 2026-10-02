import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import AITriagePage from './pages/AITriagePage'
import DeveloperIntelligencePage from './pages/DeveloperIntelligencePage'
import IntegrationsPage from './pages/IntegrationsPage'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'
import Contact from './pages/Contact'
import PricingPage from './pages/PricingPage'
import Docs from './pages/Docs'
import AuthPage from './pages/AuthPage'
import LegalPage from './pages/LegalPage'
import NotFound from './pages/NotFound'
import InvitePage from './pages/InvitePage'

import DashboardDemo from './app/pages/DashboardDemo'
import DemoHome from './app/pages/DemoHome'
import ProjectsPage from './app/pages/admin/ProjectsPage'
import BillingPage from './app/pages/admin/BillingPage'
import AuditPage from './app/pages/admin/AuditPage'
import SettingsPage from './app/pages/admin/SettingsPage'
import BugsPage from './app/pages/shared/BugsPage'
import BugDetailPage from './app/pages/shared/BugDetailPage'
import BoardPage from './app/pages/shared/BoardPage'
import TeamPage from './app/pages/shared/TeamPage'
import IntegrationsAppPage from './app/pages/shared/IntegrationsAppPage'
import RepositoriesPage from './app/pages/shared/RepositoriesPage'
import ActivityPage from './app/pages/shared/ActivityPage'
import AnalyticsAppPage from './app/pages/shared/AnalyticsAppPage'
import AITriageQueuePage from './app/pages/leader/AITriageQueuePage'
import InsightsPage from './app/pages/developer/InsightsPage'
import ReportBugPage from './app/pages/tester/ReportBugPage'
import VerificationPage from './app/pages/tester/VerificationPage'

function ThemeRoot() {
  const [theme, setTheme] = useState(() => localStorage.getItem('bugnerve-theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('bugnerve-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark')
  const shared = { theme, onToggleTheme: toggleTheme }

  return (
    <Routes>
      <Route element={<PublicLayout {...shared} />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/ai-triage" element={<AITriagePage />} />
        <Route path="/developer-intelligence" element={<DeveloperIntelligencePage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/privacy" element={<LegalPage title="Privacy Policy" />} />
        <Route path="/terms" element={<LegalPage title="Terms of Use" />} />
      </Route>

      <Route path="/login" element={<AuthPage mode="login" {...shared} />} />
      <Route path="/register" element={<AuthPage mode="register" {...shared} />} />
      <Route path="/invite" element={<InvitePage {...shared} />} />
      <Route path="/app" element={<DemoHome {...shared} />} />

      {/* Admin / Owner */}
      <Route path="/admin" element={<DashboardDemo initialRole="admin" {...shared} />} />
      <Route path="/admin/projects" element={<ProjectsPage {...shared} />} />
      <Route path="/admin/team" element={<TeamPage role="admin" {...shared} />} />
      <Route path="/admin/integrations" element={<IntegrationsAppPage role="admin" {...shared} />} />
      <Route path="/admin/billing" element={<BillingPage {...shared} />} />
      <Route path="/admin/audit" element={<AuditPage {...shared} />} />
      <Route path="/admin/analytics" element={<AnalyticsAppPage role="admin" {...shared} />} />
      <Route path="/admin/settings" element={<SettingsPage {...shared} />} />

      {/* Team Leader */}
      <Route path="/team-leader" element={<DashboardDemo initialRole="leader" {...shared} />} />
      <Route path="/team-leader/bugs" element={<BugsPage role="leader" {...shared} />} />
      <Route path="/team-leader/bugs/:bugId" element={<BugDetailPage role="leader" {...shared} />} />
      <Route path="/team-leader/ai-triage" element={<AITriageQueuePage {...shared} />} />
      <Route path="/team-leader/board" element={<BoardPage role="leader" {...shared} />} />
      <Route path="/team-leader/team" element={<TeamPage role="leader" {...shared} />} />
      <Route path="/team-leader/repositories" element={<RepositoriesPage role="leader" {...shared} />} />
      <Route path="/team-leader/integrations" element={<IntegrationsAppPage role="leader" {...shared} />} />
      <Route path="/team-leader/analytics" element={<AnalyticsAppPage role="leader" {...shared} />} />

      {/* Developer */}
      <Route path="/developer" element={<DashboardDemo initialRole="developer" {...shared} />} />
      <Route path="/developer/bugs" element={<BugsPage role="developer" {...shared} />} />
      <Route path="/developer/bugs/:bugId" element={<BugDetailPage role="developer" {...shared} />} />
      <Route path="/developer/board" element={<BoardPage role="developer" {...shared} />} />
      <Route path="/developer/repositories" element={<RepositoriesPage role="developer" {...shared} />} />
      <Route path="/developer/activity" element={<ActivityPage role="developer" {...shared} />} />
      <Route path="/developer/insights" element={<InsightsPage {...shared} />} />

      {/* Tester */}
      <Route path="/tester" element={<DashboardDemo initialRole="tester" {...shared} />} />
      <Route path="/tester/report-bug" element={<ReportBugPage {...shared} />} />
      <Route path="/tester/my-bugs" element={<BugsPage role="tester" mineOnly {...shared} />} />
      <Route path="/tester/verification" element={<VerificationPage {...shared} />} />
      <Route path="/tester/bugs" element={<BugsPage role="tester" {...shared} />} />
      <Route path="/tester/bugs/:bugId" element={<BugDetailPage role="tester" {...shared} />} />
      <Route path="/tester/activity" element={<ActivityPage role="tester" {...shared} />} />

      <Route path="/leader" element={<Navigate to="/team-leader" replace />} />
      <Route path="/app/admin" element={<Navigate to="/admin" replace />} />
      <Route path="/app/team-leader" element={<Navigate to="/team-leader" replace />} />
      <Route path="/app/developer" element={<Navigate to="/developer" replace />} />
      <Route path="/app/tester" element={<Navigate to="/tester" replace />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default function App() {
  return <BrowserRouter><ThemeRoot /></BrowserRouter>
}
