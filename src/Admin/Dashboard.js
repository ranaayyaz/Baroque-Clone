import { useState } from "react";
import {
  FiBarChart2,
  FiPackage,
  FiShoppingBag,
  FiUsers,
  FiDollarSign,
  FiSettings,
} from "react-icons/fi";

const Dashboard = () => {
  const [page, setPage] = useState("dashboard");

  // Menu items with icons
  const menu = [
    { id: "dashboard", name: "Dashboard", icon: <FiBarChart2 /> },
    { id: "products", name: "Products", icon: <FiPackage /> },
    { id: "orders", name: "Orders", icon: <FiShoppingBag /> },
    { id: "customers", name: "Customers", icon: <FiUsers /> },
    { id: "analytics", name: "Analytics", icon: <FiDollarSign /> },
    { id: "settings", name: "Settings", icon: <FiSettings /> },
  ];

  // Stats data
  const stats = [
    { title: "Total Orders", value: "1,234" },
    { title: "Revenue", value: "Rs. 45,678" },
    { title: "Customers", value: "567" },
    { title: "Products", value: "89" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar with Icons */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-xl font-bold">Admin Panel</div>
        <div className="mt-4">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex items-center w-full px-4 py-3 ${
                page === item.id ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-500">{stat.title}</p>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white p-6 rounded-lg shadow">
          {page === "dashboard" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Dashboard Overview</h2>
              <p>Welcome to your admin dashboard.</p>
            </div>
          )}

          {page === "products" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Manage Products</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                + Add New Product
              </button>
            </div>
          )}

          {page === "orders" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
              <p>Order list will appear here.</p>
            </div>
          )}

          {page === "customers" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Customers</h2>
              <p>Customer list will appear here.</p>
            </div>
          )}

          {page === "analytics" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Analytics</h2>
              <p>Charts and reports will appear here.</p>
            </div>
          )}

          {page === "settings" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Settings</h2>
              <p>Configure your store settings.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
