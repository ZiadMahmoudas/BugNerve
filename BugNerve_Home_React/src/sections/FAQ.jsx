import { useState } from 'react'
import { FiHelpCircle, FiMinus, FiPlus } from 'react-icons/fi'
import SectionHeading from '../components/ui/SectionHeading'

const questions = [
  {
    q: 'What is BugNerve in simple terms?',
    a: 'BugNerve is a workspace that helps a software team understand reported problems, avoid repeated work, and decide which developer is the best fit to handle each bug.'
  },
  {
    q: 'Does BugNerve automatically choose the developer?',
    a: 'No. BugNerve can suggest and rank suitable developers, but the Team Leader keeps the final decision and can accept, change, or reject the recommendation.'
  },
  {
    q: 'How does BugNerve know who might be the right developer?',
    a: 'When Pro features are enabled, BugNerve can look at useful signals such as relevant past work, similar bugs the person handled before, familiarity with the affected area, and current workload.'
  },
  {
    q: 'Do we have to stop using Jira, GitHub, or GitLab?',
    a: 'No. BugNerve is designed to work alongside the tools your team already uses. Jira can stay your issue tracker, while GitHub or GitLab can provide useful context about team experience.'
  },
  {
    q: 'What is the difference between Free and Pro?',
    a: 'Free gives teams the core bug workflow and manual assignment. Pro adds smarter developer matching, richer duplicate suggestions, connected tool insights, advanced analytics, and clearer explanations.'
  },
  {
    q: 'What happens after the 14-day Pro trial?',
    a: 'If the workspace upgrades, Pro features continue. If not, the workspace moves to Free. Users keep their roles and existing work; only Pro-only features become unavailable.'
  },
  {
    q: 'Can one person be a Developer in one project and a Team Leader in another?',
    a: 'Yes. BugNerve keeps account access separate from project roles, so the same person can have different responsibilities in different projects.'
  },
  {
    q: 'What happens if BugNerve makes a bad suggestion?',
    a: 'Nothing is forced. The Team Leader can change the suggested impact, urgency, area, duplicate match, or developer before the assignment becomes final.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section data-reveal="up" className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <span className="faq-kicker"><FiHelpCircle /> Common questions</span>
          <SectionHeading title="BugNerve, without the technical language." text="A few quick answers for team leads, testers, managers, students, and anyone who wants to understand what the platform actually does." />
          <div className="faq-callout">
            <strong>Still unsure where BugNerve fits?</strong>
            <p>Think of it as the layer that helps your team understand a bug and choose the right person before the work starts.</p>
          </div>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            const active = open === index
            return (
              <article className={`faq-item ${active ? 'is-open' : ''}`} key={item.q}>
                <button type="button" onClick={() => setOpen(active ? -1 : index)} aria-expanded={active}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item.q}</strong>
                  <i>{active ? <FiMinus /> : <FiPlus />}</i>
                </button>
                <div className="faq-answer" aria-hidden={!active}>
                  <p>{item.a}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
