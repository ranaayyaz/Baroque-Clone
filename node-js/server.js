const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

// Enable CORS for access from different origins/frontends
const allowedOrigins = [process.env.FRONTEND_URL, "https://baroque.vercel.app"]
  .filter(Boolean)
  .map((u) => u.replace(/\/$/, "")); // normalize (no trailing slash)

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin) return next(); // non-browser request

  const originNorm = origin.replace(/\/$/, "");
  const isAllowed =
    allowedOrigins.includes(originNorm) ||
    process.env.NODE_ENV !== "production";

  if (!isAllowed) {
    // Explicitly deny browser requests from unknown origins to avoid silent CORS failures
    return res
      .status(403)
      .json({ status: "error", message: "Origin not allowed" });
  }

  // Always set Vary when Origin is present so caches distinguish responses
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Respond to preflight OPTIONS requests immediately
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

require("./database/connection");

//User Routes
var userRoutes = require("./Routes/userRoutes");
app.use("/users", userRoutes);

app.set("secretKey", "Im a Fullstack web developer 7613341 &&8326&^&%^*(%#");

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
