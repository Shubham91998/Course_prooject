import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg h-full">
      <img
        src={course.image}
        alt={`Course: ${course.title}`}
        className="w-full h-[200px] object-cover cursor-pointer"
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <h3 className="text-base font-semibold text-[#374050] text-opacity-[0.9]">
          {course.title}
        </h3>
        <div className="flex justify-between w-full mt-2 text-gray-600">
          <span className="text-sm">{course.category}</span>
          <span
            className={`text-sm px-2 py-1 rounded ${
              course.price === 'Free'
                ? 'bg-green-100 text-green-500'
                : course.price === 'Premium'
                ? 'bg-red-100 text-red-500'
                : 'bg-yellow-100 text-yellow-500'
            }`}
          >
            {course.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
