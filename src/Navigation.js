import React from 'react';
import { useState } from 'react';

const Navigation = () => {
  const [showFirstCanvas, setShowFirstCanvas] = useState(false);
  const [showSecondCanvas, setShowSecondCanvas] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const handleCloseFirst = () => {
    setShowFirstCanvas(false);
    setShowSecondCanvas(false);
    setActiveMenu('');
  }

  const handleShowFirst = () => setShowFirstCanvas(true);

  const handleSecondCanvas = (menuType) => {
    setActiveMenu(menuType);
    setShowSecondCanvas(true);
  };

  const handleCloseSecond = () => {
    setShowSecondCanvas(false);
    setActiveMenu('');
  };

  return (
    <>
      {/* Original Navbar - Tailwind CSS Version */}

<nav className='h-12 mt-3'>
<div className="flex justify-between items-center">
<div>
 <div className="pl-12">
        <button onClick={handleShowFirst} className="">
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>
</div>
<div>
 <div className="pl-12 w-100 ml-12" >
        <a href="">
          <img 
            alt="BAROQUE Logo" 
            src="https://cdn.shopify.com/s/files/1/2277/5269/files/Baroque_logo_24-Aug-2023_200x60@2x.png?v=1692878661.webp" 
            className="h-10"
          />
        </a>
      </div>
</div>

<div>
 <div className="flex pr-12 space-x-6">
        <span className="flex items-center text-sm tracking-wide">
          PAKISTAN
          <i className="fa-solid fa-angle-down ml-1 text-xs"></i>
        </span>

        <i className="fa-solid fa-magnifying-glass text-xl cursor-pointer"></i>
        <i className="fa-solid fa-cart-shopping text-xl cursor-pointer"></i>
        <i className="fa-solid fa-user text-xl cursor-pointer"></i>
        <i className="fa-regular fa-heart text-xl cursor-pointer"></i>
      </div>
</div>
</div>


</nav>







      {/* Pehla Canvas - Fixed Content */}
      {showFirstCanvas && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={handleCloseFirst}
          ></div>
          
          {/* Canvas Content - FIXED POSITION */}
          <div 
            className="fixed top-0 left-0 h-full w-[400px] bg-white shadow-lg z-50"
            style={{ transform: 'none' }} // Ensure no transformation
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">CATEGORIES</h3>
              <button 
                onClick={handleCloseFirst}
                className="text-gray-500 hover:text-gray-700 text-3xl"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <nav className="flex flex-col">
                <button 
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas('CHANTELE')}
                >
                  <span className="font-semibold">CHANTELE</span>
                  <span className="text-gray-400">›</span>
                </button>
                
                <button 
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas('UNSTITCHED')}
                >
                  <span className="font-semibold">UNSTITCHED</span>
                  <span className="text-gray-400">›</span>
                </button>

                <button 
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas('STITCHED')}
                >
                  <span className="font-semibold">STITCHED</span>
                  <span className="text-gray-400">›</span>
                </button>

                <button 
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas('READY TO WEAR')}
                >
                  <span className="font-semibold">READY TO WEAR</span>
                  <span className="text-gray-400">›</span>
                </button>

                <button 
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas('ESSENTIALS')}
                >
                  <span className="font-semibold">ESSENTIALS</span>
                  <span className="text-gray-400">›</span>
                </button>

                <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                  <span className="font-semibold">SPECIAL PRICES</span>
                </button>

                <button className="py-3 w-full text-left hover:bg-gray-50 px-2 rounded">
                  <span className="font-semibold">SHAWLS</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Dusra Canvas - Second Level - FIXED POSITION */}
          {showSecondCanvas && (
            <div 
              className="fixed top-0 left-[400px] h-full w-[400px] bg-white shadow-lg z-[60]"
              style={{ transform: 'none' }} // Ensure no transformation
            >
              {/* Header - Cross/Back Icon Nahin Hai */}
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold">{activeMenu}</h3>
              </div>

              {/* Body */}
              <div className="p-4">
                <nav className="flex flex-col">
                  {activeMenu === 'CHANTELE' && (
                    <>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">UNSTITCHED</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">STITCHED</span>
                      </button>
                    </>
                  )}
                  {activeMenu === 'UNSTITCHED' && (
                    <>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">SHOP All</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">WINTER</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">FORMALS</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">VELVET</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">SUMMER</span>
                      </button>
                    </>
                  )}

                  {activeMenu === 'STITCHED' && (
                    <>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">SHOP All</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">WINTER</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">FORMALS</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">VELVET</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">SUMMER</span>
                      </button>
                    </>
                  )}

                  {activeMenu === 'READY TO WEAR' && (
                    <>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">SHOP All</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">WINTER</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">FORMALS</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">VELVET</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">SUMMER</span>
                      </button>
                    </>
                  )}

                  {activeMenu === 'ESSENTIALS' && (
                    <>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">ENSEMBELS</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">DUPPATAS</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">BOTTOMS</span>
                      </button>
                    </>
                  )}
                </nav>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navigation;