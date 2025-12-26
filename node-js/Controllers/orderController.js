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
        0
      );

      const order = await Order.create({
        userId,
        items,
        contact,
        payment,
        total,
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
};
