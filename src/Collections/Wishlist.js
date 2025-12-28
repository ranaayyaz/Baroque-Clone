import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setWishlist, getWishlist } from "../helper/wishlistService";

const Wishlist = () => {
  const [items, setItems] = useState([]);

  const navigate = useNavigate();
  const addToCartInflight = useRef(false);

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem("auth")
          ? JSON.parse(localStorage.getItem("auth")).token
          : localStorage.getItem("token");
        if (!token) {
          setItems([]);
          return;
        }
        const wl = await getWishlist(token);
        setItems(wl || []);
        setWishlist(wl || []);
      } catch (e) {
        setItems([]);
      }
    };
    load();
    const onChange = () => load();
    window.addEventListener("wishlistChanged", onChange);
    return () => {
      window.removeEventListener("wishlistChanged", onChange);
    };
  }, []);

  const removeAll = async () => {
    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")).token
      : localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/me/wishlist`,
        { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
      );
      const data = await res.json();
      if (data && data.status === "success") {
        setItems([]);
        setWishlist([]);
        window.dispatchEvent(
          new CustomEvent("wishlistChanged", { detail: { wishlist: [] } })
        );
        return;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const removeOne = async (id) => {
    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")).token
      : localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/me/wishlist/${id}`,
        { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
      );
      const data = await res.json();
      if (data && data.status === "success") {
        setItems(data.wishlist || []);
        setWishlist(data.wishlist || []);
        window.dispatchEvent(
          new CustomEvent("wishlistChanged", {
            detail: { wishlist: data.wishlist || [] },
          })
        );
        return;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addToCartItem = async (item) => {
    if (addToCartInflight.current) return;
    addToCartInflight.current = true;
    try {
      const token = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth")).token
        : localStorage.getItem("token");
      if (!token) {
        addToCartInflight.current = false;
        navigate("/signin");
        return;
      }
      const payload = {
        id: item.id,
        name: item.name,
        price: item.price,
        imgUrl: item.imgUrl,
        qty: 1,
      };
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/me/cart/item`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ item: payload }),
        }
      );
      if (res.status === 401) {
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        addToCartInflight.current = false;
        navigate("/signin");
        return;
      }
      const data = await res.json();
      if (data && data.status === "success") {
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: data.cart } })
        );
      }
    } catch (e) {
      console.error("Failed to add wishlist item to cart", e);
    } finally {
      addToCartInflight.current = false;
    }
  };

  // Removed local save; wishlist is server-only

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
          // onClick={addToWishlist}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
