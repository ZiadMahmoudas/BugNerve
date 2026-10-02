import { FaGithub, FaGitlab, FaJira } from 'react-icons/fa'
import { FiActivity, FiGitCommit, FiRefreshCw, FiShield } from 'react-icons/fi'
import PageHero from '../components/marketing/PageHero'
import FeatureGrid from '../components/marketing/FeatureGrid'
import ClosingCTA from '../components/marketing/ClosingCTA'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { images } from '../data/publicContent'

export default function IntegrationsPage(){return <>
 <PageHero eyebrow="Integrations" title="Connect BugNerve to the tools your team already uses." text="Repository intelligence and issue synchronization should extend the current workflow, not force teams to abandon it." image={images.integrations} imageAlt="Laptop and development workspace" />
 <section className="section integration-page"><div className="container"><SectionHeading eyebrow="Providers" title="One integration layer, different sources of truth." text="Use stable external IDs, webhook events, and explicit mappings so every synchronized record remains traceable."/><div className="provider-grid">{[[FaGithub,'GitHub','Repositories, commits, contributors, files, pull requests, issues and webhooks.'],[FaGitlab,'GitLab','Repository history and merge-request intelligence through the same integration contract.'],[FaJira,'Jira','Issue import, mapping, status synchronization and external issue traceability.']].map(([Icon,name,text],i)=><Reveal key={name} direction={i===0?'left':i===2?'right':'up'}><article className="provider-card"><Icon/><h3>{name}</h3><p>{text}</p><span>Connect provider →</span></article></Reveal>)}</div></div></section>
 <section className="section marketing-section"><div className="container"><FeatureGrid items={[{icon:FiGitCommit,title:'Index engineering history',text:'Normalize commits and modified files so developer expertise can be measured consistently.'},{icon:FiActivity,title:'React to webhook events',text:'Record delivery IDs, processing state, retries, and errors instead of trusting one-shot callbacks.'},{icon:FiRefreshCw,title:'Keep sync state visible',text:'Show last successful synchronization and connection health inside the product.'},{icon:FiShield,title:'Keep credentials scoped',text:'Store external identity and provider metadata separately from core BugNerve user records.'}]}/></div></section>
 <section className="section integration-flow"><div className="container"><Reveal direction="up"><div className="integration-flow__line"><span>GitHub / GitLab / Jira</span><b>→</b><span>Integration Service</span><b>→</b><span>Normalized Data</span><b>→</b><span>BugNerve Intelligence</span></div></Reveal></div></section>
 <ClosingCTA title="Connect the engineering context behind every bug." />
</>}
