import React from "react";

const TrainingSection = () => {
  const programs = [
    {
      title: "Workshop",
      description: "We offer workshops on various emerging technologies for Students / Faculty / Working professionals.",
      image: "https://static.wixstatic.com/media/21276e9bb2a04809a76f2a7bfe161219.jpg/v1/fill/w_121,h_121,al_c,q_80,enc_auto/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash%202.jpg",
      link: "/mentorship",
      buttonText: "Mentorship",
    },
    {
      title: "Internship",
      description: "We offer short-training on various emerging technologies for Students / Faculty / Working professionals.",
      image: "https://static.wixstatic.com/media/nsplsh_304e6671703057694a7163~mv2_d_6016_4016_s_4_2.jpg/v1/crop/x_1000,y_0,w_4016,h_4016/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Christina%20%40%20wocintechchat_com.jpg",
      link: "/internships",
      buttonText: "Internship",
    },
    {
      title: "Training & Placement",
      description: "We offer FDP on various emerging technologies for College Faculty members.",
      image: "https://static.wixstatic.com/media/bde465_31394d25574d4031b6df612c1af836dc~mv2.jpg/v1/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/corporate%20training.jpg",
      link: "/placement-program",
      buttonText: "Training",
    },
  ];

  return (
    <>
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-5 sm:px-10 text-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-72 h-72 bg-gradient-to-r from-blue-200 to-transparent rounded-full blur-3xl opacity-50 absolute top-10 left-10"></div>
        <div className="w-96 h-96 bg-gradient-to-r from-blue-300 to-transparent rounded-full blur-2xl opacity-30 absolute bottom-10 right-10"></div>
      </div>

      <div className="relative">
        <h1 className="text-4xl font-bold text-[#2C3A47] mb-4">Our Programs</h1>
        <h2 className="text-xl text-[#4A667B] mb-8">
          Explore our range of educational Mentorship, Internship, Training & Placement programs.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-6 transition-transform transform hover:scale-105 duration-300 ease-in-out bg-white shadow-md rounded-lg"
            >
              <img src={program.image} alt={program.title} className="w-32 h-32 rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#2C3A47]">{program.title}</h3>
              <p className="text-gray-500 mb-4">{program.description}</p>
              <a href={program.link} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                {program.buttonText}
              </a>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default TrainingSection;
