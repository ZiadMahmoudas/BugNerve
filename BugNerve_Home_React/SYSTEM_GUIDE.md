# BugNerve — UI System Guide

## 1. The core workflow

```text
Tester
  ↓
Create Bug
  ↓
Backend saves Bug
  ↓
AI first-pass analysis
  ├─ Severity
  ├─ Priority
  ├─ Component
  ├─ Duplicate candidates
  └─ Developer recommendation
  ↓
Team Leader Review
  ↓
Accept / Modify / Reject
  ↓
Developer Assignment
  ↓
Developer Works
  ↓
Resolved
  ↓
Tester Verification
  ├─ Pass → Verified / Closed
  └─ Fail → Reopened
```

## 2. Role vs Plan

Role controls what a person is allowed to do in a project.

```text
Admin / Owner
Team Leader
Developer
Tester
```

Plan controls which product features the workspace has access to.

```text
Free
Pro
14-day Pro Trial
```

Changing Free → Pro does not change a Developer into a Team Leader.

## 3. Admin / Owner

Purpose: workspace governance rather than daily bug triage.

Main pages:

- Overview — system health and workspace summary.
- Projects — create and inspect workspace projects.
- Team — invitations and project roles.
- Integrations — GitHub, GitLab and Jira connection health.
- Plan & Billing — Free / Pro / Trial entitlements.
- Audit Logs — who changed what and when.
- Analytics — organization-level bug and AI metrics.
- Settings — workspace, security and AI thresholds.

## 4. Team Leader

Purpose: human-in-the-loop triage and assignment.

Main pages:

- Overview — AI queue, critical bugs, workload.
- Bugs — project backlog.
- AI Triage — Accept / Modify / Reject AI output.
- Board — bug lifecycle Kanban.
- Team — workload and expertise context.
- Repositories — Git history and developer evidence.
- Integrations — connected engineering tools.
- Analytics — triage, resolution and AI acceptance metrics.

## 5. Developer

Purpose: focused engineering work.

Main pages:

- My Work — assigned bugs and current workload.
- Bugs — accessible issue list.
- Board — workflow view.
- Repositories — relevant codebases and history.
- Activity — recent bug / PR / commit events.
- My Insights — component expertise, file ownership and similar fixes.

Developers can see why BugNerve recommended them, but they do not make the final AI triage decision.

## 6. Tester

Purpose: report issues and verify fixes.

Main pages:

- Overview — reports, reopened issues and pending verification.
- Report Bug — full issue form and evidence.
- My Bugs — issues reported by the current tester.
- Verification — Pass or Fail / Reopen resolved bugs.
- Bugs — project issue list for duplicate awareness.
- Activity — recent quality events.

## 7. Important UI rule

All roles share the same BugNerve design system and core bug data. The application does not create four disconnected products. Navigation, actions and priorities change by role while the same bug remains the same record.

## 8. Production security later

The current role URLs are open only for UI demo.

Production flow:

```text
Login
  ↓
Backend validates identity
  ↓
Workspace membership
  ↓
Project membership + role
  ↓
Feature entitlement / subscription
  ↓
Allowed route + allowed API action
```

Frontend route protection improves UX, but backend authorization is the real security boundary.
