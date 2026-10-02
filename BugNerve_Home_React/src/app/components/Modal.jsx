import { FiX } from 'react-icons/fi'

export default function Modal({ open, onClose, title, eyebrow, children, size = 'md' }) {
  if (!open) return null
  return (
    <div className="app-modal-backdrop" onMouseDown={onClose}>
      <section className={`app-modal app-modal--${size}`} onMouseDown={(e) => e.stopPropagation()}>
        <header className="app-modal__head">
          <div>
            {eyebrow && <span>{eyebrow}</span>}
            <h2>{title}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close"><FiX /></button>
        </header>
        <div className="app-modal__body">{children}</div>
      </section>
    </div>
  )
}
