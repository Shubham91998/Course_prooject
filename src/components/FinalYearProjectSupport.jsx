import React from 'react';

function FinalYearProjectSupport() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
          <h2 className="text-5xl font-bold mb-12 text-center text-gray-800">Final Year Project Support</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
          <div style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
            <p className="text-xl mb-8 text-gray-700 leading-relaxed">Our mentorship program offers specialized support for students working on their Final Year Projects. Get expert guidance on:</p>
          </div>
          <div style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Repeat for each list item */}
              <li className="flex items-center space-x-3 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book h-6 w-6 text-primary">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                </svg>
                <span>Topic selection and refinement</span>
              </li>
            </ul>
          </div>
          <div style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
            <p className="text-xl mb-10 text-gray-700 leading-relaxed">Our mentors will help you navigate the challenges of your project and ensure you deliver outstanding results.</p>
          </div>
          <div style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-4 py-2 text-base transition-colors duration-200 bg-primary text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-1">Request FYP Support</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalYearProjectSupport;