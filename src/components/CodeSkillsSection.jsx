import React from 'react';

const CodeSkillsSection = () => {
  return (
    <div>
      {/* First Section */}
      <div className="py-10 lg:py-20 flex flex-col lg:flex-row justify-center items-center w-full gap-8 lg:gap-4">
        <div className="w-full lg:w-1/2 flex flex-col px-4 lg:ms-[10%]">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#374050]">
            Unlock Your Creativity
          </div>
          <p className="w-full lg:w-3/4 mt-6 lg:mt-12 font-normal">
            At CodeSkills, we believe that creativity is the driving force behind innovation. Our internship program is crafted to help you unlock your full creative potential and turn your ideas into reality. With a focus on practical experience, you'll learn how to develop cutting-edge products, design intuitive user interfaces, and create software that addresses real-world challenges. Join us at CodeSkills and embark on a journey to discover your inner innovator.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:me-[10%]">
          <img
            src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/colorlessbitesizedkob-size_restricted-dWxMw6VeVnhwvlpy.gif"
            alt="video"
            className="w-full max-w-md lg:max-w-full"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="py-10 lg:py-20 flex flex-col lg:flex-row justify-center items-center w-full bg-gradient-to-b from-blue-50 to-white">
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
          <div
            className="h-[300px] w-[90%] md:h-[350px] md:w-[80%] lg:h-[400px] lg:w-[550px] overflow-hidden"
            style={{ borderRadius: '50px' }}
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="blog2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 gap-4 lg:gap-6 items-start px-4 lg:px-0">
          <div className="text-sm md:text-md font-normal">AND LET'S NOT FORGET</div>
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#374050]">
            Collaborate with the Best
          </div>
          <p className="w-full lg:w-3/4">
            At CodeSkills, we believe that collaboration is the cornerstone of success. Our internship program is designed to help you forge lasting connections with fellow interns, mentors, and industry leaders. We take pride in our diverse community of driven individuals who are dedicated to advancing the frontiers of technology. Whether your passion lies in front-end development, back-end development, or UI/UX design, there's a place for you here. Join CodeSkills today and become an integral part of our dynamic community!
          </p>
          <div className="w-full lg:w-3/4 flex justify-center mt-4">
            <a className="paynow_btn bg-blue-600 hover:bg-blue-400 py-4 px-20 sm:px-36 rounded-4xl">
              <span>Join</span>
              <span></span>
            </a>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex justify-center bg-[#19B5FE] h-[200px] md:h-[250px] lg:h-[300px] text-center items-center p-4">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mx-10">
    Unlock your full potential with CodeSkills
  </h1>
</div>

    </div>
  );
};

export default CodeSkillsSection;