const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  //API to create student data
  register: function (req, res) {
    userModel
      .create(req.body)
      .then((results) => {
        res.status(201).json({
          status: "success",
          message: "Signup successful",
          userId: results._id,
        });
      })
      .catch((err) => {
        console.error("Registration error:", err);
        res.status(500).json({
          status: "error",
          message: err.message || "Error in inserting data",
        });
      });
  },

  //API to authenticate user
  authenticate: function (req, res) {
    userModel
      .findOne({ email: req.body.email })
      .then((userInfo) => {
        if (!userInfo) {
          return res.json({ status: "Error", message: "User not found" });
        }

        // Password compare karein
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
          // Token generate
          const token = jwt.sign(
            { id: userInfo._id },
            req.app.get("secretKey"),
            { expiresIn: "1h" }
          );
          const userSafe = {
            id: userInfo._id,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
          };

          res.json({
            status: "success",
            message: "Login successful",
            token: token,
            user: userSafe,
          });
        } else {
          res.json({ status: "Error", message: "Invalid password" });
        }
      })
      .catch((err) => {
        console.error("Authentication error:", err);
        res.json({ status: "Error", message: "Authentication failed" });
      });
  },
};
