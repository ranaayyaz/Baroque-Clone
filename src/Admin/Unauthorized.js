import React from "react";
import { useNavigate } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        <FiAlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          You do not have permission to access the admin dashboard. Only
          administrators can access this area.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex-1 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
