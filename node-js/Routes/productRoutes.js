const express = require("express");
const router = express.Router();
const productController = require("../Controllers/productController");
const auth = require("../Middleware/auth");
const requireAdmin = require("../Middleware/requireAdmin");

// Public catalogue read
router.get("/", productController.listProducts);

// Writes are admin-only
router.post("/", auth, requireAdmin, productController.createProduct);
router.post("/seed", auth, requireAdmin, productController.seedProducts);
router.post("/import", auth, requireAdmin, productController.importProducts);
router.put("/:id", auth, requireAdmin, productController.updateProduct);
router.delete("/:id", auth, requireAdmin, productController.deleteProduct);

module.exports = router;
