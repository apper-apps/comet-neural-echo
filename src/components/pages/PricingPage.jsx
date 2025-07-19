import React, { useState } from "react";
import ApperIcon from "@/components/ApperIcon";

const PricingPage = () => {
  const [investment, setInvestment] = useState(2500);
  const [revenue, setRevenue] = useState(15000);

  const packageIncludes = [
    { item: "Complete Behavioral Analysis", icon: "Brain", included: true },
    { item: "AI-Powered Psychological Profiling", icon: "Cpu", included: true },
    { item: "Real-time Trigger Optimization", icon: "Zap", included: true },
    { item: "Advanced Neural Pattern Recognition", icon: "Eye", included: true },
    { item: "Continuous Performance Monitoring", icon: "Activity", included: true },
    { item: "Weekly Behavioral Reports", icon: "FileText", included: true },
    { item: "Direct Consultant Access", icon: "MessageSquare", included: true },
    { item: "Custom Integration Support", icon: "Settings", included: true }
  ];

  const timeline = [
    { phase: "Initial Assessment", duration: "Week 1-2", status: "discovery" },
    { phase: "Neural Network Training", duration: "Week 3-4", status: "setup" },
    { phase: "A/B Testing Launch", duration: "Week 5-8", status: "testing" },
    { phase: "Optimization Cycles", duration: "Week 9-10", status: "optimization" },
    { phase: "Advanced Tuning", duration: "Week 11-12", status: "refinement" },
    { phase: "Performance Analysis", duration: "Week 13", status: "analysis" },
    { phase: "Ongoing Monitoring", duration: "Continuous", status: "maintenance" }
  ];

  const comparison = [
    { feature: "Behavioral Analysis Depth", us: "Deep neural mapping", them: "Surface metrics only" },
    { feature: "Psychological Triggers", us: "AI-optimized personal triggers", them: "Generic approaches" },
    { feature: "Real-time Adaptation", us: "Continuous learning", them: "Static implementations" },
    { feature: "Success Rate", us: "94.7% improvement rate", them: "Variable results" },
    { feature: "Time to Results", us: "4-6 weeks", them: "3-6 months" },
    { feature: "Consultant Support", us: "Direct expert access", them: "Limited support" }
  ];

  const faqs = [
    {
      question: "How does behavioral analysis actually work?",
      answer: "Our AI analyzes thousands of micro-interactions to create a comprehensive psychological profile, identifying unique behavioral patterns and triggers specific to each individual."
    },
    {
      question: "Is this approach ethical and privacy-compliant?",
      answer: "Absolutely. All analysis is conducted with full consent and transparency. We focus on understanding behavior to improve experiences, not manipulate users."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most clients see initial improvements within 4-6 weeks, with full optimization achieved by week 12. The timeline varies based on complexity and current baseline."
    },
    {
      question: "What makes this different from traditional A/B testing?",
      answer: "Traditional A/B testing is reactive and generic. Our approach is predictive and personalized, using AI to understand why people behave the way they do."
    }
  ];

  const calculateROI = () => {
    const additionalRevenue = revenue * 2.33; // 233% improvement
    const netGain = additionalRevenue - investment;
    const roi = ((netGain / investment) * 100).toFixed(0);
    return { additionalRevenue, netGain, roi };
  };

  const roiData = calculateROI();

  return (
    <div className="max-w-6xl mx-auto py-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Neural Analysis Investment</h1>
          <p className="text-xl opacity-90 mb-6">
            Comprehensive behavioral optimization through advanced psychological experimentation
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="text-4xl font-bold line-through opacity-60">€5,000</div>
            <div className="text-6xl font-bold">€2,500</div>
            <div className="text-xl opacity-90">per month</div>
          </div>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
            <div className="text-sm font-medium mb-1">LIMITED TIME RESEARCH PARTNERSHIP</div>
            <div className="text-lg font-bold">50% OFF - First 100 Participants Only</div>
          </div>
        </div>
      </div>

      {/* Package Includes */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Neural Analysis Package</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {packageIncludes.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
              <div className="bg-green-100 rounded-full p-2">
                <ApperIcon name={item.icon} className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-gray-900 font-medium">{item.item}</span>
              <ApperIcon name="Check" className="h-5 w-5 text-green-600 ml-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
        
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{item.phase}</div>
                <div className="text-sm text-gray-600">{item.duration}</div>
              </div>
              <div className="text-sm text-blue-600 font-medium capitalize">
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Neural Echo?</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Feature</th>
                <th className="text-center py-3 px-4 text-purple-600 font-bold">Neural Echo</th>
                <th className="text-center py-3 px-4 text-gray-500">Traditional Approach</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{item.feature}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <ApperIcon name="Check" className="h-4 w-4" />
                      <span className="text-sm">{item.us}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center space-x-2 text-red-500">
                      <ApperIcon name="X" className="h-4 w-4" />
                      <span className="text-sm">{item.them}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Communication & Support */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <ApperIcon name="MessageSquare" className="h-6 w-6 text-blue-500 mr-3" />
            Direct Expert Communication
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
              Weekly 1-on-1 consultations
            </li>
            <li className="flex items-center text-gray-700">
              <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
              24/7 Slack channel access
            </li>
            <li className="flex items-center text-gray-700">
              <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
              Real-time optimization alerts
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <ApperIcon name="Shield" className="h-6 w-6 text-green-500 mr-3" />
            Success Guarantee
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
              Minimum 30% improvement guarantee
            </li>
            <li className="flex items-center text-gray-700">
              <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
              Full refund if no results in 90 days
            </li>
            <li className="flex items-center text-gray-700">
              <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
              Ongoing optimization included
            </li>
          </ul>
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-200 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">ROI Calculator</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Investment
              </label>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Monthly Revenue
              </label>
              <input
                type="number"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Projected Results</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Additional Revenue:</span>
                <span className="font-bold text-green-600">€{roiData.additionalRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Net Profit:</span>
                <span className="font-bold text-blue-600">€{roiData.netGain.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-gray-900 font-semibold">ROI:</span>
                <span className="font-bold text-purple-600">{roiData.roi}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-2xl p-8 text-white text-center shadow-xl">
        <h3 className="text-3xl font-bold mb-4">
          Start Your Neural Analysis Today
        </h3>
        <p className="text-xl opacity-90 mb-8">
          Join the behavioral science revolution. Limited spots available for research partnership pricing.
        </p>
        
        <button className="bg-white text-purple-600 font-bold py-4 px-12 rounded-full text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-4">
          Begin Neural Analysis - €2,500/month
        </button>
        
        <p className="text-sm opacity-75">
          30-day money-back guarantee • Cancel anytime • Results guaranteed
        </p>
      </div>
    </div>
  );
};

export default PricingPage;