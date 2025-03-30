import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import StudentProgressCard from "./StudentProgressCard";

const StudentProgressSection = () => {
  const students = [
    {
      imageSrc: "/images/student1.jpg",
      name: "Rohit Sharma",
      skillIncrease: 85,
      title: "Full-Stack Development",
      description: "Rohit has significantly improved his backend and frontend skills."
    },
    {
      imageSrc: "/images/student2.jpg",
      name: "Kumari Singh",
      skillIncrease: 92,
      title: "Data Structures & Algorithms",
      description: "She mastered problem-solving techniques and optimized algorithms."
    },
    {
      imageSrc: "/images/student3.jpg",
      name: "Amit Verma",
      skillIncrease: 78,
      title: "AI & Machine Learning",
      description: "Amit is now building AI-powered applications with confidence."
    },
    {
      imageSrc: "/images/student4.jpg",
      name: "Sonia Gupta",
      skillIncrease: 88,
      title: "Cybersecurity",
      description: "Sonia has developed a strong understanding of security protocols."
    },
    {
      imageSrc: "/images/student5.jpg",
      name: "Rajesh Kumar",
      skillIncrease: 80,
      title: "Cloud Computing",
      description: "Rajesh is now proficient in cloud technologies and deployment."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4, // Default for large screens
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For medium screens (md)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For small screens (sm)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-5 bg-[#F8FAFC]">
      <h2 className="text-center text-2xl font-bold text-blue-700 mb-6">Student Progress</h2>
      <div className="md:mx-auto">
        <Slider {...settings}>
          {students.map((student, index) => (
            <StudentProgressCard key={index} {...student} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StudentProgressSection;
