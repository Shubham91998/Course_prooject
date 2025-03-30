import React from "react";
import { motion } from "framer-motion";

const guidanceOptions = [
  {
    title: "One-on-One Sessions",
    description: "Schedule personalized sessions with our expert mentors to discuss your specific needs and challenges.",
    icon: "book-open",
  },
  {
    title: "Group Workshops",
    description: "Join themed workshops to learn from peers and mentors in a collaborative environment.",
    icon: "users",
  },
  {
    title: "Paid Programs",
    description: "Enroll in our structured, paid mentorship programs for intensive guidance and support.",
    icon: "dollar-sign",
  },
];

const GuidanceOptionsSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Guidance Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guidanceOptions.map((option, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              tabIndex={0}
            >
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-${option.icon} text-purple-600`}
                >
                  {option.icon === "book-open" && (
                    <>
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </>
                  )}
                  {option.icon === "users" && (
                    <>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </>
                  )}
                  {option.icon === "dollar-sign" && (
                    <>
                      <line x1="12" x2="12" y1="2" y2="22"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </>
                  )}
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidanceOptionsSection;
