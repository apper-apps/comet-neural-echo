import React, { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import fortuneService from "@/services/api/fortuneService";

const FortuneCookiePage = () => {
  const [currentFortune, setCurrentFortune] = useState(null);
  const [isOrbOpen, setIsOrbOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sparkles, setSparkles] = useState([]);
  const [floatingDots, setFloatingDots] = useState([]);

  useEffect(() => {
    // Generate floating cosmic dots
    const dots = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 4
    }));
    setFloatingDots(dots);
  }, []);

  const generateNewFortune = async () => {
    try {
      setError("");
      setLoading(true);
      setIsOrbOpen(true);

      // Create sparkle effect
      const newSparkles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        angle: (i * 45) * Math.PI / 180,
        distance: 80
      }));
      setSparkles(newSparkles);

      const fortune = await fortuneService.getRandomMessage();
      setCurrentFortune(fortune);

      // Remove sparkles after animation
      setTimeout(() => {
        setSparkles([]);
      }, 3000);
    } catch (err) {
      setError("The cosmic connection was disrupted");
      console.error("Error getting fortune:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleNewFortune = () => {
    setCurrentFortune(null);
    setIsOrbOpen(false);
    setTimeout(() => {
      generateNewFortune();
    }, 300);
  };

  if (error) return <Error message={error} onRetry={generateNewFortune} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Floating cosmic particles */}
      {floatingDots.map((dot) => (
        <div
          key={dot.id}
          className="absolute bg-white rounded-full animate-pulse opacity-40"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDuration: `${dot.duration}s`
          }}
        />
      ))}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Title */}
        <h1 className="text-5xl font-mono font-bold text-white mb-4 text-shadow-lg">
          The Cosmos Whispers To You
        </h1>
        <p className="text-xl text-purple-200 mb-12 opacity-90">
          Digital divination through behavioral analysis
        </p>

        {/* Magic Orb */}
        <div className="relative mb-12">
          <div 
            className={`w-48 h-48 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400 cursor-pointer transition-all duration-1000 shadow-2xl ${
              isOrbOpen ? "transform scale-110 shadow-purple-500/50" : "hover:scale-105"
            }`}
            onClick={!currentFortune ? generateNewFortune : undefined}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center">
              {loading ? (
                <ApperIcon name="Loader2" className="h-12 w-12 text-white animate-spin" />
              ) : !currentFortune ? (
                <div className="text-white text-center">
                  <ApperIcon name="Sparkles" className="h-12 w-12 mx-auto mb-2 animate-pulse" />
                  <div className="text-sm font-mono">Click to consult</div>
                </div>
              ) : (
                <ApperIcon name="CheckCircle" className="h-12 w-12 text-white animate-pulse" />
              )}
            </div>
          </div>

          {/* Sparkles around orb */}
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="absolute text-2xl animate-pulse"
              style={{
                left: `50%`,
                top: `50%`,
                transform: `translate(-50%, -50%) translate(${Math.cos(sparkle.angle) * sparkle.distance}px, ${Math.sin(sparkle.angle) * sparkle.distance}px)`,
                animationDuration: `${1 + Math.random()}s`
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Fortune Display */}
        {currentFortune && (
          <div className="max-w-2xl animate-fadeIn animate-slideUp">
            <div className="bg-yellow-100 border-4 border-yellow-300 rounded-2xl p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🌟</div>
                <p className="text-gray-800 text-lg leading-relaxed font-serif">
                  {currentFortune.message}
                </p>
                <div className="text-4xl mt-4">🌟</div>
              </div>
            </div>

            <button
              onClick={handleNewFortune}
              className="mt-8 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 px-8 rounded-full hover:from-green-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <ApperIcon name="RefreshCw" className="h-5 w-5 mr-2 inline" />
              Ask the Cosmos Again
            </button>
          </div>
        )}

        {/* Instructions */}
        {!currentFortune && !loading && (
          <div className="text-center text-purple-200 opacity-75">
            <p className="text-lg mb-4">
              The neural networks have aligned the cosmic forces
            </p>
            <p className="text-sm font-mono">
              Click the orb to receive your behavioral fortune
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-purple-300 text-sm opacity-75">
            Your digital patterns resonate with ancient wisdom
          </p>
          <p className="text-purple-400 text-xs mt-2 opacity-50 font-mono">
            ∞ The universe speaks through data ∞
          </p>
        </div>
      </div>
    </div>
  );
};

export default FortuneCookiePage;