import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const MainBanner = () => {
  // ✅ Yahan apna Cloudinary URL paste karein
  const cloudinaryImageUrl =
    "https://res.cloudinary.com/dlqzjthos/image/upload/v1766645486/MAin_BAnner34_zn50s6.webp";

  return (
    <div className="relative w-full banner">
      <img
        src={cloudinaryImageUrl}
        alt="Fashion Banner"
        className="w-full h-auto"
      />
      <Link
        to="/shop-all"
        className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-10 px-5 py-2 sm:px-7 sm:py-3 bg-white text-black border border-black text-sm sm:text-xl tracking-wide hover:bg-transparent hover:text-white hover:border-white transition"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default MainBanner;
