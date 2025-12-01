import React from 'react'
import './App.css'
import ImageCard from './ImageCard'
function OwnYourLook() {
  return (
   <>
    <div>

<div className="flex justify-center items-center mt-[3rem] mb-[3rem] letterSpacing">
  <div className="text-sm md:text-lg lg:text-xl xl:text-4xl">
    OWN YOUR NEW LOOK
  </div>
</div>


<div className="flex justify-center items-center divide gap-12 mb-[4rem] mx-[2rem] md:mx-[4rem] lg:mx-[6rem] xl:mx-[8rem]">

<ImageCard
imageUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1764606571/1_siikvo.webp"
className="w-[50%]"

/>

<ImageCard
imageUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1764607526/2_glhkcs.webp"
className="w-[50%]"

/>
</div>

    </div>


   
   
   
   
   </>
  );
}

export default OwnYourLook;