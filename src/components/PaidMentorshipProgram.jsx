import React from 'react';

function PaidMentorshipPrograms() {
  return (
    <div style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Paid Mentorship Programs</h2>
          <div className="flex justify-center mb-8">
            <button className="px-6 py-2 rounded-l-lg bg-purple-600 text-white">Basic</button>
            <button className="px-6 py-2 bg-white">Pro</button>
            <button className="px-6 py-2 rounded-r-lg bg-white">Elite</button>
          </div>
          <div className="bg-white flex justify-center w-1/2  items-center rounded-lg shadow-lg p-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Basic Mentorship</h3>
              <p className="text-3xl font-bold text-purple-600 mb-6">$99/month</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>2 one-on-one sessions per month</li>
                <li>Access to group workshops</li>
                <li>Email support</li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-4 py-2 text-base transition-colors duration-200 ">Sign Up Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaidMentorshipPrograms;