const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const requireAdmin = require("../Middleware/requireAdmin");
const userModel = require("../Models/userModel");
const Order = require("../Models/orderModel");

// GET /admin/users — list all customers for the admin panel (admin only)
router.get("/", auth, requireAdmin, async (req, res) => {
  try {
    const users = await userModel
      .find()
      .select("firstName lastName email role createdAt")
      .sort({ createdAt: -1 })
      .lean();

    const list = [];
    for (const u of users) {
      const orders = await Order.countDocuments({ userId: u._id });
      list.push({
        id: u._id,
        _id: u._id,
        name: `${u.firstName || ""} ${u.lastName || ""}`.trim(),
        email: u.email,
        orders,
        status: u.role === "blocked" ? "blocked" : "active",
        role: u.role,
        joined: u.createdAt
          ? new Date(u.createdAt).toLocaleDateString()
          : "",
      });
    }
    return res.json({ status: "success", users: list });
  } catch (err) {
    console.error("Admin list users error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Failed to list users" });
  }
});

// PUT /admin/users/:id/block — block or unblock a customer (admin only)
router.put("/:id/block", auth, requireAdmin, async (req, res) => {
  try {
    const blocked = !!(req.body && req.body.blocked);
    const u = await userModel.findById(req.params.id).select("role email");
    if (!u)
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    if (u.role === "admin")
      return res.status(400).json({
        status: "error",
        message: "Admin accounts cannot be blocked",
      });

    u.role = blocked ? "blocked" : "user";
    await u.save();

    return res.json({
      status: "success",
      message: blocked ? "User blocked" : "User unblocked",
      user: {
        id: u._id,
        email: u.email,
        status: blocked ? "blocked" : "active",
      },
    });
  } catch (err) {
    console.error("Admin block user error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Failed to update user" });
  }
});

module.exports = router;
