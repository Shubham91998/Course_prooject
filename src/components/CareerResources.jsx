import React from "react";

const resources = [
  {
    title: "Resume Building Guide",
    description: "Step-by-step guide to craft a winning resume for tech roles.",
    link: "#",
    icon: "📄",
  },
  {
    title: "Interview Preparation Kit",
    description: "Practice questions, tips, and mock interview resources.",
    link: "#",
    icon: "🎤",
  },
  {
    title: "Aptitude & Reasoning",
    description: "Sharpen your aptitude and logical reasoning skills.",
    link: "#",
    icon: "🧠",
  },
  {
    title: "Soft Skills Mastery",
    description: "Improve communication, teamwork, and leadership.",
    link: "#",
    icon: "🤝",
  },
  {
    title: "Job Search Platforms",
    description: "Top sites and portals for tech job hunting.",
    link: "#",
    icon: "💼",
  },
  {
    title: "Career Counseling",
    description: "Get personalized guidance from industry mentors.",
    link: "#",
    icon: "🧑‍🏫",
  },
];

export default function CareerResources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-12 px-2">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-blue-800 drop-shadow">Career Resources</h1>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Explore curated resources to boost your career journey: resume tips, interview prep, aptitude, soft skills, and more.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <div key={i} className="glass-card rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="text-5xl mb-3">{res.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{res.title}</h3>
              <p className="text-gray-600 mb-4">{res.description}</p>
              <a href={res.link} className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-indigo-600 hover:to-blue-600 transition">Download / Explore</a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .glass-card {
          background: rgba(255,255,255,0.92);
          box-shadow: 0 8px 32px 0 rgba(99,102,241,0.10);
          backdrop-filter: blur(6px);
          transition: box-shadow .2s, transform .2s;
        }
        .glass-card:hover {
          box-shadow: 0 0 0 4px #a5b4fc, 0 8px 32px 0 rgba(99,102,241,0.18);
          transform: translateY(-4px) scale(1.03);
        }
      `}</style>
    </div>
  );
}
