const mongoose = require("mongoose");
mongoose.pluralize(null);

const bcrypt = require("bcrypt");
const saltRounds = 10;

var userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
  role: { type: String, default: "user" },
  // server-side cart & wishlist
  cart: [
    {
      id: Number,
      name: String,
      price: Number,
      imgUrl: String,
      qty: { type: Number, default: 1 },
      size: String,
    },
  ],
  wishlist: [
    {
      id: Number,
      name: String,
      price: Number,
      imgUrl: String,
      season: String,
    },
  ],
}, { timestamps: true });

// Hash password before save (only when modified)
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    return next();
  } catch (err) {
    return next(err);
  }
});

// Hash password when using findOneAndUpdate / findByIdAndUpdate
userSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();
  if (!update) return next();
  // handle both top-level and $set cases
  const pw = update.password || (update.$set && update.$set.password);
  if (pw) {
    try {
      const hashed = bcrypt.hashSync(pw, saltRounds);
      if (update.password) update.password = hashed;
      if (update.$set && update.$set.password) update.$set.password = hashed;
    } catch (err) {
      return next(err);
    }
  }
  next();
});

// Remove password from JSON output
userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});
var userModel = mongoose.model("users", userSchema);

module.exports = userModel;
