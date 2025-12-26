const mongoose = require("mongoose");
mongoose.pluralize(null);

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      imgUrl: String,
      qty: { type: Number, default: 1 },
      size: String,
    },
  ],
  contact: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    country: String,
  },
  payment: {
    method: String,
    card: {
      name: String,
      last4: String,
      expiry: String,
    },
  },
  total: { type: Number, default: 0 },
  status: { type: String, default: "created" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("orders", orderSchema);
