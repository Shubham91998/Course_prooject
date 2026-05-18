import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import HeroSection from './HeroSection'
import WelcomeSection from './WelcomeSection'
import BenefitsSections from './BenefitsSections'
import GuidanceOptionsSection from './GuidanceOptionsSection'
import FinalYearProjectSupportSection from './FinalYearProjectSupportSection'
import MeetOurMentorsSection from './MeetOurMentorsSection'
import PaidMentorshipProgramsSection from './PaidMentorshipProgramsSection'
import MenteeExperiancesSections from './MenteeExperiancesSections'
import ApplySection from './ApplySection'

const MentorshipProgram = () => {
  return (
    <>
    <div>

    <HeroSection />
      <WelcomeSection />
      <BenefitsSections />
      <GuidanceOptionsSection />
      <FinalYearProjectSupportSection />
      <MeetOurMentorsSection />
      <PaidMentorshipProgramsSection />
      <MenteeExperiancesSections />
      <ApplySection />
    
    </div>
      
    </>
  )
}

export default MentorshipProgram
