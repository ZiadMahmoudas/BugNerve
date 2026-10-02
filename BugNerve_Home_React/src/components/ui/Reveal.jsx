export default function Reveal({ children, direction = 'up', delay = 0, className = '' }) {
  return (
    <div
      className={className}
      data-reveal={direction}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}
