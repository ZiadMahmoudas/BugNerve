export default function MetricCard({ label, value, note, accent }) {
  return (
    <article className="app-metric" style={{ '--metric-accent': accent }}>
      <div className="app-metric__label">{label}</div>
      <div className="app-metric__value">{value}</div>
      <div className="app-metric__note">{note}</div>
    </article>
  )
}
