import React from 'react'
import './App.css';
import ImageCard from './ImageCard';
function ReadyToWear() {
  return (
    <>
  <div className="flex justify-center items-center mt-[4rem] mb-[4rem] letterSpacing">
    <div className="text-sm md:text-lg lg:text-xl xl:text-4xl ">
      READY TO WEAR
    </div>
  </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-[70px]">
  {/* Pehla ImageCard */}
  <div className="relative  img-hover-zoom">
    <ImageCard
      imgUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1765200141/3_tiq3u2.webp"
    />
    <button className="absolute bottom-[3rem] md:bottom-[5rem] left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 md:px-5 md:py-3 letterSpacing hover:bg-black hover:text-white hover:border transition text-sm md:text-base">
      VELVET
    </button>
  </div>

  {/* Doosra ImageCard */}
  <div className="relative  img-hover-zoom">
    <ImageCard
      imgUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1765200141/4_eizxog.webp"
      
    />
    <button className="absolute bottom-[3rem] md:bottom-[5rem] left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 md:px-5 md:py-3 letterSpacing hover:bg-black hover:text-white hover:border transition text-sm md:text-base">
      FORMALS
    </button>
  </div>

  {/* Teesra ImageCard */}
  <div className="relative  img-hover-zoom">
    <ImageCard
      imgUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1765200141/5_iurbuc.webp"
    />
    <button className="absolute bottom-[3rem] md:bottom-[5rem] left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 md:px-5 md:py-3 letterSpacing hover:bg-black hover:text-white hover:border transition text-sm md:text-base">
      WINTER
    </button>
  </div>
</div>
</>
  )
};

export default ReadyToWear;