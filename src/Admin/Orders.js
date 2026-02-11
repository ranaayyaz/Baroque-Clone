import React, { useState, useEffect } from "react";
import { FiRefreshCw } from "react-icons/fi";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders from backend
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/admin/orders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await response.json();
      setOrders(data.orders || []);
    } catch (err) {
      setError(err.message);
      // Demo data fallback
      setOrders([
        {
          id: 1001,
          customer: "Ali Ahmad",
          items: 3,
          total: 15000,
          status: "Processing",
          date: "2024-01-15",
        },
        {
          id: 1002,
          customer: "Fatima Khan",
          items: 2,
          total: 8500,
          status: "Shipped",
          date: "2024-01-14",
        },
        {
          id: 1003,
          customer: "Hassan Khan",
          items: 1,
          total: 5000,
          status: "Delivered",
          date: "2024-01-10",
        },
        {
          id: 1004,
          customer: "Amira Ali",
          items: 4,
          total: 25000,
          status: "Pending",
          date: "2024-01-16",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/admin/orders/${orderId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        },
      );

      if (response.ok) {
        setOrders(
          orders.map((order) =>
            order.id === orderId ? { ...order, status: newStatus } : order,
          ),
        );
        alert("Order status updated successfully");
      } else {
        throw new Error("Failed to update order status");
      }
    } catch (err) {
      alert("Error updating status: " + err.message);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Processing":
        return "bg-blue-100 text-blue-700";
      case "Shipped":
        return "bg-purple-100 text-purple-700";
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Manage Orders</h2>
        <button
          onClick={fetchOrders}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
        >
          <FiRefreshCw /> Refresh
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-yellow-700 text-sm">{error}</p>
        </div>
      )}

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Items</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 font-semibold">#{order.id}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">{order.items}</td>
                <td className="px-4 py-2">
                  Rs. {order.total?.toLocaleString()}
                </td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded text-sm ${getStatusColor(order.status)}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusUpdate(order.id, e.target.value)
                    }
                    className="px-3 py-1 border rounded text-sm cursor-pointer"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
