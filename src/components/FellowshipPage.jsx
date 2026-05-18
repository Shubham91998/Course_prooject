import React from "react";

const highlights = [
  {
    icon: "🎓",
    title: "PhD & Research Fellowships",
    desc: "Exclusive fellowships for top-performing students and researchers.",
  },
  {
    icon: "💰",
    title: "Stipend & Grants",
    desc: "Attractive stipends and research grants for selected fellows.",
  },
  {
    icon: "🌏",
    title: "Global Opportunities",
    desc: "Collaborate with leading universities and industry partners worldwide.",
  },
  {
    icon: "🤝",
    title: "Mentorship",
    desc: "Guidance from world-class faculty and industry experts.",
  },
  {
    icon: "📈",
    title: "Career Growth",
    desc: "Fast-track your career in academia, research, or industry.",
  },
];

export default function FellowshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-100 py-12 px-2">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-purple-800 drop-shadow">Fellowship Programs</h1>
        <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto">Explore exclusive fellowships for research, PhD, and industry collaboration. Unlock stipends, mentorship, and global opportunities.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {highlights.map((item, i) => (
            <div key={i} className="glass-card rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="text-5xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Eligibility & Application</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Open to final year students, graduates, and early-career researchers.</li>
            <li>Strong academic record and research interest required.</li>
            <li>Application includes CV, statement of purpose, and references.</li>
          </ul>
          <a href="#apply" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow hover:from-purple-600 hover:to-pink-600 transition">Apply for Fellowship</a>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold mb-2 text-indigo-700">Have Questions?</h3>
          <p className="text-gray-600 mb-4">Contact our fellowship team for guidance and support.</p>
          <a href="mailto:fellowships@codeskills.com" className="text-blue-600 underline">fellowships@codeskills.com</a>
        </div>
      </div>
      <style>{`
        .glass-card {
          background: rgba(255,255,255,0.92);
          box-shadow: 0 8px 32px 0 rgba(139,92,246,0.10);
          backdrop-filter: blur(6px);
          transition: box-shadow .2s, transform .2s;
        }
        .glass-card:hover {
          box-shadow: 0 0 0 4px #c4b5fd, 0 8px 32px 0 rgba(139,92,246,0.18);
          transform: translateY(-4px) scale(1.03);
        }
      `}</style>
    </div>
  );
}
