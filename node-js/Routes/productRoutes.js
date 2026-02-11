const express = require("express");
const router = express.Router();
const productController = require("../Controllers/productController");

router.get("/", productController.listProducts);
router.post("/", productController.createProduct);
router.post("/seed", productController.seedProducts);
router.post("/import", productController.importProducts);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
