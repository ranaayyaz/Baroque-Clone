const mongoose = require("mongoose");
mongoose.pluralize(null);

const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, default: 0 },
    imgUrl: String,
    images: [String],
    category: String,
    season: String,
    fabric: String,
    type: String,
    pieces: String,
    style: String,
    availability: String,
    size: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
