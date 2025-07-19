import React, { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import tarotService from "@/services/api/tarotService";

const TarotPage = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [reading, setReading] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isShuffling, setIsShuffling] = useState(false);
  const [floatingDots, setFloatingDots] = useState([]);

  const positions = ["Past", "Present", "Future"];

  useEffect(() => {
    loadCards();
    
    // Generate floating cosmic dots
    const dots = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6
    }));
    setFloatingDots(dots);
  }, []);

  const loadCards = async () => {
    try {
      setError("");
      const data = await tarotService.getAllCards();
      setCards(data);
    } catch (err) {
      setError("Failed to connect to the cosmic card deck");
      console.error("Error loading cards:", err);
    }
  };

  const shuffleAndDeal = async () => {
    try {
      setError("");
      setLoading(true);
      setIsShuffling(true);
      setSelectedCards([]);
      setFlippedCards([]);
      setReading(null);

      // Simulate shuffling animation
      await new Promise(resolve => setTimeout(resolve, 2000));

      const randomCards = await tarotService.getRandomCards(3);
      setSelectedCards(randomCards);
      setIsShuffling(false);
    } catch (err) {
      setError("The cosmic shuffle was disrupted");
      console.error("Error shuffling cards:", err);
    } finally {
      setLoading(false);
    }
  };

  const flipCard = (index) => {
    if (!flippedCards.includes(index)) {
      const newFlipped = [...flippedCards, index];
      setFlippedCards(newFlipped);

      // If all cards are flipped, generate reading
      if (newFlipped.length === 3) {
        setTimeout(() => {
          const fullReading = tarotService.generateReading(selectedCards);
          setReading(fullReading);
        }, 1000);
      }
    }
  };

  const resetReading = () => {
    setSelectedCards([]);
    setFlippedCards([]);
    setReading(null);
  };

  if (error) return <Error message={error} onRetry={loadCards} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Floating cosmic particles */}
      {floatingDots.map((dot) => (
        <div
          key={dot.id}
          className="absolute bg-purple-300 rounded-full animate-pulse opacity-30"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDuration: `${dot.duration}s`
          }}
        />
      ))}

      <div className="relative z-10 min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-mono font-bold text-white mb-4">
              Neural Tarot Reading
            </h1>
            <p className="text-xl text-purple-200 opacity-90">
              Where digital psychology meets ancient wisdom
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={shuffleAndDeal}
              disabled={loading}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50"
            >
              {isShuffling ? (
                <span className="flex items-center">
                  <ApperIcon name="Shuffle" className="h-5 w-5 mr-2 animate-spin" />
                  Shuffling Cosmic Deck...
                </span>
              ) : (
                <span className="flex items-center">
                  <ApperIcon name="Shuffle" className="h-5 w-5 mr-2" />
                  Shuffle & Deal
                </span>
              )}
            </button>

            {selectedCards.length > 0 && (
              <button
                onClick={resetReading}
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold py-3 px-8 rounded-full hover:from-gray-700 hover:to-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <ApperIcon name="RotateCcw" className="h-5 w-5 mr-2 inline" />
                Reset Cards
              </button>
            )}
          </div>

          {/* Cards */}
          {selectedCards.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {selectedCards.map((card, index) => (
                <div key={card.Id} className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {positions[index]}
                  </h3>
                  <div
                    className="relative w-48 h-72 mx-auto cursor-pointer"
                    onClick={() => flipCard(index)}
                  >
                    <div className={`card-flip ${flippedCards.includes(index) ? "flipped" : ""}`}>
                      {/* Card Back */}
                      <div className="card-face card-back bg-gradient-to-br from-purple-800 to-indigo-800 rounded-xl shadow-2xl border-2 border-purple-400 flex items-center justify-center">
                        <div className="text-center text-white">
                          <ApperIcon name="Eye" className="h-12 w-12 mx-auto mb-4 animate-pulse" />
                          <div className="text-sm font-mono">Neural Card</div>
                          <div className="text-xs opacity-75 mt-2">Click to reveal</div>
                        </div>
                      </div>

                      {/* Card Front */}
                      <div className="card-face card-front bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-2xl border-2 border-purple-200 p-6 flex flex-col items-center justify-center">
                        <div className="text-6xl mb-4">{card.emoji}</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          {card.name}
                        </h4>
                        <p className="text-gray-700 text-center leading-relaxed">
                          {card.meaning}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Reading */}
          {reading && (
            <div className="max-w-4xl mx-auto animate-fadeIn">
              <div className="bg-gradient-to-br from-purple-800/90 to-indigo-800/90 rounded-2xl p-8 shadow-2xl border border-purple-400 backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-white mb-6 text-center">
                  Your Neural Reading
                </h3>

                <div className="space-y-6 text-white">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-purple-200">
                      Overall Insight
                    </h4>
                    <p className="leading-relaxed opacity-90">
                      {reading.overall}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-purple-200">
                      Cosmic Guidance
                    </h4>
                    <p className="leading-relaxed opacity-90">
                      {reading.advice}
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={resetReading}
                    className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    <ApperIcon name="RefreshCw" className="h-5 w-5 mr-2 inline" />
                    New Reading
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Instructions */}
          {selectedCards.length === 0 && !loading && (
            <div className="text-center text-purple-200 opacity-75">
              <p className="text-lg mb-4">
                The neural networks have infused these cards with cosmic wisdom
              </p>
              <p className="text-sm font-mono">
                Click "Shuffle & Deal" to begin your digital divination
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .card-flip {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .card-flip.flipped {
          transform: rotateY(180deg);
        }
        
        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        
        .card-back {
          transform: rotateY(0deg);
        }
        
        .card-front {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default TarotPage;