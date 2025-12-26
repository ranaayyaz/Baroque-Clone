import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("lastOrder");
      setOrder(raw ? JSON.parse(raw) : null);
    } catch (e) {
      setOrder(null);
    }
  }, []);

  if (!order)
    return (
      <div className="max-w-[900px] mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">Order not found</h2>
        <Link to="/" className="underline text-black">
          Go Home
        </Link>
      </div>
    );

  return (
    <div className="max-w-[900px] mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">
        Thank you! Your order is placed
      </h2>
      <div className="mb-4">
        Order ID: <span className="font-mono">{order.id}</span>
      </div>
      <div className="mb-6">
        We have sent a confirmation to:{" "}
        <strong>{order.contact.email || order.contact.phone}</strong>
      </div>

      <div className="border p-4 mb-4">
        <h3 className="font-semibold mb-2">Shipping Details</h3>
        <div>
          {order.contact.firstName} {order.contact.lastName}
        </div>
        <div>{order.contact.address}</div>
        <div>{order.contact.country}</div>
        <div>{order.contact.phone}</div>
      </div>

      <div className="border p-4">
        <h3 className="font-semibold mb-2">Order Summary</h3>
        <div className="space-y-3">
          {order.items.map((it, idx) => (
            <div key={idx} className="flex justify-between">
              <div>
                {it.name} x {it.qty}
              </div>
              <div>PKR {(it.price * it.qty).toLocaleString()}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between font-semibold">
          Total <div>PKR {order.total.toLocaleString()}</div>
        </div>
      </div>

      <div className="mt-6">
        <Link to="/" className="px-4 py-2 border">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
