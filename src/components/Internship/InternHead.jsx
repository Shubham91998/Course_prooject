import React from 'react'
import HeroSection from './HeroSection'
import WelcomeSection from './WelcomeSection'
import BenefitsSection from './BenefitsSection'
import ApplicationProcess from './ApplicationProcess'
import ApplyNowSection from './ApplyNowSection'
import Navbar from '../Navbar'
import Footer from '../Footer'
import InternshipOppertunities from './InternshipOppertunities'
import InternExperiances from './InternExperiances'

const InternHead = () => {
  return (
    <>
   
      <div className="min-h-screen bg-gradient-to-b from-[#ffffff] to-[#d6bdf6] pt-[70px]">
        <HeroSection />
        <WelcomeSection />
        <BenefitsSection />
        <InternshipOppertunities />
        <InternExperiances />
        <ApplicationProcess />
        <ApplyNowSection />
      </div>
 
      
    </>
  )
}

export default InternHead
