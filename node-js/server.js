const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Enable CORS for access from different origins/frontends
// Support a comma-separated list in `FRONTEND_URLS` or a single `FRONTEND_URL`.
// In production, if no frontend URL is provided we allow Vercel subdomains by default
// (useful for Vercel preview deployments). To explicitly control this, set
// `ALLOW_VERCEL_SUBDOMAINS=true` in the environment.
const allowVercelSubdomainsEnv = process.env.ALLOW_VERCEL_SUBDOMAINS;
const allowVercelSubdomains =
  allowVercelSubdomainsEnv === "true" ||
  (process.env.NODE_ENV === "production" &&
    !process.env.FRONTEND_URL &&
    !process.env.FRONTEND_URLS);

const rawFrontendUrls =
  process.env.FRONTEND_URLS ||
  process.env.FRONTEND_URL ||
  "https://baroque.vercel.app";
const allowedOrigins = rawFrontendUrls
  .split(",")
  .map((u) => u.trim())
  .filter(Boolean)
  .map((u) => u.replace(/\/$/, "")); // normalize (no trailing slash)

// Debug toggle: when true the server will accept any Origin header
// (useful to debug CORS in staging). DO NOT enable in production long-term.
const debugAllowAll = process.env.DEBUG_ALLOW_ALL_CORS === "true";

console.log(
  "CORS allowed origins:",
  allowedOrigins,
  "allowVercelSubdomains:",
  allowVercelSubdomains,
  "debugAllowAll:",
  debugAllowAll,
);

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin) return next(); // non-browser request

  const originNorm = origin.replace(/\/$/, "");

  // If debug mode enabled, allow any origin that sends an Origin header.
  if (debugAllowAll) {
    console.warn(
      `DEBUG_ALLOW_ALL_CORS enabled — allowing origin: ${originNorm}`,
    );
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    );
    if (req.method === "OPTIONS") return res.sendStatus(204);
    return next();
  }

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
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );

  // Respond to preflight OPTIONS requests immediately
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

const connectToDatabase = require("./database/connection");
const { getConnectionState } = require("./database/connection");

// Cached database connection: on Vercel (serverless) each cold start
// connects once and reuses the connection; locally it behaves the same.
let dbReadyPromise = null;
function ensureDb() {
  if (!dbReadyPromise) {
    dbReadyPromise = connectToDatabase().catch((err) => {
      dbReadyPromise = null;
      throw err;
    });
  }
  return dbReadyPromise;
}

// Make sure the database is connected before handling API requests
app.use(async (req, res, next) => {
  if (req.path === "/health") return next();
  try {
    await ensureDb();
    next();
  } catch (err) {
    console.error("Database connection failed:", err.message || err);
    res
      .status(500)
      .json({ status: "error", message: "Database unavailable" });
  }
});

//User Routes
var userRoutes = require("./Routes/userRoutes");
app.use("/users", userRoutes);

// Admin orders routes
try {
  const adminOrders = require("./Routes/adminOrders");
  app.use("/admin/orders", adminOrders);
} catch (e) {
  console.warn("adminOrders not mounted:", e.message || e);
}

// Admin users routes (customers list + block/unblock)
try {
  const adminUsers = require("./Routes/adminUsers");
  app.use("/admin/users", adminUsers);
} catch (e) {
  console.warn("adminUsers not mounted:", e.message || e);
}

// Product catalogue routes (public read, admin writes)
try {
  const productRoutes = require("./Routes/productRoutes");
  app.use("/products", productRoutes);
} catch (e) {
  console.warn("productRoutes not mounted:", e.message || e);
}

app.set("secretKey", "Im a Fullstack web developer 7613341 &&8326&^&%^*(%#");

// Start a normal server only when run directly (local development).
// On Vercel the app is exported below and served as a serverless function.
if (require.main === module) {
  (async () => {
    try {
      await ensureDb();
    } catch (err) {
      console.error("Failed to connect to database. Exiting.", err);
      process.exit(1);
    }

    const port = process.env.PORT || 7777;
    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  })();
}

module.exports = app;

// Health check endpoint
app.get("/health", (req, res) => {
  const dbState = getConnectionState();
  const dbStatus =
    dbState === 1 ? "connected" : dbState === 2 ? "connecting" : "disconnected";
  res.json({ status: "ok", db: dbStatus });
});
