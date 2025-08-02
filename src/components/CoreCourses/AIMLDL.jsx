import React from 'react';

const AIMLDL = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 p-8">
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
      <h1 className="text-3xl font-bold text-pink-700 mb-4">AI, ML, DL</h1>
      <p className="text-gray-700 mb-6">Dive into Artificial Intelligence, Machine Learning, and Deep Learning with hands-on projects, datasets, and model demos.</p>
      {/* TODO: Integrate backend API for ML/DL models and datasets */}
      <div className="flex flex-wrap gap-4">
        <div className="bg-pink-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-pink-600">AI & ML</h2>
          <p className="text-sm text-gray-600">Supervised, unsupervised, and reinforcement learning.</p>
        </div>
        <div className="bg-pink-100 rounded-lg p-4 flex-1 min-w-[200px]">
          <h2 className="font-semibold text-pink-600">Deep Learning</h2>
          <p className="text-sm text-gray-600">Neural networks, CNNs, RNNs, and more.</p>
        </div>
      </div>
    </div>
  </div>
);

export default AIMLDL;
