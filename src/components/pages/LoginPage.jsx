import React, { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";

const LoginPage = ({ onLogin }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
  const [isButtonCaught, setIsButtonCaught] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [countdown, setCountdown] = useState(7);
  const [showAccessDenied, setShowAccessDenied] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

useEffect(() => {
    if (!isButtonCaught) {
      const distance = Math.sqrt(
        Math.pow(mousePos.x - (buttonPos.x + 100), 2) + 
        Math.pow(mousePos.y - (buttonPos.y + 25), 2)
      );

      if (distance < 120) {
        const angle = Math.atan2(
          buttonPos.y + 25 - mousePos.y,
          buttonPos.x + 100 - mousePos.x
        );
        const newX = Math.max(0, Math.min(window.innerWidth - 200, buttonPos.x + Math.cos(angle) * 100));
        const newY = Math.max(0, Math.min(window.innerHeight - 50, buttonPos.y + Math.sin(angle) * 100));
        
        setButtonPos({ x: newX, y: newY });
      }
    }
  }, [mousePos, isButtonCaught]);

  useEffect(() => {
    if (isButtonCaught && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isButtonCaught && countdown === 0) {
      setShowPasswordModal(true);
    }
  }, [isButtonCaught, countdown]);

  const handleButtonClick = () => {
    setIsButtonCaught(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    if (password === "pathforward") {
      onLogin();
    } else if (password === "closer2026") {
      setShowPasswordModal(false);
      setShowAccessDenied(true);
      setTimeout(() => setShowAccessDenied(false), 3000);
    } else {
      alert("Invalid neural access code. Try again.");
      setPassword("");
    }
  };

  if (showAccessDenied) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        <div className="text-center animate-pulse">
          <h1 className="text-6xl font-bold text-red-500 mb-4 animate-textGlitch">
            ACCESS DENIED
          </h1>
          <div className="text-2xl text-white mb-8">
            💀 NEURAL SECURITY BREACH DETECTED 💀
          </div>
          <div className="text-lg text-red-400 animate-bounce">
            Your behavioral patterns have been logged and analyzed.
          </div>
        </div>
        
        {/* Floating skulls */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          >
            💀
          </div>
        ))}
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-6xl font-serif mb-4 leading-tight">
            Exclusive Neural
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experiment
            </span>
          </h1>
          
          <div className="text-2xl font-mono mb-8 opacity-90">
            August 4th, 2025
          </div>
          
          <p className="text-xl mb-12 leading-relaxed opacity-80">
            You have been selected for an exclusive behavioral analysis experiment.
            <br />
            Your digital consciousness awaits neural mapping.
          </p>

          {!isButtonCaught ? (
            <button
              onClick={handleButtonClick}
              className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white font-bold py-4 px-12 rounded-full text-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 absolute"
              style={{
                left: `${buttonPos.x}px`,
                top: `${buttonPos.y}px`,
                transition: "all 0.3s ease-out"
              }}
            >
              RSVP NOW
            </button>
          ) : (
            <div className="text-center">
              <div className="text-3xl font-bold mb-4">
                Neural Lock Engaged...
              </div>
              <div className="text-6xl font-mono text-blue-400 animate-pulse">
                {countdown}
              </div>
              <div className="text-lg opacity-75 mt-2">
                Behavioral analysis commencing
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border">
            <div className="text-center mb-6">
              <ApperIcon name="Lock" className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Neural Access Code Required
              </h2>
              <p className="text-gray-600">
                Enter your assigned experimental access key
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter neural access code..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center font-mono text-lg mb-6"
                autoFocus
              />
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold py-3 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-200"
              >
                Initialize Neural Connection
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              Hint: The path leads forward through behavioral understanding
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;