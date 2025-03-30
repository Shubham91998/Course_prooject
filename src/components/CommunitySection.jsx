import React from 'react';

const CommunitySection = () => {
  return (
    <>
    <div >
      <div className="h-auto py-12 flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#374050] text-center">
          Our Growing Online Community
        </div>
        <p className="text-sm sm:text-md text-[#798696] mt-4 mb-[20px] max-w-[90%] md:max-w-[700px] text-center">
          Connect with a community of individuals who share your vision, unlocking boundless opportunities and fostering personal growth as you pursue success.
        </p>
        <div className="flex flex-wrap gap-10 md:gap-20 justify-center items-center mt-10 w-full max-w-[90%]">
          <div>
            <div className="text-3xl font-bold text-[#2E89AD]">6K +</div>
            <div className="text-[#6084A4]">Facebook community</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#2E89AD]">12K +</div>
            <div className="text-[#6084A4]">Instagram followers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#2E89AD]">5K +</div>
            <div className="text-[#6084A4]">Twitter followers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#2E89AD]">8K +</div>
            <div className="text-[#6084A4]">LinkedIn connections</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CommunitySection;