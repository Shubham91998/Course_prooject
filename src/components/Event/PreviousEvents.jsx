import React from "react";
import Slider from "react-slick";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CUSTOM ARROWS
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20"
    onClick={onClick}
  >
    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-full cursor-pointer hover:scale-110 transition duration-300">
      <FaChevronLeft className="text-white text-xl" />
    </div>
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20"
    onClick={onClick}
  >
    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-full cursor-pointer hover:scale-110 transition duration-300">
      <FaChevronRight className="text-white text-xl" />
    </div>
  </div>
);

const PreviousEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1100,
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

  const events = [
    {
      title: "How to Become a Software Engineer at Google?",
      date: "Aug 29, 2024",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      instructors: [
        {
          name: "Suryansu Dash",
          role: "Curriculum Head, Code Skills",
          avatar:
            "https://d3dyfaf3iutrxo.cloudfront.net/file/trainer/instructor/d0155770eff44e428a70771cf8302489.jpeg",
        },
        {
          name: "Swapnil Negi",
          role: "SWE-III @ Google",
          avatar:
            "https://d3dyfaf3iutrxo.cloudfront.net/file/trainer/instructor/afe78466d55c4443b3b35197636493f8.png",
        },
      ],
    },

    {
      title: "Mastering Data Structures & Algorithms",
      date: "Sep 15, 2024",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      instructors: [
        {
          name: "John Doe",
          role: "Senior Engineer @ Amazon",
          avatar:
            "https://d3dyfaf3iutrxo.cloudfront.net/file/trainer/instructor/d0155770eff44e428a70771cf8302489.jpeg",
        },
        {
          name: "Jane Smith",
          role: "Software Engineer @ Microsoft",
          avatar:
            "https://d3dyfaf3iutrxo.cloudfront.net/file/trainer/instructor/d0155770eff44e428a70771cf8302489.jpeg",
        },
      ],
    },

    {
      title: "System Design for Product Companies",
      date: "Oct 10, 2024",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      instructors: [
        {
          name: "Rohit Arora",
          role: "SDE @ Microsoft",
          avatar:
            "https://d3dyfaf3iutrxo.cloudfront.net/file/trainer/instructor/d0155770eff44e428a70771cf8302489.jpeg",
        },
      ],
    },
  ];

  return (
    <section className="bg-[#050816] py-24 px-4 overflow-hidden">

      {/* HEADING */}
      <div className="text-center mb-16">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Previous Events
        </motion.h2>

        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
          Explore our past premium sessions with engineers from top product companies.
        </p>
      </div>

      {/* SLIDER */}
      <div className="max-w-7xl mx-auto relative">

        <Slider {...settings}>

          {events.map((event, index) => (
            <div key={index} className="px-4 py-4">

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
              >

                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">

                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                  {/* RATING */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full flex items-center gap-2 font-bold">
                    <FaStar />
                    {event.rating}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <p className="text-blue-400 text-sm font-semibold">
                    {event.date}
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-3 leading-snug">
                    {event.title}
                  </h3>

                  {/* INSTRUCTORS */}
                  <div className="mt-6 space-y-4">

                    {event.instructors.map((instructor, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4"
                      >

                        <img
                          src={instructor.avatar}
                          alt={instructor.name}
                          className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
                        />

                        <div>
                          <h4 className="text-white font-semibold">
                            {instructor.name}
                          </h4>

                          <p className="text-gray-400 text-sm">
                            {instructor.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <button className="mt-8 w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold text-white hover:scale-[1.02] transition duration-300">
                    Watch Recording
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PreviousEvents;