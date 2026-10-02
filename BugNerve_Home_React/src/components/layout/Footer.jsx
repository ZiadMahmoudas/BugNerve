import { FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Brand from '../ui/Brand'

const cols = [
  { title: 'Product', links: [['Product','/product'],['AI Triage','/ai-triage'],['Developer Intelligence','/developer-intelligence'],['Integrations','/integrations'],['Pricing','/pricing']] },
  { title: 'Resources', links: [['Documentation','/docs'],['How it works','/how-it-works'],['FAQ','/#faq'],['Security','/product#security']] },
  { title: 'Company', links: [['About','/about'],['Contact','/contact'],['Privacy','/privacy'],['Terms','/terms']] },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Brand />
          <p>A clearer way to understand bugs, find the right developer, and keep your team in control.</p>
          <div className="footer__socials"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a></div>
        </div>
        {cols.map(col => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map(([label, href]) => <Link to={href} key={label}>{label}<FiArrowUpRight /></Link>)}
          </div>
        ))}
      </div>
      <div className="container footer__bottom">
        <span>© 2026 BugNerve. Graduation project prototype.</span>
        <span>Selected photography via Unsplash.</span>
      </div>
    </footer>
  )
}
