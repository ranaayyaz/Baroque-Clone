import React, { useState, useEffect } from "react";
import { products as MOCK_PRODUCTS } from "../mock/product";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [priceInput, setPriceInput] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/products`);
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      setProducts(
        Array.isArray(data.products) && data.products.length
          ? data.products
          : MOCK_PRODUCTS,
      );
    } catch (e) {
      setProducts(MOCK_PRODUCTS);
    } finally {
      setLoading(false);
    }
  }

  async function savePrice(id) {
    const newPrice = Number(priceInput);
    if (!Number.isFinite(newPrice)) return alert("Enter a valid price");
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/products/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price: newPrice }),
        },
      );
      if (!res.ok) throw new Error("Save failed");
      const json = await res.json();
      setProducts((p) =>
        p.map((item) =>
          item.id === id ? json.product || { ...item, price: newPrice } : item,
        ),
      );
      setEditingId(null);
      setPriceInput("");
    } catch (err) {
      alert("Unable to save price: " + (err.message || err));
    }
  }

  async function removeProduct(id) {
    if (!window.confirm("Delete this product?")) return;
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/products/${id}`,
        { method: "DELETE" },
      );
      if (!res.ok) throw new Error("Delete failed");
      setProducts((p) => p.filter((x) => x.id !== id));
    } catch (err) {
      alert("Unable to delete: " + (err.message || err));
    }
  }

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Manage Products</h2>

      <table className="w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="px-2 py-1">ID</th>
            <th className="px-2 py-1">Name</th>
            <th className="px-2 py-1">Price</th>
            <th className="px-2 py-1">Category</th>
            <th className="px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id} className="border-t">
              <td className="px-2 py-2">{prod.id}</td>
              <td className="px-2 py-2">{prod.name}</td>
              <td className="px-2 py-2">
                {editingId === prod.id ? (
                  <div className="flex gap-2 items-center">
                    <input
                      className="w-28 px-2 py-1 border rounded"
                      value={priceInput}
                      onChange={(e) => setPriceInput(e.target.value)}
                    />
                    <button
                      className="px-2 py-1 bg-green-500 text-white rounded"
                      onClick={() => savePrice(prod.id)}
                    >
                      Save
                    </button>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => {
                        setEditingId(null);
                        setPriceInput("");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span>Rs. {Number(prod.price || 0).toLocaleString()}</span>
                    <button
                      className="text-blue-600"
                      onClick={() => {
                        setEditingId(prod.id);
                        setPriceInput(String(prod.price || ""));
                      }}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </td>
              <td className="px-2 py-2">{prod.category}</td>
              <td className="px-2 py-2">
                <button
                  className="text-red-600"
                  onClick={() => removeProduct(prod.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
