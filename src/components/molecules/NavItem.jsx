import React from "react";
import { NavLink } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const NavItem = ({ to, icon, label, badge }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center px-4 py-3 text-gray-700 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 group",
          isActive && "bg-blue-50 text-blue-600 font-medium"
        )
      }
    >
      <ApperIcon name={icon} className="h-5 w-5 mr-3" />
      <span className="flex-1">{label}</span>
      {badge && (
        <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 ml-2">
          {badge}
        </span>
      )}
    </NavLink>
  );
};

export default NavItem;