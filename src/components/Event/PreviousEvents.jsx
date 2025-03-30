import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons

// Custom Previous Arrow Component
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-8 cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronLeft className="text-3xl text-blue-700 hover:text-blue-900" />
    </div>
  );
};

// Custom Next Arrow Component
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-8 cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronRight className="text-3xl text-blue-700 hover:text-blue-900" />
    </div>
  );
};

const PreviousEvents = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />, // Use custom previous arrow
    nextArrow: <CustomNextArrow />, // Use custom next arrow
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Event data
  const events = [
    {
      title: "How to become a Software Engineer at Google?",
      date: "Aug 29, 2024",
      rating: 4.7,
      instructors: [
        {
          name: "Suryansu Dash",
          role: "Curriculum Head, Code Skills",
          avatar:
            "https://d3dyfaf3iutrxo.cloudfront.net/file/trainer/instructor/d0155770eff44e428a70771cf8302489.jpeg",
        },
        {
          name: "Swapnil Negi",
          role: "SWE-III @ Google | IIT Roorkee | ICPC Asia West '20",
          avatar:
            "https://d3dyfaf3iutrxo.cloudfront.net/file/trainer/instructor/afe78466d55c4443b3b35197636493f8.png",
        },
        {
          name: "Nishant Chandra",
          role: "Co-founder @ Code Skills",
          avatar:
            "https://d3dyfaf3iutrxo.cloudfront.net/file/trainer/instructor/04ff3fee5b7b449dace4c95c612ec402.png",
        },
      ],
    },
    {
      title: "Mastering Data Structures and Algorithms",
      date: "Sep 15, 2024",
      rating: 4.8,
      instructors: [
        {
          name: "John Doe",
          role: "Senior Software Engineer @ Amazon",
          avatar: "https://d3dyfaf3iutrxo.cloudfront.net/file/trainer/instructor/d0155770eff44e428a70771cf8302489.jpeg",
        },
        {
          name: "Jane Smith",
          role: "Software Engineer @ Microsoft",
          avatar: "https://d3dyfaf3iutrxo.cloudfront.net/file/trainer/instructor/d0155770eff44e428a70771cf8302489.jpeg",
        },
      ],
    },
    // Add more events here
  ];

  return (
    <div className="bg-[#F8FAFC] py-10 mx-3">
      <h2 className="text-center text-2xl font-bold text-blue-700 mb-6">
        Previous Events
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="px-2">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600 mt-2">Event Timings: {event.date}</p>

                {/* Rating */}
                <div className="flex justify-center items-center mt-2 text-yellow-500">
                  <FaStar className="text-xl" />
                  <span className="ml-1 text-lg font-semibold">
                    {event.rating}
                  </span>
                </div>

                {/* Instructors */}
                <div className="mt-4">
                  {event.instructors.map((instructor, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center space-x-3 mt-2"
                    >
                      <img
                        src={instructor.avatar}
                        alt={instructor.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="text-left">
                        <p className="text-gray-800 font-semibold">
                          {instructor.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {instructor.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PreviousEvents;