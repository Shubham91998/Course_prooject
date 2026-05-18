import React from "react";
import { motion } from "framer-motion";
import {
  MoveDown,
  CalendarDays,
  Clock3,
  ArrowRight,
} from "lucide-react";

const LiveEvent = () => {
  const members = [
    {
      name: "Kumari Akanksha",
      role: "Manager, Customer Success @ Keka",
      image:
        "https://code-skills-5644f.web.app/static/media/instructor.16eaa744ca83108b1ab6.jpeg",
      experiences: [
        "Manager, Customer Success @ Keka",
        "Senior Associate Operations",
        "National Topper - Olympiad",
      ],
    },
    {
      name: "Rohit Arora",
      role: "Senior Software Engineer @ Microsoft",
      image:
        "https://code-skills-5644f.web.app/static/media/event_organizer.2ca1dbf026041d4a0e00.png",
      experiences: [
        "Software Engineer with 5 years of experience",
        "Currently working at Microsoft",
        "Previously worked at Arcesium",
      ],
    },
  ];

  const reasons = [
    {
      title: "Explore Future Tech",
      description:
        "Understand the latest hiring trends and future opportunities in software engineering.",
    },
    {
      title: "Interview Strategies",
      description:
        "Learn practical DSA solving techniques used in real SDE-2 interviews.",
    },
    {
      title: "Industry Insights",
      description:
        "Get insights into how top companies evaluate engineers.",
    },
  ];

  return (
    <div className="bg-[#050816] text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
          >
            Upcoming Live Event
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Crack your next SDE-2 interview with live DSA problem solving,
            real interview experiences, and insider strategies from engineers
            at Microsoft.
          </motion.p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex justify-center mt-10"
          >
            <MoveDown size={40} className="text-blue-400" />
          </motion.div>
        </div>
      </section>

      {/* EVENT CARD */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
          >

            {/* TOP BADGES */}
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="bg-red-500 px-4 py-1 rounded-full text-sm font-semibold">
                  🔴 LIVE
                </span>

                <span className="bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm">
                  Event
                </span>
              </div>

              <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm">
                Free Trial Class
              </span>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl md:text-5xl font-bold mt-8 leading-tight">
              Live Interview Prep:
              <span className="text-blue-400">
                {" "}
                DSA Solve Along
              </span>
            </h2>

            <p className="text-gray-300 mt-5 text-lg leading-relaxed">
              Solve real-world DSA problems asked in SDE-2 interviews at top
              companies like Microsoft, PayPal, and Arcesium.
            </p>

            {/* SPEAKERS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

              {members.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex gap-5 items-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-400"
                  />

                  <div>
                    <h3 className="text-xl font-bold">
                      {member.name}
                    </h3>

                    <p className="text-blue-300 text-sm mt-1">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* DATE & TIME */}
            <div className="flex flex-wrap gap-8 mt-10">

              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-xl">
                  <CalendarDays />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">DATE</p>
                  <h4 className="font-semibold">Oct 25, 2024</h4>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-3 rounded-xl">
                  <Clock3 />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">TIME</p>
                  <h4 className="font-semibold">8:00 PM</h4>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-3 shadow-lg"
            >
              Join Now
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Meet The Speakers
          </h2>

          <p className="text-gray-400 mt-4">
            Learn directly from industry professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {members.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-blue-400">
                {member.name}
              </h3>

              <ul className="mt-6 space-y-3 text-gray-300">
                {member.experiences.map((exp, idx) => (
                  <li key={idx}>✅ {exp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="bg-white/5 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Why Should You Join?
            </h2>

            <p className="text-gray-400 mt-4">
              Everything you need to level up your interview preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-[#111827] border border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-semibold text-blue-400">
                  {reason.title}
                </h3>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveEvent;