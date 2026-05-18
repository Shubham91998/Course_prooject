import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import StudentProgressCard from "./StudentProgressCard";

// CUSTOM PREV ARROW
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-[-15px] top-1/2 -translate-y-1/2 z-20"
      onClick={onClick}
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-full cursor-pointer hover:scale-110 transition duration-300">
        <FaChevronLeft className="text-white text-lg" />
      </div>
    </div>
  );
};

// CUSTOM NEXT ARROW
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-[-15px] top-1/2 -translate-y-1/2 z-20"
      onClick={onClick}
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-full cursor-pointer hover:scale-110 transition duration-300">
        <FaChevronRight className="text-white text-lg" />
      </div>
    </div>
  );
};

const StudentProgressSection = () => {

  const students = [
    {
      imageSrc: "/images/student1.jpg",
      name: "Rohit Sharma",
      skillIncrease: 85,
      title: "Full-Stack Development",
      description:
        "Rohit has significantly improved his backend and frontend skills.",
    },

    {
      imageSrc: "/images/student2.jpg",
      name: "Kumari Singh",
      skillIncrease: 92,
      title: "Data Structures & Algorithms",
      description:
        "She mastered problem-solving techniques and optimized algorithms.",
    },

    {
      imageSrc: "/images/student3.jpg",
      name: "Amit Verma",
      skillIncrease: 78,
      title: "AI & Machine Learning",
      description:
        "Amit is now building AI-powered applications with confidence.",
    },

    {
      imageSrc: "/images/student4.jpg",
      name: "Sonia Gupta",
      skillIncrease: 88,
      title: "Cybersecurity",
      description:
        "Sonia has developed a strong understanding of security protocols.",
    },

    {
      imageSrc: "/images/student5.jpg",
      name: "Rajesh Kumar",
      skillIncrease: 80,
      title: "Cloud Computing",
      description:
        "Rajesh is now proficient in cloud technologies and deployment.",
    },
  ];

  // SLIDER SETTINGS
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#050816] py-24 px-4 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl"></div>

      {/* HEADING */}
      <div className="relative text-center mb-16">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Student Progress
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg"
        >
          Watch how our students transformed their careers by mastering
          industry-level skills and real-world technologies.
        </motion.p>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-7xl mx-auto px-4">

        <Slider {...settings}>

          {students.map((student, index) => (
            <div key={index} className="px-4 py-6">
              <div className="flex justify-center">
                <StudentProgressCard {...student} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default StudentProgressSection;