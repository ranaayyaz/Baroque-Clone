import { FaBars } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { products } from "../mock/product";
import { NavLink, useLocation } from "react-router-dom";
import { formatCategoryName } from "../helper/formatCategoryName";
import ProductCard from "./ProductCard";

function CollectionCategory({ category }) {
  const location = useLocation();

  // Extract parent category from current path
  const currentPath = location.pathname;
  const isStitched = currentPath.includes("/stitched");

  return (
    <>
      <div className="text-center mt-[4rem] mb-[4rem] letterSpacing space-y-2">
        <div className="text-sm md:text-lg lg:text-xl xl:text-4xl mb-12">
          {formatCategoryName(category)}
        </div>

        <div className="text-gray-400 mb-[100px] pb-8">
          <ul className="flex justify-center items-center gap-6 mt-6">
            <li>
              <NavLink
                to={isStitched ? "/stitched/formal" : "/unstitched/formal"}
                className={({ isActive }) =>
                  `cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "text-black font-bold underline underline-offset-8 decoration-2"
                      : "hover:text-black"
                  }`
                }
              >
                FORMAL
              </NavLink>
            </li>
            <li>
              <NavLink
                to={isStitched ? "/stitched/casual" : "/unstitched/casual"}
                className={({ isActive }) =>
                  `cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "text-black font-bold underline underline-offset-8 decoration-2"
                      : "hover:text-black"
                  }`
                }
              >
                CASUAL
              </NavLink>
            </li>
            <li>
              <NavLink
                to={
                  isStitched ? "/stitched/partywear" : "/unstitched/partywear"
                }
                className={({ isActive }) =>
                  `cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "text-black font-bold underline underline-offset-8 decoration-2"
                      : "hover:text-black"
                  }`
                }
              >
                PARTYWEAR
              </NavLink>
            </li>
            <li>
              <NavLink
                to={isStitched ? "/stitched/winter" : "/unstitched/winter"}
                className={({ isActive }) =>
                  `cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "text-black font-bold underline underline-offset-8 decoration-2"
                      : "hover:text-black"
                  }`
                }
              >
                WINTER
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔥 PRODUCT BAR - FIXED POSITION */}
      <div className="sticky top-[82px] z-40 bg-white border-t border-b border-gray-300 shadow-sm">
        <div className="flex items-center px-2">
          <div className="flex w-[15%] sm:w-[10%] lg:w-[8%] gap-4 justify-center py-3">
            <span className="cursor-pointer hover:text-black text-gray-400">
              <BsFillGridFill />
            </span>
            <span className="cursor-pointer hover:text-black text-gray-400">
              <BsFillGrid3X3GapFill />
            </span>
            <span className="cursor-pointer hover:text-black text-gray-400">
              <FaBars />
            </span>
          </div>

          <div className="flex-1 text-center py-3 text-sm sm:text-base border-r border-l border-gray-300">
            {products.filter((product) => product.category === category).length}{" "}
            PRODUCTS
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-12">
              {/* Your products here... */}
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    imgUrl={product.imgUrl}
                    name={product.name}
                    price={product.price}
                    season={product.season}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionCategory;
