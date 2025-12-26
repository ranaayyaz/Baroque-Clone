import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { products } from "../mock/product";

const ProductDetail = () => {
  const { id } = useParams();
  const pid = parseInt(id, 10);
  const product = products.find((p) => p.id === pid);

  const [qty, setQty] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");

  const navigate = useNavigate();

  const addToCart = async () => {
    try {
      const item = {
        id: product.id,
        name: product.name,
        price: product.price,
        imgUrl: product.imgUrl,
        size: selectedSize,
        qty,
      };

      const authRaw =
        localStorage.getItem("auth") || localStorage.getItem("token");
      const token = authRaw
        ? (() => {
            try {
              return JSON.parse(authRaw).token || localStorage.getItem("token");
            } catch {
              return localStorage.getItem("token");
            }
          })()
        : localStorage.getItem("token");

      if (!token) {
        navigate("/signin");
        return;
      }

      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/me/cart/item`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ item }),
        }
      );
      const data = await res.json();
      if (data && data.status === "success") {
        // notify other parts of app; no localStorage writes
        window.dispatchEvent(
          new CustomEvent("cartChanged", { detail: { cart: data.cart } })
        );
      }
    } catch (e) {
      console.error("Failed to add to cart", e);
    }
  };

  if (!product) return <div className="p-8">Product not found</div>;

  // thumbnails: use `product.images` if available
  const thumbs =
    Array.isArray(product.images) && product.images.length
      ? product.images
      : [product.imgUrl, product.imgUrl, product.imgUrl];
  const selectedImg = thumbs[selectedIndex] || product.imgUrl;

  return (
    <div className="max-w-[1200px] mx-auto my-12 px-4">
      <div className="flex gap-8 pt-12">
        {/* Left thumbnails */}
        <div className="hidden lg:flex flex-col gap-4 w-20">
          {thumbs.map((t, i) => (
            <img
              key={i}
              src={t}
              onClick={() => setSelectedIndex(i)}
              className={`w-16 h-20 object-cover cursor-pointer border ${
                selectedIndex === i ? "ring-2 ring-black" : ""
              }`}
              alt={`thumb-${i}`}
            />
          ))}
        </div>

        {/* Main image */}
        <div className="flex-1">
          <div className="w-full flex items-start justify-center">
            <img
              src={selectedImg}
              alt={product.name}
              className="w-full object-contain max-h-[700px] bg-white"
            />
          </div>
          {/* Mobile thumbnails row */}
          {/* <div className="lg:hidden flex gap-3 mt-4 overflow-x-auto">
            {thumbs.map((t, i) => (
              <img
                key={i}
                src={t}
                onClick={() => setSelectedIndex(i)}
                className={`w-20 h-20 object-cover cursor-pointer border flex-shrink-0 ${
                  selectedIndex === i ? "ring-2 ring-black" : ""
                }`}
                alt={`thumb-mobile-${i}`}
              />
            ))}
          </div> */}
        </div>

        {/* Right details */}
        <div className="w-[380px]">
          <h4 className="text-sm text-gray-500 tracking-widest">
            {product.name.toUpperCase()}
          </h4>
          <h2 className="text-2xl font-semibold mt-4">
            PKR {product.price.toLocaleString()}
          </h2>
          <div className="text-xs text-gray-500 mt-2">
            SKU: {`PR-${product.id}`}
          </div>

          <div className="mt-6">
            <div className="text-sm mb-2">SIZE:</div>
            <div className="flex gap-3">
              {["XS", "S", "M", "L"].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`border px-3 py-2 ${
                    selectedSize === sz
                      ? "border-black font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {sz}
                </button>
              ))}
              <Link className="ml-auto text-sm underline" to="#">
                SIZE CHART
              </Link>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              className="border px-3 py-2"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <div>{qty}</div>
            <button
              className="border px-3 py-2"
              onClick={() => setQty((q) => q + 1)}
            >
              +
            </button>
          </div>

          <button
            onClick={addToCart}
            className="mt-6 w-full bg-black text-white py-3 font-semibold"
          >
            ADD TO CART
          </button>

          <div className="mt-6 space-y-3">
            <details className="border p-3">
              <summary className="font-medium">PRODUCT DETAILS</summary>
              <div className="mt-2 text-sm text-gray-600">
                Description and details about the product.
              </div>
            </details>

            <details className="border p-3">
              <summary className="font-medium">DELIVERY</summary>
              <div className="mt-2 text-sm text-gray-600">
                Delivery info and timelines.
              </div>
            </details>

            <details className="border p-3">
              <summary className="font-medium">DESCRIPTION</summary>
              <div className="mt-2 text-sm text-gray-600">
                Full product description.
              </div>
            </details>

            <details className="border p-3">
              <summary className="font-medium">RETURNS AND EXCHANGE</summary>
              <div className="mt-2 text-sm text-gray-600">
                Return policy details.
              </div>
            </details>

            <details className="border p-3">
              <summary className="font-medium">CARE INSTRUCTIONS</summary>
              <div className="mt-2 text-sm text-gray-600">Care info.</div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
