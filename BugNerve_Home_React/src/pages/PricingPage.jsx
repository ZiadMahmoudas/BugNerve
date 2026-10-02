import { FiCheck, FiCpu, FiGitBranch, FiStar, FiUsers, FiX } from 'react-icons/fi'
import PageHero from '../components/marketing/PageHero'
import Reveal from '../components/ui/Reveal'
import ClosingCTA from '../components/marketing/ClosingCTA'

const rows=[
 ['Bug management','check','check'],['1 project','check','Multiple projects'],['Up to 5 members','check','Expanded team'],['Manual assignment','check','check'],['Basic AI predictions','Limited','Full'],['Basic developer list','check','check'],['AI developer ranking','x','check'],['Git expertise analysis','x','check'],['Code ownership','x','check'],['Similar bug ranking','x','check'],['Advanced duplicate detection','Limited','check'],['Jira sync','x','check'],['Advanced analytics','x','check'],['Full AI explainability','Basic','check'],
]

function Mark({value}){if(value==='check')return <FiCheck className="plan-yes"/>;if(value==='x')return <FiX className="plan-no"/>;return <span>{value}</span>}
export default function PricingPage(){return <>
 <PageHero eyebrow="Pricing" title="Start with the workflow. Upgrade for deeper intelligence." text="Every new workspace receives a 14-day Pro trial. If the trial ends without a subscription, the workspace keeps the core bug workflow on Free." badge="14-day Pro trial · no role changes when the trial ends" primary={['Start Pro trial','/register']} secondary={['Compare features','#plans']} />
 <section className="section pricing-page" id="plans"><div className="container"><div className="pricing-page__cards"><Reveal direction="left"><article className="plan-card"><div className="plan-card__icon"><FiUsers/></div><span>FREE</span><h2>$0</h2><p>Core bug management for a small team testing the workflow.</p><a className="btn btn--ghost" href="/register">Start free</a></article></Reveal><Reveal direction="right"><article className="plan-card plan-card--pro"><div className="plan-card__badge"><FiStar/> 14-day trial</div><div className="plan-card__icon"><FiCpu/></div><span>PRO</span><h2>Paid</h2><p>Developer intelligence, advanced AI, integrations, and deeper analytics.</p><a className="btn btn--primary" href="/register">Start Pro trial</a></article></Reveal></div><Reveal direction="up"><div className="plan-table"><div className="plan-table__head"><span>Feature</span><b>Free</b><b>Pro</b></div>{rows.map(([f,a,b])=><div className="plan-table__row" key={f}><span>{f}</span><b><Mark value={a}/></b><b><Mark value={b}/></b></div>)}</div></Reveal><div className="pricing-note"><FiGitBranch/><p><strong>Plan is not role.</strong> Developer, Tester, Team Leader, and Admin permissions stay the same. The subscription only controls which product capabilities the workspace can access.</p></div></div></section>
 <ClosingCTA title="Try the complete BugNerve experience for 14 days." />
 </>}
