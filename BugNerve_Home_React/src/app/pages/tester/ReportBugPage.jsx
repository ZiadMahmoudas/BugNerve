import { useState } from 'react'
import { FiCheckCircle, FiFileText, FiPaperclip, FiUploadCloud, FiZap } from 'react-icons/fi'
import RolePageShell from '../../layout/RolePageShell'
import PageHeader from '../../components/PageHeader'

export default function ReportBugPage({ theme, onToggleTheme }) {
  const [submitted, setSubmitted] = useState(false)
  const guide = {
    title: 'Report Bug',
    purpose: 'The Tester records the facts of the issue. BugNerve saves the report first, then AI enriches it. The reporter does not choose severity, priority or developer as the final authority.',
    role: 'Tester',
    actions: ['Describe the issue', 'Add reproduction steps', 'Attach evidence', 'Submit for AI first pass and Team Leader review'],
    api: ['POST /api/bugs', 'POST /api/bugs/{id}/attachments', 'POST /api/bugs/{id}/ai-analysis'],
  }

  return (
    <RolePageShell role="tester" theme={theme} onToggleTheme={onToggleTheme} guide={guide}>
      <PageHeader
        eyebrow="Quality workflow"
        title="Report a bug"
        description="Capture enough evidence for the team to reproduce the problem. BugNerve handles the first triage pass after submission."
      />

      {!submitted ? (
        <form className="report-page-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
          <div className="report-form-main app-panel">
            <label>Title<input required placeholder="Example: Checkout total changes after coupon" /></label>
            <label>Description<textarea required rows="5" placeholder="Explain what happened and when..." /></label>
            <label>Steps to reproduce<textarea rows="5" placeholder={'1. Open checkout\n2. Apply coupon\n3. Review the final total'} /></label>
            <div className="form-two-col">
              <label>Expected result<input placeholder="What should happen?" /></label>
              <label>Actual result<input placeholder="What happened instead?" /></label>
            </div>
            <div className="form-two-col">
              <label>Environment<input defaultValue="Web · Chrome · Windows 11" /></label>
              <label>Component<select><option>Let BugNerve suggest it</option><option>Authentication</option><option>Payments</option><option>Frontend</option></select></label>
            </div>
            <button type="button" className="file-drop report-drop"><FiUploadCloud/><span><b>Add screenshots, logs or files</b><small>Evidence helps the team reproduce the issue.</small></span></button>
            <button className="primary report-submit">Submit bug</button>
          </div>

          <aside className="report-form-side">
            <section className="smart-card"><FiZap/><div><b>After you submit</b><p>BugNerve suggests severity, priority, affected component, similar issues and best-fit developers. A Team Leader reviews those suggestions before final assignment.</p></div></section>
            <section className="report-checklist"><h3>A strong report includes</h3><p><FiFileText/> Clear reproduction steps</p><p><FiPaperclip/> Evidence when available</p><p><FiCheckCircle/> Expected vs actual behavior</p></section>
          </aside>
        </form>
      ) : (
        <section className="app-panel report-success">
          <FiCheckCircle/>
          <span>BUG-1294</span>
          <h2>Report saved successfully.</h2>
          <p>The issue exists in the tracker now. AI analysis has started and will appear in the Team Leader’s triage queue when ready.</p>
          <div className="analysis-steps"><span className="done">Saved report</span><i/><span className="running">AI analysis</span><i/><span>Human review</span><i/><span>Assignment</span></div>
          <button className="primary" onClick={() => setSubmitted(false)}>Report another bug</button>
        </section>
      )}
    </RolePageShell>
  )
}
