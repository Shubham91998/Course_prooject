import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative text-center py-32 bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden">
      {/* Floating SVG Background */}
      <motion.div 
        className="absolute inset-10"
        animate={{ y: [10, 100, 10] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="5"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"></rect>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-6xl font-bold mb-4">Unlock Your Future</h1>
        <p className="text-2xl mb-8">Explore Computer Science Internships</p>
        
        {/* Animated Apply Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="relative px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-300"
        >
          <span className="relative z-10 ">Apply Now</span>
          <div className="absolute inset-0 bg-white opacity-20"></div>
        </motion.button>
      </div>

      {/* Chevron Dropdown with Motion */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default HeroSection;
