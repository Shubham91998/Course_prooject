import React from 'react'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection'
import TrainingSection from '../TraningSection'
import Footer from '../Footer'
import CoursePrice from '../CoursePrice'
import ExploreCourses from '../ExploreCourses'
import CommunitySection from '../CommunitySection'
import CodeSkillsSection from '../CodeSkillsSection'
import ContactForm from '../ContectForm'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrainingSection />
      <CoursePrice />
      <ExploreCourses />
      <CommunitySection />
      <CodeSkillsSection />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
