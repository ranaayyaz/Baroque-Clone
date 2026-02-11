import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiBarChart2,
  FiPackage,
  FiShoppingBag,
  FiUsers,
  FiDollarSign,
  FiSettings,
} from "react-icons/fi";
import DashboardOverview from "./DashboardOverview";
import Products from "./Products";
import Orders from "./Orders";
import Customers from "./Customers";
import Analytics from "./Analytics";
import Settings from "./Settings";

const Dashboard = () => {
  const [page, setPage] = useState("dashboard");
  const navigate = useNavigate();

  // Menu items with icons
  const menu = [
    { id: "dashboard", name: "Dashboard", icon: <FiBarChart2 /> },
    { id: "products", name: "Products", icon: <FiPackage /> },
    { id: "orders", name: "Orders", icon: <FiShoppingBag /> },
    { id: "customers", name: "Customers", icon: <FiUsers /> },
    { id: "analytics", name: "Analytics", icon: <FiDollarSign /> },
    { id: "settings", name: "Settings", icon: <FiSettings /> },
  ];

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
    <div className="flex min-h-screen bg-gray-200">
      {/* Left Sidebar with Icons */}
      <div className="w-64 bg-gray-200 text-gray-900 flex flex-col">
        {/* Header */}
        <div className="p-4 text-center border-b border-gray-300">
          <button
            onClick={() => navigate("/")}
            aria-label="Go to homepage"
            className="mx-auto"
          >
            <img
              alt="BAROQUE Logo"
              src="https://cdn.shopify.com/s/files/1/2277/5269/files/Baroque_logo_24-Aug-2023_200x60@2x.png?v=1692878661.webp"
              className="h-10 w-auto mx-auto cursor-pointer"
            />
          </button>
          <p className="mt-1 text-sm font-normal text-gray-700">
            Administrator
          </p>
        </div>

        {/* Menu Items */}
        <div className="mt-4 flex-1">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex items-center w-full px-4 py-3 transition-colors text-gray-800 ${
                page === item.id
                  ? "bg-gray-300 border-l-4 border-blue-500"
                  : "hover:bg-gray-300"
              }`}
            >
              <span className="mr-3 text-gray-700">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>

        {/* Bottom Controls removed (dark mode & logout) */}
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <div className="max-w-[1100px] mx-auto">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
