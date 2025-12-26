import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const MainBanner = () => {
  // ✅ Yahan apna Cloudinary URL paste karein
  const cloudinaryImageUrl =
    "https://res.cloudinary.com/dlqzjthos/image/upload/v1766645486/MAin_BAnner34_zn50s6.webp";

  return (
    <>
      <div className="w-full banner">
        <img
          src={cloudinaryImageUrl}
          alt="Fashion Banner"
          className="w-full h-auto"
        />
      </div>
      <div>
        <Link
          to="/shop-all"
          className=" px-7 py-3 bg-white text-black border btn text-xl"
        >
          Shop Now
        </Link>
      </div>
    </>
  );
};

export default MainBanner;
