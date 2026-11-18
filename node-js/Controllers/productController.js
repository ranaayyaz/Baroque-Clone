const Product = require("../Models/productModel");
const seedData = require("../data/products.json");

// Seed the products collection from the bundled catalogue the first time
// it is read, so the admin panel and the API always have the full list.
async function ensureSeeded() {
  const count = await Product.estimatedDocumentCount();
  if (count === 0 && Array.isArray(seedData) && seedData.length) {
    try {
      await Product.insertMany(seedData, { ordered: false });
    } catch (e) {
      // ignore duplicate-key noise; the collection is seeded enough
    }
  }
}

// GET /products — full catalogue
async function listProducts(req, res) {
  try {
    await ensureSeeded();
    const products = await Product.find().sort({ id: 1 }).lean();
    return res.json({ status: "success", products });
  } catch (err) {
    console.error("List products error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Failed to list products" });
  }
}

// POST /products — create one product (admin)
async function createProduct(req, res) {
  try {
    const p = req.body || {};
    if (p.id == null || !p.name)
      return res
        .status(400)
        .json({ status: "error", message: "id and name are required" });
    const created = await Product.create(p);
    return res.status(201).json({ status: "success", product: created });
  } catch (err) {
    console.error("Create product error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Failed to create product" });
  }
}

// PUT /products/:id — update fields (e.g. price) by numeric id (admin)
async function updateProduct(req, res) {
  try {
    const id = Number(req.params.id);
    const upd = await Product.findOneAndUpdate(
      { id },
      { $set: req.body || {} },
      { new: true }
    ).lean();
    if (!upd)
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    return res.json({ status: "success", product: upd });
  } catch (err) {
    console.error("Update product error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Failed to update product" });
  }
}

// DELETE /products/:id — remove by numeric id (admin)
async function deleteProduct(req, res) {
  try {
    const id = Number(req.params.id);
    const del = await Product.findOneAndDelete({ id }).lean();
    if (!del)
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    return res.json({ status: "success", message: "Product deleted" });
  } catch (err) {
    console.error("Delete product error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Failed to delete product" });
  }
}

// POST /products/seed — insert the bundled catalogue when empty (admin)
async function seedProducts(req, res) {
  try {
    const count = await Product.estimatedDocumentCount();
    if (count > 0)
      return res.json({
        status: "success",
        message: "Products already present",
        count,
      });
    await ensureSeeded();
    const now = await Product.estimatedDocumentCount();
    return res.json({ status: "success", imported: now });
  } catch (err) {
    console.error("Seed products error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Failed to seed products" });
  }
}

// POST /products/import — bulk upsert by id (admin)
async function importProducts(req, res) {
  try {
    const arr = Array.isArray(req.body.products) ? req.body.products : [];
    if (!arr.length)
      return res
        .status(400)
        .json({ status: "error", message: "No products provided" });

    const created = [];
    for (const p of arr) {
      if (!p || !p.id) continue;
      // upsert by id
      const upd = await Product.findOneAndUpdate(
        { id: p.id },
        { $set: p },
        { upsert: true, new: true }
      ).lean();
      created.push(upd);
    }
    return res.json({ status: "success", imported: created.length });
  } catch (err) {
    console.error("Import products error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Failed to import products" });
  }
}

module.exports = {
  listProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  seedProducts,
  importProducts,
};
