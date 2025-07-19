import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-white rounded-xl p-8 shadow-lg border border-red-100 max-w-md w-full text-center">
        <div className="mb-4">
          <ApperIcon 
            name="AlertTriangle" 
            className="h-16 w-16 text-red-500 mx-auto mb-4" 
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Neural Network Disruption
          </h3>
          <p className="text-gray-600 mb-6">
            {message}. The digital cosmos experienced a temporary glitch.
          </p>
        </div>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <ApperIcon name="RefreshCw" className="h-4 w-4 mr-2" />
            Reconnect to Neural Echo
          </button>
        )}
        
        <p className="text-xs text-gray-500 mt-4">
          All interactions are monitored for behavioral analysis
        </p>
      </div>
    </div>
  );
};

export default Error;