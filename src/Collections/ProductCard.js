import { IoHeartOutline, IoHeart } from "react-icons/io5";
import ImageCard from "../ImageCard";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWishlist, setWishlist } from "../helper/wishlistService";

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
  const [loadingLike, setLoadingLike] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        const a = localStorage.getItem("auth");
        const token = a
          ? JSON.parse(a).token || localStorage.getItem("token")
          : localStorage.getItem("token");
        if (!token) {
          setLiked(false);
          return;
        }
        const wl = await getWishlist(token);
        setLiked((wl || []).some((w) => w.id === productId));
      } catch (e) {
        setLiked(false);
      }
    };
    load();
  }, [productId]);

  const toggleLike = async (e) => {
    e && e.stopPropagation && e.stopPropagation();
    e && e.preventDefault && e.preventDefault();
    if (loadingLike) return;
    setLoadingLike(true);
    // require login: if no auth/user in localStorage, save pending like and redirect to signin
    try {
      const a = localStorage.getItem("auth");
      const token = a
        ? JSON.parse(a).token || localStorage.getItem("token")
        : localStorage.getItem("token");
      if (!token) {
        const pending = { id: productId, name, price, imgUrl, season };
        try {
          sessionStorage.setItem("pendingLike", JSON.stringify(pending));
        } catch (e) {
          console.error("Failed to save pending like", e);
        }
        navigate("/signin");
        setLoadingLike(false);
        return;
      }

      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/me/wishlist/toggle`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            item: { id: productId, name, price, imgUrl, season },
          }),
        }
      );
      if (res.status === 401) {
        // clear invalid auth to avoid repeated failing requests
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/signin");
        return;
      }
      const data = await res.json();
      if (data && data.status === "success") {
        setLiked((data.wishlist || []).some((w) => w.id === productId));
        window.dispatchEvent(
          new CustomEvent("wishlistChanged", {
            detail: { wishlist: data.wishlist },
          })
        );
      }
    } catch (err) {
      console.error("wishlist toggle failed", err);
    } finally {
      setLoadingLike(false);
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
