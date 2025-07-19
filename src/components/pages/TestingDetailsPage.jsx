import React from "react";
import ApperIcon from "@/components/ApperIcon";

const TestingDetailsPage = () => {
  const stats = [
    { label: "Improvement", value: "32%", color: "text-green-600", icon: "TrendingUp" },
    { label: "Variations Tested", value: "420", color: "text-blue-600", icon: "Layers" },
    { label: "Time to Results", value: "3 months", color: "text-purple-600", icon: "Clock" }
  ];

  const steps = [
    {
      id: 1,
      title: "Initial Behavioral Assessment",
      description: "Comprehensive analysis of current digital interaction patterns",
      status: "completed",
      details: ["Digital behavior mapping", "Psychological baseline establishment", "Cognitive pattern identification"]
    },
    {
      id: 2,
      title: "Neural Network Training",
      description: "AI models trained on individual behavioral signatures",
      status: "completed",
      details: ["Machine learning model development", "Pattern recognition optimization", "Behavioral prediction algorithms"]
    },
    {
      id: 3,
      title: "A/B Testing Framework",
      description: "Systematic testing of psychological triggers and responses",
      status: "completed",
      details: ["Multiple trigger variations", "Control group management", "Statistical significance tracking"]
    },
    {
      id: 4,
      title: "Real-time Optimization",
      description: "Continuous refinement based on behavioral feedback",
      status: "in-progress",
      details: ["Live adaptation algorithms", "Response optimization", "Personalization enhancement"]
    },
    {
      id: 5,
      title: "Advanced Psychometric Analysis",
      description: "Deep dive into psychological motivations and triggers",
      status: "pending",
      details: ["Personality type analysis", "Motivation mapping", "Decision-making patterns"]
    },
    {
      id: 6,
      title: "Comprehensive Reporting",
      description: "Detailed insights and actionable recommendations",
      status: "pending",
      details: ["Behavioral insights report", "Optimization recommendations", "Future predictions"]
    },
    {
      id: 7,
      title: "Ongoing Behavioral Monitoring",
      description: "Continuous analysis and improvement suggestions",
      status: "pending",
      details: ["Long-term pattern tracking", "Behavioral evolution analysis", "Adaptive optimization"]
    }
  ];

  const ongoingFocus = [
    {
      title: "Weekly Neural Reports",
      description: "Detailed analysis of behavioral changes and patterns",
      icon: "FileText",
      frequency: "Every Monday"
    },
    {
      title: "Optimization Sessions",
      description: "Direct consultation on psychological trigger improvements",
      icon: "MessageSquare",
      frequency: "Bi-weekly"
    },
    {
      title: "Monthly Strategy Review",
      description: "Comprehensive review of behavioral evolution and next steps",
      icon: "Calendar",
      frequency: "Monthly"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 border-green-200";
      case "in-progress": return "bg-blue-100 text-blue-800 border-blue-200";
      case "pending": return "bg-gray-100 text-gray-600 border-gray-200";
      default: return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed": return "CheckCircle";
      case "in-progress": return "Clock";
      case "pending": return "Circle";
      default: return "Circle";
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white shadow-xl">
        <h1 className="text-4xl font-bold mb-4">Neural Testing Process</h1>
        <p className="text-xl opacity-90 mb-6">
          Comprehensive behavioral analysis through systematic psychological experimentation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
              <ApperIcon name={stat.icon} className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Steps */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Behavioral Analysis Pipeline</h2>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center ${getStatusColor(step.status)}`}>
                  <ApperIcon name={getStatusIcon(step.status)} className="h-6 w-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(step.status)}`}>
                      {step.status.replace("-", " ").toUpperCase()}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <ApperIcon name="CheckCircle" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing Focus */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Continuous Neural Monitoring</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ongoingFocus.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-3 mr-4">
                  <ApperIcon name={item.icon} className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <span className="text-sm text-purple-600 font-medium">{item.frequency}</span>
                </div>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 shadow-xl">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Begin Your Neural Analysis Journey
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Join the cutting-edge of behavioral science. Our comprehensive testing process 
            reveals hidden patterns in your digital consciousness while optimizing your psychological triggers.
          </p>
          
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">7</div>
              <div className="text-sm text-gray-500">Phase Process</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">94.7%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-1">3</div>
              <div className="text-sm text-gray-500">Month Timeline</div>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-4 px-12 rounded-full text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <ApperIcon name="Rocket" className="h-6 w-6 mr-3 inline" />
            Start Neural Testing Project
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            All behavioral data is encrypted and used solely for analysis purposes
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestingDetailsPage;