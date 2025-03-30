import React from 'react'

const WelcomeSection = () => {
  return (
    <>
    <div className='top-0' style={{ opacity: 1, transform: 'none' }}>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Welcome to Our CS Mentorship Program</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-4 leading-relaxed">
              At <span className="font-semibold text-purple-600">Code Skills Academic</span>, we believe in the power of mentorship to shape the future of computer science.
            </p>
            <p className="text-xl leading-relaxed">
              Whether you're looking to specialize in AI, cybersecurity, software development, or any other field within computer science, our mentors are here to guide you on your journey to success.
            </p>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default WelcomeSection
