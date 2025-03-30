import React from 'react';

function BenefitsSection() {
  return (
    <div style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Benefits of Our Mentorship Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Repeat for each benefit card */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl" tabIndex="0" style={{ willChange: 'auto', transform: 'none' }}>
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Personalized Guidance</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>One-on-one sessions with industry experts</span>
                </li>
                {/* Repeat for other list items */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;