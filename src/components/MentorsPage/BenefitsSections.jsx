import React from "react";
import { motion } from "framer-motion";

const benefitsData = [
  {
    title: "Personalized Guidance",
    items: [
      "One-on-one sessions with industry experts",
      "Tailored advice for your career goals",
      "Feedback on your projects and ideas",
    ],
  },
  {
    title: "Career Development",
    items: [
      "Insider insights into various CS fields",
      "Network with professionals and peers",
      "Guidance on job search and interviews",
    ],
  },
  {
    title: "Skill Enhancement",
    items: [
      "Access to cutting-edge knowledge",
      "Hands-on project experience",
      "Develop both technical and soft skills",
    ],
  },
  {
    title: "Personal Growth",
    items: [
      "Build confidence in your abilities",
      "Develop problem-solving skills",
      "Learn to navigate professional challenges",
    ],
  },
];

const BenefitsSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Benefits of Our Mentorship Program
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              tabIndex={0}
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">
                {benefit.title}
              </h3>
              <ul className="space-y-2">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
