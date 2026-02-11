import { FaBars } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { products } from "../mock/product";
import { NavLink, useLocation } from "react-router-dom";
import { formatCategoryName } from "../helper/formatCategoryName";
import ProductCard from "./ProductCard";
import { useState, useMemo } from "react";

function CollectionCategory({ category }) {
  const location = useLocation();

  // Extract parent category from current path
  const currentPath = location.pathname;
  // determine parent section (stitched, unstitched, ready-to-wear, chantelle, essentials)
  const parent = (() => {
    if (currentPath.startsWith("/stitched")) return "stitched";
    if (currentPath.startsWith("/unstitched")) return "unstitched";
    if (currentPath.startsWith("/ready-to-wear")) return "ready-to-wear";
    if (currentPath.startsWith("/chantelle")) return "chantelle";
    if (currentPath.startsWith("/essentials")) return "essentials";
    // fallback using passed category prop
    if (category?.startsWith("stitched")) return "stitched";
    if (category?.startsWith("unstitched")) return "unstitched";
    if (category?.startsWith("readytowear")) return "ready-to-wear";
    if (category?.startsWith("chantelle")) return "chantelle";
    if (category?.startsWith("essentials")) return "essentials";
    return "stitched";
  })();

  // build sub-nav entries for each parent
  const subNav = ["stitched", "unstitched", "ready-to-wear"].includes(parent)
    ? [
        {
          label: "FORMAL",
          to: `${
            parent === "ready-to-wear" ? "/ready-to-wear" : `/${parent}`
          }/formal`,
        },
        {
          label: "CASUAL",
          to: `${
            parent === "ready-to-wear" ? "/ready-to-wear" : `/${parent}`
          }/casual`,
        },
        {
          label: "PARTYWEAR",
          to: `${
            parent === "ready-to-wear" ? "/ready-to-wear" : `/${parent}`
          }/partywear`,
        },
        {
          label: "WINTER",
          to: `${
            parent === "ready-to-wear" ? "/ready-to-wear" : `/${parent}`
          }/winter`,
        },
      ]
    : parent === "chantelle"
    ? [
        { label: "STITCHED", to: "/chantelle/stitched" },
        { label: "UNSTITCHED", to: "/chantelle/unstitched" },
      ]
    : parent === "essentials"
    ? [
        { label: "ENSEMBLES", to: "/essentials/ensembles" },
        { label: "SHAWLS", to: "/essentials/shawls" },
        { label: "DUPATTAS", to: "/essentials/dupattas" },
      ]
    : [];

  const [viewMode, setViewMode] = useState("grid-3");

  // Filter state management
  const [expandedFilters, setExpandedFilters] = useState({
    availability: false,
    price: false,
    type: false,
    fabric: false,
    size: false,
    pieces: false,
    style: false,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    availability: [],
    price: [],
    type: [],
    fabric: [],
    size: [],
    pieces: [],
    style: [],
  });

  // Toggle filter section expansion
  const toggleFilter = (filterName) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  // Toggle individual filter option
  const toggleFilterOption = (filterName, option) => {
    setSelectedFilters((prev) => {
      const current = prev[filterName] || [];
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, [filterName]: updated };
    });
  };

  // Filter options data
  const filterOptions = {
    availability: ["In Stock", "Out of Stock"],
    price: [
      "Under PKR 5,000",
      "PKR 5,000 - 10,000",
      "PKR 10,000 - 20,000",
      "PKR 20,000+",
    ],
    type: ["Suit", "Dress", "Saree", "Lehenga", "Sharara"],
    fabric: ["Cotton", "Silk", "Georgette", "Chiffon", "Lawn"],
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    pieces: ["2-Piece", "3-Piece", "4-Piece", "5-Piece"],
    style: ["Traditional", "Modern", "Casual", "Formal", "Party Wear"],
  };

  const productGridClass = (() => {
    if (viewMode === "grid-6")
      return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6";
    if (viewMode === "grid-4")
      return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10";
    // default grid-3
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10";
  })();

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    const parentKey = parent.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const catPropKey = (category || "")
      .toString()
      .toLowerCase()
      .replace(/[^a-zA-Z]/g, "");

    let result = products.filter((product) => {
      const pc = product.category.toString().toLowerCase();
      if (catPropKey && catPropKey !== parentKey) {
        return pc === catPropKey || pc.startsWith(catPropKey);
      }
      return pc.startsWith(parentKey);
    });

    // Apply all active filters
    if (selectedFilters.availability.length > 0) {
      result = result.filter((p) =>
        selectedFilters.availability.includes(p.availability || "In Stock")
      );
    }

    if (selectedFilters.price.length > 0) {
      result = result.filter((p) => {
        const price = p.price || 0;
        return selectedFilters.price.some((range) => {
          if (range === "Under PKR 5,000") return price < 5000;
          if (range === "PKR 5,000 - 10,000")
            return price >= 5000 && price < 10000;
          if (range === "PKR 10,000 - 20,000")
            return price >= 10000 && price < 20000;
          if (range === "PKR 20,000+") return price >= 20000;
          return false;
        });
      });
    }

    if (selectedFilters.type.length > 0) {
      result = result.filter((p) =>
        selectedFilters.type.includes(p.type || "Suit")
      );
    }

    if (selectedFilters.fabric.length > 0) {
      result = result.filter((p) =>
        selectedFilters.fabric.includes(p.fabric || "Cotton")
      );
    }

    if (selectedFilters.size.length > 0) {
      result = result.filter((p) =>
        selectedFilters.size.includes(p.size || "M")
      );
    }

    if (selectedFilters.pieces.length > 0) {
      result = result.filter((p) =>
        selectedFilters.pieces.includes(p.pieces || "3-Piece")
      );
    }

    if (selectedFilters.style.length > 0) {
      result = result.filter((p) =>
        selectedFilters.style.includes(p.style || "Traditional")
      );
    }

    return result;
  }, [selectedFilters, category, parent]);

  return (
    <>
      <div className="text-center mt-[6rem] mb-[4rem] letterSpacing space-y-2">
        <div className="text-sm md:text-lg lg:text-xl xl:text-4xl mb-12">
          {formatCategoryName(category)}
        </div>

        <div className="text-gray-400 mb-[100px] pb-8">
          <ul className="flex justify-center items-center gap-6 mt-6">
            {subNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? "text-black font-bold underline underline-offset-8 decoration-2"
                        : "hover:text-black"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🔥 PRODUCT BAR - FIXED POSITION */}
      <div className="sticky top-[75px] z-40 bg-white border-t border-b border-gray-300 shadow-sm">
        <div className="flex items-center px-2">
          <div className="flex w-[15%] sm:w-[10%] lg:w-[8%] gap-4 justify-center py-3">
            <button
              onClick={() => setViewMode("grid-3")}
              aria-label="3-column"
              className={`p-1 ${
                viewMode === "grid-3"
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              <BsFillGridFill />
            </button>

            <button
              onClick={() => setViewMode("grid-4")}
              aria-label="4-column"
              className={`p-1 ${
                viewMode === "grid-4"
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
            {filteredProducts.length} PRODUCTS
          </div>

          <div className="w-[15%] sm:w-[10%] lg:w-[8%] text-sm flex items-center pl-8 gap-1 text-gray-400 cursor-pointer hover:text-black transition-colors duration-200 py-3">
            SORT BY <MdKeyboardArrowDown />
          </div>
        </div>
      </div>

      {/* 🔥 MAIN CONTENT with margin to avoid overlap */}
      <div className="mt-[60px] lg:mt-[0px]">
        <div className="flex flex-col lg:flex-row min-h-screen px-4 lg:px-[40px]">
          {/* 👈 LEFT SIDEBAR */}
          <div className="lg:w-1/4 mb-8 lg:mb-0 lg:pr-8 lg:sticky lg:top-[150px] lg:h-[calc(100vh-100px)] lg:overflow-y-auto mt-12">
            <div className="flex flex-col letterSpacing space-y-0">
              {/* CLEAR FILTERS BUTTON */}
              {Object.values(selectedFilters).some((arr) => arr.length > 0) && (
                <div className="border-b pb-4 mb-4">
                  <button
                    onClick={() =>
                      setSelectedFilters({
                        availability: [],
                        price: [],
                        type: [],
                        fabric: [],
                        size: [],
                        pieces: [],
                        style: [],
                      })
                    }
                    className="w-full py-2 px-3 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800 transition-colors duration-200"
                  >
                    CLEAR ALL FILTERS
                  </button>
                </div>
              )}
              {/* AVAILABILITY FILTER */}
              <div className="border-b">
                <button
                  onClick={() => toggleFilter("availability")}
                  className="group w-full"
                >
                  <span className="text-[#2d3748] items-center flex py-5 w-full text-left px-2 rounded text-gray-500 group-hover:text-black transition-colors duration-200">
                    AVAILABILITY
                    <span
                      className={`ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200 ${
                        expandedFilters.availability ? "rotate-180" : ""
                      }`}
                    >
                      <MdKeyboardArrowDown />
                    </span>
                  </span>
                </button>
                {expandedFilters.availability && (
                  <div className="px-4 pb-4 space-y-2">
                    {filterOptions.availability.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFilters.availability.includes(
                            option
                          )}
                          onChange={() =>
                            toggleFilterOption("availability", option)
                          }
                          className="w-4 h-4 rounded"
                        />
                        <span className="text-sm text-gray-600 hover:text-black transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* PRICE FILTER */}
              <div className="border-b">
                <button
                  onClick={() => toggleFilter("price")}
                  className="group w-full"
                >
                  <span className="text-[#2d3748] items-center flex py-5 w-full text-left px-2 rounded text-gray-500 group-hover:text-black transition-colors duration-200">
                    PRICE
                    <span
                      className={`ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200 ${
                        expandedFilters.price ? "rotate-180" : ""
                      }`}
                    >
                      <MdKeyboardArrowDown />
                    </span>
                  </span>
                </button>
                {expandedFilters.price && (
                  <div className="px-4 pb-4 space-y-2">
                    {filterOptions.price.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFilters.price.includes(option)}
                          onChange={() => toggleFilterOption("price", option)}
                          className="w-4 h-4 rounded"
                        />
                        <span className="text-sm text-gray-600 hover:text-black transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* TYPE FILTER */}
              <div className="border-b">
                <button
                  onClick={() => toggleFilter("type")}
                  className="group w-full"
                >
                  <span className="text-[#2d3748] items-center flex py-5 w-full text-left px-2 rounded text-gray-500 group-hover:text-black transition-colors duration-200">
                    TYPE
                    <span
                      className={`ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200 ${
                        expandedFilters.type ? "rotate-180" : ""
                      }`}
                    >
                      <MdKeyboardArrowDown />
                    </span>
                  </span>
                </button>
                {expandedFilters.type && (
                  <div className="px-4 pb-4 space-y-2">
                    {filterOptions.type.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(option)}
                          onChange={() => toggleFilterOption("type", option)}
                          className="w-4 h-4 rounded"
                        />
                        <span className="text-sm text-gray-600 hover:text-black transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* FABRIC FILTER */}
              <div className="border-b">
                <button
                  onClick={() => toggleFilter("fabric")}
                  className="group w-full"
                >
                  <span className="text-[#2d3748] items-center flex py-5 w-full text-left px-2 rounded text-gray-500 group-hover:text-black transition-colors duration-200">
                    FABRIC
                    <span
                      className={`ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200 ${
                        expandedFilters.fabric ? "rotate-180" : ""
                      }`}
                    >
                      <MdKeyboardArrowDown />
                    </span>
                  </span>
                </button>
                {expandedFilters.fabric && (
                  <div className="px-4 pb-4 space-y-2">
                    {filterOptions.fabric.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFilters.fabric.includes(option)}
                          onChange={() => toggleFilterOption("fabric", option)}
                          className="w-4 h-4 rounded"
                        />
                        <span className="text-sm text-gray-600 hover:text-black transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* SIZE FILTER */}
              <div className="border-b">
                <button
                  onClick={() => toggleFilter("size")}
                  className="group w-full"
                >
                  <span className="text-[#2d3748] items-center flex py-5 w-full text-left px-2 rounded text-gray-500 group-hover:text-black transition-colors duration-200">
                    SIZE
                    <span
                      className={`ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200 ${
                        expandedFilters.size ? "rotate-180" : ""
                      }`}
                    >
                      <MdKeyboardArrowDown />
                    </span>
                  </span>
                </button>
                {expandedFilters.size && (
                  <div className="px-4 pb-4 space-y-2">
                    {filterOptions.size.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFilters.size.includes(option)}
                          onChange={() => toggleFilterOption("size", option)}
                          className="w-4 h-4 rounded"
                        />
                        <span className="text-sm text-gray-600 hover:text-black transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* PIECES FILTER */}
              <div className="border-b">
                <button
                  onClick={() => toggleFilter("pieces")}
                  className="group w-full"
                >
                  <span className="text-[#2d3748] items-center flex py-5 w-full text-left px-2 rounded text-gray-500 group-hover:text-black transition-colors duration-200">
                    PIECES
                    <span
                      className={`ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200 ${
                        expandedFilters.pieces ? "rotate-180" : ""
                      }`}
                    >
                      <MdKeyboardArrowDown />
                    </span>
                  </span>
                </button>
                {expandedFilters.pieces && (
                  <div className="px-4 pb-4 space-y-2">
                    {filterOptions.pieces.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFilters.pieces.includes(option)}
                          onChange={() => toggleFilterOption("pieces", option)}
                          className="w-4 h-4 rounded"
                        />
                        <span className="text-sm text-gray-600 hover:text-black transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* PRODUCT STYLE FILTER */}
              <div className="border-b">
                <button
                  onClick={() => toggleFilter("style")}
                  className="group w-full"
                >
                  <span className="text-[#2d3748] items-center flex py-5 w-full text-left px-2 rounded text-gray-500 group-hover:text-black transition-colors duration-200">
                    PRODUCT STYLE
                    <span
                      className={`ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200 ${
                        expandedFilters.style ? "rotate-180" : ""
                      }`}
                    >
                      <MdKeyboardArrowDown />
                    </span>
                  </span>
                </button>
                {expandedFilters.style && (
                  <div className="px-4 pb-4 space-y-2">
                    {filterOptions.style.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFilters.style.includes(option)}
                          onChange={() => toggleFilterOption("style", option)}
                          className="w-4 h-4 rounded"
                        />
                        <span className="text-sm text-gray-600 hover:text-black transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 👉 RIGHT PRODUCTS */}
          <div className="lg:w-3/4">
            <div className="mt-6">
              {(() => {
                const parentKey = parent
                  .replace(/[^a-zA-Z]/g, "")
                  .toLowerCase();
                const catPropKey = (category || "")
                  .toString()
                  .toLowerCase()
                  .replace(/[^a-zA-Z]/g, "");
                const isParentPage = !catPropKey || catPropKey === parentKey;

                // If no filters are applied and we're on a parent page, show subcategories
                if (
                  isParentPage &&
                  Object.values(selectedFilters).every(
                    (arr) => arr.length === 0
                  )
                ) {
                  // show all subcategories on one page: render each subNav section
                  return (
                    <>
                      {subNav.map((item) => {
                        const subKey = item.to.split("/").pop().toLowerCase();
                        const normalizedSubKey = subKey.replace(
                          /[^a-zA-Z]/g,
                          ""
                        );
                        const keyPrefix = parentKey + normalizedSubKey;
                        const items = products.filter((p) =>
                          p.category
                            .toString()
                            .toLowerCase()
                            .startsWith(keyPrefix)
                        );

                        return (
                          <section key={item.to} className="mb-12">
                            <h3 className="text-lg font-semibold mb-4">
                              {item.label}
                            </h3>
                            <div className={productGridClass}>
                              {items.map((product) => (
                                <ProductCard
                                  key={product.id}
                                  productId={product.id}
                                  imgUrl={product.imgUrl}
                                  name={product.name}
                                  price={product.price}
                                  season={product.season}
                                  compact={viewMode === "grid-6"}
                                />
                              ))}
                            </div>
                          </section>
                        );
                      })}
                    </>
                  );
                }

                // Show filtered products or all products for the specific subcategory
                return filteredProducts.length > 0 ? (
                  <div className={`${productGridClass} mt-12`}>
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        productId={product.id}
                        imgUrl={product.imgUrl}
                        name={product.name}
                        price={product.price}
                        season={product.season}
                        layout={viewMode === "list" ? "list" : "grid"}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center min-h-[400px] mt-12">
                    <p className="text-gray-400 text-lg">
                      No products match your selected filters.
                    </p>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionCategory;
