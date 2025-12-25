import { useState } from "react";
import { LuUserRound } from "react-icons/lu";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LiaBarsSolid } from "react-icons/lia";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [showFirstCanvas, setShowFirstCanvas] = useState(false);
  const [showSecondCanvas, setShowSecondCanvas] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [showCountryModal, setShowCountryModal] = useState(false); // ✅ New state for country modal

  const handleCloseFirst = () => {
    setShowFirstCanvas(false);
    setShowSecondCanvas(false);
    setActiveMenu("");
  };

  const handleShowFirst = () => setShowFirstCanvas(true);

  const handleSecondCanvas = (menuType) => {
    setActiveMenu(menuType);
    setShowSecondCanvas(true);
  };

  const handleCloseSecond = () => {
    setShowSecondCanvas(false);
    setActiveMenu("");
  };

  // ✅ Country Modal handlers
  const handleCountryClick = () => {
    setShowCountryModal(true);
  };

  const handleCloseCountryModal = () => {
    setShowCountryModal(false);
  };

  return (
    <>
      {/* Original Navbar - Tailwind CSS Version */}
      <nav className="h-[75px] mt-3 navbar w-full lg:w-3/12 md:w-6/12 mb-8 lg:mx-0 md:mx-0 mx-0 lg:px-4">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-0">
          {/* Left Section - Menu Button */}
          <div>
            <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-12">
              <button onClick={handleShowFirst} className="">
                <i className="text-[1.5rem] sm:text-[1.8rem] md:text-[2rem]">
                  <LiaBarsSolid />
                </i>
              </button>
            </div>
          </div>

          {/* Center Section - Logo */}
          <div>
            <div className="pl-8 sm:pl-10 md:pl-12 lg:pl-12 w-100 lg:ml-[12rem]">
              <Link to="/">
                <img
                  alt="BAROQUE Logo"
                  src="https://cdn.shopify.com/s/files/1/2277/5269/files/Baroque_logo_24-Aug-2023_200x60@2x.png?v=1692878661.webp"
                  className="h-7 sm:h-8 md:h-9"
                />
              </Link>
            </div>
          </div>

          {/* Right Section - Icons */}
         <div className="hidden lg:flex  space-x-5 ">
        {/* Country Selector */}
        <button 
          onClick={handleCountryClick}
          className="flex items-center text-sm font-medium hover:text-gray-700"
        >
          PAKISTAN
          <MdOutlineKeyboardArrowDown className="ml-1 text-lg" />
        </button>

        {/* Icons */}
        <Link to="/signin" className="text-xl hover:text-gray-700">
          <LuUserRound />
        </Link>
        
        <button className="text-xl hover:text-gray-700">
          <IoSearchSharp />
        </button>
        
        <button className="text-xl hover:text-gray-700 relative">
          <PiShoppingCartSimpleBold />
          {/* Cart Counter - agar chahiye */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>
        </button>
        
        <button className="text-xl hover:text-gray-700">
          <FaRegHeart />
        </button>
      </div>
        </div>
      </nav>

      {/* Pehla Canvas - Fixed Content */}
      {showFirstCanvas && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={handleCloseFirst}
          ></div>

          {/* Canvas Content - FIXED POSITION */}
          <div
            className="fixed top-0 left-0 h-full w-[400px] bg-white shadow-lg z-50"
            style={{ transform: "none" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 ">
              <h3 className="text-lg"></h3>
              <button
                onClick={handleCloseFirst}
                className="text-gray-500 hover:text-gray-700 text-4xl"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <nav className="flex flex-col">
                <button
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas("CHANTELE")}
                >
                  <span className="py-2">CHANTELE</span>
                  <span className="text-gray-400 py-2">
                    <i>
                      <FaAngleRight />
                    </i>
                  </span>
                </button>

                <button
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas("UNSTITCHED")}
                >
                  <span className=" py-2">UNSTITCHED</span>
                  <span className="text-gray-400 py-2">
                    <i>
                      <FaAngleRight />
                    </i>
                  </span>
                </button>

                <button
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas("STITCHED")}
                >
                  <span className=" py-2">STITCHED</span>
                  <span className="text-gray-400 py-2">
                    <i>
                      <FaAngleRight />
                    </i>
                  </span>
                </button>

                <button
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas("READY TO WEAR")}
                >
                  <span className=" py-2">READY TO WEAR</span>
                  <span className="text-gray-400 py-2">
                    <i>
                      <FaAngleRight />
                    </i>
                  </span>
                </button>

                <button
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas("ESSENTIALS")}
                >
                  <span className=" py-2">ESSENTIALS</span>
                  <span className="text-gray-400 py-2">
                    <i>
                      <FaAngleRight />
                    </i>
                  </span>
                </button>

                <button className="py-4 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                  <span className="font-semibold text-red-600 py-4">
                    SPECIAL PRICES
                  </span>
                </button>

                <button className="py-4 w-full text-left hover:bg-gray-50 px-2 rounded">
                  <span className="py-2">SHAWLS</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Dusra Canvas - Second Level - FIXED POSITION */}
          {showSecondCanvas && (
            <div
              className="fixed top-0 left-[400px] h-full w-[400px] bg-white shadow-lg z-[60]"
              style={{ transform: "none" }}
            >
              {/* Header - Cross/Back Icon Nahin Hai */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{activeMenu}</h3>
              </div>

              {/* Body */}
              <div className="p-4">
                <nav className="flex flex-col">
                  {activeMenu === "CHANTELE" && (
                    <>
                      <Link to="/chantelle/stitched" className="py-6 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">STITCHED</span>
                      </Link>
                      <Link to="/chantelle/unstitched" className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">UNSTITCHED</span>
                      </Link>
                    </>
                  )}
                  {activeMenu === "UNSTITCHED" && (
                    <>
                      <Link to="/unstitched" className="py-6 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">SHOP All</span>
                      </Link>
                      <Link to="/unstitched/formal" className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">FORMALS</span>
                      </Link>
                      <Link to="/unstitched/casual" className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">CASUAL</span>
                      </Link>
                      <Link to="/unstitched/partywear" className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">PARTYWEAR</span>
                      </Link>
                      <Link to="/unstitched/winter" className="py-5  w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">WINTER</span>
                      </Link>
                    </>
                  )}

                  {activeMenu === "STITCHED" && (
                    <>
                      <Link to="/stitched" className="py-6 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">SHOP All</span>
                      </Link>
                      <Link to="/stitched/formal" className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">FORMALS</span>
                      </Link>
                      <Link to="/stitched/casual" className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">CASUAL</span>
                      </Link>
                      <Link to="/stitched/partywear" className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">PARTYWEAR</span>
                      </Link>
                      <Link to="/stitched/winter" className="py-5  w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">WINTER</span>
                      </Link>
                    </>
                  )}


                  {activeMenu === "READY TO WEAR" && (
                    <>
                      <button className="py-6 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">SHOP All</span>
                      </button>
                      <button className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">WINTER</span>
                      </button>
                      <button className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">FORMALS</span>
                      </button>
                      <button className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">VELVET</span>
                      </button>
                      <button className="py-5  w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">SUMMER</span>
                      </button>
                    </>
                  )}

                  {activeMenu === "ESSENTIALS" && (
                    <>
                      <button className="py-6 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">ENSEMBELS</span>
                      </button>
                      <button className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">DUPPATAS</span>
                      </button>
                      <button className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">SHAWLS</span>
                      </button>
                    </>
                  )}
                  {/* ... rest of your existing canvas code ... */}
                </nav>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ✅ Country Selection Modal */}
      {showCountryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5 ">
          <div className="bg-white  shadow-xl max-w-md w-full mx-auto">
            {/* Modal Header */}
            <div className="px-5 pt-7 ">
              <h2 className="text-xl  text-left letterSpacing">
                Are you in the right place?
              </h2>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              <p className=" text-left mb-4">
                Please select your shipping country.
              </p>

              <p className=" text-sm text-left mb-6">
                Buy from the country of your choice. Remember that we can only
                ship your order to addresses located in the chosen country.
              </p>

              {/* Country Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 font-sm mb-2">
                  Country
                </label>
                <select
                  className="w-full p-3  border-b border-black "
                  defaultValue="Pakistan"
                >
                  <option value="Pakistan">Pakistan</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="UAE">UAE</option>
                </select>
              </div>

              {/* Shop Now Button */}
              <button
                onClick={handleCloseCountryModal}
                className="w-full bg-black text-white py-3 px-6  font-semibold hover:bg-transparent hover:text-black border border-black transition duration-200"
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
