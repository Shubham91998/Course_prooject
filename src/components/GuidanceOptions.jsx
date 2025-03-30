import React from 'react';

function GuidanceOptions() {
  return (
    <div style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Guidance Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Repeat for each guidance option */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl flex flex-col items-center text-center" tabIndex="0" style={{ willChange: 'auto', transform: 'none' }}>
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open text-purple-600">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">One-on-One Sessions</h3>
              <p className="text-gray-600">Schedule personalized sessions with our expert mentors to discuss your specific needs and challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuidanceOptions;