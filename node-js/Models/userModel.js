const mongoose = require("mongoose");
mongoose.pluralize(null);

const bcrypt = require("bcrypt");
const saltRounds = 10;

var userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

//Middleware for hashing password
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});
var userModel = mongoose.model("users", userSchema);

module.exports = userModel;
