import React from 'react';

const PricingPrice = () => {
  return (
    <section id="pricing" className="bg-gradient-to-b from-blue-50 to-white py-[5%] px-[5%] sm:px-[10%] text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-96 h-96 bg-gradient-to-r from-blue-200 to-transparent rounded-full blur-2xl opacity-50 absolute top-16 left-16"></div>
        <div className="w-72 h-72 bg-gradient-to-r from-blue-300 to-transparent rounded-full blur-xl opacity-30 absolute bottom-16 right-16"></div>
      </div>
      <div className="relative mb-12">
        <h1 className="text-5xl font-bold text-[#2C3A47] mb-4">Pricing</h1>
        <h2 className="text-xl text-[#4A667B] mb-4">Choose the Right Plan for You</h2>
        <p className="text-lg text-gray-600">Unlock your potential with CodeSkill Academy's flexible pricing options.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
        {/* Free Plan */}
        <div className="relative p-8 transition-transform transform hover:scale-105 duration-300 ease-in-out flex flex-col justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#2C3A47] mb-2">FREE</h3>
            <p className="text-gray-500 mb-4">Access to basic online courses</p>
            <h4 className="text-4xl font-bold text-blue-500 mb-6">$0<span className="text-lg font-normal text-gray-500">/month</span></h4>
          </div>
          <ul className="mb-8 space-y-4 text-left">
            <li className="flex items-center text-gray-700">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Limited course selection
            </li>
            <li className="flex items-center text-gray-700">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              No access to internships or mentorship
            </li>
            <li className="flex items-center text-gray-700">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Access to technical blogs
            </li>
            <li className="flex items-center text-gray-700">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Free Plan Feature
            </li>
          </ul>
          <a className="paynow_btn bg-blue-600 hover:bg-blue-400 py-4 rounded-4xl"><span>Continue with Free</span><span></span></a>
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
        </div>

        {/* Basic Plan */}
        <div className="relative p-8 transition-transform transform hover:scale-105 duration-300 ease-in-out flex flex-col justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#2C3A47] mb-2">BASIC</h3>
            <p className="text-gray-500 mb-4">Access to a wider range of online courses and internships</p>
            <h4 className="text-4xl font-bold text-blue-500 mb-6">$7<span className="text-lg font-normal text-gray-500">/month</span></h4>
          </div>
          <ul className="mb-8 space-y-4 text-left">
            <li className="flex items-center text-gray-700">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              All features of FREE plan
            </li>
            <li className="flex items-center text-gray-700">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Expanded course selection
            </li>
            <li className="flex items-center text-gray-700">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Access to internships and mentorship opportunities
            </li>
            <li className="flex items-center text-gray-700">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Project guide support
            </li>
            <li className="flex items-center text-gray-700">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Access to technical blogs
            </li>
          </ul>
          <a className="paynow_btn bg-blue-600 hover:bg-blue-400 py-4 rounded-4xl"><span>Try the Basic Plan</span><span></span></a>
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
        </div>

        {/* Pro Plan */}
        <div className="relative p-8 transition-transform transform hover:scale-105 duration-300 ease-in-out flex flex-col justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#2C3A47] mb-2">PRO</h3>
            <p className="text-gray-500 mb-4">Full access to all online courses, internships, mentorship, and project guide support</p>
            <h4 className="text-4xl font-bold text-blue-500 mb-6">$20<span className="text-lg font-normal text-gray-500">/month</span></h4>
          </div>
          <ul className="mb-8 space-y-4 text-left">
            <li className="flex items-center text-gray-700">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              All features of BASIC plan
            </li>
            <li className="flex items-center text-gray-700">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Unlimited course selection
            </li>
            <li className="flex items-center text-gray-700">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Priority access to internships and mentorship opportunities
            </li>
            <li className="flex items-center text-gray-700">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-green-500 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Dedicated project guide support
            </li>
          </ul>
          <a className="paynow_btn bg-blue-600 hover:bg-blue-400 py-4 rounded-4xl"><span>Try the Pro Plan</span><span></span></a>
        </div>
      </div>
    </section>
  );
};

export default PricingPrice;