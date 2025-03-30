import { useState } from "react";
import { Book, GraduationCap, Clock, Code, FileText } from "lucide-react";

const FinalYearProjectSupportSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-800">
          Final Year Project Support
        </h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
          <p className="text-xl mb-8 text-gray-700 leading-relaxed text-center">
            Our mentorship program offers specialized support for students working on their Final Year Projects. Get expert guidance on:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {supportItems.map((item, index) => (
              <li key={index} className="flex items-center space-x-3 text-lg">
                <item.icon className="h-6 w-6 text-blue-600" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-xl mb-10 text-gray-700 leading-relaxed text-center">
            Our mentors will help you navigate the challenges of your project and ensure you deliver outstanding results.
          </p>
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Request FYP Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const supportItems = [
  { icon: Book, text: "Topic selection and refinement" },
  { icon: GraduationCap, text: "Research methodologies" },
  { icon: Clock, text: "Project planning and management" },
  { icon: Code, text: "Technical implementation" },
  { icon: FileText, text: "Documentation and presentation" },
];

export default FinalYearProjectSupportSection;
