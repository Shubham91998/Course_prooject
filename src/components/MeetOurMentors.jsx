import React from 'react';

function MeetOurMentors() {
  return (
    <div style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>Meet Our Mentors</h2>
        <div className="flex justify-center mb-8">
          <div className="flex relative w-full max-w-md">
            <input type="text" placeholder="Search mentors by name or expertise..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" value="" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
        </div>
        <div style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ opacity: 1, willChange: 'auto' }}>
            {/* Repeat for each mentor card */}
            <div className="bg-white shadow-md rounded-3xl p-6 cursor-pointer flex flex-col items-center" tabIndex="0">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Dr. Emma Watson" className="w-32 h-32 rounded-full object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">Dr. Emma Watson</h3>
              <p className="text-purple-600 font-semibold mb-2">AI Research Scientist</p>
              <p className="text-gray-600 text-center mb-4">Machine Learning, Neural Networks</p>
              <button className="bg-purple-600 text-white rounded-full px-4 py-2 mt-2">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetOurMentors;