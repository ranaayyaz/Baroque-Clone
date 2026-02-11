import React, { useState, useEffect } from "react";
import { FiPackage, FiUsers, FiDollarSign, FiShoppingBag } from "react-icons/fi";

const DashboardOverview = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch dashboard data from backend
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        
        // Fetch products
        const productsRes = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/products`
        );
        const productsData = await productsRes.json();
        const productsArray = productsData.products || [];
        
        // Fetch users
        const usersRes = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const usersData = await usersRes.json();
        const usersArray = usersData.users || [];
        
        // Fetch orders
        const ordersRes = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/orders`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const ordersData = await ordersRes.json();
        const ordersArray = ordersData.orders || [];
        
        // Calculate total revenue from orders
        const totalRevenue = ordersArray.reduce((sum, order) => {
          return sum + (order.totalAmount || 0);
        }, 0);

        setStats({
          totalProducts: productsArray.length,
          totalUsers: usersArray.length,
          totalOrders: ordersArray.length,
          totalRevenue: totalRevenue,
        });
        
        // Store first 5 products for display
        setProducts(productsArray.slice(0, 5));
        
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className={`bg-white p-6 rounded-lg shadow hover:shadow-lg transition`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
        </div>
        <div className={`${color} p-3 rounded-lg`}>
          <Icon className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={FiPackage}
          label="Total Products"
          value={stats.totalProducts}
          color="bg-blue-500"
        />
        <StatCard
          icon={FiUsers}
          label="Registered Users"
          value={stats.totalUsers}
          color="bg-green-500"
        />
        <StatCard
          icon={FiShoppingBag}
          label="Total Orders"
          value={stats.totalOrders}
          color="bg-orange-500"
        />
        <StatCard
          icon={FiDollarSign}
          label="Total Revenue"
          value={`Rs. ${stats.totalRevenue.toLocaleString()}`}
          color="bg-purple-500"
        />
      </div>

      {/* Recent Products */}
      {products.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Products</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Season</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-4 py-3">
                      <img
                        src={product.imgUrl}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{product.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">Rs. {product.price.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{product.season}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to Admin Dashboard
        </h2>
        <p className="text-gray-600 mb-4">
          Use the sidebar to manage your ecommerce platform. You can manage products, orders, customers, and system settings.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">{stats.totalProducts}</p>
            <p className="text-sm text-gray-600">Products</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">{stats.totalUsers}</p>
            <p className="text-sm text-gray-600">Users</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <p className="text-2xl font-bold text-orange-600">{stats.totalOrders}</p>
            <p className="text-sm text-gray-600">Orders</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">Rs. {(stats.totalRevenue / 1000).toFixed(1)}K</p>
            <p className="text-sm text-gray-600">Revenue</p>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">
            Error loading data: {error}
          </p>
        </div>
      )}
    </div>
  );
};

export default DashboardOverview;

