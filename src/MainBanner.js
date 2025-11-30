import React from 'react';
import './App.css';

const MainBanner = () => {
  // ✅ Yahan apna Cloudinary URL paste karein
  const cloudinaryImageUrl = "https://res.cloudinary.com/dlqzjthos/image/upload/v1764428591/MAin_BAnner25_d116e29e-2634-48a0-80c7-32dc7fb7d04f_iwqaea.webp";

  return (
    <div className="w-full banner">
      <img 
        src={cloudinaryImageUrl} 
        alt="Fashion Banner"
        className="w-full h-auto"
      />
    </div>
  );
};

export default MainBanner;