import React, { useState } from "react";
import ApperIcon from "@/components/ApperIcon";

const SettingsPage = () => {
  const [emotionalSensitivity, setEmotionalSensitivity] = useState(75);
  const [mysticalWavelength, setMysticalWavelength] = useState(50);
  const [swipeMomentum, setSwipeMomentum] = useState(60);
  const [quantumResonance, setQuantumResonance] = useState(40);
  const [neuralFrequency, setNeuralFrequency] = useState(85);
  const [cosmicAlignment, setCosmicAlignment] = useState(30);
  
  const [dreamJournal, setDreamJournal] = useState("");
  const [intentions, setIntentions] = useState("");
  const [synchronicityNotes, setSynchronicityNotes] = useState("");

  const coelhoQuotes = [
    "The universe conspires to help you when you know what you want.",
    "When you want something, all the universe conspires in helping you to achieve it.",
    "The soul of the world is nourished by people's happiness.",
    "Everyone seems to have a clear idea of how other people should lead their lives, but none about his or her own.",
    "You will never be able to escape from your heart. So it's better to listen to what it has to say.",
    "People are capable, at any time in their lives, of doing what they dream of."
  ];

  const [currentQuote] = useState(coelhoQuotes[Math.floor(Math.random() * coelhoQuotes.length)]);

  const handleSave = () => {
    console.log("Saving neural settings:", {
      emotionalSensitivity,
      mysticalWavelength,
      swipeMomentum,
      quantumResonance,
      neuralFrequency,
      cosmicAlignment,
      dreamJournal,
      intentions,
      synchronicityNotes
    });
    alert("Neural parameters synchronized with cosmic frequencies!");
  };

  const handleReset = () => {
    setEmotionalSensitivity(75);
    setMysticalWavelength(50);
    setSwipeMomentum(60);
    setQuantumResonance(40);
    setNeuralFrequency(85);
    setCosmicAlignment(30);
    setDreamJournal("");
    setIntentions("");
    setSynchronicityNotes("");
    console.log("Neural settings reset to default configuration");
  };

  const handleInitialize = () => {
    console.log("Initializing enhanced neural analysis with current settings");
    alert("Neural Echo initialization sequence activated! Your behavioral patterns are now being optimized.");
  };

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-2xl p-8 text-white shadow-xl">
        <h1 className="text-4xl font-bold mb-4 flex items-center">
          <ApperIcon name="Sliders" className="h-10 w-10 mr-4" />
          Neural Configuration Portal
        </h1>
        <p className="text-xl opacity-90">
          Fine-tune your digital consciousness and behavioral analysis parameters
        </p>
      </div>

      {/* Mystical Sliders */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <ApperIcon name="Brain" className="h-6 w-6 text-purple-500 mr-3" />
          Consciousness Calibration Controls
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Emotional Sensitivity Spectrum
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={emotionalSensitivity}
                onChange={(e) => setEmotionalSensitivity(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Analytical</span>
                <span className="font-bold text-purple-600">{emotionalSensitivity}%</span>
                <span>Empathic</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mystical Wavelength Frequency
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={mysticalWavelength}
                onChange={(e) => setMysticalWavelength(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Rational</span>
                <span className="font-bold text-purple-600">{mysticalWavelength}%</span>
                <span>Intuitive</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Digital Swipe Momentum
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={swipeMomentum}
                onChange={(e) => setSwipeMomentum(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Contemplative</span>
                <span className="font-bold text-purple-600">{swipeMomentum}%</span>
                <span>Rapid Fire</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantum Resonance Level
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={quantumResonance}
                onChange={(e) => setQuantumResonance(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Linear</span>
                <span className="font-bold text-purple-600">{quantumResonance}%</span>
                <span>Non-Linear</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Neural Processing Frequency
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={neuralFrequency}
                onChange={(e) => setNeuralFrequency(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Deep Focus</span>
                <span className="font-bold text-purple-600">{neuralFrequency}%</span>
                <span>Multi-Task</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cosmic Alignment Index
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={cosmicAlignment}
                onChange={(e) => setCosmicAlignment(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Grounded</span>
                <span className="font-bold text-purple-600">{cosmicAlignment}%</span>
                <span>Transcendent</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Input Fields */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <ApperIcon name="FileText" className="h-6 w-6 text-blue-500 mr-3" />
          Consciousness Documentation
        </h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Digital Dream Journal
            </label>
            <textarea
              value={dreamJournal}
              onChange={(e) => setDreamJournal(e.target.value)}
              placeholder="Describe your digital dreams, subconscious patterns, and online visions..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows="4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Neural Intentions & Goals
            </label>
            <textarea
              value={intentions}
              onChange={(e) => setIntentions(e.target.value)}
              placeholder="Set your behavioral transformation intentions and psychological growth goals..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows="4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Synchronicity Observations
            </label>
            <textarea
              value={synchronicityNotes}
              onChange={(e) => setSynchronicityNotes(e.target.value)}
              placeholder="Record meaningful coincidences, pattern recognition, and cosmic connections..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows="4"
            />
          </div>
        </div>
      </div>

      {/* Paulo Coelho Quote */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200 shadow-lg">
        <div className="text-center">
          <ApperIcon name="Quote" className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
          <blockquote className="text-lg font-serif text-gray-800 italic mb-4 leading-relaxed">
            "{currentQuote}"
          </blockquote>
          <cite className="text-sm text-gray-600 font-medium">— Paulo Coelho</cite>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={handleSave}
          className="bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center"
        >
          <ApperIcon name="Save" className="h-5 w-5 mr-2" />
          Save Neural Configuration
        </button>

        <button
          onClick={handleReset}
          className="bg-gray-600 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center"
        >
          <ApperIcon name="RotateCcw" className="h-5 w-5 mr-2" />
          Reset to Defaults
        </button>

        <button
          onClick={handleInitialize}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center"
        >
          <ApperIcon name="Zap" className="h-5 w-5 mr-2" />
          Initialize Enhanced Analysis
        </button>
      </div>

      {/* Status Display */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <ApperIcon name="Activity" className="h-5 w-5 text-green-500 mr-2" />
          Current Neural Status
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {Math.round((emotionalSensitivity + mysticalWavelength + swipeMomentum) / 3)}%
            </div>
            <div className="text-sm text-gray-600">Psychological Depth</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {Math.round((quantumResonance + neuralFrequency + cosmicAlignment) / 3)}%
            </div>
            <div className="text-sm text-gray-600">Consciousness Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-600 mb-1">
              {dreamJournal.length + intentions.length + synchronicityNotes.length > 0 ? "Active" : "Inactive"}
            </div>
            <div className="text-sm text-gray-600">Documentation Status</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;