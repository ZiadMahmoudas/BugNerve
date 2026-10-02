import { FiBookOpen, FiCode, FiDatabase, FiShield, FiX } from 'react-icons/fi'

export default function StudyDrawer({ open, onClose, guide }) {
  if (!open) return null
  return (
    <>
      <button className="study-overlay" onClick={onClose} aria-label="Close page guide" />
      <aside className="study-drawer">
        <header><div><small>DEMO STUDY MODE</small><h3>{guide.title}</h3></div><button onClick={onClose}><FiX/></button></header>
        <section><span><FiBookOpen/> Why this page exists</span><p>{guide.purpose}</p></section>
        <section><span><FiShield/> Who uses it</span><p>{guide.role}</p></section>
        <section><span><FiCode/> Main actions</span><ul>{guide.actions.map((item)=><li key={item}>{item}</li>)}</ul></section>
        <section><span><FiDatabase/> Backend / data later</span><ul>{guide.api.map((item)=><li key={item}><code>{item}</code></li>)}</ul></section>
        <p className="study-note">This drawer is only for the prototype presentation. The production application would not expose implementation notes to normal users.</p>
      </aside>
    </>
  )
}
