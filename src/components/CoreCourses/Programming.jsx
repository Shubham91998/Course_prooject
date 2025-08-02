import React from "react";
import { Link } from "react-router-dom";
// Optionally import icons from react-icons or use emojis

const programmingCourses = [
  { title: "Python", description: "Beginner to Advanced Python programming.", icon: "🐍", link: "/courses/python" },
  { title: "C++", description: "Object-oriented and competitive programming.", icon: "💻", link: "/courses/cpp" },
  { title: "Java", description: "Enterprise and Android development.", icon: "☕", link: "/courses/java" },
  { title: "C", description: "Fundamentals of programming and systems.", icon: "🔧", link: "/courses/c" },
  { title: "R", description: "Statistical computing and graphics.", icon: "📊", link: "/courses/r" },
  { title: "MATLAB", description: "Numerical computing and simulations.", icon: "📐", link: "/courses/matlab" },
];

const Programming = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-2">
        <span role="img" aria-label="Programming">💻</span> Programming
      </h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <p className="text-gray-600 max-w-2xl">Explore programming languages from beginner to advanced. Choose a language to get started!</p>
        <Link to="/courses/programming" className="mt-4 md:mt-0 inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-purple-700 hover:to-indigo-600 transition">View All</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programmingCourses.map((course) => (
          <Link
            to={course.link}
            key={course.title}
            className="group bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 hover:shadow-xl focus:shadow-xl transition border border-transparent hover:border-indigo-400 focus:border-indigo-500 outline-none"
            tabIndex={0}
            aria-label={`Explore ${course.title}`}
          >
            <div className="text-4xl mb-2">{course.icon}</div>
            <h2 className="text-xl font-semibold mb-1 group-hover:text-indigo-700 group-focus:text-indigo-700">{course.title}</h2>
            <p className="text-gray-500 text-sm mb-2">{course.description}</p>
            <span className="inline-block mt-auto text-indigo-600 font-medium">Explore →</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Programming;
