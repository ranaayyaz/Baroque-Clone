import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiBarChart2,
  FiPackage,
  FiShoppingBag,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiLogOut,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import DashboardOverview from "./DashboardOverview";
import Products from "./Products";
import Orders from "./Orders";
import Customers from "./Customers";
import Analytics from "./Analytics";
import Settings from "./Settings";

const Dashboard = () => {
  const [page, setPage] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true",
  );
  const navigate = useNavigate();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem("darkMode", newValue);
      return newValue;
    });
  };

  // Menu items with icons
  const menu = [
    { id: "dashboard", name: "Dashboard", icon: <FiBarChart2 /> },
    { id: "products", name: "Products", icon: <FiPackage /> },
    { id: "orders", name: "Orders", icon: <FiShoppingBag /> },
    { id: "customers", name: "Customers", icon: <FiUsers /> },
    { id: "analytics", name: "Analytics", icon: <FiDollarSign /> },
    { id: "settings", name: "Settings", icon: <FiSettings /> },
  ];

  // Handle logout
  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to go back to home?")) {
      navigate("/");
    }
  };

  // Render the appropriate component based on page state
  const renderContent = () => {
    switch (page) {
      case "dashboard":
        return <DashboardOverview />;
      case "products":
        return <Products />;
      case "orders":
        return <Orders />;
      case "customers":
        return <Customers />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div
      className={`flex min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
    >
      {/* Left Sidebar with Icons */}
      <div
        className={`w-64 ${darkMode ? "bg-gray-800" : "bg-gray-800"} text-white flex flex-col`}
      >
        {/* Header */}
        <div className="p-4 text-xl font-bold border-b border-gray-700">
          <div className="mb-2">Admin Panel</div>
          <p className="text-sm font-normal text-gray-400">Administrator</p>
        </div>

        {/* Menu Items */}
        <div className="mt-4 flex-1">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex items-center w-full px-4 py-3 transition-colors ${
                page === item.id
                  ? "bg-gray-700 border-l-4 border-blue-500"
                  : "hover:bg-gray-700"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>

        {/* Bottom Controls */}
        <div className="border-t border-gray-700 p-4 space-y-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center w-full px-4 py-2 hover:bg-gray-700 rounded transition-colors"
          >
            {darkMode ? (
              <>
                <FiSun className="mr-2" />
                Light Mode
              </>
            ) : (
              <>
                <FiMoon className="mr-2" />
                Dark Mode
              </>
            )}
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors"
          >
            <FiLogOut className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-6 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
