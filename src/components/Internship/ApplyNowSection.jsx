import React from 'react'

const ApplyNowSection = () => {
    return (
        <div id="apply-section" className="container mx-auto px-4 py-16">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8">Apply now and take the first step towards an exciting career in computer science!</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-6 py-3 text-lg transition-colors duration-200">
              Start Your Application
            </button>
          </div>
        </div>
      );
    
}

export default ApplyNowSection
