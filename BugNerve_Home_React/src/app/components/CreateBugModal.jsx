import { useState } from 'react'
import { FiCheckCircle, FiFileText, FiImage, FiPaperclip, FiPlus, FiUploadCloud, FiZap } from 'react-icons/fi'
import Modal from './Modal'

export default function CreateBugModal({ open, onClose, reporterRole = 'Tester' }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    title: '', description: '', steps: '', expected: '', actual: '', environment: 'Web · Chrome · Windows 11', component: '',
  })

  if (!open) return null

  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }))
  const submit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }
  const close = () => {
    setSubmitted(false)
    setForm({ title: '', description: '', steps: '', expected: '', actual: '', environment: 'Web · Chrome · Windows 11', component: '' })
    onClose()
  }

  return (
    <Modal open onClose={close} eyebrow={`Create bug · ${reporterRole}`} title={submitted ? 'Bug submitted successfully' : 'Report a clear, reproducible issue'} size="xl">
      {!submitted ? (
        <form className="create-bug-form" onSubmit={submit}>
          <div className="create-bug-form__main">
            <label className="field-block"><span>Bug title</span><input required value={form.title} onChange={update('title')} placeholder="Example: Users get signed out while working" /></label>
            <label className="field-block"><span>Description</span><textarea required rows="4" value={form.description} onChange={update('description')} placeholder="What happened? Add the context a teammate needs to understand the problem." /></label>
            <label className="field-block"><span>Steps to reproduce</span><textarea rows="4" value={form.steps} onChange={update('steps')} placeholder={'1. Sign in\n2. Keep the app open\n3. Continue working after the session refresh'} /></label>
            <div className="form-two-col">
              <label className="field-block"><span>Expected result</span><input value={form.expected} onChange={update('expected')} placeholder="What should happen?" /></label>
              <label className="field-block"><span>Actual result</span><input value={form.actual} onChange={update('actual')} placeholder="What happened instead?" /></label>
            </div>
            <div className="form-two-col">
              <label className="field-block"><span>Environment</span><input value={form.environment} onChange={update('environment')} /></label>
              <label className="field-block"><span>Component <em>optional</em></span><select value={form.component} onChange={update('component')}><option value="">Let BugNerve suggest it</option><option>Authentication</option><option>Frontend</option><option>Backend API</option><option>Database</option><option>Billing</option></select></label>
            </div>
            <button type="button" className="file-drop"><FiUploadCloud/><span><b>Drop screenshots, logs or files</b><small>PNG, JPG, TXT, LOG, ZIP · up to 25 MB</small></span><FiPlus/></button>
          </div>
          <aside className="create-bug-form__aside">
            <div className="smart-card"><FiZap/><div><b>What happens after submit?</b><p>BugNerve saves the report first. AI then suggests impact, urgency, component, duplicates and the best-fit developer. A Team Leader still makes the final decision.</p></div></div>
            <div className="submission-checklist">
              <span><FiFileText/> Clear title & description</span>
              <span><FiImage/> Evidence when available</span>
              <span><FiPaperclip/> Environment & reproduction steps</span>
            </div>
            <div className="plan-hint"><small>Current workspace</small><b>Pro Trial · 11 days left</b><span>Advanced developer ranking is enabled.</span></div>
          </aside>
          <div className="create-bug-form__actions"><button type="button" className="secondary" onClick={close}>Cancel</button><button className="primary" type="submit"><FiPlus/> Create bug</button></div>
        </form>
      ) : (
        <div className="created-state">
          <span className="created-state__icon"><FiCheckCircle/></span>
          <span className="created-state__key">BUG-1294</span>
          <h3>Your bug is saved.</h3>
          <p>The core tracker is already usable. AI analysis is now running in the background and will appear in the Team Leader triage queue when ready.</p>
          <div className="analysis-steps">
            <span className="done">Saved report</span><i/><span className="running">AI analysis</span><i/><span>Human review</span><i/><span>Assignment</span>
          </div>
          <button className="primary" onClick={close}>Back to workspace</button>
        </div>
      )}
    </Modal>
  )
}
