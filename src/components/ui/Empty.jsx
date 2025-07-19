import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No Data Found", 
  description = "The neural network is waiting for input.",
  action,
  actionText = "Begin Experiment",
  icon = "Brain"
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-12 max-w-lg w-full text-center border border-purple-100 shadow-xl">
        <div className="mb-6">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-lg">
            <ApperIcon 
              name={icon} 
              className="h-12 w-12 text-white mx-auto" 
            />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>
        </div>
        
        {action && (
          <button
            onClick={action}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
          >
            <ApperIcon name="Zap" className="h-5 w-5 mr-3" />
            {actionText}
          </button>
        )}
        
        <div className="mt-8 pt-6 border-t border-purple-200">
          <p className="text-xs text-gray-500 font-mono">
            ∞ Every void contains infinite potential ∞
          </p>
        </div>
      </div>
    </div>
  );
};

export default Empty;