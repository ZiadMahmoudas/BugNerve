import { workflowSteps } from '../data/homeData'
import SectionHeading from '../components/ui/SectionHeading'

export default function Workflow() {
  return (
    <section data-reveal="up" className="section workflow-section" id="how-it-works">
      <div className="container">
        <SectionHeading eyebrow="One clear workflow" title="From “we found a problem” to “the fix is verified.”" text="Everyone knows what happens next. BugNerve helps the team move from report to assignment to verification without losing context along the way." align="center" />
        <div className="workflow">
          {workflowSteps.map((step, index) => (
            <article className="workflow__item" key={step.no}>
              <div className="workflow__top"><span>{step.no}</span><small>{step.label}</small></div>
              <h3>{step.title}</h3><p>{step.text}</p>
              {index < workflowSteps.length - 1 && <i className="workflow__connector" aria-hidden="true" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
