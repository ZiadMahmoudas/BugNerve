import { FiActivity, FiCheckCircle, FiGitBranch, FiLayers, FiSearch, FiUsers } from 'react-icons/fi'
import PageHero from '../components/marketing/PageHero'
import FeatureGrid from '../components/marketing/FeatureGrid'
import StatStrip from '../components/marketing/StatStrip'
import ClosingCTA from '../components/marketing/ClosingCTA'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { images } from '../data/publicContent'

const features = [
  { icon: FiActivity, kicker: 'Triage', title: 'Classify incoming bugs faster', text: 'Predict severity, priority, and affected component while preserving the original report and the final human decision.' },
  { icon: FiSearch, kicker: 'Similarity', title: 'Surface likely duplicates', text: 'Compare new issues against historical reports and show ranked candidates instead of silently merging data.' },
  { icon: FiUsers, kicker: 'Assignment', title: 'Recommend developers with evidence', text: 'Use component experience, file history, similar fixes, recent activity, and workload to rank candidates.' },
  { icon: FiGitBranch, kicker: 'Repository intelligence', title: 'Connect decisions to code history', text: 'Sync repositories, commits, contributors, and file changes from GitHub or GitLab.' },
  { icon: FiCheckCircle, kicker: 'Human control', title: 'Review before assignment', text: 'Team Leaders can accept, modify, or reject AI output before it changes the operational workflow.' },
  { icon: FiLayers, kicker: 'Connected workflow', title: 'Work with Jira instead of replacing it', text: 'Map external issues, preserve synchronization state, and keep BugNerve focused on intelligent triage.' },
]

export default function Product() {
  return <>
    <PageHero eyebrow="Product" title="From bug report to verified fix." text="BugNerve connects triage, AI analysis, developer intelligence, and verification in one workflow that stays understandable to the people using it." image={images.product} imageAlt="Developer workstation and electronics" />
    <StatStrip items={[{value:'5',label:'AI decision signals'},{value:'4',label:'project roles'},{value:'3',label:'integration families'},{value:'1',label:'human final decision'}]} />
    <section className="section marketing-section"><div className="container"><SectionHeading eyebrow="One connected product" title="Every screen follows the same engineering story." text="BugNerve is designed around the bug lifecycle rather than a collection of disconnected dashboard widgets." /><FeatureGrid items={features} /></div></section>
    <section className="section story-panel"><div className="container story-panel__grid"><Reveal direction="left"><div><SectionHeading eyebrow="Lifecycle" title="The bug stays traceable from report to verification." text="Each stage adds evidence instead of overwriting what came before." /><div className="story-steps">{['Tester creates the report','Backend stores the source of truth','AI generates recommendations','Team Leader reviews the evidence','Developer resolves and links code','Tester verifies or reopens'].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></div>)}</div></div></Reveal><Reveal direction="right"><div className="product-schematic"><div className="product-schematic__bug">BUG-1248<small>Login crashes after JWT expiration</small></div><div className="product-schematic__row"><span>Critical <b>94%</b></span><span>P1 <b>89%</b></span><span>Auth <b>92%</b></span></div><div className="product-schematic__decision">AI recommendation <strong>→</strong> Team Leader decision</div></div></Reveal></div></section>
    <ClosingCTA />
  </>
}
