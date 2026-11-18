// Create or promote an admin user directly in the database.
//
// Normal admin access does NOT need this script: the account whose email
// matches the backend's ADMIN_EMAIL environment variable is made admin
// automatically when it signs up or logs in.
//
// Use this only as a manual fallback, from the node-js folder:
//   MONGO_URL=<connection string> ADMIN_SEED_EMAIL=you@example.com \
//   ADMIN_SEED_PASSWORD=<password> node createAdminUser.js
//
// If the email already has an account, it is promoted to admin (and its
// password is updated when ADMIN_SEED_PASSWORD is provided).

require("dotenv").config();
const mongoose = require("mongoose");
const connectToDatabase = require("./database/connection");
const userModel = require("./Models/userModel");

(async () => {
  const email = (process.env.ADMIN_SEED_EMAIL || "").trim().toLowerCase();
  const password = process.env.ADMIN_SEED_PASSWORD || "";
  if (!email) {
    console.error("Set ADMIN_SEED_EMAIL first.");
    process.exit(1);
  }

  await connectToDatabase();

  const existing = await userModel.findOne({ email });
  if (existing) {
    existing.role = "admin";
    if (password) existing.password = password;
    await existing.save();
    console.log(`Promoted existing user to admin: ${email}`);
  } else {
    if (!password) {
      console.error("User does not exist yet; set ADMIN_SEED_PASSWORD too.");
      process.exit(1);
    }
    await userModel.create({
      firstName: "Admin",
      lastName: "User",
      email,
      password,
      role: "admin",
    });
    console.log(`Created new admin user: ${email}`);
  }

  await mongoose.disconnect();
  process.exit(0);
})().catch((err) => {
  console.error("createAdminUser failed:", err.message || err);
  process.exit(1);
});
