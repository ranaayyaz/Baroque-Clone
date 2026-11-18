import { useState, useRef } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { products } from "../mock/product";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const pid = parseInt(id, 10);
  const product = products.find((p) => p.id === pid);

  const discountFromState = location?.state?.discountPrice;
  const hasDiscount = Number.isFinite(discountFromState);
  const effectivePrice = hasDiscount ? discountFromState : product?.price;

  const [qty, setQty] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");

  const navigate = useNavigate();
  const addToCartInflight = useRef(false);

  const addToCart = async () => {
    if (addToCartInflight.current) return;
    addToCartInflight.current = true;
    // optimistic add to local cart for immediate UI feedback
    const discountPrice = hasDiscount ? effectivePrice : undefined;
    const item = {
      id: product.id,
      name: product.name,
      price: effectivePrice,
      discountPrice,
      imgUrl: product.imgUrl,
      size: selectedSize,
      qty,
      originalPrice: product.price,
    };

    try {
      // update localStorage cart immediately
      const raw = localStorage.getItem("cart");
      const local = raw ? JSON.parse(raw) : [];
      const idx = local.findIndex(
        (c) => c.id === item.id && c.size === item.size
      );
      if (idx >= 0) {
        local[idx].qty = (local[idx].qty || 0) + item.qty;
      } else {
        local.push(item);
      }
      localStorage.setItem("cart", JSON.stringify(local));
      window.dispatchEvent(
        new CustomEvent("cartChanged", { detail: { cart: local } })
      );

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
        addToCartInflight.current = false;
        navigate("/signin");
        return;
      }

      // background server call to persist cart
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
        // sync local cache if server returns authoritative cart
        if (data.cart) {
          localStorage.setItem("cart", JSON.stringify(data.cart));
          window.dispatchEvent(
            new CustomEvent("cartChanged", { detail: { cart: data.cart } })
          );
        }
      }
    } catch (err) {
      console.error("Failed to add to cart (background)", err);
    } finally {
      addToCartInflight.current = false;
    }
  };

  if (!product) return <div className="p-8">Product not found</div>;

  // thumbnails: use `product.images` if available
  const thumbs =
    Array.isArray(product.images) && product.images.length
      ? product.images
      : [product.imgUrl];
  const selectedImg = thumbs[selectedIndex] || product.imgUrl;

  return (
    <div className="max-w-[1200px] mx-auto my-12 px-4">
      <div className="flex flex-col lg:flex-row gap-8 pt-12">
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
        <div className="w-full lg:w-[380px]">
          <h4 className="text-sm text-gray-500 tracking-widest">
            {product.name.toUpperCase()}
          </h4>
          {hasDiscount ? (
            <div className="mt-4">
              <div className="text-2xl font-semibold text-red-600">
                PKR {Number(effectivePrice).toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 line-through">
                PKR {product.price.toLocaleString()}
              </div>
            </div>
          ) : (
            <h2 className="text-2xl font-semibold mt-4">
              PKR {product.price.toLocaleString()}
            </h2>
          )}
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
                {product.name} — {product.pieces || "3-Piece"} outfit in premium{" "}
                {product.fabric || "quality"} fabric with fine stitching and
                finishing. Colours and embroidery are true to the pictures
                shown. SKU: PR-{product.id}.
              </div>
            </details>

            <details className="border p-3">
              <summary className="font-medium">DELIVERY</summary>
              <div className="mt-2 text-sm text-gray-600">
                Orders are dispatched within 24–48 hours. Delivery across
                Pakistan takes 3–5 working days. Cash on Delivery is available
                nationwide.
              </div>
            </details>

            <details className="border p-3">
              <summary className="font-medium">DESCRIPTION</summary>
              <div className="mt-2 text-sm text-gray-600">
                Part of our {product.style || "signature"} collection, this{" "}
                {product.pieces || "3-Piece"} design pairs elegant detailing
                with all-day comfort — suitable for everyday wear as well as
                special occasions, in every season.
              </div>
            </details>

            <details className="border p-3">
              <summary className="font-medium">RETURNS AND EXCHANGE</summary>
              <div className="mt-2 text-sm text-gray-600">
                Easy 14-day exchange for unused items in their original
                packaging with tags intact. Items must be unworn and unwashed.
                Contact us on WhatsApp to arrange an exchange.
              </div>
            </details>

            <details className="border p-3">
              <summary className="font-medium">CARE INSTRUCTIONS</summary>
              <div className="mt-2 text-sm text-gray-600">
                Dry clean is recommended for formal and embroidered outfits.
                For home washing: gentle machine wash in cold water, do not
                bleach, dry in shade and iron on low heat.
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
