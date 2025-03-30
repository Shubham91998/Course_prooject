import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Events from './Events'
import StudentProgressSection from './StudentProgressSection'
import PreviousEvents from './PreviousEvents'

const EventHome = () => {
  return (
    <>
      <Navbar />
      <Events />
      <StudentProgressSection />
      <PreviousEvents />
      <Footer />
    </>
  )
}

export default EventHome
