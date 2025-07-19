import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

const FeelingPopup = ({ onSubmit, onClose }) => {
  const [selectedFeeling, setSelectedFeeling] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const feelings = [
    { emoji: "🤔", label: "Curious", value: "curious" },
    { emoji: "😌", label: "Calm", value: "calm" },
    { emoji: "🔥", label: "Energized", value: "energized" },
    { emoji: "😴", label: "Tired", value: "tired" },
    { emoji: "🤖", label: "Analytical", value: "analytical" },
    { emoji: "🌟", label: "Inspired", value: "inspired" },
    { emoji: "😐", label: "Neutral", value: "neutral" },
    { emoji: "🎯", label: "Focused", value: "focused" }
  ];

  const handleSubmit = () => {
    if (selectedFeeling) {
      onSubmit(selectedFeeling);
      setShowConfetti(true);
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  useEffect(() => {
    if (showConfetti) {
      // Simple confetti effect
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative overflow-hidden">
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  fontSize: "24px"
                }}
              >
                ✨
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <ApperIcon name="X" className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Neural State Check
          </h2>
          <p className="text-gray-600">
            How are you feeling right now? Your emotional state affects your behavioral patterns.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-6">
          {feelings.map((feeling) => (
            <button
              key={feeling.value}
              onClick={() => setSelectedFeeling(feeling.value)}
              className={`flex flex-col items-center p-3 rounded-lg transition-all duration-200 ${
                selectedFeeling === feeling.value
                  ? "bg-blue-100 border-2 border-blue-500 transform scale-105"
                  : "bg-gray-100 hover:bg-gray-200 border-2 border-transparent"
              }`}
            >
              <span className="text-2xl mb-1">{feeling.emoji}</span>
              <span className="text-xs font-medium text-gray-700">
                {feeling.label}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!selectedFeeling}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Neural State
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Your emotional data helps improve behavioral analysis accuracy
        </p>
      </div>
    </div>
  );
};

export default FeelingPopup;