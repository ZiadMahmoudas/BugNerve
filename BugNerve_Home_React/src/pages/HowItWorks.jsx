import { FiCheckCircle, FiCpu, FiGitCommit, FiRepeat, FiSend, FiUserCheck } from 'react-icons/fi'
import PageHero from '../components/marketing/PageHero'
import ClosingCTA from '../components/marketing/ClosingCTA'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { images } from '../data/publicContent'

const steps=[
 ['01','Tester reports the bug','Structured report, reproduction steps, environment, logs and attachments.',FiSend],
 ['02','Backend stores the source of truth','BugNerve records the report and opens a traceable lifecycle.',FiRepeat],
 ['03','AI analyzes the bug','Severity, priority, component, duplicates and developer recommendation are generated.',FiCpu],
 ['04','Team Leader reviews','Accept, modify, or reject AI recommendations before assignment.',FiUserCheck],
 ['05','Developer resolves the issue','The assigned developer works with issue context and linked repository evidence.',FiGitCommit],
 ['06','Tester verifies','Pass closes the issue. Failure reopens it with new evidence.',FiCheckCircle],
]

export default function HowItWorks(){return <>
 <PageHero eyebrow="How it works" title="One workflow from report to verified fix." text="BugNerve keeps the engineering lifecycle understandable by separating source data, AI recommendations, human decisions, code history, and verification." image={images.how} imageAlt="Team planning software work" />
 <section className="section process-page"><div className="container"><SectionHeading eyebrow="The flow" title="Six stages. Every decision stays traceable." text="The UI and backend are designed around this same sequence, which keeps implementation and explanation aligned."/><div className="process-timeline">{steps.map(([num,title,text,Icon],i)=><Reveal key={title} direction={i%2?'right':'left'}><article className="process-step"><span>{num}</span><div className="process-step__icon"><Icon/></div><div><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}</div></div></section>
 <ClosingCTA title="A workflow your team can explain — and trust." />
 </>}
