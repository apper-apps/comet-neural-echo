import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import SearchBar from "@/components/molecules/SearchBar";

const Header = () => {
  const [catEmoji, setCatEmoji] = useState("😺");
  const [titleColorClass, setTitleColorClass] = useState("");

  const catEmojis = ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿"];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * catEmojis.length);
      setCatEmoji(catEmojis[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTitleClick = () => {
    setTitleColorClass("animate-rainbowSweep");
    setTimeout(() => setTitleColorClass(""), 2000);
  };

  const handleSearch = (query) => {
    console.log("Search query:", query);
    // Add search functionality here
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <span 
                className="text-2xl transform scale-125 rotate-12 transition-transform duration-200 hover:scale-150 hover:rotate-45"
              >
                {catEmoji}
              </span>
              <h1 
                onClick={handleTitleClick}
                className={`text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer ${titleColorClass}`}
              >
                Neural Echo
              </h1>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="Search experiments, insights, patterns..."
            />
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ApperIcon name="Bell" className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ApperIcon name="MessageCircle" className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ApperIcon name="Settings" className="h-5 w-5 text-gray-600" />
            </button>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">R</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;