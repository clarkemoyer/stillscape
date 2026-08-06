import React from 'react'
import Hero from '@/components/home-page/HeroSection'
import TrustStrip from '@/components/home-page/TrustStrip'
import ProblemSolution from '@/components/home-page/ProblemSolution'
import HowItWorks from '@/components/home-page/HowItWorks'
import InSitu from '@/components/home-page/InSitu'
import Collections from '@/components/home-page/Collections'
import Venues from '@/components/home-page/Venues'
import Pricing from '@/components/home-page/Pricing'
import Reel from '@/components/home-page/Reel'
import Proof from '@/components/home-page/Proof'
import Faq from '@/components/home-page/Faq'
import FinalCta from '@/components/home-page/FinalCta'

const index = () => {
  return (
    <div>
      <Hero />
      <TrustStrip />
      <ProblemSolution />
      <HowItWorks />
      <InSitu />
      <Collections />
      <Venues />
      <Pricing />
      <Reel />
      <Proof />
      <Faq />
      <FinalCta />
    </div>
  )
}

export default index
