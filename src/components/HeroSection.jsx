import React from 'react';

function HeroSection() {
  return (
    <>
    
    <div
      id="home"
      className="relative h-[70vh] bg-cover bg-center mt-18"
      style={{
        backgroundImage: `url("https://preview.colorlib.com/theme/edusite/img/home-background.jpg.webp")`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 flex items-center h-full px-[5%] sm:px-[15%]">
        <div className="text-white space-y-4">
          <h1 className="text-[38px] font-semibold">
            Code Skills Free Online Training Courses
          </h1>
          <p className="text-[21px] font-light mb-[20px]">
            Libris vivendo eloquentiam ex ius, nec id splendide abhorreant, eu pro alii error homero.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition md:px-80">
            Get Started!
          </button>
        </div>
      </div>
    </div>
    <div className=" bg-gradient-to-b from-[#ffffff] to-[#e6d0ff]">
      <div className="relative text-center py-32 bg-gradient-to-r from-purple-500 to-indigo-600 text-white overflow-hidden" style={{ opacity: 1, willChange: 'auto' }}>
        
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-4" style={{ willChange: 'auto', transform: 'none' }}>Accelerate Your Growth</h1>
          <p className="text-2xl mb-8" style={{ willChange: 'auto', transform: 'none' }}>Connect with Expert Mentors in Computer Science</p>
          <div style={{ willChange: 'auto', transform: 'none' }}>
            <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-purple-100 relative overflow-hidden group">
              <span className="relative z-10">Find Your Mentor</span>
              <div className="absolute inset-0 bg-white opacity-50" style={{ transform: 'translateX(100%) translateY(100%) scale(0)' }}></div>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2" style={{ willChange: 'transform', transform: 'translateY(-9.90344px)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default HeroSection;