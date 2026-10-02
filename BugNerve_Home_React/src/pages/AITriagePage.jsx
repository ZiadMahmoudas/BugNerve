import { FiAlertTriangle, FiCpu, FiGitMerge, FiLayers, FiTarget, FiUserCheck } from 'react-icons/fi'
import PageHero from '../components/marketing/PageHero'
import FeatureGrid from '../components/marketing/FeatureGrid'
import ClosingCTA from '../components/marketing/ClosingCTA'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { images } from '../data/publicContent'

const items = [
  {icon:FiAlertTriangle,kicker:'Severity',title:'Estimate technical impact',text:'Classify the likely seriousness of the issue and show confidence instead of pretending uncertainty does not exist.'},
  {icon:FiTarget,kicker:'Priority',title:'Separate urgency from severity',text:'Recommend a repair priority independently so business urgency does not get confused with technical impact.'},
  {icon:FiLayers,kicker:'Component',title:'Route the issue to the right area',text:'Predict the affected project component from report text and project context.'},
  {icon:FiGitMerge,kicker:'Duplicates',title:'Rank semantically similar bugs',text:'Show likely duplicates and let a human confirm whether the relationship is real.'},
  {icon:FiUserCheck,kicker:'Developer ranking',title:'Recommend people using engineering evidence',text:'Rank eligible developers using historical code and bug-resolution signals.'},
  {icon:FiCpu,kicker:'Explainability',title:'Show why the model suggested it',text:'Expose confidence and concise evidence so Team Leaders can challenge or override the recommendation.'},
]

export default function AITriagePage(){return <>
  <PageHero eyebrow="AI Triage" title="Intelligence for every incoming bug." text="BugNerve turns an unstructured bug report into a structured recommendation package, then places a human review gate before assignment." image={images.ai} imageAlt="Developer working with code" badge="Human-in-the-loop by design" />
  <section className="section marketing-section"><div className="container"><SectionHeading eyebrow="Five signals, one review" title="AI is useful when its output is specific and reviewable." text="Each prediction is stored separately from the final accepted bug values so the team can evaluate both the model and the human decision." /><FeatureGrid items={items}/></div></section>
  <section className="section ai-review-showcase"><div className="container ai-review-showcase__grid"><Reveal direction="left"><div className="review-source"><span>ORIGINAL BUG</span><h3>Login crashes after JWT expiration</h3><p>After an expired token is returned, the application exits instead of returning the user to the sign-in screen.</p><div className="mini-code">Environment: Windows 11 · Chrome 129<br/>Component: not selected</div></div></Reveal><Reveal direction="up"><div className="review-ai"><span>AI ANALYSIS</span><div><b>Critical</b><strong>94%</strong></div><div><b>P1</b><strong>89%</strong></div><div><b>Authentication</b><strong>92%</strong></div><small>Evidence: crash language · auth terminology · similar historical bugs</small></div></Reveal><Reveal direction="right"><div className="review-human"><span>TEAM LEADER</span><h3>Final decision</h3><button>Accept</button><button>Modify</button><button>Reject</button><p>Human approval is required before the final triage values are committed.</p></div></Reveal></div></section>
  <ClosingCTA title="Give your Team Leader evidence, not another queue." text="Let BugNerve structure incoming reports while your team keeps authority over every final decision." />
</>}
