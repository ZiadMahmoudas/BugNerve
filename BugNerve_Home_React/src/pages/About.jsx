import { FiEye, FiGitBranch, FiShield, FiUsers } from 'react-icons/fi'
import PageHero from '../components/marketing/PageHero'
import FeatureGrid from '../components/marketing/FeatureGrid'
import ClosingCTA from '../components/marketing/ClosingCTA'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { images } from '../data/publicContent'

export default function About(){return <>
 <PageHero eyebrow="About BugNerve" title="Better triage without removing human judgment." text="BugNerve began as a graduation project around one practical engineering problem: how can teams make faster, more explainable decisions about software bugs using the data they already produce?" image={images.about} imageAlt="Software team collaborating around a table" />
 <section className="section marketing-section"><div className="container"><SectionHeading eyebrow="Our approach" title="Intelligence should make engineering context easier to use." text="The platform combines bug history, repository evidence, AI models, and explicit human review instead of treating any one source as the whole truth."/><FeatureGrid items={[{icon:FiUsers,title:'Human control',text:'Team Leaders retain final authority over triage and assignment.'},{icon:FiEye,title:'Explainability',text:'Predictions show confidence and evidence so decisions can be challenged.'},{icon:FiGitBranch,title:'Developer context',text:'Repository history becomes useful assignment evidence instead of background noise.'},{icon:FiShield,title:'Reliable workflow',text:'Core bug management remains usable even when AI or an external provider is unavailable.'}]}/></div></section>
 <section className="section about-mission"><div className="container about-mission__grid"><Reveal direction="left"><div><SectionHeading eyebrow="Mission" title="Make bug triage faster, smarter, and more explainable."/><p>BugNerve is designed for teams that want AI assistance without losing operational control. Every recommendation has a place in the workflow, and every final decision remains attributable to a person.</p></div></Reveal><Reveal direction="right"><div className="about-quote"><span>BugNerve principle</span><blockquote>“AI recommends. Your team decides.”</blockquote><small>Human-in-the-loop is a product rule, not a disclaimer.</small></div></Reveal></div></section>
 <ClosingCTA title="Build a calmer path from bug report to engineering action." />
 </>}
