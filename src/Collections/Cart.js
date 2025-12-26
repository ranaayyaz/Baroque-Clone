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
    const item = cart[idx];
    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")).token
      : localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
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
            qty: Math.max(1, newQty),
          }),
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
      if (data && data.status === "success") {
        setCart(data.cart);
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: data.cart } })
        );
        return;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const removeItem = async (idx) => {
    const item = cart[idx];
    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")).token
      : localStorage.getItem("token");
    if (!token) return;
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
        return;
      }
      const data = await res.json();
      if (data && data.status === "success") {
        setCart(data.cart);
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: data.cart } })
        );
        return;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const clearCart = async () => {
    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")).token
      : localStorage.getItem("token");
    if (!token) return;
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
        return;
      }
      const data = await res.json();
      if (data && data.status === "success") {
        setCart([]);
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: [] } })
        );
        return;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const total = cart.reduce(
    (s, it) => s + (it.price || 0) * (it.qty || it.quantity || 1),
    0
  );

  if (!cart || cart.length === 0)
    return (
      <div className="max-w-[1100px] mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is empty</h2>
        <Link to="/" className="text-black underline">
          Continue Shopping
        </Link>
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
                PKR {it.price.toLocaleString()}
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
                className="text-red-500 text-sm"
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
