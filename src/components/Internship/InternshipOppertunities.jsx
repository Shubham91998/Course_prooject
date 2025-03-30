import React from 'react'

const InternshipOppertunities = () => {
    const internships = [
        {
          title: "Machine Learning Research Intern",
          description: "Contribute to cutting-edge research in machine learning algorithms and applications...",
          skills: "Python, TensorFlow, Research",
          type: "Research",
          image: "https://assets.zyrosite.com/Aq20eV79zLfpXV6b/creative-m5KWqZZQ0ZF2RNjg.gif",
        },
        {
          title: "AI Ethics Research Intern",
          description: "Explore the ethical implications of AI technologies...",
          skills: "Research, Ethics, Writing",
          type: "Research",
          image: "https://assets.zyrosite.com/Aq20eV79zLfpXV6b/9d7b99_dfcb8e88751c4cecb7ac677976976ec8~mv2-mP4Xa8xEPPTLEoVx.gif",
        },
        // Add more internships here
      ];
    
      return (
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-12 text-center">Internship Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <div key={index} className="bg-white shadow-md rounded-3xl p-6 px-12 cursor-pointer flex flex-col justify-center items-center gap-1">
                <img src={internship.image} alt={internship.title} className="w-full h-48 object-fit rounded-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">{internship.title}</h3>
                <p className="text-gray-600 mb-4">{internship.description}</p>
                <p className="text-gray-500 mb-4"><strong>Skills Required:</strong> {internship.skills}</p>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mb-2">{internship.type}</span>
                <button className="bg-blue-600 text-white rounded-full px-4 py-2 mt-2">Explore More</button>
              </div>
            ))}
          </div>
        </div>
      );
}

export default InternshipOppertunities
