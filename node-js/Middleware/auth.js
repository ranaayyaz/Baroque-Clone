const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const auth = req.headers.authorization || "";
  const parts = auth.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res
      .status(401)
      .json({ status: "error", message: "No token provided" });
  }
  const token = parts[1];
  try {
    const payload = jwt.verify(token, req.app.get("secretKey"));
    req.userId = payload.id;
    next();
  } catch (err) {
    return res.status(401).json({ status: "error", message: "Invalid token" });
  }
};
