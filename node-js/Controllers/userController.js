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
  authenticate: async function (req, res) {
    try {
      if (!req.body || !req.body.email)
        return res
          .status(400)
          .json({ status: "Error", message: "Email required" });
      if (!req.body || !req.body.password)
        return res
          .status(400)
          .json({ status: "Error", message: "Password required" });

      const userInfo = await userModel
        .findOne({ email: req.body.email })
        .select("+password");
      if (!userInfo) {
        return res
          .status(404)
          .json({ status: "Error", message: "User not found" });
      }

      const hashed = userInfo.password;
      if (!hashed) {
        return res
          .status(400)
          .json({ status: "Error", message: "Invalid credentials" });
      }

      const match = bcrypt.compareSync(
        String(req.body.password),
        String(hashed)
      );
      if (match) {
        const token = jwt.sign({ id: userInfo._id }, req.app.get("secretKey"), {
          expiresIn: "1h",
        });
        const userSafe = {
          id: userInfo._id,
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          email: userInfo.email,
          role: userInfo.role || 'user',
        };
        return res.json({
          status: "success",
          message: "Login successful",
          token,
          user: userSafe,
        });
      }
      return res
        .status(401)
        .json({ status: "Error", message: "Invalid password" });
    } catch (err) {
      console.error("Authentication error:", err);
      return res
        .status(500)
        .json({ status: "Error", message: "Authentication failed" });
    }
  },

  // return basic profile for current user
  getProfile: async function (req, res) {
    try {
      const u = await userModel
        .findById(req.userId)
        .select("firstName lastName email");
      if (!u)
        return res
          .status(404)
          .json({ status: "error", message: "User not found" });
      return res.json({
        status: "success",
        profile: {
          firstName: u.firstName,
          lastName: u.lastName,
          email: u.email,
        },
      });
    } catch (err) {
      console.error("Get profile error:", err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to load profile" });
    }
  },

  // --- CART & WISHLIST HANDLERS ---

  // get cart
  getCart: async (req, res) => {
    try {
      const u = await userModel.findById(req.userId).select("cart");
      return res.json({ status: "success", cart: u?.cart || [] });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to load cart" });
    }
  },

  // replace full cart
  replaceCart: async (req, res) => {
    try {
      const cart = Array.isArray(req.body.cart) ? req.body.cart : [];
      const u = await userModel
        .findByIdAndUpdate(req.userId, { $set: { cart } }, { new: true })
        .select("cart");
      return res.json({ status: "success", cart: u?.cart || [] });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to update cart" });
    }
  },

  // add / upsert single cart item
  addCartItem: async (req, res) => {
    try {
      const item = req.body.item;
      if (!item || !item.id)
        return res
          .status(400)
          .json({ status: "error", message: "Invalid item" });
      // Try to increment qty if same item+size exists
      const incResult = await userModel
        .findOneAndUpdate(
          { _id: req.userId, "cart.id": item.id, "cart.size": item.size || "" },
          { $inc: { "cart.$.qty": item.qty || 1 } },
          { new: true }
        )
        .select("cart");
      if (incResult && incResult.cart) {
        return res.json({ status: "success", cart: incResult.cart });
      }

      // otherwise push new item
      const pushResult = await userModel
        .findByIdAndUpdate(
          req.userId,
          { $push: { cart: { ...item, qty: item.qty || 1 } } },
          { new: true }
        )
        .select("cart");
      return res.json({ status: "success", cart: pushResult?.cart || [] });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to add item" });
    }
  },

  // update item qty
  updateCartItemQty: async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      const { size, qty } = req.body;
      const qtyNum = Math.max(1, parseInt(qty || 1, 10));
      const resDoc = await userModel
        .findOneAndUpdate(
          { _id: req.userId, "cart.id": id, "cart.size": size || "" },
          { $set: { "cart.$.qty": qtyNum } },
          { new: true }
        )
        .select("cart");
      if (!resDoc)
        return res
          .status(404)
          .json({ status: "error", message: "Item not found" });
      return res.json({ status: "success", cart: resDoc?.cart || [] });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to update qty" });
    }
  },

  // remove item
  removeCartItem: async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      const size = req.query.size || "";
      const resDoc = await userModel
        .findByIdAndUpdate(
          req.userId,
          { $pull: { cart: { id: id, size: size } } },
          { new: true }
        )
        .select("cart");
      return res.json({ status: "success", cart: resDoc?.cart || [] });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to remove item" });
    }
  },

  // clear cart
  clearCart: async (req, res) => {
    try {
      await userModel.findByIdAndUpdate(
        req.userId,
        { $set: { cart: [] } },
        { new: true }
      );
      return res.json({ status: "success", cart: [] });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to clear cart" });
    }
  },

  // get wishlist
  getWishlist: async (req, res) => {
    try {
      const u = await userModel.findById(req.userId).select("wishlist");
      return res.json({ status: "success", wishlist: u?.wishlist || [] });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to load wishlist" });
    }
  },

  // replace wishlist
  replaceWishlist: async (req, res) => {
    try {
      const wishlist = Array.isArray(req.body.wishlist)
        ? req.body.wishlist
        : [];
      const u = await userModel
        .findByIdAndUpdate(req.userId, { $set: { wishlist } }, { new: true })
        .select("wishlist");
      return res.json({ status: "success", wishlist: u?.wishlist || [] });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to update wishlist" });
    }
  },

  // toggle wishlist item
  toggleWishlistItem: async (req, res) => {
    try {
      const item = req.body.item;
      if (!item || !item.id)
        return res
          .status(400)
          .json({ status: "error", message: "Invalid item" });
      // check if item exists in wishlist first
      const exists = await userModel.findOne(
        { _id: req.userId, "wishlist.id": item.id },
        { "wishlist.$": 1 }
      );

      if (exists) {
        // item exists — remove it
        const pulled = await userModel
          .findByIdAndUpdate(
            req.userId,
            { $pull: { wishlist: { id: item.id } } },
            { new: true }
          )
          .select("wishlist");
        return res.json({
          status: "success",
          wishlist: pulled?.wishlist || [],
        });
      } else {
        // item not present — add it
        const pushed = await userModel
          .findByIdAndUpdate(
            req.userId,
            { $push: { wishlist: item } },
            { new: true }
          )
          .select("wishlist");
        return res.json({
          status: "success",
          wishlist: pushed?.wishlist || [],
        });
      }
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to toggle wishlist" });
    }
  },

  // remove wishlist item by id
  removeWishlistItem: async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      const resDoc = await userModel
        .findByIdAndUpdate(
          req.userId,
          { $pull: { wishlist: { id: id } } },
          { new: true }
        )
        .select("wishlist");
      return res.json({ status: "success", wishlist: resDoc?.wishlist || [] });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to remove wishlist item" });
    }
  },

  // clear wishlist
  clearWishlist: async (req, res) => {
    try {
      await userModel.findByIdAndUpdate(
        req.userId,
        { $set: { wishlist: [] } },
        { new: true }
      );
      return res.json({ status: "success", wishlist: [] });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to clear wishlist" });
    }
  },
};
