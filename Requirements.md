# BugNerve Requirements

**Version:** 0.1  
**Status:** Initial Draft  
**Project:** BugNerve  
**Methodology:** Agile / Incremental Documentation

## 1. Purpose

BugNerve is an AI-assisted bug triage and decision-support platform. The system helps software teams report, analyze, prioritize, assign, track, verify, and close software bugs while preserving human control over AI recommendations.

## 2. User Roles

### 2.1 Admin
- Manage projects and members.
- Manage roles and permissions.
- Manage integrations.
- Access project-wide analytics and audit logs.

### 2.2 Team Leader
- Review AI recommendations.
- Accept, modify, or reject AI triage results.
- Assign bugs to developers.
- Monitor team workload and bug progress.

### 2.3 Developer
- View assigned bugs.
- Update bug progress.
- Add comments.
- Resolve bugs.
- Link development activity where available.

### 2.4 Tester
- Create bug reports.
- Add reproduction steps and attachments.
- Monitor bug progress.
- Verify resolved bugs.
- Close or reopen bugs after verification.

## 3. Functional Requirements

### 3.1 Authentication and Accounts

**FR-AUTH-01 — Login**  
The system shall allow registered users to authenticate using email and password.

**FR-AUTH-02 — JWT Authentication**  
The system shall issue secure JWT-based authentication tokens after successful login.

**FR-AUTH-03 — Refresh Session**  
The system shall support refresh tokens or an equivalent secure session-renewal mechanism.

**FR-AUTH-04 — Logout**  
The system shall allow users to terminate active sessions.

**FR-AUTH-05 — Password Reset**  
The system shall support secure password reset using time-limited reset tokens.

**FR-AUTH-06 — Profile Management**  
Users shall be able to view and update allowed profile information.

### 3.2 Projects and Members

**FR-PROJ-01 — Project Management**  
Authorized users shall be able to create, view, update, and deactivate projects.

**FR-PROJ-02 — Project Membership**  
Admins and Team Leaders shall be able to manage project members.

**FR-PROJ-03 — Project Roles**  
A user may have a different role in each project.

**FR-PROJ-04 — Components**  
Authorized users shall be able to define software components/modules for each project.

### 3.3 Bug Management

**FR-BUG-01 — Create Bug**  
Testers and authorized users shall be able to create a bug with:
- Title
- Description
- Steps to reproduce
- Expected result
- Actual result
- Environment details
- Attachments
- Metadata

**FR-BUG-02 — Bug Details**  
The system shall display complete bug details including current status, comments, history, attachments, assignment, and AI analysis.

**FR-BUG-03 — Bug Lifecycle**  
The system shall support:
- New
- AI Analyzing
- Triage Review
- Assigned
- In Progress
- Resolved
- Verified
- Closed
- Reopened
- Duplicate
- Rejected

**FR-BUG-04 — Assignment**  
Team Leaders shall be able to assign and reassign bugs to developers.

**FR-BUG-05 — Assignment History**  
The system shall preserve assignment history.

**FR-BUG-06 — Comments**  
Project members shall be able to discuss bugs through comments.

**FR-BUG-07 — Attachments**  
The system shall support screenshots, logs, recordings, and related files.

**FR-BUG-08 — Verification**  
A Tester shall be able to verify a resolved bug.

**FR-BUG-09 — Reopen**  
A Tester shall be able to reopen a bug when verification fails.

**FR-BUG-10 — Search and Filtering**  
Users shall be able to search, filter, sort, and paginate bugs.

### 3.4 AI Triage

**FR-AI-01 — Severity Prediction**  
The AI service shall predict bug severity.

**FR-AI-02 — Priority Prediction**  
The AI service shall predict bug priority independently from severity.

**FR-AI-03 — Component Prediction**  
The AI service shall predict the most likely affected component.

**FR-AI-04 — Confidence Scores**  
AI predictions shall include confidence scores where supported.

**FR-AI-05 — Model Version Tracking**  
The system shall record the model version used for each analysis.

**FR-AI-06 — AI Failure Handling**  
The bug-management platform shall remain usable if the AI service is unavailable.

### 3.5 Duplicate Detection

**FR-DUP-01 — Semantic Similarity**  
The system shall compare new bug reports with historical bugs using semantic similarity.

**FR-DUP-02 — Candidate Ranking**  
The system shall rank likely duplicate bugs.

**FR-DUP-03 — Human Confirmation**  
The system shall not automatically merge duplicates. An authorized user shall confirm or reject duplicate candidates.

### 3.6 Developer Recommendation

**FR-DEV-01 — Developer Profiles**  
The system shall build developer profiles using project membership, historical bug fixes, repository activity, code ownership, and component experience.

**FR-DEV-02 — Developer Ranking**  
The system shall rank suitable developers for a bug.

**FR-DEV-03 — Ranking Factors**  
The ranking may consider:
- Component experience
- File/repository history
- Similar resolved bugs
- Current workload
- Recent activity

**FR-DEV-04 — Explanation**  
The system shall provide human-readable reasons for recommendations.

### 3.7 Human-in-the-Loop Review

**FR-HITL-01 — Review AI Results**  
A Team Leader shall review AI triage results.

**FR-HITL-02 — Accept**  
A Team Leader shall be able to accept recommendations.

**FR-HITL-03 — Modify**  
A Team Leader shall be able to modify recommendations.

**FR-HITL-04 — Reject**  
A Team Leader shall be able to reject recommendations.

**FR-HITL-05 — Review History**  
The system shall preserve review decisions and final accepted values.

### 3.8 GitHub / GitLab Integration

**FR-GIT-01 — Connect Repository Provider**  
Authorized users shall be able to connect GitHub or GitLab securely.

**FR-GIT-02 — Repository Sync**  
The system shall retrieve repository metadata.

**FR-GIT-03 — Commit Sync**  
The system shall retrieve commit history.

**FR-GIT-04 — File Change Analysis**  
The system shall record files modified by commits.

**FR-GIT-05 — Pull/Merge Requests**  
The system shall retrieve Pull Request / Merge Request metadata where supported.

**FR-GIT-06 — Contributor Mapping**  
The system shall map external repository contributors to BugNerve users when possible.

**FR-GIT-07 — Webhooks**  
The system shall support repository webhooks for near-real-time changes.

**FR-GIT-08 — Idempotency**  
Duplicate webhook deliveries shall not create duplicate records.

### 3.9 Jira Integration

**FR-JIRA-01 — Connect Jira**  
Authorized users shall be able to connect a Jira project.

**FR-JIRA-02 — Import Bugs**  
The system shall synchronize configured Jira bug/work-item records into BugNerve.

**FR-JIRA-03 — External Mapping**  
Each synchronized bug shall preserve its Jira key and external URL.

**FR-JIRA-04 — Sync Updates**  
The system shall track synchronization state and update relevant records according to the configured integration behavior.

### 3.10 Notifications and Audit

**FR-NOTIF-01 — Notifications**  
The system shall notify users about relevant events such as assignments, AI completion, verification, and integration failures.

**FR-AUDIT-01 — Audit Log**  
The system shall record significant actions such as changes to priority, severity, status, assignment, roles, and integration settings.

### 3.11 Analytics

**FR-AN-01 — Bug Analytics**  
The system shall provide metrics for bug counts, severity, priority, status, and components.

**FR-AN-02 — Developer Workload**  
The system shall display developer workload.

**FR-AN-03 — Resolution Metrics**  
The system shall track resolution time and reopen activity.

**FR-AN-04 — AI Evaluation**  
The system shall support reporting of AI evaluation metrics.

## 4. Non-Functional Requirements

### NFR-01 — Security
- Passwords shall be hashed using a modern password-hashing algorithm.
- Tokens shall not be stored in plaintext where avoidable.
- External integration credentials shall be encrypted at rest.
- Authorization shall be enforced server-side.

### NFR-02 — Reliability
Core bug-management functions shall continue operating if the AI service is unavailable.

### NFR-03 — Maintainability
Frontend, backend, AI service, and documentation shall be organized as clearly separated modules/repositories.

### NFR-04 — Performance
List endpoints shall support pagination and appropriate database indexes.

### NFR-05 — Data Integrity
Primary keys, foreign keys, unique constraints, and transaction boundaries shall protect relational consistency.

### NFR-06 — Observability
The backend and integrations shall provide logs for failures and important operations.

### NFR-07 — Scalability
The system architecture shall support incremental scaling of the backend, AI service, and integration workers.

## 5. Testing Requirements

- Backend API automated testing
- Frontend component and flow testing
- AI evaluation using suitable classification/retrieval metrics
- Integration testing between frontend, backend, AI, PostgreSQL, and external services
- Failure-path testing for unavailable AI/integration services

## 6. AI Evaluation

Classification tasks shall be evaluated using:
- Accuracy
- Precision
- Recall
- F1-score

Duplicate detection shall additionally use retrieval-oriented metrics such as Top-K performance where applicable.

Developer recommendation shall use ranking-oriented evaluation where suitable.

## 7. Documentation Approach

Requirements are maintained incrementally. This file is an initial baseline and may be refined during backlog grooming, sprint planning, implementation, testing, and supervisor review.
