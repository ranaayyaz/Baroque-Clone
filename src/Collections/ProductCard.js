import { IoHeartOutline, IoHeart } from "react-icons/io5";
import ImageCard from "../ImageCard";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getWishlist, setWishlist } from "../helper/wishlistService";


const ProductCard = ({
  productId,
  imgUrl,
  name,
  price,
  season,
  layout = "grid",
  compact = false,
  showDiscountBadge = false,
  discountPrice,
}) => {
  const [liked, setLiked] = useState(false);
  const [loadingLike, setLoadingLike] = useState(false);
  const navigate = useNavigate();
  // prevent duplicate requests when clicking rapidly or when multiple events fire
  const inflightRef = useRef(false);

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
    // try to stop other handlers immediately
    e &&
      e.nativeEvent &&
      e.nativeEvent.stopImmediatePropagation &&
      e.nativeEvent.stopImmediatePropagation();
    if (loadingLike || inflightRef.current) return;
    inflightRef.current = true;
    setLoadingLike(true);
    // Optimistic UI: toggle locally first and update cache; sync in background
    try {
      const a = localStorage.getItem("auth");
      const token = a
        ? JSON.parse(a).token || localStorage.getItem("token")
        : localStorage.getItem("token");

      const prevLiked = liked;
      // optimistic toggle
      setLiked(!prevLiked);

      // update local wishlist cache immediately (if available)
      let prevCache = null;
      try {
        const cached = await getWishlist(token);
        prevCache = Array.isArray(cached) ? [...cached] : [];
        const updated = prevLiked
          ? prevCache.filter((w) => w.id !== productId)
          : [
              ...prevCache,
              { id: productId, name, price, imgUrl, season: season || "" },
            ];
        setWishlist(updated);
        window.dispatchEvent(
          new CustomEvent("wishlistChanged", { detail: { wishlist: updated } })
        );
      } catch (e) {
        // ignore cache errors
      }

      // if not logged in: save pending and redirect (UI already optimistic)
      if (!token) {
        try {
          sessionStorage.setItem(
            "pendingLike",
            JSON.stringify({ id: productId, name, price, imgUrl, season })
          );
        } catch (err) {
          /* ignore */
        }
        inflightRef.current = false;
        setLoadingLike(false);
        navigate("/signin");
        return;
      }

      // perform network request in background
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
        // revert and clear auth
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setLiked(prevLiked);
        if (prevCache) {
          setWishlist(prevCache);
          window.dispatchEvent(
            new CustomEvent("wishlistChanged", {
              detail: { wishlist: prevCache },
            })
          );
        }
        inflightRef.current = false;
        setLoadingLike(false);
        navigate("/signin");
        return;
      }

      const data = await res.json();
      if (data && data.status === "success") {
        // sync with server result
        setLiked((data.wishlist || []).some((w) => w.id === productId));
        setWishlist(data.wishlist || []);
        window.dispatchEvent(
          new CustomEvent("wishlistChanged", {
            detail: { wishlist: data.wishlist || [] },
          })
        );
      } else {
        // revert on failure
        setLiked(prevLiked);
        if (prevCache) {
          setWishlist(prevCache);
          window.dispatchEvent(
            new CustomEvent("wishlistChanged", {
              detail: { wishlist: prevCache },
            })
          );
        }
      }
    } catch (err) {
      console.error("wishlist toggle failed", err);
      // revert if something went wrong
      try {
        const prev = await getWishlist(localStorage.getItem("token"));
        if (Array.isArray(prev)) {
          setLiked((prev || []).some((w) => w.id === productId));
          setWishlist(prev);
          window.dispatchEvent(
            new CustomEvent("wishlistChanged", { detail: { wishlist: prev } })
          );
        }
      } catch (e) {}
    } finally {
      inflightRef.current = false;
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

  const linkState = discountPrice
    ? { discountPrice, originalPrice: price }
    : undefined;

  return (
    <Link to={`/product/${productId || ""}`} state={linkState}>
      <div className="relative flex flex-col items-center">
        <span className="cursor-pointer w-full ">
          <ImageCard imgUrl={imgUrl} />
        </span>

        {/* Heart button on top-left corner */}
        <button
          onClick={(e) => {
            toggleLike(e);
          }}
          className={`absolute top-2 left-2 p-2 rounded-full shadow-md z-10 bg-white`}
        >
          {liked ? <IoHeart /> : <IoHeartOutline />}
        </button>

        {/* Discount badge if provided */}
        {showDiscountBadge && discountPrice ? (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-md z-10">
            PKR {discountPrice}
          </div>
        ) : null}

        <div className="space- text-center mt-4 leading-7">
          <span className="tracking-widest uppercase block">{name}</span>
          {discountPrice ? (
            <div className="mt-1">
              <strong className="text-red-600 block">
                PKR {discountPrice}
              </strong>
              <span className="line-through text-gray-400 text-sm block">
                PKR {price}
              </span>
            </div>
          ) : (
            <strong className="block">PKR {price}</strong>
          )}
          {season ? (
            <span className="text-sm text-upercase block mt-1">{season}</span>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
