let _cache = null;
let _promise = null;
let _last = 0;
const TTL = 30 * 1000; // 30 seconds

async function fetchWishlistFromServer(token) {
  try {
    if (!token) return [];
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/users/me/wishlist`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (!res.ok) return [];
    const j = await res.json();
    return j && j.status === "success" ? j.wishlist || [] : [];
  } catch (err) {
    return [];
  }
}

async function getWishlist(token) {
  const now = Date.now();
  if (_cache && now - _last < TTL) return _cache;
  if (_promise) return _promise;
  _promise = (async () => {
    try {
      const wl = await fetchWishlistFromServer(token);
      _cache = Array.isArray(wl) ? wl : [];
      _last = Date.now();
      return _cache;
    } finally {
      _promise = null;
    }
  })();
  return _promise;
}

function setWishlist(wl) {
  _cache = Array.isArray(wl) ? wl : [];
  _last = Date.now();
}

function invalidateWishlist() {
  _cache = null;
  _last = 0;
}

export { getWishlist, setWishlist, invalidateWishlist };
