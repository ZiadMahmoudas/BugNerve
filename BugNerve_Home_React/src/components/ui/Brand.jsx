import { Link } from 'react-router-dom'
import mark from '../../assets/bugnerve-brand-mark.png'

export default function Brand({ compact = false, href = '/', className = '' }) {
  const classes = `brand brand--v6 ${compact ? 'brand--compact' : ''} ${className}`.trim()

  return (
    <Link className={classes} to={href} aria-label="BugNerve home">
      <span className="brand__mark-wrap" aria-hidden="true">
        <img className="brand__icon" src={mark} alt="" />
      </span>
      <span className="brand__copy">
        <span className="brand__name"><span>Bug</span><strong>Nerve</strong></span>
        {!compact && <span className="brand__tagline">Intelligent Bug Triage. Connected Development.</span>}
      </span>
    </Link>
  )
}
