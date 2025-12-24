import React from "react";
import "../App.css";
import ImageCard from "../ImageCard";
import { Link } from "react-router-dom";
function Essentials() {
  return (
    <>
      <div className="flex justify-center items-center mt-[4rem] mb-[4rem] letterSpacing">
        <div className="text-sm md:text-lg lg:text-xl xl:text-4xl ">
          ESSENTIALS
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-[70px]">
        {/* Pehla ImageCard */}
        <div className="relative  img-hover-zoom">
          <ImageCard imgUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1765201752/8_afwuqi.webp" />
          <Link
            to="/essentials/ensembles"
            className="absolute bottom-[3rem] md:bottom-[5rem] left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 md:px-5 md:py-3 letterSpacing hover:bg-black hover:text-white border border-white transition text-sm md:text-base"
          >
            ENSEMBLES
          </Link>
        </div>

        {/* Doosra ImageCard */}
        <div className="relative  img-hover-zoom">
          <ImageCard imgUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1765201753/9_loocrc.webp" />
          <Link
            to="/essentials/shawls"
            className="absolute bottom-[3rem] md:bottom-[5rem] left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 md:px-5 md:py-3 letterSpacing hover:bg-black hover:text-white border border-white transition text-sm md:text-base"
          >
            SHAWLS
          </Link>
        </div>

        {/* Teesra ImageCard */}
        <div className="relative  img-hover-zoom">
          <ImageCard imgUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1765201752/10_et3hzq.webp" />
          <Link
            to="/essentials/dupattas"
            className="absolute bottom-[3rem] md:bottom-[5rem] left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 md:px-5 md:py-3 letterSpacing hover:bg-black hover:text-white border border-white transition text-sm md:text-base"
          >
            DUPATTAS
          </Link>
        </div>
      </div>
    </>
  );
}

export default Essentials;
