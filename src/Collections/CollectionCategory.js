import { FaBars } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { products } from "../mock/product";
import { NavLink, useLocation } from "react-router-dom";
import { formatCategoryName } from "../helper/formatCategoryName";
import ProductCard from "./ProductCard";
import { useState } from "react";

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

  const productGridClass = (() => {
    if (viewMode === "grid-6")
      return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6";
    if (viewMode === "grid-4")
      return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10";
    // default grid-3
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10";
  })();

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
            {(() => {
              const parentKey = parent.replace(/[^a-zA-Z]/g, "").toLowerCase();
              const catPropKey = (category || "")
                .toString()
                .toLowerCase()
                .replace(/[^a-zA-Z]/g, "");
              const count =
                catPropKey === parentKey || !catPropKey
                  ? products.filter((p) =>
                      p.category.toString().toLowerCase().startsWith(parentKey)
                    ).length
                  : products.filter((p) => {
                      const pc = p.category.toString().toLowerCase();
                      return pc === catPropKey || pc.startsWith(catPropKey);
                    }).length;

              return `${count} PRODUCTS`;
            })()}
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
            <nav className="flex flex-col letterSpacing">
              <button className="group w-full">
                <span className="text-[#2d3748] items-center flex pb-5 text-top border-b w-full text-left  px-2 rounded text-gray-500 group-hover:text-black transition-colors duration-200 ">
                  AVAILABILITY{" "}
                  <span className="ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200">
                    <MdKeyboardArrowDown />
                  </span>
                </span>
              </button>

              <button className="group w-full">
                <span className="text-[#2d3748] items-center flex py-5 border-b w-full text-left px-2 rounded text-gray-500 group-hover:text-black transition-colors duration-200">
                  PRICE{" "}
                  <span className="ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200">
                    <MdKeyboardArrowDown />
                  </span>
                </span>
              </button>
              <button className="group w-full">
                <span className="text-[#2d3748] items-center flex py-5 border-b text-left  px-2 rounded text-gray-500 group-hover:text-black transition-colors duration-200">
                  TYPE{" "}
                  <span className="ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200">
                    <MdKeyboardArrowDown />
                  </span>
                </span>
              </button>

              <button className="group w-full">
                <span className="text-[#2d3748] items-center flex py-5 border-b w-full text-left  px-2 rounded text-gray-500 group-hover:text-black transition-colors duration-200">
                  FABRIC{" "}
                  <span className="ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200">
                    <MdKeyboardArrowDown />
                  </span>
                </span>
              </button>

              <button className="group w-full">
                <span className="text-[#2d3748] items-center flex py-5 border-b w-full text-left px-2 rounded text-gray-500 group-hover:text-black transition-colors duration-200">
                  SIZE
                  <span className="ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200">
                    <MdKeyboardArrowDown />
                  </span>
                </span>
              </button>

              <button className="group w-full">
                <span className="text-[#2d3748] items-center flex py-5 border-b w-full text-left px-2 rounded text-gray-500 group-hover:text-black transition-colors duration-200">
                  PIECES{" "}
                  <span className="ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200">
                    <MdKeyboardArrowDown />
                  </span>
                </span>
              </button>

              <button className="group w-full">
                <span className="text-[#2d3748] items-center flex py-5 w-full text-left text-gray-500  px-2 rounded  text-gray-500 group-hover:text-black transition-colors duration-200">
                  PRODUCT STYLE
                  <span className="ml-auto text-gray-500 text-[25px] group-hover:text-black transition-colors duration-200">
                    <MdKeyboardArrowDown />
                  </span>
                </span>
              </button>
            </nav>
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

                if (isParentPage) {
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

                // otherwise show products for the specific subcategory
                return (
                  <div className={`${productGridClass} mt-12`}>
                    {products
                      .filter((product) => {
                        const pc = product.category.toString().toLowerCase();
                        return pc === catPropKey || pc.startsWith(catPropKey);
                      })
                      .map((product) => (
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
