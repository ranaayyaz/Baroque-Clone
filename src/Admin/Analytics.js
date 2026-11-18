import React, { useEffect, useState } from "react";

const Analytics = () => {
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState([
    { label: "Total Revenue", value: "Rs. 0" },
    { label: "Average Order Value", value: "Rs. 0" },
    { label: "Total Orders", value: "0" },
    { label: "Total Customers", value: "0" },
  ]);
  const [monthlyData, setMonthlyData] = useState([]);

  // Real numbers, computed from the store's own orders and customers
  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const [ordersRes, usersRes] = await Promise.all([
          fetch(`${process.env.REACT_APP_SERVER_URL}/admin/orders`, {
            headers,
          }),
          fetch(`${process.env.REACT_APP_SERVER_URL}/admin/users`, {
            headers,
          }),
        ]);
        const ordersData = await ordersRes.json().catch(() => ({}));
        const usersData = await usersRes.json().catch(() => ({}));
        const orders = ordersData.orders || [];
        const users = usersData.users || [];

        const revenue = orders.reduce(
          (sum, o) => sum + (o.total || o.totalAmount || 0),
          0
        );
        const avgOrder = orders.length
          ? Math.round(revenue / orders.length)
          : 0;

        setAnalytics([
          { label: "Total Revenue", value: `Rs. ${revenue.toLocaleString()}` },
          {
            label: "Average Order Value",
            value: `Rs. ${avgOrder.toLocaleString()}`,
          },
          { label: "Total Orders", value: String(orders.length) },
          { label: "Total Customers", value: String(users.length) },
        ]);

        // Monthly sales, grouped from the actual order dates
        const byMonth = new Map();
        orders.forEach((o) => {
          const d = new Date(o.createdAt);
          if (isNaN(d)) return;
          const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
          const label = d.toLocaleString("en-US", { month: "short" });
          const entry = byMonth.get(key) || { month: label, sales: 0 };
          entry.sales += o.total || o.totalAmount || 0;
          byMonth.set(key, entry);
        });
        setMonthlyData([...byMonth.entries()].sort().map(([, v]) => v));
      } catch (e) {
        // keep zero values when the backend cannot be reached
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const maxSales = Math.max(...monthlyData.map((d) => d.sales), 1);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading analytics...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {analytics.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 text-sm">{item.label}</p>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Charts and Reports */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Monthly Sales</h2>
        {monthlyData.length === 0 ? (
          <p className="text-sm text-gray-500">
            No orders yet — sales will appear here as orders come in.
          </p>
        ) : (
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{data.month}</span>
                  <span className="text-sm font-medium">
                    Rs. {data.sales.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(data.sales / maxSales) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
