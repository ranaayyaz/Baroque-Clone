const express = require("express");
const router = express.Router();
const orderController = require("../Controllers/orderController");
const auth = require("../Middleware/auth");
const requireAdmin = require("../Middleware/requireAdmin");

// List all orders (admin)
router.get("/", auth, requireAdmin, orderController.listAllOrders);

// Get single order (admin)
router.get("/:id", auth, requireAdmin, orderController.getOrderById);

// Update order status
router.put("/:id/status", auth, requireAdmin, orderController.updateOrderStatus);

module.exports = router;
