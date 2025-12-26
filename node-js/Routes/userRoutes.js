const express = require("express");

const router = express.Router();

const userController = require("../Controllers/userController");
const auth = require("../Middleware/auth");

// Route for user login
router.post("/signup", userController.register);

// Route for user Authentication
router.post("/login", userController.authenticate);

// Cart routes (protected)
router.get("/me/cart", auth, userController.getCart);
router.post("/me/cart", auth, userController.replaceCart);
router.post("/me/cart/item", auth, userController.addCartItem);
router.put("/me/cart/item/:id", auth, userController.updateCartItemQty);
router.delete("/me/cart/item/:id", auth, userController.removeCartItem);
router.delete("/me/cart", auth, userController.clearCart);

// Wishlist routes (protected)
router.get("/me/wishlist", auth, userController.getWishlist);
router.post("/me/wishlist", auth, userController.replaceWishlist);
router.post("/me/wishlist/toggle", auth, userController.toggleWishlistItem);
router.delete("/me/wishlist/:id", auth, userController.removeWishlistItem);
router.delete("/me/wishlist", auth, userController.clearWishlist);

module.exports = router;
