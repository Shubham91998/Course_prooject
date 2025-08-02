import React from 'react';

const Algorithms = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-8">
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Design and Analysis of Algorithms</h1>
      <p className="text-gray-700 mb-6">Explore algorithmic thinking, complexity analysis, and classic algorithms. Includes sorting, searching, dynamic programming, greedy algorithms, and more.</p>
      {/* TODO: Integrate backend API for algorithm visualizations and practice problems */}
      <div className="flex flex-wrap gap-4">
        <div className="bg-indigo-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-indigo-600">Sorting & Searching</h2>
          <p className="text-sm text-gray-600">Efficient data processing and retrieval techniques.</p>
        </div>
        <div className="bg-indigo-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-indigo-600">Dynamic Programming</h2>
          <p className="text-sm text-gray-600">Optimal substructure and overlapping subproblems.</p>
        </div>
        <div className="bg-indigo-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-indigo-600">Greedy & Graph Algorithms</h2>
          <p className="text-sm text-gray-600">Shortest paths, spanning trees, and more.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Algorithms;
