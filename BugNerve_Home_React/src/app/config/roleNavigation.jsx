import {
  FiActivity,
  FiAlertCircle,
  FiBarChart2,
  FiBriefcase,
  FiCheckSquare,
  FiClipboard,
  FiColumns,
  FiCreditCard,
  FiFileText,
  FiFolder,
  FiGitBranch,
  FiHome,
  FiLayers,
  FiLink,
  FiPlusCircle,
  FiSettings,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from 'react-icons/fi'

export const roleBases = {
  admin: '/admin',
  leader: '/team-leader',
  developer: '/developer',
  tester: '/tester',
}

export const roleNavigation = {
  admin: [
    { key: 'overview', label: 'Overview', path: '', icon: FiHome },
    { key: 'projects', label: 'Projects', path: 'projects', icon: FiFolder },
    { key: 'team', label: 'Team', path: 'team', icon: FiUsers, badge: '6' },
    { key: 'integrations', label: 'Integrations', path: 'integrations', icon: FiLink },
    { key: 'billing', label: 'Plan & Billing', path: 'billing', icon: FiCreditCard },
    { key: 'audit', label: 'Audit Logs', path: 'audit', icon: FiFileText },
    { key: 'analytics', label: 'Analytics', path: 'analytics', icon: FiBarChart2 },
    { key: 'settings', label: 'Settings', path: 'settings', icon: FiSettings },
  ],
  leader: [
    { key: 'overview', label: 'Overview', path: '', icon: FiHome },
    { key: 'bugs', label: 'Bugs', path: 'bugs', icon: FiAlertCircle },
    { key: 'triage', label: 'AI Triage', path: 'ai-triage', icon: FiZap, badge: '6' },
    { key: 'board', label: 'Board', path: 'board', icon: FiColumns },
    { key: 'team', label: 'Team', path: 'team', icon: FiUsers },
    { key: 'repositories', label: 'Repositories', path: 'repositories', icon: FiGitBranch },
    { key: 'integrations', label: 'Integrations', path: 'integrations', icon: FiLink },
    { key: 'analytics', label: 'Analytics', path: 'analytics', icon: FiBarChart2 },
  ],
  developer: [
    { key: 'overview', label: 'My Work', path: '', icon: FiBriefcase },
    { key: 'bugs', label: 'Bugs', path: 'bugs', icon: FiAlertCircle },
    { key: 'board', label: 'Board', path: 'board', icon: FiColumns },
    { key: 'repositories', label: 'Repositories', path: 'repositories', icon: FiGitBranch },
    { key: 'activity', label: 'Activity', path: 'activity', icon: FiActivity },
    { key: 'insights', label: 'My Insights', path: 'insights', icon: FiTrendingUp },
  ],
  tester: [
    { key: 'overview', label: 'Overview', path: '', icon: FiHome },
    { key: 'report', label: 'Report Bug', path: 'report-bug', icon: FiPlusCircle },
    { key: 'my-bugs', label: 'My Bugs', path: 'my-bugs', icon: FiClipboard },
    { key: 'verification', label: 'Verification', path: 'verification', icon: FiCheckSquare, badge: '3' },
    { key: 'bugs', label: 'Bugs', path: 'bugs', icon: FiAlertCircle },
    { key: 'activity', label: 'Activity', path: 'activity', icon: FiActivity },
  ],
}

export const roleMeta = {
  admin: { icon: FiShield, title: 'Admin / Owner', accent: '#f59e0b' },
  leader: { icon: FiUsers, title: 'Team Leader', accent: '#8b5cf6' },
  developer: { icon: FiBriefcase, title: 'Developer', accent: '#10b981' },
  tester: { icon: FiClipboard, title: 'Tester', accent: '#1fb6ff' },
}

export function rolePath(role, itemPath = '') {
  const base = roleBases[role]
  return itemPath ? `${base}/${itemPath}` : base
}
