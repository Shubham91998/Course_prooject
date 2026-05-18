import React from "react";

const offers = [
  {
    icon: "👨‍🏫",
    title: "1:1 Mentorship Sessions",
    desc: "Personalized guidance from top experts for your unique journey."
  },
  {
    icon: "📝",
    title: "Custom Learning Plans",
    desc: "Roadmaps for every level — beginner to advanced."
  },
  {
    icon: "💡",
    title: "DSA, Core CS, Research & Projects",
    desc: "Get help with coding, research, and real-world projects."
  },
  {
    icon: "🎯",
    title: "Higher Studies & Job Prep",
    desc: "Guidance for MS, PhD, and top tech company interviews."
  },
  {
    icon: "📅",
    title: "Weekly Check-ins",
    desc: "Stay on track with regular progress reviews."
  },
];

const whoCanJoin = [
  "College students (all years)",
  "Career switchers",
  "Research aspirants",
  "Curious learners from any background"
];

export default function AcademicMentorship() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-12 px-2">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800 drop-shadow">🎓 Academic Mentorship at CodeSkills</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">Get personalized guidance for every stage of your learning — from beginners exploring tech to advanced students building research projects or preparing for top companies.</p>
        </section>

        {/* What We Offer */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-center mb-8 text-indigo-700">🧭 What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {offers.map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Can Join */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">🌱 Who Can Join?</h2>
          <ul className="list-disc pl-8 text-gray-700 text-lg max-w-xl mx-auto">
            {whoCanJoin.map((item, i) => (
              <li key={i} className="mb-2">{item}</li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center mt-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">🚀 Ready to Grow?</h2>
          <p className="text-gray-700 mb-6">Join CodeSkills Mentorship and unlock your full potential.</p>
          <a href="#book" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:from-purple-700 hover:to-indigo-600 transition">👉 Book a Free Session</a>
        </section>
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
