// src/OwnYourLook.js
import React from "react";
import "../App.css";
import ImageCard from "../ImageCard";
import { Link } from "react-router-dom";

function OwnYourLook() {
  return (
    <>
      <div className="flex justify-center items-center mt-[4rem] mb-[4rem] letterSpacing">
        <div className="text-sm md:text-lg lg:text-xl xl:text-4xl ">
          OWN YOUR NEW LOOK
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-[70px] relative">
        {/* Pehla ImageCard */}
        <div className="relative  img-hover-zoom">
          <ImageCard imgUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1766646789/76_b6020562-2bf5-4210-9b23-6043ae5e6bc6_hjxhbg.webp" />
          <Link
            to="/stitched"
            className="absolute bottom-[5rem] left-1/2  -translate-x-1/2 bg-white text-black px-5 py-3 letterSpacing border border-black  hover:bg-black hover:text-white  transition"
          >
            STITCHED
          </Link>
        </div>

        {/* Doosra ImageCard */}
        <div className="relative  img-hover-zoom">
          <ImageCard imgUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1766646846/33_kov8ct.webp" />
          <Link
            to="unstitched"
            className="absolute bottom-[5rem] left-1/2  -translate-x-1/2 bg-white text-black px-5 py-3 letterSpacing border border-black hover:bg-black hover:text-white  transition"
          >
            UNSTITCHED
          </Link>
        </div>
      </div>
    </>
  );
}

export default OwnYourLook;
