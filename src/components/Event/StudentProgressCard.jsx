import React from "react";

const StudentProgressCard = ({ imageSrc, name, skillIncrease, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center w-80">
      {/* Student Image */}
      <div className="relative">
        <img src={imageSrc} alt={name} className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500" />
        <div className="absolute top-0 right-6 bg-blue-600 text-white text-sm px-2 py-1 rounded-lg">
          +{skillIncrease}%
        </div>
      </div>

      {/* Student Name */}
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{name}</h3>

      {/* Title & Description */}
      <h4 className="mt-3 text-lg text-blue-700 font-medium">{title}</h4>
      <p className="mt-2 text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default StudentProgressCard;
