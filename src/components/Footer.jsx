import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">We are dedicated to providing excellent service and innovative solutions to our customers.</p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition-colors duration-300">Services</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300 mb-2">123 Business St, City, State 12345</p>
            <p className="text-sm text-gray-300 mb-2">Phone: (123) 456-7890</p>
            <p className="text-sm text-gray-300">Email: info@example.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </a>
              {/* Repeat for other social icons */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>© 2025 CodeSkills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;