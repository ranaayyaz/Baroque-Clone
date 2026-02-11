const Order = require("../Models/orderModel");
const userModel = require("../Models/userModel");

module.exports = {
  // create a new order for current user
  createOrder: async (req, res) => {
    try {
      const userId = req.userId;
      if (!userId)
        return res
          .status(401)
          .json({ status: "error", message: "Unauthorized" });

      const items = Array.isArray(req.body.items) ? req.body.items : [];
      const contact = req.body.contact || {};
      const payment = req.body.payment || {
        method: "cash_on_delivery",
        card: null,
      };

      const total = items.reduce(
        (s, it) => s + (it.price || 0) * (it.qty || 1),
        0,
      );

      // generate a simple tracking number
      const tracking = `TRK-${Date.now()}-${Math.floor(Math.random() * 9000) + 1000}`;
      const order = await Order.create({
        userId,
        items,
        contact,
        payment,
        total,
        trackingNumber: tracking,
      });

      // clear user's server-side cart
      await userModel.findByIdAndUpdate(userId, { $set: { cart: [] } });

      return res
        .status(201)
        .json({ status: "success", orderId: order._id, order });
    } catch (err) {
      console.error("Create order error:", err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to create order" });
    }
  },

  // list orders for current user
  getOrders: async (req, res) => {
    try {
      const userId = req.userId;
      if (!userId)
        return res
          .status(401)
          .json({ status: "error", message: "Unauthorized" });
      const orders = await Order.find({ userId }).sort({ createdAt: -1 });
      return res.json({ status: "success", orders });
    } catch (err) {
      console.error("Get orders error:", err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to fetch orders" });
    }
  },

  // ADMIN: list all orders
  listAllOrders: async (req, res) => {
    try {
      const orders = await Order.find().sort({ createdAt: -1 }).lean();
      return res.json({ status: "success", orders });
    } catch (err) {
      console.error("List all orders error:", err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to list orders" });
    }
  },

  // ADMIN: get single order by id
  getOrderById: async (req, res) => {
    try {
      const id = req.params.id;
      if (!id)
        return res
          .status(400)
          .json({ status: "error", message: "id required" });
      const order = await Order.findById(id).lean();
      if (!order)
        return res
          .status(404)
          .json({ status: "error", message: "Order not found" });
      return res.json({ status: "success", order });
    } catch (err) {
      console.error("Get order by id error:", err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to fetch order" });
    }
  },

  // ADMIN: update order status
  updateOrderStatus: async (req, res) => {
    try {
      const id = req.params.id;
      const status = req.body.status;
      if (!id || !status)
        return res
          .status(400)
          .json({ status: "error", message: "id and status required" });
      const o = await Order.findByIdAndUpdate(
        id,
        { $set: { status } },
        { new: true },
      ).lean();
      if (!o)
        return res
          .status(404)
          .json({ status: "error", message: "Order not found" });
      return res.json({ status: "success", order: o });
    } catch (err) {
      console.error("Update order status error:", err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to update status" });
    }
  },
};
