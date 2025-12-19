import React, { useState } from "react";
import "../App.css";
import ImageCard from "../ImageCard";
import { FaBars } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

function Stitched() {
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <div className="mt-[4.5rem] border-t border-gray-300"></div>

      <div className="text-center mt-[4rem] mb-[4rem] letterSpacing space-y-2">
        <div className="text-sm md:text-lg lg:text-xl xl:text-4xl mb-12">
          STITCHED
        </div>

        <div className=" text-gray-400 mb-[100px] pb-8">
          <ul className="flex justify-center items-center gap-6 mt-6 ">
            <li className="cursor-pointer hover:text-black transition-colors duration-200">
              FORMAL
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-200">
              SUMMER
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-200">
              VELVET
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-200">
              WINTER
            </li>
          </ul>
        </div>
      </div>

      {/* 🔥 PRODUCT BAR - FIXED POSITION */}
      <div className="sticky top-0 z-50 bg-white border-t border-b border-gray-300 shadow-sm">
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
            187 Products
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
          <div className="lg:w-1/4 mb-8 lg:mb-0 lg:pr-8 lg:sticky lg:top-[60px] lg:h-[calc(100vh-100px)] lg:overflow-y-auto mt-12">
            <nav className="flex flex-col letterSpacing">
              <button>
                <span className="text-[#2d3748] items-center flex pb-5 text-top border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                  AVAILABILITY <span className="ml-auto text-gray-400 text-[25px]"><MdKeyboardArrowDown /></span>
                </span>
              </button>

              <button>
                <span className="text-[#2d3748] items-center flex py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                  PRICE <span className="ml-auto text-gray-400 text-[25px]"><MdKeyboardArrowDown /></span>
                </span>
              </button>

              <button>
                <span className="text-[#2d3748] items-center flex py-5 border-b text-left hover:bg-gray-50 px-2 rounded">
                  TYPE <span className="ml-auto text-gray-400 text-[25px]"><MdKeyboardArrowDown /></span>
                </span>
              </button>

              <button>
                <span className="text-[#2d3748] items-center flex py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                  FABRIC <span className="ml-auto text-gray-400 text-[25px]"><MdKeyboardArrowDown /></span>
                </span>
              </button>

              <button>
                <span className="text-[#2d3748] items-center flex py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                  SIZE<span className="ml-auto text-gray-400 text-[25px]"><MdKeyboardArrowDown /></span>
                </span>
              </button>

              <button>
                <span className="text-[#2d3748] items-center flex py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                  PIECES <span className="ml-auto text-gray-400 text-[25px]"><MdKeyboardArrowDown /></span>
                </span>
              </button>

              <button>
                <span className="text-[#2d3748] items-center flex py-5 w-full text-left hover:bg-gray-50 px-2 rounded">
                  PRODUCT STYLE<span className="ml-auto text-gray-400 text-[25px]"><MdKeyboardArrowDown /></span>
                </span>
              </button>
            </nav>
          </div>

          {/* 👉 RIGHT PRODUCTS */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-12">
              {/* Your products here... */}
        
             <div className="relative flex flex-col items-center">
              <span className="cursor-pointer w-full">
                <ImageCard imgUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1765201752/10_et3hzq.webp" />
              </span>

              {/* Heart button on top-right corner */}
              <button
                onClick={() => toggleLike(4)}
                className={`absolute top-2 left-2 p-2 rounded-full shadow-md z-10
                  ${
                    likedProducts[4]
                      ? "bg-white text-black"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
              >
                {likedProducts[4] ? <IoHeart /> : <IoHeartOutline />}
              </button>

              <span className="space- text-center mt-4 leading-7">
                <span className="tracking-widest uppercase">
                  EMBROIDERED KHADDAR UF-4235
                </span>
                <br />
                <strong>PKR 7,450.00</strong>
                <br />
                <span className="text-sm">SUMMER</span>
              </span>
            </div>



           



              {/* More products... */}





            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Stitched;