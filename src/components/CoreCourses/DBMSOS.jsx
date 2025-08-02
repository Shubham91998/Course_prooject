import React from 'react';

const DBMSOS = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 p-8">
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
      <h1 className="text-3xl font-bold text-yellow-700 mb-4">DBMS, OS</h1>
      <p className="text-gray-700 mb-6">Learn about Database Management Systems and Operating Systems with interactive modules, diagrams, and quizzes.</p>
      {/* TODO: Integrate backend API for DBMS/OS quizzes and resources */}
      <div className="flex flex-wrap gap-4">
        <div className="bg-yellow-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-yellow-600">DBMS</h2>
          <p className="text-sm text-gray-600">ER diagrams, SQL, normalization, transactions.</p>
        </div>
        <div className="bg-yellow-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-yellow-600">Operating Systems</h2>
          <p className="text-sm text-gray-600">Processes, memory, scheduling, file systems.</p>
        </div>
      </div>
    </div>
  </div>
);

export default DBMSOS;
