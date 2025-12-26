const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection succeeded");
  } catch (err) {
    console.error("Connection failed", err);
  }
}

connectToDatabase();
