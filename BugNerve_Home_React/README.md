# BugNerve Platform React v12

A complete interactive UI prototype for BugNerve with the public website plus four role-aware application areas.

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:5173/app
```

`/app` is the demo launcher. It lists every role and every inner page route.

## Main role URLs

```text
/admin
/team-leader
/developer
/tester
```

Every sidebar item is a real React Router page.

### Admin / Owner

```text
/admin
/admin/projects
/admin/team
/admin/integrations
/admin/billing
/admin/audit
/admin/analytics
/admin/settings
```

### Team Leader

```text
/team-leader
/team-leader/bugs
/team-leader/ai-triage
/team-leader/board
/team-leader/team
/team-leader/repositories
/team-leader/integrations
/team-leader/analytics
/team-leader/bugs/BUG-1248
```

### Developer

```text
/developer
/developer/bugs
/developer/board
/developer/repositories
/developer/activity
/developer/insights
/developer/bugs/BUG-1248
```

### Tester

```text
/tester
/tester/report-bug
/tester/my-bugs
/tester/verification
/tester/bugs
/tester/activity
/tester/bugs/BUG-1248
```

## Prototype features

- React Icons throughout the application navigation and actions.
- Role-specific navigation and dashboards.
- Functional global Create Bug modal.
- Tester full-page bug report flow.
- Team Leader AI Triage review flow.
- Developer insight / repository context pages.
- Tester verification Pass / Fail / Reopen flow.
- Admin plan, members, integrations, audit and settings pages.
- Shareable role/page URLs.
- `Explain page` study drawer on every structured inner page and role dashboard.
- Dark + light themes.
- Responsive sidebar / mobile navigation.

## Important prototype rule

The role URLs are intentionally open for design review and supervisor demos. In production, the backend must authorize routes using workspace membership, project membership and permissions. A user typing `/admin` must never become an Admin.

See `SYSTEM_GUIDE.md` for the project flow and page responsibilities.
