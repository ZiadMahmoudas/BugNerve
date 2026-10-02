import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiBookOpen, FiBriefcase, FiClipboard, FiCode, FiShield, FiUsers, FiZap } from 'react-icons/fi'
import Brand from '../../components/ui/Brand'
import ThemeToggle from '../../components/ui/ThemeToggle'
import { roleNavigation, rolePath } from '../config/roleNavigation'

const demos = [
  { key:'admin', path:'/admin', label:'Admin / Owner', icon:FiShield, color:'#f59e0b', eyebrow:'Workspace control', text:'Projects, members, integrations, plan, security and workspace governance.', highlights:['Plan & billing','Members & roles','Integration health'] },
  { key:'leader', path:'/team-leader', label:'Team Leader', icon:FiUsers, color:'#8b5cf6', eyebrow:'Triage & assignment', text:'Review AI recommendations, compare team capacity and make the final assignment decision.', highlights:['AI review queue','Developer ranking','Human final decision'] },
  { key:'developer', path:'/developer', label:'Developer', icon:FiCode, color:'#10b981', eyebrow:'Focused engineering work', text:'See assigned bugs, why they were matched to you, relevant files and resolution actions.', highlights:['My work','Assignment context','Resolve & link PR'] },
  { key:'tester', path:'/tester', label:'Tester', icon:FiClipboard, color:'#1fb6ff', eyebrow:'Quality workflow', text:'Report clear bugs, follow progress and verify whether a fix should close or reopen the issue.', highlights:['Report bug','My reports','Verify / reopen'] },
]

export default function DemoHome({ theme, onToggleTheme }) {
  return (
    <main className="demo-hub">
      <header className="demo-hub__top"><Brand compact/><div><Link to="/docs" className="demo-hub__site-link"><FiBookOpen/> Docs</Link><Link to="/" className="demo-hub__site-link">Public website</Link><ThemeToggle theme={theme} onToggle={onToggleTheme}/></div></header>
      <section className="demo-hub__hero"><span><FiZap/> Interactive product prototype</span><h1>Every role. Every sidebar page. Real demo URLs.</h1><p>Use this launcher as your presentation map. Open a role, click every page in its sidebar, test the Create Bug flow, and use “Explain page” whenever you want the system logic summarized for study.</p></section>
      <section className="demo-role-grid">{demos.map((demo)=>{const Icon=demo.icon;return <article className="demo-role-card" key={demo.key} style={{'--demo-color':demo.color}}><div className="demo-role-card__head"><span className="demo-role-card__icon"><Icon/></span><span className="demo-role-card__route">localhost:5173{demo.path}</span></div><small>{demo.eyebrow}</small><h2>{demo.label}</h2><p>{demo.text}</p><ul>{demo.highlights.map(item=><li key={item}>{item}</li>)}</ul><div className="demo-role-card__pages"><span>Pages in this role</span><div>{roleNavigation[demo.key].map(item=><Link key={item.key} to={rolePath(demo.key,item.path)}>{item.label}</Link>)}</div></div><Link to={demo.path} className="demo-role-card__action">Open dashboard <FiArrowUpRight/></Link></article>})}</section>
      <section className="demo-hub__flow"><span>Full scenario to demo</span><div><b>Tester</b><i>reports</i><b>Team Leader</b><i>reviews & assigns</i><b>Developer</b><i>resolves</i><b>Tester</b><i>verifies</i></div></section>
      <section className="demo-system-note"><FiBriefcase/><div><b>Prototype rule</b><p>These URLs are intentionally open for UI testing. In production, login + backend permissions decide which role routes a user may access.</p></div></section>
    </main>
  )
}
