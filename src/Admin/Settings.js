import React, { useState } from "react";

export default function Settings() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState(null);

  async function updatePassword(e) {
    e.preventDefault();
    setMsg(null);
    if (!newPassword || newPassword !== confirmPassword)
      return setMsg("Passwords must match");
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/change-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ newPassword }),
        },
      );
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.message || "Failed to update password");
      }
      setNewPassword("");
      setConfirmPassword("");
      setMsg("Password updated");
    } catch (err) {
      setMsg(err.message || "Error");
    }
  }

  const [blockEmail, setBlockEmail] = useState("");
  const [blockMsg, setBlockMsg] = useState(null);

  async function blockUser() {
    if (!blockEmail) return setBlockMsg("Enter user email");
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/block`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ email: blockEmail }),
        },
      );
      if (!res.ok) throw new Error("Failed to block user");
      setBlockMsg("User blocked");
      setBlockEmail("");
    } catch (err) {
      setBlockMsg(err.message || "Error");
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-6">Settings</h2>

      {/* Update Password */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Update Password</h3>
        <form onSubmit={updatePassword} className="flex gap-2 items-center">
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="px-3 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Confirm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-3 py-2 border rounded"
          />
          <button className="px-3 py-2 bg-green-600 text-white rounded">
            Update
          </button>
        </form>
        {msg && <div className="mt-2 text-sm text-gray-700">{msg}</div>}
      </div>

      {/* Block Users */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Block User</h3>
        <div className="flex gap-2 items-center">
          <input
            value={blockEmail}
            onChange={(e) => setBlockEmail(e.target.value)}
            placeholder="user@example.com"
            className="px-3 py-2 border rounded"
          />
          <button
            onClick={blockUser}
            className="px-3 py-2 bg-red-600 text-white rounded"
          >
            Block
          </button>
        </div>
        {blockMsg && (
          <div className="mt-2 text-sm text-gray-700">{blockMsg}</div>
        )}
      </div>

      {/* Manage Products */}
      <div>
        <h3 className="font-semibold mb-2">Manage Products</h3>
        <p className="text-sm text-gray-600 mb-2">
          Open product manager to create, edit or delete products.
        </p>
        <button
          onClick={() => (window.location.href = "/admin-dashboard")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Open Products
        </button>
      </div>
    </div>
  );
}
