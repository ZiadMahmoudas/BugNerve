import { FiCode, FiFolder, FiGitCommit, FiPieChart, FiTrendingUp, FiUsers } from 'react-icons/fi'
import PageHero from '../components/marketing/PageHero'
import FeatureGrid from '../components/marketing/FeatureGrid'
import ClosingCTA from '../components/marketing/ClosingCTA'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { images } from '../data/publicContent'

const factors=[
 {icon:FiCode,kicker:'Files',title:'File-level experience',text:'Measure who repeatedly works in the files most relevant to a component or bug.'},
 {icon:FiFolder,kicker:'Components',title:'Component expertise',text:'Aggregate commit and resolution history into understandable component-level expertise.'},
 {icon:FiGitCommit,kicker:'History',title:'Previous fixes',text:'Link bugs to commits so past resolutions can become useful evidence for future assignment.'},
 {icon:FiTrendingUp,kicker:'Recency',title:'Recent activity',text:'Give recent relevant activity more context than a stale historical contribution.'},
 {icon:FiPieChart,kicker:'Capacity',title:'Current workload',text:'Balance expertise with operational capacity instead of routing everything to the same senior developer.'},
 {icon:FiUsers,kicker:'Ranking',title:'Explain the final recommendation',text:'Show the score breakdown so assignment stays inspectable and editable by the Team Leader.'},
]
export default function DeveloperIntelligencePage(){return <>
 <PageHero eyebrow="Developer Intelligence" title="Route issues to the people who know the code." text="BugNerve combines repository history with bug-resolution context to rank eligible developers based on evidence, not guesswork." image={images.developers} imageAlt="Software team collaborating" />
 <section className="section marketing-section"><div className="container"><SectionHeading eyebrow="Recommendation evidence" title="A ranking should explain itself." text="The recommendation layer is designed as a ranking problem, not a hard-coded developer classifier."/><FeatureGrid items={factors}/></div></section>
 <section className="section ranking-showcase"><div className="container ranking-showcase__grid"><Reveal direction="left"><div><SectionHeading eyebrow="Example" title="Why Ahmed is ranked #1" text="The score is a combination of expertise and current context. The weights can evolve as the project is evaluated."/><ul className="evidence-list"><li>18 previous Authentication fixes</li><li>42 relevant commits</li><li>Worked repeatedly on LoginService.cs</li><li>7 similar bugs resolved</li><li>3 active bugs in current workload</li></ul></div></Reveal><Reveal direction="right"><div className="ranking-card"><div className="ranking-card__head"><span>#1</span><div><strong>Ahmed Hassan</strong><small>Backend Developer</small></div><b>92%</b></div>{[['Component expertise',95],['File history',91],['Similar fixes',88],['Recent activity',83],['Workload fit',76]].map(([l,v])=><div className="ranking-factor" key={l}><span>{l}</span><i><em style={{width:`${v}%`}}/></i><b>{v}%</b></div>)}<div className="ranking-card__foot">Recommended for BUG-1248 · Authentication</div></div></Reveal></div></section>
 <ClosingCTA title="Turn repository history into assignment context." />
</>}
