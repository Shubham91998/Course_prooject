import React, { useState } from 'react';

const InternshipOpportunities = () => {
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
    {
      title: "Cloud Solutions Intern",
      description: "Assist in deploying scalable cloud-based architectures...",
      skills: "AWS, DevOps, Node.js",
      type: "Industrial",
      image: "https://cdni.iconscout.com/illustration/premium/thumb/cloud-computing-7870381-6273940.png",
    },
    {
      title: "UI/UX Internship",
      description: "Design intuitive interfaces and improve user experience for real-world apps...",
      skills: "Figma, Wireframing, UX Research",
      type: "Industrial",
      image: "https://cdni.iconscout.com/illustration/premium/thumb/ui-ux-5754536-4818277.png",
    },
  ];

  const getTypeBadge = (type) => {
    switch (type) {
      case 'Research':
        return <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold"><span role="img" aria-label="Research">🔬</span> Research</span>;
      case 'Industrial':
        return <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold"><span role="img" aria-label="Industry">🏭</span> Industrial</span>;
      default:
        return <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">Other</span>;
    }
  };

  const [search, setSearch] = useState("");
  const filtered = internships.filter(
    (i) =>
      i.title.toLowerCase().includes(search.toLowerCase()) ||
      i.type.toLowerCase().includes(search.toLowerCase()) ||
      i.skills.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-16 px-2">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 drop-shadow-sm">🚀 Internship Opportunities</h2>
        <div className="flex justify-center mb-10">
          <input
            type="text"
            className="w-full max-w-md px-5 py-3 rounded-2xl border border-indigo-200 shadow focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white text-gray-700 text-base transition"
            placeholder="Search by title, type, or skill..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 text-lg">No internships found.</div>
          ) : filtered.map((internship, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transform  transition-all duration-300 p-6 flex flex-col justify-between border border-transparent hover:border-indigo-300"
              style={{backdropFilter:'blur(8px)', background:'rgba(255,255,255,0.85)'}}
            >
              <img
                src={internship.image}
                alt={internship.title}
                className="w-full h-48 object-cover mb-4 rounded-2xl shadow-sm"
                loading="lazy"
              />
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2 drop-shadow-sm">{internship.title}</h3>
                <p className="text-gray-600 text-sm mb-3 flex-grow">{internship.description}</p>
                <p className="text-gray-500 text-sm mb-3"><strong>Skills Required:</strong> {internship.skills}</p>
                <div className="mb-3">{getTypeBadge(internship.type)}</div>
                <button className="mt-auto bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-full shadow transition relative overflow-hidden focus:outline-none">
                  <span className="relative z-10">Apply Now</span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-white"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .glass-card {
          box-shadow: 0 8px 32px 0 rgba(99,102,241,0.10);
          transition: box-shadow .2s, transform .2s;
        }
        .glass-card:hover {
          box-shadow: 0 0 0 4px #a5b4fc, 0 8px 32px 0 rgba(99,102,241,0.18);
          transform: translateY(-4px) scale(1.03);
        }
      `}</style>
    </div>
  );
};

export default InternshipOpportunities;
