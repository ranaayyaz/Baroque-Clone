import React from 'react';
import { useState } from 'react';
import './App.css';

const Navigation = () => {
  const [showFirstCanvas, setShowFirstCanvas] = useState(false);
  const [showSecondCanvas, setShowSecondCanvas] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [showCountryModal, setShowCountryModal] = useState(false); // ✅ New state for country modal

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

  // ✅ Country Modal handlers
  const handleCountryClick = () => {
    setShowCountryModal(true);
  };

  const handleCloseCountryModal = () => {
    setShowCountryModal(false);
  };

  return (
    <>
      {/* Original Navbar - Tailwind CSS Version */}
      <nav className='h-12 mt-3   navbar'>
        <div className="flex justify-between items-center">
          <div>
            <div className="pl-12">
              <button onClick={handleShowFirst} className="">
                <i className="fa-solid fa-bars text-3xl "></i>
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
              {/* ✅ Pakistan text aur angle down pe click handler add kiya */}
              <span 
                className="flex items-center text-sm tracking-wide cursor-pointer"
                onClick={handleCountryClick}
              >
                PAKISTAN
                <i 
                  className="fa-solid fa-angle-down ml-1 text-xs cursor-pointer"
                  onClick={handleCountryClick}
                ></i>
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
            style={{ transform: 'none' }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 ">
              <h3 className="text-lg"></h3>
              <button 
                onClick={handleCloseFirst}
                className="text-gray-500 hover:text-gray-700 text-4xl"
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
                  <span className="py-2">CHANTELE</span>
                  <span className="text-gray-400 py-2"><i class="fa-solid fa-angle-right"></i></span>
                </button>
                
                <button 
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas('UNSTITCHED')}
                >
                  <span className=" py-2">UNSTITCHED</span>
                  <span className="text-gray-400 py-2"><i class="fa-solid fa-angle-right"></i></span>
                </button>

                <button 
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas('STITCHED')}
                >
                  <span className=" py-2">STITCHED</span>
                  <span className="text-gray-400 py-2"><i class="fa-solid fa-angle-right"></i></span>
                </button>

                <button 
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas('READY TO WEAR')}
                >
                  <span className=" py-2">READY TO WEAR</span>
                  <span className="text-gray-400 py-2"><i class="fa-solid fa-angle-right"></i></span>
                </button>

                <button 
                  className="py-3 border-b flex justify-between items-center w-full text-left hover:bg-gray-50 px-2 rounded"
                  onClick={() => handleSecondCanvas('ESSENTIALS')}
                >
                  <span className=" py-2">ESSENTIALS</span>
                  <span className="text-gray-400 py-2"><i class="fa-solid fa-angle-right"></i></span>
                </button>

                <button className="py-4 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                  <span className="font-semibold text-red-600 py-4" >SPECIAL PRICES</span>
                </button>

                <button className="py-4 w-full text-left hover:bg-gray-50 px-2 rounded">
                  <span className="py-2">SHAWLS</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Dusra Canvas - Second Level - FIXED POSITION */}
          {showSecondCanvas && (
            <div 
              className="fixed top-0 left-[400px] h-full w-[400px] bg-white shadow-lg z-[60]"
              style={{ transform: 'none' }}
            >
              {/* Header - Cross/Back Icon Nahin Hai */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{activeMenu}</h3>
              </div>

              {/* Body */}
              <div className="p-4">
                <nav className="flex flex-col">
                  {activeMenu === 'CHANTELE' && (
                    <>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="py-2">UNSTITCHED</span>
                      </button>
                      <button className="py-3 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="py-7">STITCHED</span>
                      </button>
                    </>
                  )}
                    {activeMenu === 'UNSTITCHED' && (
                    <>
                      <button className="py-6 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">SHOP All</span>
                      </button>
                      <button className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">WINTER</span>
                      </button>
                      <button className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">FORMALS</span>
                      </button>
                      <button className="py-5 border-b w-full text-left hover:bg-gray-50 px-2 rounded">
                        <span className="">VELVET</span>
                      </button>
                      <button className="py-5  w-full text-left hover:bg-gray-50 px-2 rounded">
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
                  {/* ... rest of your existing canvas code ... */}
                </nav>
              </div>
            </div>
          )}
        </div>
      )}





 {/* ✅ Country Selection Modal */}
      {showCountryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                Are you in the right place?
              </h2>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-600 text-center mb-4">
                Please select your shipping country.
              </p>
              
              <p className="text-gray-500 text-sm text-center mb-6">
                Buy from the country of your choice. Remember that we can only ship your order to addresses located in the chosen country.
              </p>

              {/* Country Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-3">
                  Country
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue="Pakistan"
                >
                  <option value="Pakistan">Pakistan</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="UAE">UAE</option>
                </select>
              </div>

              {/* Shop Now Button */}
              <button 
                onClick={handleCloseCountryModal}
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition duration-200"
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Navigation;