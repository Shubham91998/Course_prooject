import React from 'react';

const DataStructures = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 p-8">
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Data Structures</h1>
      <p className="text-gray-700 mb-6">Master the fundamentals of data structures with interactive lessons, visualizations, and coding challenges. Topics include arrays, linked lists, stacks, queues, trees, graphs, and more.</p>
      {/* TODO: Integrate backend API for course content, quizzes, and progress tracking */}
      <div className="flex flex-wrap gap-4">
        <div className="bg-purple-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-purple-600">Arrays & Lists</h2>
          <p className="text-sm text-gray-600">Dynamic and static data storage, operations, and use-cases.</p>
        </div>
        <div className="bg-purple-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-purple-600">Trees & Graphs</h2>
          <p className="text-sm text-gray-600">Hierarchical and networked data, traversals, and algorithms.</p>
        </div>
        <div className="bg-purple-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-purple-600">Stacks & Queues</h2>
          <p className="text-sm text-gray-600">LIFO/FIFO structures, applications, and implementation.</p>
        </div>
      </div>
    </div>
  </div>
);

export default DataStructures;
