const userModel = require("../Models/userModel");

// Must run AFTER the auth middleware (which sets req.userId).
// Allows the request through only when the signed-in user has role "admin".
module.exports = async function (req, res, next) {
  try {
    const u = await userModel.findById(req.userId).select("role");
    if (!u || u.role !== "admin") {
      return res
        .status(403)
        .json({ status: "error", message: "Admin access required" });
    }
    next();
  } catch (err) {
    console.error("requireAdmin error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Authorization check failed" });
  }
};
