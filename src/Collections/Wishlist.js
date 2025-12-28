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
    // optimistic: clear locally first
    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")).token
      : localStorage.getItem("token");
    const prev = items ? [...items] : [];
    setItems([]);
    setWishlist([]);
    try {
      window.dispatchEvent(
        new CustomEvent("wishlistChanged", { detail: { wishlist: [] } })
      );
    } catch (e) {}

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
      if (res.status === 401) {
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/signin");
        // revert to previous state
        setItems(prev);
        setWishlist(prev);
        window.dispatchEvent(
          new CustomEvent("wishlistChanged", { detail: { wishlist: prev } })
        );
        return;
      }
      if (!(data && data.status === "success")) {
        // revert
        setItems(prev);
        setWishlist(prev);
        window.dispatchEvent(
          new CustomEvent("wishlistChanged", { detail: { wishlist: prev } })
        );
      }
    } catch (e) {
      console.error(e);
      // revert
      setItems(prev);
      setWishlist(prev);
      window.dispatchEvent(
        new CustomEvent("wishlistChanged", { detail: { wishlist: prev } })
      );
    }
  };

  const removeOne = async (id) => {
    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")).token
      : localStorage.getItem("token");
    const prev = items ? [...items] : [];
    const updated = (prev || []).filter((it) => it.id !== id);
    // optimistic update
    setItems(updated);
    setWishlist(updated);
    try {
      window.dispatchEvent(
        new CustomEvent("wishlistChanged", { detail: { wishlist: updated } })
      );
    } catch (e) {}

    if (!token) {
      navigate("/signin");
      // revert
      setItems(prev);
      setWishlist(prev);
      window.dispatchEvent(
        new CustomEvent("wishlistChanged", { detail: { wishlist: prev } })
      );
      return;
    }

    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/me/wishlist/${id}`,
        { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
      );
      const data = await res.json();
      if (res.status === 401) {
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/signin");
        // revert
        setItems(prev);
        setWishlist(prev);
        window.dispatchEvent(
          new CustomEvent("wishlistChanged", { detail: { wishlist: prev } })
        );
        return;
      }
      if (!(data && data.status === "success")) {
        // revert
        setItems(prev);
        setWishlist(prev);
        window.dispatchEvent(
          new CustomEvent("wishlistChanged", { detail: { wishlist: prev } })
        );
      } else {
        // sync with server
        setItems(data.wishlist || []);
        setWishlist(data.wishlist || []);
        window.dispatchEvent(
          new CustomEvent("wishlistChanged", {
            detail: { wishlist: data.wishlist || [] },
          })
        );
      }
    } catch (e) {
      console.error(e);
      setItems(prev);
      setWishlist(prev);
      window.dispatchEvent(
        new CustomEvent("wishlistChanged", { detail: { wishlist: prev } })
      );
    }
  };

  const addToCartItem = async (item) => {
    if (addToCartInflight.current) return;
    addToCartInflight.current = true;

    const prevItems = items ? [...items] : [];
    const prevCartRaw = localStorage.getItem("cart");
    const prevCart = prevCartRaw ? JSON.parse(prevCartRaw) : [];

    // optimistic: remove from wishlist locally and add to cart locally
    const updatedWishlist = (prevItems || []).filter((it) => it.id !== item.id);
    setItems(updatedWishlist);
    setWishlist(updatedWishlist);
    try {
      window.dispatchEvent(
        new CustomEvent("wishlistChanged", {
          detail: { wishlist: updatedWishlist },
        })
      );
    } catch (e) {}

    // add to cart locally
    const payload = {
      id: item.id,
      name: item.name,
      price: item.price,
      imgUrl: item.imgUrl,
      qty: 1,
      size: item.size || "M",
    };
    const raw = localStorage.getItem("cart");
    const local = raw ? JSON.parse(raw) : [];
    const idx = local.findIndex(
      (c) => c.id === payload.id && c.size === payload.size
    );
    if (idx >= 0) local[idx].qty = (local[idx].qty || 0) + 1;
    else local.push(payload);
    try {
      localStorage.setItem("cart", JSON.stringify(local));
    } catch (e) {}
    try {
      window.dispatchEvent(
        new CustomEvent("cartChanged", { detail: { cart: local } })
      );
    } catch (e) {}

    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")).token
      : localStorage.getItem("token");

    if (!token) {
      // revert and require login
      setItems(prevItems);
      setWishlist(prevItems);
      try {
        localStorage.setItem("cart", JSON.stringify(prevCart));
      } catch (e) {}
      try {
        window.dispatchEvent(
          new CustomEvent("wishlistChanged", {
            detail: { wishlist: prevItems },
          })
        );
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: prevCart } })
        );
      } catch (e) {}
      addToCartInflight.current = false;
      navigate("/signin");
      return;
    }

    // send both requests in background: add to cart and remove from wishlist
    try {
      const addPromise = fetch(
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

      const removePromise = fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/me/wishlist/${item.id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const [addRes, removeRes] = await Promise.all([
        addPromise,
        removePromise,
      ]);

      if (addRes.status === 401 || removeRes.status === 401) {
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        // revert
        setItems(prevItems);
        setWishlist(prevItems);
        try {
          localStorage.setItem("cart", JSON.stringify(prevCart));
        } catch (e) {}
        try {
          window.dispatchEvent(
            new CustomEvent("wishlistChanged", {
              detail: { wishlist: prevItems },
            })
          );
          window.dispatchEvent(
            new CustomEvent("cartChanged", { detail: { cart: prevCart } })
          );
        } catch (e) {}
        addToCartInflight.current = false;
        navigate("/signin");
        return;
      }

      const addData = await addRes.json().catch(() => null);
      const removeData = await removeRes.json().catch(() => null);

      const addOk = addRes.ok && addData && addData.status === "success";
      const removeOk =
        removeRes.ok && removeData && removeData.status === "success";

      if (!addOk || !removeOk) {
        // revert to previous local state
        setItems(prevItems);
        setWishlist(prevItems);
        try {
          localStorage.setItem("cart", JSON.stringify(prevCart));
        } catch (e) {}
        try {
          window.dispatchEvent(
            new CustomEvent("wishlistChanged", {
              detail: { wishlist: prevItems },
            })
          );
          window.dispatchEvent(
            new CustomEvent("cartChanged", { detail: { cart: prevCart } })
          );
        } catch (e) {}
      } else {
        // sync with server authoritative responses if provided
        if (addData && addData.cart) {
          try {
            localStorage.setItem("cart", JSON.stringify(addData.cart));
          } catch (e) {}
          window.dispatchEvent(
            new CustomEvent("cartChanged", { detail: { cart: addData.cart } })
          );
        }
        if (removeData && removeData.wishlist) {
          setItems(removeData.wishlist || []);
          setWishlist(removeData.wishlist || []);
          window.dispatchEvent(
            new CustomEvent("wishlistChanged", {
              detail: { wishlist: removeData.wishlist || [] },
            })
          );
        }
      }
    } catch (e) {
      console.error("Failed to add to cart and remove from wishlist", e);
      // revert on network error
      setItems(prevItems);
      setWishlist(prevItems);
      try {
        localStorage.setItem("cart", JSON.stringify(prevCart));
      } catch (err) {}
      try {
        window.dispatchEvent(
          new CustomEvent("wishlistChanged", {
            detail: { wishlist: prevItems },
          })
        );
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: prevCart } })
        );
      } catch (e) {}
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
