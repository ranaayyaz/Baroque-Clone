import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import { products } from "./mock/product";
import ProductCard from "./Collections/ProductCard";

function Shop() {
  const location = useLocation();
  const pageTitle = (location && location.state && location.state.title) || "";
  const isSpecialPricePage = location && location.pathname === "/special-price";
  const [viewMode, setViewMode] = useState("grid-4");
  const [sortBy, setSortBy] = useState("featured");

  // Search query coming from the header search bar: /shop-all?q=velvet
  const query = (
    new URLSearchParams(location.search).get("q") || ""
  ).trim();

  const displayedProducts = useMemo(() => {
    let list = products;
    if (query) {
      const q = query.toLowerCase();
      list = products.filter((p) =>
        [p.name, p.category, p.fabric, p.style, p.type]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }
    const arr = [...list];
    if (sortBy === "price-asc") arr.sort((a, b) => (a.price || 0) - (b.price || 0));
    else if (sortBy === "price-desc")
      arr.sort((a, b) => (b.price || 0) - (a.price || 0));
    else if (sortBy === "name-az")
      arr.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    return arr;
  }, [query, sortBy]);

  const productGridClass = (() => {
    if (viewMode === "grid-6")
      return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6";
    if (viewMode === "grid-5")
      return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-10";
    if (viewMode === "grid-4")
      return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10";
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10";
  })();

  return (
    <>
      {pageTitle && (
        <div className="max-w-[1100px] mx-auto px-5 mt-[8rem]">
          <h1 className="text-3xl font-semibold text-red-600 text-center ">{pageTitle}</h1>
        </div>
      )}
      {query && (
        <div className="max-w-[1100px] mx-auto px-5 mt-[8rem] text-center">
          <h1 className="text-2xl font-semibold">
            Search results for &ldquo;{query}&rdquo;
          </h1>
          <p className="text-gray-500 mt-2">
            {displayedProducts.length} product
            {displayedProducts.length === 1 ? "" : "s"} found ·{" "}
            <Link to="/shop-all" className="underline text-black">
              Clear search
            </Link>
          </p>
        </div>
      )}
      <div className="mt-20 bg-white border-y border-b border-gray-300 shadow-sm">
        <div className="flex items-center px-2">
          <div className="flex w-[15%] sm:w-[10%] lg:w-[8%] gap-4 justify-center py-3">
            <button
              onClick={() => setViewMode("grid-4")}
              aria-label="4-column"
              className={`p-1 ${
                viewMode === "grid-4"
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              <BsFillGridFill />
            </button>

            <button
              onClick={() => setViewMode("grid-5")}
              aria-label="5-column"
              className={`p-1 ${
                viewMode === "grid-5"
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              <BsFillGrid3X3GapFill />
            </button>

            <button
              onClick={() => setViewMode("grid-6")}
              aria-label="6-column-compact"
              className={`p-1 ${
                viewMode === "grid-6"
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              <FaBars />
            </button>
          </div>

          <div className="flex-1 text-center py-3 text-sm sm:text-base border-r border-l border-gray-300">
            {displayedProducts.length} PRODUCTS
          </div>

          <div className="w-[30%] sm:w-[22%] lg:w-[16%] text-sm flex items-center justify-end pr-3 gap-1 text-gray-500 py-3">
            <span className="hidden md:inline">SORT BY</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white text-black text-sm outline-none cursor-pointer"
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-az">Name: A to Z</option>
            </select>
          </div>
        </div>
      </div>
      {displayedProducts.length > 0 ? (
        <div className={`${productGridClass} mt-6 px-5`}>
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id}
              imgUrl={product.imgUrl}
              name={product.name}
              price={product.price}
              season={product.season}
              layout={viewMode === "list" ? "list" : "grid"}
              showDiscountBadge={isSpecialPricePage}
              discountPrice={
                isSpecialPricePage ? Math.round(product.price * 0.8) : undefined
              }
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[300px] px-5">
          <p className="text-gray-400 text-lg text-center">
            No products match your search.{" "}
            <Link to="/shop-all" className="underline text-black">
              View all products
            </Link>
          </p>
        </div>
      )}
    </>
  );
}

export default Shop;
