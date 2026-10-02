import Hero from '../sections/Hero'
import SignalStrip from '../sections/SignalStrip'
import ProductIntro from '../sections/ProductIntro'
import Workflow from '../sections/Workflow'
import AITriage from '../sections/AITriage'
import DeveloperIntelligence from '../sections/DeveloperIntelligence'
import HumanReview from '../sections/HumanReview'
import Integrations from '../sections/Integrations'
import WorkspaceStory from '../sections/WorkspaceStory'
import Pricing from '../sections/Pricing'
import FAQ from '../sections/FAQ'
import FinalCTA from '../sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <SignalStrip />
      <ProductIntro />
      <Workflow />
      <AITriage />
      <DeveloperIntelligence />
      <HumanReview />
      <Integrations />
      <WorkspaceStory />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
