export const projectRows = [
  { key: 'BN-CORE', name: 'BugNerve Core', members: 14, open: 47, critical: 8, integrations: 'GitHub · Jira', status: 'Active' },
  { key: 'BN-MOBILE', name: 'Mobile Application', members: 8, open: 18, critical: 2, integrations: 'GitHub', status: 'Active' },
  { key: 'BN-WEB', name: 'Marketing Website', members: 5, open: 9, critical: 0, integrations: 'GitHub', status: 'Active' },
  { key: 'BN-LABS', name: 'AI Experiments', members: 6, open: 12, critical: 1, integrations: 'GitLab', status: 'Paused' },
]

export const members = [
  { name: 'Ziad Mahmoud', email: 'ziad@bugnerve.dev', role: 'Team Leader', bugs: 3, resolved: 29, status: 'Active' },
  { name: 'Ahmed Hassan', email: 'ahmed@bugnerve.dev', role: 'Developer', bugs: 4, resolved: 41, status: 'Active' },
  { name: 'Sara Omar', email: 'sara@bugnerve.dev', role: 'Developer', bugs: 3, resolved: 37, status: 'Active' },
  { name: 'Maya Ali', email: 'maya@bugnerve.dev', role: 'Tester', bugs: 2, resolved: 14, status: 'Active' },
  { name: 'Youssef Nader', email: 'youssef@bugnerve.dev', role: 'Developer', bugs: 2, resolved: 22, status: 'Away' },
]

export const integrations = [
  { name: 'GitHub', type: 'Repository intelligence', status: 'Connected', detail: '4 repositories · webhook healthy', lastSync: '2 min ago' },
  { name: 'GitLab', type: 'Repository intelligence', status: 'Connected', detail: '1 repository · sync healthy', lastSync: '18 min ago' },
  { name: 'Jira', type: 'Issue synchronization', status: 'Connected', detail: 'SCRUM project · two-way mapping', lastSync: '6 min ago' },
]

export const activity = [
  { at: '09:42', title: 'BUG-1248 moved to In Progress', by: 'Ahmed Hassan', type: 'status' },
  { at: '09:18', title: 'AI triage completed for BUG-1288', by: 'BugNerve AI', type: 'ai' },
  { at: '08:55', title: 'PR #428 linked to BUG-1248', by: 'Ahmed Hassan', type: 'git' },
  { at: '08:31', title: 'BUG-1185 marked ready for review', by: 'Sara Omar', type: 'status' },
  { at: '08:12', title: 'Jira SCRUM-584 synced', by: 'Integration worker', type: 'sync' },
]

export const repoRows = [
  { name: 'bugnerve-api', provider: 'GitHub', branch: 'main', commits: 1284, contributors: 9, linkedBugs: 86, health: 'Healthy' },
  { name: 'bugnerve-web', provider: 'GitHub', branch: 'main', commits: 842, contributors: 6, linkedBugs: 51, health: 'Healthy' },
  { name: 'bugnerve-ai', provider: 'GitLab', branch: 'main', commits: 614, contributors: 5, linkedBugs: 39, health: 'Healthy' },
]

export const verificationRows = [
  { id: 'BUG-1248', title: 'Users get signed out unexpectedly', developer: 'Ahmed Hassan', resolved: '1h ago', commit: 'a91f2d', priority: 'P1' },
  { id: 'BUG-1185', title: 'Checkout totals mismatch after coupon', developer: 'Sara Omar', resolved: '2h ago', commit: '54c821', priority: 'P1' },
  { id: 'BUG-1178', title: 'Dashboard filters keep old values', developer: 'Youssef Nader', resolved: '3h ago', commit: 'b18d03', priority: 'P2' },
]

export const triageQueue = [
  { id: 'BUG-1288', title: 'Password reset email arrives twice', severity: 'Major', priority: 'P2', component: 'Notifications', confidence: 82, duplicate: 68, developer: 'Sara Omar', developerScore: 88 },
  { id: 'BUG-1286', title: 'Invoice page freezes on export', severity: 'Critical', priority: 'P1', component: 'Billing', confidence: 91, duplicate: 24, developer: 'Ahmed Hassan', developerScore: 79 },
  { id: 'BUG-1283', title: 'Search filters ignore selected country', severity: 'Normal', priority: 'P3', component: 'Search', confidence: 73, duplicate: 86, developer: 'Youssef Nader', developerScore: 84 },
]

export const auditRows = [
  { time: 'Today 10:14', user: 'Ziad Mahmoud', action: 'Changed priority', entity: 'BUG-1248', before: 'P2', after: 'P1' },
  { time: 'Today 09:51', user: 'Admin System', action: 'Connected integration', entity: 'Jira / SCRUM', before: 'Disconnected', after: 'Connected' },
  { time: 'Yesterday 18:32', user: 'Ziad Mahmoud', action: 'Changed project role', entity: 'Sara Omar', before: 'Tester', after: 'Developer' },
]
