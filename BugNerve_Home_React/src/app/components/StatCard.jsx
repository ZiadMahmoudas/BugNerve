export default function StatCard({ label, value, note, icon: Icon, tone = 'blue' }) {
  return <article className={`stat-card stat-card--${tone}`}><span className="stat-card__icon">{Icon && <Icon/>}</span><div><small>{label}</small><b>{value}</b><p>{note}</p></div></article>
}
