// src/OwnYourLook.js
import React from 'react';
import './App.css';
import ImageCard from './ImageCard';

function OwnYourLook() {
 

  return (
<>
  <div className="flex justify-center items-center mt-[3rem] mb-[3rem] letterSpacing">
    <div className="text-sm md:text-lg lg:text-xl xl:text-4xl ">
      OWN YOUR NEW LOOK
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-[70px]">
    <ImageCard
      imgUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1764607526/2_glhkcs.webp"
    />
    <ImageCard
      imgUrl="https://res.cloudinary.com/dlqzjthos/image/upload/v1764606571/1_siikvo.webp"
    />
  </div>
</>


      
        
        
      
    
  );
}

export default OwnYourLook;