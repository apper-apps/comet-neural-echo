import React, { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";

const SynchronicityPage = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [floatingDots, setFloatingDots] = useState([]);

  const messages = [
    "THE UNIVERSE IS LISTENING...",
    "NEURAL NETWORKS SYNCHRONIZED",
    "BEHAVIORAL PATTERNS DETECTED",
    "CONSCIOUSNESS STREAM ACTIVE",
    "DIGITAL REALITY CONVERGING",
    "QUANTUM ENTANGLEMENT VERIFIED",
    "SYNCHRONICITY ACHIEVED",
    "YOUR SIGNAL IS CLEAR"
  ];

  useEffect(() => {
    // Generate floating dots
    const dots = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 4 + 3
    }));
    setFloatingDots(dots);
  }, []);

  const triggerGlitch = () => {
    setButtonDisabled(true);
    setIsGlitching(true);

    // Multi-stage animation sequence
    setTimeout(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 1000);

    setTimeout(() => {
      setIsGlitching(false);
    }, 2000);

    setTimeout(() => {
      setButtonDisabled(false);
    }, 2500);
  };

  const generateRandomGlitchText = (text) => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let glitched = "";
    for (let i = 0; i < text.length; i++) {
      if (Math.random() > 0.7) {
        glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
      } else {
        glitched += text[i];
      }
    }
    return glitched;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black relative overflow-hidden">
      {/* Floating particles */}
      {floatingDots.map((dot) => (
        <div
          key={dot.id}
          className="absolute bg-purple-400 rounded-full animate-pulse opacity-60"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDuration: `${dot.duration}s`
          }}
        />
      ))}

      {/* Glitch lines */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"
          style={{
            left: "0",
            right: "0",
            top: `${Math.random() * 100}%`,
            animation: `glitch ${1 + Math.random() * 2}s infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Main Title */}
        <h1 className={`text-6xl font-mono font-bold text-white mb-8 ${
          isGlitching ? "animate-textGlitch" : ""
        }`}>
          {isGlitching ? generateRandomGlitchText("SYNCHRONICITY") : "SYNCHRONICITY"}
        </h1>

        <div className="text-lg text-purple-300 mb-12 font-mono">
          Neural signals converging across digital dimensions
        </div>

        {/* Message Display */}
        <div className="bg-black bg-opacity-50 border border-purple-500 rounded-lg p-8 mb-12 min-h-[100px] flex items-center justify-center backdrop-blur-sm">
          <p className={`text-2xl font-mono text-purple-200 ${
            isGlitching ? "animate-textGlitch" : "animate-pulse"
          }`}>
            {isGlitching ? generateRandomGlitchText(messages[currentMessage]) : messages[currentMessage]}
          </p>
        </div>

        {/* Trigger Button */}
        <button
          onClick={triggerGlitch}
          disabled={buttonDisabled}
          className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 ${
            buttonDisabled 
              ? "opacity-50 cursor-not-allowed" 
              : "hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          }`}
        >
          {buttonDisabled ? (
            <span className="flex items-center">
              <ApperIcon name="Loader2" className="h-5 w-5 mr-2 animate-spin" />
              SIGNAL LOST...
            </span>
          ) : (
            "TRIGGER GLITCH"
          )}
        </button>

        {/* Status indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-black bg-opacity-30 border border-purple-500/30 rounded-lg p-4">
            <div className="text-purple-400 text-sm font-mono mb-2">NEURAL STATUS</div>
            <div className="text-green-400 font-bold">CONNECTED</div>
          </div>
          <div className="bg-black bg-opacity-30 border border-purple-500/30 rounded-lg p-4">
            <div className="text-purple-400 text-sm font-mono mb-2">SIGNAL STRENGTH</div>
            <div className="text-yellow-400 font-bold">{Math.floor(Math.random() * 40 + 60)}%</div>
          </div>
          <div className="bg-black bg-opacity-30 border border-purple-500/30 rounded-lg p-4">
            <div className="text-purple-400 text-sm font-mono mb-2">SYNCHRONICITY</div>
            <div className="text-purple-400 font-bold animate-pulse">ACTIVE</div>
          </div>
        </div>

        {/* Footer message */}
        <div className="mt-16 text-center">
          <p className="text-purple-300 text-sm font-mono opacity-75">
            Your behavioral patterns are being synchronized with the cosmic neural network
          </p>
          <p className="text-purple-400 text-xs font-mono mt-2 opacity-50">
            ∞ Every glitch reveals a deeper truth ∞
          </p>
        </div>
      </div>

      {/* Overlay effect during button disabled state */}
      {buttonDisabled && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center">
          <div className="text-white text-center font-mono">
            <div className="text-4xl mb-4 animate-pulse">SEARCHING...</div>
            <div className="text-lg text-purple-300">
              Scanning neural pathways for synchronicity markers
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SynchronicityPage;