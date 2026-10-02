import { FiCheckCircle, FiSearch, FiTarget, FiUsers, FiZap } from 'react-icons/fi'

const items = [
  [FiSearch, 'Understand the issue'],
  [FiCheckCircle, 'Spot repeated problems'],
  [FiUsers, 'Find the right teammate'],
  [FiTarget, 'Make a clear assignment'],
  [FiZap, 'Keep the final say'],
]

export default function SignalStrip() {
  return (
    <section data-reveal="up" className="signal-strip">
      <div className="container signal-strip__inner">
        {items.map(([Icon, text]) => <div key={text}><Icon /><span>{text}</span></div>)}
      </div>
    </section>
  )
}
