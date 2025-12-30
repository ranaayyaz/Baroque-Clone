const mongoose = require("mongoose");

const DEFAULT_RETRIES = 5;
const DEFAULT_BACKOFF_MS = 1000;

function getMongoUri() {
  return (
    process.env.MONGO_URL || process.env.MONGODB_URI || process.env.MONGO_URI
  );
}

async function connectToDatabase({ retries = DEFAULT_RETRIES } = {}) {
  const uri = getMongoUri();
  if (!uri) {
    const msg =
      "MongoDB connection string not provided. Set MONGO_URL / MONGODB_URI / MONGO_URI";
    console.error(msg);
    throw new Error(msg);
  }

  let attempt = 0;
  const backoff = (n) => DEFAULT_BACKOFF_MS * Math.pow(2, n);

  while (attempt <= retries) {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 10000,
      });
      console.log("MongoDB connection succeeded");
      return;
    } catch (err) {
      attempt += 1;
      console.error(
        `MongoDB connection attempt ${attempt} failed: ${err.message || err}`
      );
      if (attempt > retries) {
        console.error("Exceeded max MongoDB connection attempts");
        throw err;
      }
      const wait = backoff(attempt);
      console.log(`Retrying MongoDB connection in ${wait}ms`);
      // eslint-disable-next-line no-await-in-loop
      await new Promise((r) => setTimeout(r, wait));
    }
  }
}

function getConnectionState() {
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  return mongoose.connection && mongoose.connection.readyState;
}

module.exports = connectToDatabase;
module.exports.getConnectionState = getConnectionState;
