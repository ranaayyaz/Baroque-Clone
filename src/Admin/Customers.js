import React, { useState, useEffect } from "react";
import { FiLock, FiUnlock, FiRefreshCw } from "react-icons/fi";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch customers from backend
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/admin/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch customers");
      }

      const data = await response.json();
      setCustomers(data.users || []);
    } catch (err) {
      setError(err.message);
      // Demo data fallback
      setCustomers([
        {
          id: 1,
          name: "Ali Ahmad",
          email: "ali@example.com",
          orders: 5,
          status: "active",
          joined: "2024-01-15",
        },
        {
          id: 2,
          name: "Fatima Khan",
          email: "fatima@example.com",
          orders: 8,
          status: "active",
          joined: "2024-02-10",
        },
        {
          id: 3,
          name: "Hassan Khan",
          email: "hassan@example.com",
          orders: 3,
          status: "blocked",
          joined: "2024-03-05",
        },
        {
          id: 4,
          name: "Amira Ali",
          email: "amira@example.com",
          orders: 12,
          status: "active",
          joined: "2023-12-20",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleBlockUser = async (userId, shouldBlock) => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/admin/users/${userId}/block`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ blocked: shouldBlock }),
        }
      );

      if (response.ok) {
        setCustomers(
          customers.map((customer) =>
            customer.id === userId
              ? {
                  ...customer,
                  status: shouldBlock ? "blocked" : "active",
                }
              : customer
          )
        );
        alert(
          `User ${shouldBlock ? "blocked" : "unblocked"} successfully`
        );
      } else {
        throw new Error("Failed to update user status");
      }
    } catch (err) {
      alert("Error updating user status: " + err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading customers...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Manage Customers</h2>
        <button
          onClick={fetchCustomers}
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

      {/* Customers Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Orders</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Joined</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{customer.id}</td>
                <td className="px-4 py-2 font-semibold">{customer.name}</td>
                <td className="px-4 py-2">{customer.email}</td>
                <td className="px-4 py-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">
                    {customer.orders}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded text-sm ${
                      customer.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {customer.status === "active" ? "Active" : "Blocked"}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm">{customer.joined}</td>
                <td className="px-4 py-2">
                  {customer.status === "active" ? (
                    <button
                      onClick={() => handleBlockUser(customer.id, true)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-1"
                    >
                      <FiLock size={16} /> Block
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBlockUser(customer.id, false)}
                      className="text-green-500 hover:text-green-700 flex items-center gap-1"
                    >
                      <FiUnlock size={16} /> Unblock
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
