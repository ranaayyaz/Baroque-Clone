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
        { upsert: true, new: true },
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

module.exports.importProducts = importProducts;
