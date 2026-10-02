import { FiActivity, FiCheckCircle, FiSearch, FiShield, FiUsers, FiZap } from 'react-icons/fi'

export const featureCards = [
  { icon: FiSearch, title: 'Understand the issue faster', text: 'Get a clear view of how serious a bug is, how soon it needs attention, and where it most likely belongs.', tone: 'blue' },
  { icon: FiCheckCircle, title: 'Catch repeated problems', text: 'See when a new report looks similar to something your team has already seen before.', tone: 'violet' },
  { icon: FiUsers, title: 'Find the right developer', text: 'Compare team experience, past fixes and current workload to suggest the best-fit person for the job.', tone: 'cyan' },
  { icon: FiShield, title: 'Keep people in control', text: 'BugNerve can recommend a next step, but your Team Leader always makes the final call.', tone: 'green' },
]

export const workflowSteps = [
  { no: '01', label: 'Report', title: 'Someone reports the problem', text: 'A Tester shares what happened, what they expected, and any useful screenshots or details.' },
  { no: '02', label: 'Understand', title: 'BugNerve makes sense of it', text: 'The system highlights impact, urgency, the likely area involved, and possible repeated issues.' },
  { no: '03', label: 'Match', title: 'The right people are suggested', text: 'BugNerve compares the team and surfaces the developers who appear best suited to help.' },
  { no: '04', label: 'Decide', title: 'The Team Leader reviews it', text: 'The recommendation can be accepted, changed, or rejected before anyone is assigned.' },
  { no: '05', label: 'Fix', title: 'The developer works on the issue', text: 'The assigned developer gets the context they need and keeps the team updated.' },
  { no: '06', label: 'Verify', title: 'The Tester checks the result', text: 'If the fix works, the bug is closed. If not, it is reopened with its full history intact.' },
]

export const stats = [
  ['1 place', 'to understand each bug'],
  ['1 shortlist', 'of best-fit developers'],
  ['1 review', 'before final assignment'],
  ['1 workflow', 'from report to verified fix'],
]

export const pricing = [
  {
    name: 'Free', price: '$0', note: 'For teams that want a clear place to report, track and assign bugs.', highlighted: false,
    features: ['Bug management', '1 project', 'Up to 5 team members', 'Basic issue suggestions', 'Manual assignment', 'Basic developer list'],
  },
  {
    name: 'Pro', price: '14-day trial', note: 'For teams that want BugNerve to help identify the best-fit developer and explain why.', highlighted: true,
    features: ['Ranked developer recommendations', 'Team experience signals', 'Code-area familiarity', 'Smarter duplicate suggestions', 'GitHub / GitLab connections', 'Jira sync', 'Advanced analytics', 'Full recommendation explanations'],
  },
]

export const principles = [
  { icon: FiShield, title: 'People stay in control', text: 'BugNerve supports your decisions instead of silently making them for you.' },
  { icon: FiActivity, title: 'Recommendations you can understand', text: 'The system shows the reasons behind a suggestion so the team can judge it with confidence.' },
  { icon: FiZap, title: 'Less guessing, more context', text: 'Bug reports, team experience and connected tools come together in one clear workflow.' },
]
