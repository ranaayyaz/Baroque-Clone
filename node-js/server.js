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
const allowVercelSubdomains = process.env.ALLOW_VERCEL_SUBDOMAINS === "true";
const allowedOrigins = [process.env.FRONTEND_URL, "https://baroque.vercel.app"]
  .filter(Boolean)
  .map((u) => u.replace(/\/$/, "")); // normalize (no trailing slash)

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin) return next(); // non-browser request

  const originNorm = origin.replace(/\/$/, "");
  let isAllowed =
    allowedOrigins.includes(originNorm) ||
    process.env.NODE_ENV !== "production";

  // Optionally allow any vercel.app subdomain (useful for Vercel previews)
  if (
    !isAllowed &&
    allowVercelSubdomains &&
    originNorm.endsWith(".vercel.app")
  ) {
    isAllowed = true;
  }

  if (!isAllowed) {
    console.warn(`Blocked CORS origin: ${originNorm}`);
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

const connectToDatabase = require("./database/connection");
const { getConnectionState } = require("./database/connection");

//User Routes
var userRoutes = require("./Routes/userRoutes");
app.use("/users", userRoutes);

app.set("secretKey", "Im a Fullstack web developer 7613341 &&8326&^&%^*(%#");

(async () => {
  try {
    await connectToDatabase();
  } catch (err) {
    console.error("Failed to connect to database. Exiting.", err);
    process.exit(1);
  }

  const port = process.env.PORT || 7777;
  app.listen(port, () => {
    console.log("Server is running on port", port);
  });
})();

// Health check endpoint
app.get("/health", (req, res) => {
  const dbState = getConnectionState();
  const dbStatus =
    dbState === 1 ? "connected" : dbState === 2 ? "connecting" : "disconnected";
  res.json({ status: "ok", db: dbStatus });
});
