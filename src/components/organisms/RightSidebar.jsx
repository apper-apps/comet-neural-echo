import React from "react";
import ApperIcon from "@/components/ApperIcon";

const RightSidebar = () => {
  const ads = [
    {
      id: 1,
      title: "Unlock Your Digital DNA",
      description: "Discover hidden patterns in your online behavior",
      gradient: "from-blue-500 to-purple-500",
      cta: "Analyze Now",
      likes: 234,
      comments: 45
    },
    {
      id: 2,
      title: "Neural Pattern Recognition",
      description: "AI-powered insights into your decision-making process",
      gradient: "from-purple-500 to-pink-500",
      cta: "Explore",
      likes: 189,
      comments: 32
    },
    {
      id: 3,
      title: "Behavioral Fingerprinting",
      description: "Map your unique psychological signature",
      gradient: "from-pink-500 to-red-500",
      cta: "Start Test",
      likes: 156,
      comments: 28
    }
  ];

  const groups = [
    {
      id: 1,
      name: "Digital Psychology",
      members: "12.3k",
      icon: "Brain",
      badge: "🧠"
    },
    {
      id: 2,
      name: "Behavioral Analysis",
      members: "8.7k",
      icon: "Eye",
      badge: "👁️"
    },
    {
      id: 3,
      name: "Neural Networks",
      members: "15.2k",
      icon: "Network",
      badge: "🌐"
    }
  ];

  const stats = {
    totalExperiments: "2,847",
    activeUsers: "15,423",
    dataPoints: "1.2M",
    accuracy: "94.7%"
  };

  return (
    <aside className="fixed right-0 top-[81px] w-80 h-[calc(100vh-81px)] bg-white p-4 overflow-y-auto hover:shadow-lg transition-shadow duration-300">
      <div className="space-y-6">
        {/* Sponsored Content */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
            <ApperIcon name="Sparkles" className="h-4 w-4 mr-2 text-purple-500" />
            Neural Insights
          </h3>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {ads.map((ad) => (
              <div
                key={ad.id}
                className={`bg-gradient-to-r ${ad.gradient} rounded-lg p-4 text-white transform hover:scale-105 transition-transform duration-200 cursor-pointer`}
              >
                <h4 className="font-semibold mb-2">{ad.title}</h4>
                <p className="text-sm opacity-90 mb-3">{ad.description}</p>
                <div className="flex items-center justify-between">
                  <button className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-opacity-30 transition-colors">
                    {ad.cta}
                  </button>
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="flex items-center">
                      <ApperIcon name="Heart" className="h-4 w-4 mr-1" />
                      {ad.likes}
                    </span>
                    <span className="flex items-center">
                      <ApperIcon name="MessageCircle" className="h-4 w-4 mr-1" />
                      {ad.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Group Suggestions */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
            <ApperIcon name="Users" className="h-4 w-4 mr-2 text-blue-500" />
            Research Groups
          </h3>
          <div className="space-y-3">
            {groups.map((group) => (
              <div key={group.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-lg">{group.badge}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{group.name}</h4>
                    <p className="text-xs text-gray-500">{group.members} members</p>
                  </div>
                </div>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Stats */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
            <ApperIcon name="BarChart3" className="h-4 w-4 mr-2 text-green-500" />
            Platform Stats
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-gray-900">{stats.totalExperiments}</div>
              <div className="text-xs text-gray-500">Experiments</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-gray-900">{stats.activeUsers}</div>
              <div className="text-xs text-gray-500">Active Users</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-gray-900">{stats.dataPoints}</div>
              <div className="text-xs text-gray-500">Data Points</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-gray-900">{stats.accuracy}</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;