import React from 'react';

function ApplySection() {
  return (
    <div style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
      <div id="apply-section" className="container mx-auto px-4 py-16">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl mb-8">Apply now to be matched with a mentor and take your skills to the next level!</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-6 py-3 text-lg transition-colors duration-200 ">Apply for Mentorship</button>
        </div>
      </div>
    </div>
  );
}

export default ApplySection;