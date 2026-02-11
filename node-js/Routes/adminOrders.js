const express = require("express");
const router = express.Router();
const orderController = require("../Controllers/orderController");
const auth = require("../Middleware/auth");

// List all orders (admin)
router.get("/", auth, orderController.listAllOrders);

// Get single order (admin)
router.get("/:id", auth, orderController.getOrderById);

// Update order status
router.put("/:id/status", auth, orderController.updateOrderStatus);

module.exports = router;
