import React from 'react';

const Languages = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-200 p-8">
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
      <h1 className="text-3xl font-bold text-green-700 mb-4">OOP, C, C++, Java, Python, R, MATLAB</h1>
      <p className="text-gray-700 mb-6">Comprehensive resources and interactive playgrounds for major programming languages and paradigms. Practice OOP, procedural, and scripting languages in one place.</p>
      {/* TODO: Integrate backend API for code execution and language-specific challenges */}
      <div className="flex flex-wrap gap-4">
        <div className="bg-green-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-green-600">OOP & Procedural</h2>
          <p className="text-sm text-gray-600">C, C++, Java: Concepts, syntax, and projects.</p>
        </div>
        <div className="bg-green-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-green-600">Scripting & Data</h2>
          <p className="text-sm text-gray-600">Python, R, MATLAB: Data science, automation, and more.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Languages;
