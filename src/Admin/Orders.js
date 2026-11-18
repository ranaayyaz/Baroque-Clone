import React, { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Fetch orders from backend
  useEffect(() => {
    let mounted = true;
    async function fetchOrders() {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/admin/orders`,
          {
            headers: token ? { Authorization: `Bearer ${token}` } : undefined,
          },
        );
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        if (!mounted) return;
        setOrders(data.orders || []);
      } catch (err) {
        console.warn(
          "Fetch orders error, using local fallback:",
          err.message || err,
        );
        if (mounted) setOrders([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchOrders();
    const id = setInterval(fetchOrders, 10000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem("token");
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
            order._id === orderId || order.id === orderId
              ? { ...order, status: newStatus }
              : order,
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

  async function viewOrder(id) {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/admin/orders/${id}`,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        },
      );
      if (!res.ok) throw new Error("Failed to fetch order");
      const data = await res.json();
      setSelectedOrder(data.order);
    } catch (err) {
      console.warn(
        "Failed to fetch order detail, using local fallback:",
        err.message || err,
      );
      const local = orders.find((o) => o._id === id || o.id === id);
      if (local) {
        setSelectedOrder(local);
      } else {
        setSelectedOrder({
          _id: id,
          items: [],
          contact: {},
          total: 0,
          status: "Unknown",
          trackingNumber: "—",
          createdAt: Date.now(),
        });
      }
    }
  }

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
      </div>

      {/* No remote error banner — fallback to placeholders when needed */}

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
              <th className="px-4 py-2 text-left">Tracking</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order._id || order.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-4 py-2 font-semibold">
                  #{order._id || order.id}
                </td>
                <td className="px-4 py-2">
                  {order.contact?.firstName
                    ? `${order.contact.firstName} ${order.contact.lastName || ""}`
                    : order.customer || order.userId || "—"}
                </td>
                <td className="px-4 py-2 text-sm">
                  {(Array.isArray(order.items)
                    ? order.items.map((it) => it.name).join(", ")
                    : order.items) || "—"}
                </td>
                <td className="px-4 py-2">
                  Rs. {order.total?.toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleString()
                    : "—"}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded text-sm ${getStatusColor(order.status)}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {order.trackingNumber || order.tracking || "—"}
                </td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusUpdate(order._id || order.id, e.target.value)
                    }
                    className="px-3 py-1 border rounded text-sm cursor-pointer"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                  <button
                    onClick={() => viewOrder(order._id || order.id)}
                    className="px-3 py-1 bg-gray-100 rounded text-sm"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order detail modal */}
      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                Order {selectedOrder._id}
              </h3>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-600"
              >
                Close
              </button>
            </div>
            <div className="text-sm space-y-2">
              <div>
                <strong>Customer:</strong> {selectedOrder.contact?.firstName}{" "}
                {selectedOrder.contact?.lastName}
              </div>
              <div>
                <strong>Email:</strong> {selectedOrder.contact?.email}
              </div>
              <div>
                <strong>Phone:</strong> {selectedOrder.contact?.phone}
              </div>
              <div>
                <strong>Address:</strong> {selectedOrder.contact?.address}
              </div>
              <div>
                <strong>Items:</strong>
                <ul className="list-disc ml-6">
                  {(Array.isArray(selectedOrder.items)
                    ? selectedOrder.items
                    : []
                  ).map((it, i) => (
                    <li key={i}>
                      {it.name} × {it.qty} — Rs. {it.price?.toLocaleString()}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Total:</strong> Rs.{" "}
                {selectedOrder.total?.toLocaleString()}
              </div>
              <div>
                <strong>Status:</strong> {selectedOrder.status}
              </div>
              <div>
                <strong>Tracking:</strong> {selectedOrder.trackingNumber || "—"}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
