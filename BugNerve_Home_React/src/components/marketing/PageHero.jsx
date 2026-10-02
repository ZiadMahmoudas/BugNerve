import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function PageHero({ eyebrow, title, text, primary = ['Start free', '/register'], secondary = ['Talk to us', '/contact'], image, imageAlt = '', badge, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid" />
      <div className="container page-hero__inner">
        <Reveal direction="left" className="page-hero__copy">
          {eyebrow && <div className="eyebrow"><span className="eyebrow__dot" />{eyebrow}</div>}
          {badge && <div className="page-hero__badge">{badge}</div>}
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="page-hero__actions">
            <Button href={primary[1]}>{primary[0]}</Button>
            <Button href={secondary[1]} variant="ghost">{secondary[0]}</Button>
          </div>
          {children}
        </Reveal>
        {image && (
          <Reveal direction="right" delay={120} className="page-hero__media">
            <img src={image} alt={imageAlt} />
            <div className="page-hero__media-overlay" />
            <div className="page-hero__media-card"><span>BugNerve signal</span><strong>Human-reviewed AI</strong><small>Evidence first. Automation second.</small></div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
