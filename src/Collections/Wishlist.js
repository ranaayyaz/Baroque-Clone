import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const load = () => {
      try {
        const raw = localStorage.getItem("wishlist");
        setItems(raw ? JSON.parse(raw) : []);
      } catch (e) {
        setItems([]);
      }
    };
    load();
    const onChange = () => load();
    window.addEventListener("wishlistChanged", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("wishlistChanged", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const removeAll = () => {
    localStorage.removeItem("wishlist");
    window.dispatchEvent(new Event("wishlistChanged"));
    setItems([]);
  };

  const removeOne = (id) => {
    try {
      const raw = localStorage.getItem("wishlist");
      const wish = raw ? JSON.parse(raw) : [];
      const next = wish.filter((w) => w.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(next));
      window.dispatchEvent(new Event("wishlistChanged"));
      setItems(next);
    } catch (e) {
      console.error("Failed to remove wishlist item", e);
    }
  };

  const addToCartItem = (item) => {
    try {
      const raw = localStorage.getItem("cart");
      const cart = raw ? JSON.parse(raw) : [];
      const existing = cart.find((c) => c.id === item.id);
      if (existing) {
        existing.qty = (existing.qty || 1) + 1;
      } else {
        cart.push({
          id: item.id,
          name: item.name,
          price: item.price,
          imgUrl: item.imgUrl,
          qty: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cartChanged"));
    } catch (e) {
      console.error("Failed to add wishlist item to cart", e);
    }
  };

  const addToWishlist = () => {
    // for compatibility we copy wishlist to a saved key 'wishlistSaved'
    try {
      localStorage.setItem("wishlistSaved", JSON.stringify(items));
      window.dispatchEvent(new Event("wishlistSaved"));
      // also optionally copy to cart? here we just persist saved wishlist
      console.log("Wishlist saved (wishlistSaved)");
    } catch (e) {
      console.error("Failed to save wishlist", e);
    }
  };

  if (!items || items.length === 0)
    return (
      <div className="max-w-[1100px] mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">No liked products</h2>
        <Link to="/" className="text-black underline">
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="max-w-[1100px] mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Liked products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-sm overflow-hidden relative"
          >
            <button
              onClick={() => removeOne(it.id)}
              className="absolute top-2 right-2 text-2xl text-gray-700 z-20 p-1 hover:text-black"
              aria-label="Remove liked product"
              style={{ background: "transparent" }}
            >
              ✕
            </button>

            <Link to={`/product/${it.id}`}>
              <div className="w-full h-[320px] flex items-center justify-center bg-gray-50">
                <img
                  src={it.imgUrl}
                  alt={it.name}
                  className="max-h-full object-contain"
                />
              </div>
            </Link>

            <div className="p-4 text-center">
              <Link
                to={`/product/${it.id}`}
                className="font-semibold text-sm block mb-2 uppercase"
              >
                {it.name}
              </Link>
              <div className="text-sm text-gray-600">PKR {it.price}</div>
              <div className="mt-3">
                <button
                  className="bg-black text-white px-4 py-2 text-sm"
                  onClick={() => addToCartItem(it)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button className="px-4 py-2 border" onClick={removeAll}>
          Remove all
        </button>
        <button
          className="bg-black text-white px-4 py-2"
          onClick={addToWishlist}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
