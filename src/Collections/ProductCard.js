import { IoHeartOutline, IoHeart } from "react-icons/io5";
import ImageCard from "../ImageCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductCard = ({
  productId,
  imgUrl,
  name,
  price,
  season,
  layout = "grid",
  compact = false,
}) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("wishlist");
      const wish = raw ? JSON.parse(raw) : [];
      setLiked(wish.some((w) => w.id === productId));
    } catch (e) {
      setLiked(false);
    }
  }, [productId]);

  const toggleLike = (e) => {
    e && e.stopPropagation && e.stopPropagation();
    e && e.preventDefault && e.preventDefault();
    // require login: if no auth/user in localStorage, save pending like and redirect to signin
    try {
      const auth = localStorage.getItem("auth") || localStorage.getItem("user");
      if (!auth) {
        const pending = { id: productId, name, price, imgUrl, season };
        try {
          sessionStorage.setItem("pendingLike", JSON.stringify(pending));
        } catch (e) {
          console.error("Failed to save pending like", e);
        }
        // send user to signin
        window.location.href = "/signin";
        return;
      }
    } catch (e) {
      console.error(e);
    }
    try {
      const raw = localStorage.getItem("wishlist");
      const wish = raw ? JSON.parse(raw) : [];
      const exists = wish.find((w) => w.id === productId);
      if (exists) {
        const next = wish.filter((w) => w.id !== productId);
        localStorage.setItem("wishlist", JSON.stringify(next));
        setLiked(false);
      } else {
        const next = [...wish, { id: productId, name, price, imgUrl, season }];
        localStorage.setItem("wishlist", JSON.stringify(next));
        setLiked(true);
      }
      window.dispatchEvent(new Event("wishlistChanged"));
    } catch (err) {
      console.error("wishlist toggle failed", err);
    }
  };
  if (compact) {
    return (
      <Link to={`/product/${productId || ""}`}>
        <div className="flex items-center justify-center">
          <div className="w-full">
            <ImageCard imgUrl={imgUrl} />
          </div>
        </div>
      </Link>
    );
  }

  if (layout === "list") {
    return (
      <div className="flex items-center gap-4 p-4 border-b">
        <div className="w-36 h-36 flex-shrink-0">
          <ImageCard imgUrl={imgUrl} />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className="tracking-widest uppercase">{name}</h4>
            <button
              onClick={(e) => {
                toggleLike(e);
              }}
              className={`p-2 rounded-full shadow-md`}
            >
              {liked ? <IoHeart /> : <IoHeartOutline />}
            </button>
          </div>
          <div className="mt-2">
            <strong>PKR {price}</strong>
            <div className="text-sm text-gray-600">{season}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/product/${productId || ""}`}>
      <div className="relative flex flex-col items-center">
        <span className="cursor-pointer w-full ">
          <ImageCard imgUrl={imgUrl} />
        </span>

        {/* Heart button on top-left corner */}
        <button
          onClick={(e) => {
            toggleLike(e);
          }}
          className={`absolute top-2 left-2 p-2 rounded-full shadow-md z-10`}
        >
          {liked ? <IoHeart /> : <IoHeartOutline />}
        </button>

        <span className="space- text-center mt-4 leading-7">
          <span className="tracking-widest uppercase">{name}</span>
          <br />
          <strong>PKR {price}</strong>
          <br />
          <span className="text-sm text-upercase">{season}</span>
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
