import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const load = () => {
      try {
        const raw = localStorage.getItem("cart");
        setCart(raw ? JSON.parse(raw) : []);
      } catch (e) {
        setCart([]);
      }
    };
    load();
    const onCart = () => load();
    window.addEventListener("cartChanged", onCart);
    window.addEventListener("storage", onCart);
    return () => {
      window.removeEventListener("cartChanged", onCart);
      window.removeEventListener("storage", onCart);
    };
  }, []);

  const updateQty = (idx, newQty) => {
    const copy = [...cart];
    copy[idx].qty = Math.max(1, newQty);
    setCart(copy);
    localStorage.setItem("cart", JSON.stringify(copy));
    window.dispatchEvent(new Event("cartChanged"));
  };

  const removeItem = (idx) => {
    const copy = [...cart];
    copy.splice(idx, 1);
    setCart(copy);
    localStorage.setItem("cart", JSON.stringify(copy));
    window.dispatchEvent(new Event("cartChanged"));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartChanged"));
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
