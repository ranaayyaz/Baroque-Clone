import React from "react";

const Analytics = () => {
  const analytics = [
    { label: "Total Revenue", value: "Rs. 2,45,000", growth: "+12.5%" },
    { label: "Average Order Value", value: "Rs. 3,500", growth: "+5.2%" },
    { label: "Conversion Rate", value: "3.8%", growth: "+0.8%" },
    { label: "Customer Retention", value: "85%", growth: "+2.1%" },
  ];

  const monthlyData = [
    { month: "Jan", sales: 8000 },
    { month: "Feb", sales: 12000 },
    { month: "Mar", sales: 9500 },
    { month: "Apr", sales: 15000 },
    { month: "May", sales: 18000 },
    { month: "Dec", sales: 22000 },
  ];

  return (
    <div>
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {analytics.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 text-sm">{item.label}</p>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
            <p className="text-green-500 text-sm mt-2">{item.growth}</p>
          </div>
        ))}
      </div>

      {/* Charts and Reports */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Monthly Sales</h2>
        <div className="space-y-4">
          {monthlyData.map((data, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{data.month}</span>
                <span className="text-sm font-medium">Rs. {data.sales.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${(data.sales / 25000) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
