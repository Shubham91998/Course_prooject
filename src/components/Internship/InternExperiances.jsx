import React from 'react'

const InternExperiances = () => {
  
    const experiences = [
        {
          quote: "This internship jumpstarted my career in AI!",
          name: "Jane Doe",
          position: "AI Engineer at Tech Corp",
        },
        {
          quote: "I learned so much during my web development internship.",
          name: "John Smith",
          position: "Senior Developer at WebTech",
        },
      ];
    
      return (
        <div className="bg-white py-16 px-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Intern Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((experience, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6">
                  <p className="text-gray-600 mb-4">{experience.quote}</p>
                  <p className="font-bold">{experience.name}</p>
                  <p className="text-sm text-gray-500">{experience.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default InternExperiances
