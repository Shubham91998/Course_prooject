import React from 'react';

const InternExperiances = () => {
  const experiences = [
    {
      quote: "This internship jumpstarted my career in AI!",
      name: "Jane Doe",
      position: "AI Engineer at Tech Corp",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
    },
    {
      quote: "I learned so much during my web development internship.",
      name: "John Smith",
      position: "Senior Developer at WebTech",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      quote: "Fantastic mentorship and real-world projects!",
      name: "Aditi Sharma",
      position: "Full Stack Developer at Infosys",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🌟 Intern Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              <img
                src={exp.image}
                alt={exp.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100 shadow-sm"
              />
              <p className="text-gray-600 italic mb-4">"{exp.quote}"</p>
              <h4 className="text-lg font-semibold text-gray-800">{exp.name}</h4>
              <p className="text-sm text-gray-500">{exp.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternExperiances;
