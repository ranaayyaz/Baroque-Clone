import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "Pakistan",
    deliveryMethod: "standard",
    paymentMethod: "cash_on_delivery",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      setCart(raw ? JSON.parse(raw) : []);
    } catch (e) {
      setCart([]);
    }
  }, []);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (form.paymentMethod === "card") {
      if (
        !form.cardName ||
        !form.cardNumber ||
        !form.cardExpiry ||
        !form.cardCvv
      ) {
        setError("Please fill card details for card payment.");
        return;
      }
    }
    const order = {
      id: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString(),
      items: cart,
      contact: form,
      payment: {
        method: form.paymentMethod,
        card:
          form.paymentMethod === "card"
            ? {
                name: form.cardName,
                last4: (form.cardNumber || "").slice(-4),
                expiry: form.cardExpiry,
              }
            : null,
      },
      total: cart.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0),
    };

    try {
      // persist simple order locally
      const raw = localStorage.getItem("orders");
      const orders = raw ? JSON.parse(raw) : [];
      orders.push(order);
      localStorage.setItem("orders", JSON.stringify(orders));
      localStorage.setItem("lastOrder", JSON.stringify(order));

      // clear cart
      localStorage.removeItem("cart");
      window.dispatchEvent(new Event("cartChanged"));

      navigate("/order-success");
    } catch (err) {
      console.error("Failed to create order", err);
    }
  };

  const total = cart.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0);

  return (
    <div className="max-w-[1100px] mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="border p-2"
              required
            />
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="border p-2"
              required
            />
          </div>

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 w-full"
            required
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className="border p-2 w-full"
            required
          />

          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Delivery address"
            className="border p-2 w-full"
            rows={4}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="border p-2"
            >
              <option>Pakistan</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>

            <select
              name="deliveryMethod"
              value={form.deliveryMethod}
              onChange={handleChange}
              className="border p-2"
            >
              <option value="standard">Standard Delivery</option>
              <option value="express">Express Delivery</option>
            </select>
          </div>

          <div>
            <div className="mb-2 font-medium">Payment method</div>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="cash_on_delivery"
                checked={form.paymentMethod === "cash_on_delivery"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2 mt-1">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={form.paymentMethod === "card"}
                onChange={handleChange}
              />
              Credit / Debit Card
            </label>

            {form.paymentMethod === "card" && (
              <div className="mt-3 space-y-2">
                <input
                  name="cardName"
                  value={form.cardName}
                  onChange={handleChange}
                  placeholder="Name on card"
                  className="border p-2 w-full"
                />
                <input
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  placeholder="Card number"
                  inputMode="numeric"
                  className="border p-2 w-full"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    name="cardExpiry"
                    value={form.cardExpiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="border p-2"
                  />
                  <input
                    name="cardCvv"
                    value={form.cardCvv}
                    onChange={handleChange}
                    placeholder="CVV"
                    inputMode="numeric"
                    className="border p-2"
                  />
                </div>
              </div>
            )}

            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 font-semibold"
          >
            Place Order
          </button>
        </form>

        <aside className="border p-4">
          <h3 className="font-semibold mb-4">Your order</h3>
          <div className="space-y-3">
            {cart.map((it, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{it.name}</div>
                  <div className="text-sm text-gray-500">Size: {it.size}</div>
                </div>
                <div>
                  <div className="text-sm">
                    {it.qty} x PKR {it.price.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <div className="text-sm text-gray-500">Total</div>
              <div className="font-semibold">PKR {total.toLocaleString()}</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;
