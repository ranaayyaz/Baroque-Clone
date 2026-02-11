import { products } from "../src/mock/product.js";

const SERVER = process.env.SERVER_URL || "http://localhost:7777";

async function run() {
  try {
    const res = await fetch(`${SERVER}/products/import`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ products }),
    });
    const json = await res.json();
    console.log("Import response:", json);
  } catch (err) {
    console.error("Import failed:", err);
    process.exit(1);
  }
}

run();
