import React from "react";
import NavItem from "@/components/molecules/NavItem";

const Sidebar = () => {
  const mainNavItems = [
    { to: "/", icon: "Home", label: "Neural Feed", badge: null },
    { to: "/triggers", icon: "Zap", label: "Triggers", badge: "Hot" },
    { to: "/synchronicity", icon: "Wifi", label: "Synchronicity", badge: null },
    { to: "/fortune", icon: "Crystal", label: "Fortune", badge: null },
    { to: "/tarot", icon: "Sparkles", label: "Tarot", badge: null },
  ];

  const analysisNavItems = [
    { to: "/testing-details", icon: "Microscope", label: "Testing Details", badge: null },
    { to: "/results", icon: "TrendingUp", label: "Results", badge: null },
    { to: "/pricing", icon: "DollarSign", label: "Pricing", badge: null },
  ];

  const settingsNavItems = [
    { to: "/settings", icon: "Sliders", label: "Settings", badge: null },
  ];

  return (
    <aside className="fixed left-0 top-[81px] w-64 h-[calc(100vh-81px)] bg-gray-50 p-4 overflow-y-auto">
      <nav className="space-y-6">
        {/* Main Navigation */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
            Experiment
          </h3>
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                badge={item.badge}
              />
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Analysis Navigation */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
            Analysis
          </h3>
          <div className="space-y-1">
            {analysisNavItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                badge={item.badge}
              />
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Settings Navigation */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
            Configuration
          </h3>
          <div className="space-y-1">
            {settingsNavItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                badge={item.badge}
              />
            ))}
          </div>
        </div>

        {/* Tip Box */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white">
            <h4 className="font-semibold mb-2">Neural Tip</h4>
            <p className="text-sm opacity-90">
              Your behavioral patterns are being analyzed in real-time. Every interaction shapes your psychological profile.
            </p>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;