import React from 'react';

const MathMLDL = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-100 p-8">
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
      <h1 className="text-3xl font-bold text-cyan-700 mb-4">Math for ML/DL</h1>
      <p className="text-gray-700 mb-6">Essential mathematics for machine learning and deep learning: linear algebra, calculus, probability, and statistics. Includes interactive visualizations and problem sets.</p>
      {/* TODO: Integrate backend API for math quizzes and visualizations */}
      <div className="flex flex-wrap gap-4">
        <div className="bg-cyan-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-cyan-600">Linear Algebra & Calculus</h2>
          <p className="text-sm text-gray-600">Vectors, matrices, derivatives, gradients.</p>
        </div>
        <div className="bg-cyan-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-cyan-600">Probability & Statistics</h2>
          <p className="text-sm text-gray-600">Distributions, hypothesis testing, and more.</p>
        </div>
      </div>
    </div>
  </div>
);

export default MathMLDL;
