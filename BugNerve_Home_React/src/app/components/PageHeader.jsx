import { FiArrowLeft, FiPlus } from 'react-icons/fi'

export default function PageHeader({ eyebrow, title, description, action, actionIcon: ActionIcon = FiPlus, onAction, secondary, onSecondary }) {
  return (
    <header className="inner-page-head">
      <div><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>
      <div className="inner-page-head__actions">
        {secondary && <button className="secondary compact" onClick={onSecondary}><FiArrowLeft/>{secondary}</button>}
        {action && <button className="primary compact" onClick={onAction}><ActionIcon/>{action}</button>}
      </div>
    </header>
  )
}
