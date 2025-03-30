import React from 'react'

const HeroSection = () => {
  return (
    <>
    <div className=" bg-gradient-to-b from-[#ffffff] to-[#e6d0ff] pt-[70px]">
      <div className="relative text-center py-32 bg-gradient-to-r from-purple-500 to-indigo-600 text-white overflow-hidden" style={{ opacity: 1 }}>
        <div className="absolute inset-0" style={{ opacity: 1 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            {/* SVG Circles */}
          </svg>
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-4">Accelerate Your Growth</h1>
          <p className="text-2xl mb-8">Connect with Expert Mentors in Computer Science</p>
          <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-purple-100 relative overflow-hidden group">
            <span className="relative z-10">Find Your Mentor</span>
            <div className="absolute inset-0 bg-white opacity-50" style={{ transform: 'translateX(100%) translateY(100%) scale(0)' }}></div>
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2" style={{ willChange: 'transform', transform: 'translateY(-9.87447px)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default HeroSection
