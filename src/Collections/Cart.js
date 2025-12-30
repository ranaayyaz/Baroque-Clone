import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem("auth")
          ? JSON.parse(localStorage.getItem("auth")).token
          : localStorage.getItem("token");
        if (!token) {
          setCart([]);
          return;
        }
        const res = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/users/me/cart`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (res.status === 401) {
          localStorage.removeItem("auth");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/signin");
          return;
        }
        const data = await res.json();
        if (data && data.status === "success") setCart(data.cart || []);
        else setCart([]);
      } catch (e) {
        setCart([]);
      }
    };
    load();
    const onCart = () => load();
    window.addEventListener("cartChanged", onCart);
    return () => {
      window.removeEventListener("cartChanged", onCart);
    };
  }, []);

  const navigate = useNavigate();

  const updateQty = async (idx, newQty) => {
    // optimistic qty update locally
    const item = cart[idx];
    const prev = cart ? [...cart] : [];
    const nextQty = Math.max(1, newQty);
    const updated = (cart || []).map((c, i) =>
      i === idx ? { ...c, qty: nextQty } : c
    );
    setCart(updated);
    try {
      localStorage.setItem("cart", JSON.stringify(updated));
    } catch (e) {}
    try {
      window.dispatchEvent(
        new CustomEvent("cartChanged", { detail: { cart: updated } })
      );
    } catch (e) {}

    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")).token
      : localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      // revert
      setCart(prev);
      try {
        localStorage.setItem("cart", JSON.stringify(prev));
      } catch (e) {}
      return;
    }

    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/me/cart/item/${item.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            size: item.size || "",
            qty: nextQty,
          }),
        }
      );
      if (res.status === 401) {
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/signin");
        setCart(prev);
        try {
          localStorage.setItem("cart", JSON.stringify(prev));
        } catch (e) {}
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: prev } })
        );
        return;
      }
      const data = await res.json();
      if (data && data.status === "success") {
        setCart(data.cart);
        try {
          localStorage.setItem("cart", JSON.stringify(data.cart));
        } catch (e) {}
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: data.cart } })
        );
        return;
      } else {
        // revert
        setCart(prev);
        try {
          localStorage.setItem("cart", JSON.stringify(prev));
        } catch (e) {}
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: prev } })
        );
      }
    } catch (e) {
      console.error(e);
      setCart(prev);
      try {
        localStorage.setItem("cart", JSON.stringify(prev));
      } catch (err) {}
      window.dispatchEvent(
        new CustomEvent("cartChanged", { detail: { cart: prev } })
      );
    }
  };

  const removeItem = async (idx) => {
    const item = cart[idx];
    const prev = cart ? [...cart] : [];
    const updated = (prev || []).filter((_, i) => i !== idx);
    // optimistic local remove
    setCart(updated);
    try {
      localStorage.setItem("cart", JSON.stringify(updated));
    } catch (e) {}
    try {
      window.dispatchEvent(
        new CustomEvent("cartChanged", { detail: { cart: updated } })
      );
    } catch (e) {}

    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")).token
      : localStorage.getItem("token");
    if (!token) {
      // revert and require signin
      setCart(prev);
      try {
        localStorage.setItem("cart", JSON.stringify(prev));
      } catch (e) {}
      navigate("/signin");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/me/cart/item/${
          item.id
        }?size=${item.size || ""}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.status === 401) {
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/signin");
        setCart(prev);
        try {
          localStorage.setItem("cart", JSON.stringify(prev));
        } catch (e) {}
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: prev } })
        );
        return;
      }
      const data = await res.json();
      if (data && data.status === "success") {
        setCart(data.cart);
        try {
          localStorage.setItem("cart", JSON.stringify(data.cart));
        } catch (e) {}
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: data.cart } })
        );
        return;
      } else {
        // revert on failure
        setCart(prev);
        try {
          localStorage.setItem("cart", JSON.stringify(prev));
        } catch (e) {}
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: prev } })
        );
      }
    } catch (e) {
      console.error(e);
      setCart(prev);
      try {
        localStorage.setItem("cart", JSON.stringify(prev));
      } catch (err) {}
      window.dispatchEvent(
        new CustomEvent("cartChanged", { detail: { cart: prev } })
      );
    }
  };

  const clearCart = async () => {
    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")).token
      : localStorage.getItem("token");
    const prev = cart ? [...cart] : [];
    // optimistic clear
    setCart([]);
    try {
      localStorage.setItem("cart", JSON.stringify([]));
    } catch (e) {}
    try {
      window.dispatchEvent(
        new CustomEvent("cartChanged", { detail: { cart: [] } })
      );
    } catch (e) {}

    if (!token) {
      navigate("/signin");
      setCart(prev);
      try {
        localStorage.setItem("cart", JSON.stringify(prev));
      } catch (e) {}
      return;
    }

    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/me/cart`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.status === 401) {
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/signin");
        setCart(prev);
        try {
          localStorage.setItem("cart", JSON.stringify(prev));
        } catch (e) {}
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: prev } })
        );
        return;
      }
      const data = await res.json();
      if (data && data.status === "success") {
        setCart([]);
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: [] } })
        );
        return;
      } else {
        setCart(prev);
        try {
          localStorage.setItem("cart", JSON.stringify(prev));
        } catch (e) {}
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: prev } })
        );
      }
    } catch (e) {
      console.error(e);
      setCart(prev);
      try {
        localStorage.setItem("cart", JSON.stringify(prev));
      } catch (err) {}
      window.dispatchEvent(
        new CustomEvent("cartChanged", { detail: { cart: prev } })
      );
    }
  };

  const total = cart.reduce((s, it) => {
    const unitPrice =
      it.discountPrice ?? it.price ?? it.originalPrice ?? it.basePrice ?? 0;
    const qty = it.qty || it.quantity || 1;
    return s + unitPrice * qty;
  }, 0);

  if (!cart || cart.length === 0)
    return (
      <div className="mt-[8rem]">
        <div className="max-w-[1100px] mx-auto p-12 text-center letterSpacing">
          <h2 className="text-2xl font-semibold mb-10">Your Cart Is Empty</h2>

          <Link
            to="/"
            className="inline-block text-white border border-black bg-black px-7 py-3 trans mb-10"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );

  return (
    <div className="max-w-[1100px] mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>
      <div className="space-y-4">
        {cart.map((it, idx) => (
          <div key={idx} className="flex items-center gap-6 border p-4">
            <div className="w-40 h-40 bg-white flex items-center justify-center p-2">
              <img
                src={it.imgUrl}
                alt={it.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="font-semibold">{it.name}</div>
              <div className="text-sm text-gray-500">Size: {it.size}</div>
              <div className="text-sm text-gray-700">
                {it.discountPrice ? (
                  <div className="flex flex-col items-start">
                    <span className="text-red-600 font-semibold">
                      PKR {Number(it.discountPrice).toLocaleString()}
                    </span>
                    <span className="line-through text-gray-400 text-xs">
                      PKR {(it.originalPrice || it.price || 0).toLocaleString()}
                    </span>
                  </div>
                ) : (
                  <span>PKR {(it.price || 0).toLocaleString()}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <button
                  className="px-2 border"
                  onClick={() => updateQty(idx, (it.qty || 1) - 1)}
                >
                  -
                </button>
                <div>{it.qty}</div>
                <button
                  className="px-2 border"
                  onClick={() => updateQty(idx, (it.qty || 1) + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="text-black underline font-bold letterSpacing text-sm"
                onClick={() => removeItem(idx)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div>
          <button className="px-4 py-2 border" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Total</div>
          <div className="text-xl font-semibold">
            PKR {total.toLocaleString()}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <Link
          to="/checkout"
          className="bg-black text-white px-6 py-3 font-semibold"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
