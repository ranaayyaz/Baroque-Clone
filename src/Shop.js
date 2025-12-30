import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { products } from "./mock/product";
import ProductCard from "./Collections/ProductCard";

function Shop() {
  const location = useLocation();
  const pageTitle = (location && location.state && location.state.title) || "";
  const isSpecialPricePage = location && location.pathname === "/special-price";
  const [viewMode, setViewMode] = useState("grid-4");

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
            {products.length} PRODUCTS
          </div>

          <div className="w-[15%] sm:w-[10%] lg:w-[8%] text-sm flex items-center pl-8 gap-1 text-gray-400 cursor-pointer hover:text-black transition-colors duration-200 py-3">
            SORT BY <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <div className={`${productGridClass} mt-6 px-5`}>
        {products.map((product) => (
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
    </>
  );
}

export default Shop;
