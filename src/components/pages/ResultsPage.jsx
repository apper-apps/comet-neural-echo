import React from "react";
import ApperIcon from "@/components/ApperIcon";

const ResultsPage = () => {
  const keyMetrics = [
    { label: "ROI Increase", value: "233%", change: "+189%", icon: "TrendingUp", color: "green" },
    { label: "Click-through Rate", value: "45%", change: "+28%", icon: "MousePointer", color: "blue" },
    { label: "Cost Per Acquisition", value: "€24", change: "-40%", icon: "DollarSign", color: "purple" },
    { label: "Conversion Rate", value: "18.7%", change: "+52%", icon: "Target", color: "pink" }
  ];

  const results = [
    {
      category: "Psychological Triggers",
      improvement: "+156%",
      description: "Behavioral pattern optimization led to dramatic improvements in user engagement",
      icon: "Zap",
      example: "FOMO triggers increased immediate action by 89% through strategic scarcity messaging"
    },
    {
      category: "Neural Messaging",
      improvement: "+127%",
      description: "AI-optimized content based on psychological profiling improved message resonance",
      icon: "Brain",
      example: "Personalized neural language increased emotional connection scores by 234%"
    },
    {
      category: "Decision Architecture",
      improvement: "+93%",
      description: "Cognitive load reduction and choice architecture optimization streamlined user decisions",
      icon: "Layers",
      example: "Simplified decision pathways reduced abandonment by 67% through psychological design"
    },
    {
      category: "Behavioral Timing",
      improvement: "+78%",
      description: "Predictive behavioral analysis enabled perfect timing for maximum psychological impact",
      icon: "Clock",
      example: "AI-predicted optimal contact times increased response rates by 156%"
    },
    {
      category: "Social Proof Integration",
      improvement: "+145%",
      description: "Strategic social proof implementation leveraged psychological conformity principles",
      icon: "Users",
      example: "Real-time social validation increased trust signals by 203%"
    },
    {
      category: "Cognitive Biases",
      improvement: "+112%",
      description: "Systematic bias utilization enhanced decision-making speed and conviction",
      icon: "Eye",
      example: "Anchoring and confirmation bias integration improved conversion certainty by 167%"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: "text-green-600 bg-green-50 border-green-200",
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      pink: "text-pink-600 bg-pink-50 border-pink-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="max-w-6xl mx-auto py-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-white shadow-xl">
        <h1 className="text-4xl font-bold mb-4">Neural Analysis Results</h1>
        <p className="text-xl opacity-90 mb-6">
          Proven behavioral optimization through advanced psychological experimentation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
              <ApperIcon name={metric.icon} className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm opacity-90 mb-1">{metric.label}</div>
              <div className="text-xs bg-white bg-opacity-20 rounded-full px-2 py-1 inline-block">
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results Breakdown */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Behavioral Optimization Results</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-3 flex-shrink-0">
                  <ApperIcon name={result.icon} className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{result.category}</h3>
                    <span className="text-2xl font-bold text-green-600">{result.improvement}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{result.description}</p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <ApperIcon name="CheckCircle" className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-green-700">{result.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Timeline */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Evolution Timeline</h3>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Baseline Assessment</span>
                <span className="text-sm text-gray-500">Week 0</span>
              </div>
              <p className="text-sm text-gray-600">Initial behavioral patterns and psychological baseline established</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">First Optimization Wave</span>
                <span className="text-sm text-gray-500">Week 4</span>
              </div>
              <p className="text-sm text-gray-600">+45% improvement through basic psychological trigger implementation</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Advanced Neural Tuning</span>
                <span className="text-sm text-gray-500">Week 8</span>
              </div>
              <p className="text-sm text-gray-600">+127% cumulative improvement with AI-driven personalization</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Peak Performance</span>
                <span className="text-sm text-gray-500">Week 12</span>
              </div>
              <p className="text-sm text-gray-600">+233% final improvement with full behavioral optimization active</p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Highlight */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 shadow-xl">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Real-World Impact Analysis
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our behavioral optimization methodology has consistently delivered exceptional results 
            across diverse psychological profiles and user segments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15,423</div>
              <div className="text-sm text-gray-600">Individuals Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1.2M+</div>
              <div className="text-sm text-gray-600">Behavioral Data Points</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">94.7%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Success Factors</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <ApperIcon name="Brain" className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Neural Pattern Recognition</div>
                  <div className="text-sm text-gray-600">AI identifies unique behavioral signatures</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ApperIcon name="Target" className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Precision Targeting</div>
                  <div className="text-sm text-gray-600">Psychological triggers matched to individuals</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ApperIcon name="Zap" className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Real-time Optimization</div>
                  <div className="text-sm text-gray-600">Continuous adaptation to behavioral changes</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ApperIcon name="Shield" className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Ethical Framework</div>
                  <div className="text-sm text-gray-600">Responsible psychological influence methods</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;