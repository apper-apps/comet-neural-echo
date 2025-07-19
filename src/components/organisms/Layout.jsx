import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";
import RightSidebar from "@/components/organisms/RightSidebar";
import PhysicsFooter from "@/components/organisms/PhysicsFooter";
import FeelingPopup from "@/components/organisms/FeelingPopup";

const Layout = () => {
  const [showFeelingPopup, setShowFeelingPopup] = useState(false);
  const [lastActivity, setLastActivity] = useState(Date.now());

  useEffect(() => {
    const handleActivity = () => {
      setLastActivity(Date.now());
    };

    const events = ["mousedown", "mousemove", "keypress", "scroll", "click"];
    events.forEach(event => {
      document.addEventListener(event, handleActivity);
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity);
      });
    };
  }, []);

  useEffect(() => {
    const checkInactivity = setInterval(() => {
      const now = Date.now();
      const inactiveTime = now - lastActivity;
      
      // Show popup after 5 minutes of inactivity (300000ms)
      if (inactiveTime > 300000 && !showFeelingPopup) {
        setShowFeelingPopup(true);
      }
    }, 10000); // Check every 10 seconds

    return () => clearInterval(checkInactivity);
  }, [lastActivity, showFeelingPopup]);

  const handleFeelingSubmit = (feeling) => {
    console.log("User feeling:", feeling);
    setShowFeelingPopup(false);
    setLastActivity(Date.now());
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-[81px] flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 lg:mr-80">
          <div className="p-6">
            <Outlet />
          </div>
        </main>

        {/* Right Sidebar */}
        <div className="hidden lg:block">
          <RightSidebar />
        </div>
      </div>

      <PhysicsFooter />

      {showFeelingPopup && (
        <FeelingPopup 
          onSubmit={handleFeelingSubmit}
          onClose={() => setShowFeelingPopup(false)}
        />
      )}
    </div>
  );
};

export default Layout;