import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Sparkles } from "lucide-react";

const StudentProgressCard = ({
  imageSrc,
  name,
  skillIncrease,
  title,
  description,
}) => {
  return (
    <section className="bg-[#050816] py-10 flex justify-center items-center">

      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden w-[340px]
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-3xl
        shadow-2xl"
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* TOP SECTION */}
        <div className="h-32 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 relative">

          {/* SKILL BADGE */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute top-5 right-5 flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-2xl shadow-lg font-bold"
          >
            <TrendingUp size={18} />
            +{skillIncrease}%
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="relative px-6 pb-8">

          {/* PROFILE IMAGE */}
          <div className="relative -mt-16 flex justify-center">

            <div className="relative">

              <img
                src={imageSrc}
                alt={name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-2xl"
              />

              {/* VERIFIED BADGE */}
              <div className="absolute bottom-2 right-2 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full shadow-lg">
                <Sparkles size={16} className="text-white" />
              </div>
            </div>
          </div>

          {/* STUDENT NAME */}
          <div className="text-center mt-6">

            <h3 className="text-2xl font-bold text-white">
              {name}
            </h3>

            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-3"></div>
          </div>

          {/* TITLE */}
          <div className="mt-6 text-center">

            <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              {title}
            </h4>

            <p className="mt-4 text-gray-300 leading-relaxed text-sm">
              {description}
            </p>
          </div>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-2 gap-4">

            <div className="bg-[#111827] border border-white/10 rounded-2xl py-4 text-center">

              <h5 className="text-2xl font-bold text-blue-400">
                {skillIncrease}%
              </h5>

              <p className="text-gray-400 text-sm mt-1">
                Skill Growth
              </p>
            </div>

            <div className="bg-[#111827] border border-white/10 rounded-2xl py-4 text-center">

              <h5 className="text-2xl font-bold text-purple-400">
                A+
              </h5>

              <p className="text-gray-400 text-sm mt-1">
                Performance
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-blue-500/30 transition duration-300"
          >
            View Journey
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default StudentProgressCard;