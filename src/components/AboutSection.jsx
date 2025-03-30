import React from "react";

const AboutSection = () => {
  const features = [
    {
      title: "Online Courses",
      description: "Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.",
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#5BC9FE"
          className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M469.11 382.76 325 153.92V74h32V32H155v42h32v79.92L42.89 382.76c-13 20.64-14.78 43.73-3 65.1S71.59 480 96 480h320c24.41 0 44.32-10.76 56.1-32.14s10.04-44.46-2.99-65.1zM224.39 173.39a29.76 29.76 0 0 0 4.62-16V74h54v84.59a25.85 25.85 0 0 0 4 13.82L356.82 283H155.18z"></path>
        </svg>
      ),
    },
    {
      title: "Expert Teachers",
      description: "Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.",
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#5BC9FE"
          className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: "Community",
      description: "Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.",
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#5BC9FE"
          className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-[5%] px-[5%] sm:px-[15%] relative overflow-hidden mt-18">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-64 h-64 bg-gradient-to-r from-blue-200 to-transparent rounded-full blur-3xl opacity-50 absolute top-10 left-10"></div>
        <div className="w-80 h-80 bg-gradient-to-r from-blue-300 to-transparent rounded-full blur-2xl opacity-30 absolute bottom-10 right-10"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row justify-center w-full">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl font-bold text-[#2C3A47]">Welcome to Code Skills</h1>
          <p className="text-lg text-[#4A667B] mt-4 mb-[20px]">
            Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
          </p>

          {features.map((feature, index) => (
            <div key={index} className="flex space-x-6 py-4">
              <div className="flex-shrink-0">
                <div className="w-[80px] h-[80px] bg-white border border-[#EBEBEB] rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="font-semibold text-[#374050]">{feature.title}</h4>
                <p className="text-[#798696]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 lg:pl-10">
          <div className="relative">
            <img
              src="https://preview.colorlib.com/theme/edusite/img/about.png.webp"
              alt="About"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
            />
            <div className="absolute -top-5 -right-5 w-16 h-16 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
