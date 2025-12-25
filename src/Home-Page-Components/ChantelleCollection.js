import React from "react";
import "../App.css";
import ImageCard from "../ImageCard";
import { Link } from "react-router-dom";
function ChantelleCollection() {
  return (
    <>
      <div className="flex justify-center items-center mt-[4rem] mb-[4rem] letterSpacing">
        <div className="text-sm md:text-lg lg:text-xl xl:text-4xl ">
          CHANTELLE COLLECTION
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-[70px] relative">
        {/* Pehla ImageCard */}
        <div className="relative  img-hover-zoom">
          <ImageCard imgUrl=" https://res.cloudinary.com/dlqzjthos/image/upload/v1766647025/qw_uvqqko.webp" />
          <Link
            to="/chantelle/stitched"
            className="absolute bottom-[5rem] left-1/2  -translate-x-1/2 bg-white text-black px-5 py-3 letterSpacing  hover:bg-black hover:text-white border border-white transition"
          >
            STITCHED
          </Link>
        </div>

        {/* Doosra ImageCard */}
        <div className="relative  img-hover-zoom">
          <ImageCard imgUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1766647068/sd_gsjkds.webp" />
          <Link
            to="/chantelle/unstitched"
            className="absolute bottom-[5rem] left-1/2  -translate-x-1/2 bg-white text-black px-5 py-3 letterSpacing  hover:bg-black hover:text-white border border-white transition"
          >
            UNSTITCHED
          </Link>
        </div>
      </div>
    </>
  );
}

export default ChantelleCollection;
