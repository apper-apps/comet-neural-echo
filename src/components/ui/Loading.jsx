import React from "react";

const Loading = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header skeleton */}
      <div className="bg-gray-200 h-8 w-3/4 rounded-lg"></div>
      
      {/* Content cards skeleton */}
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gray-200 h-10 w-10 rounded-full"></div>
            <div className="space-y-2 flex-1">
              <div className="bg-gray-200 h-4 w-32 rounded"></div>
              <div className="bg-gray-200 h-3 w-20 rounded"></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-200 h-6 w-full rounded"></div>
            <div className="bg-gray-200 h-4 w-5/6 rounded"></div>
            <div className="bg-gray-200 h-4 w-4/6 rounded"></div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-4">
              <div className="bg-gray-200 h-8 w-16 rounded-full"></div>
              <div className="bg-gray-200 h-8 w-16 rounded-full"></div>
              <div className="bg-gray-200 h-8 w-16 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;