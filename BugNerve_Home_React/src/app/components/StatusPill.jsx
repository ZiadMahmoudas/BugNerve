export default function StatusPill({ children, tone = 'blue' }) {
  return <span className={`app-pill app-pill--${tone}`}>{children}</span>
}
