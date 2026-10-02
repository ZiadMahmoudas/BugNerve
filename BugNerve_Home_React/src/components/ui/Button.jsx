import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Button({ children, href = '#', variant = 'primary', icon = true, className = '', onClick }) {
  const classes = `btn btn--${variant} ${className}`.trim()
  const content = <><span>{children}</span>{icon && <FiArrowUpRight aria-hidden="true" />}</>

  if (href.startsWith('/') && !href.startsWith('//')) {
    return <Link to={href} className={classes} onClick={onClick}>{content}</Link>
  }

  return <a href={href} className={classes} onClick={onClick}>{content}</a>
}
