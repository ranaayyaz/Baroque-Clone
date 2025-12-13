import React from 'react';
import { FiTruck } from "react-icons/fi";
import { TbTextResize } from "react-icons/tb";
import { TbExchange } from "react-icons/tb";
import { TbUserCancel } from "react-icons/tb";

const Newsletter = () => {
  return (
  <section class="w-full py-16 bg-white">
  <div class="max-w-3xl mx-auto text-center px-4">
    
    <h2 class="text-3xl tracking-widest font-semibold text-gray-900 mt-12">
      NEWSLETTER
    </h2>
<br/>
    <p class="mt-4 text-gray-600">
      Sign up to get notified and Get 
      <span class="font-semibold"> 5 % OFF</span>
      when you subscribe to our newsletter.
    </p>

    <form class="mt-8 flex flex-col sm:flex-row items-center gap-4">
      <input 
        type="email"
        placeholder="E-mail"
        class=" sm:flex-1 border border-gray-300 px-4 py-3"
      /><br/>

      <button 
        type="submit"
        class="w-full sm:w-auto bg-black text-white tracking-widest trans px-8 py-3 hover:bg-gray-800 transition">
        SUBSCRIBE
      </button>
    </form>
  </div>
<div className="w-full py-16 bg-white">
  <div
    className="
      w-full 
      grid 
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-8
      text-center 
      px-4 
      max-w-[1600px] 
      mx-auto
    "
  >

    {/* Free Shipping */}
    <div className="p-6 flex flex-col items-center">
      <div className="text-4xl text-gray-900 mb-4">
        <FiTruck />
      </div>
      <h3 className="text-lg font-semibold tracking-wider">Free Shipping</h3>
      <p className="text-gray-600 mt-3 leading-relaxed text-sm">
        We provide free shipping all across <br /> Pakistan on all of our orders
      </p>
    </div>

    {/* Custom Size */}
    <div className="p-6 flex flex-col items-center">
      <div className="text-4xl text-gray-900 mb-4">
        <TbTextResize />
      </div>
      <h3 className="text-lg font-semibold tracking-wider">Custom Size</h3>
      <p className="text-gray-600 mt-3 leading-relaxed text-sm">
        Get your outfit tailored to perfection as <br /> per your desired measurements
      </p>
    </div>

    {/* ORDER EXCHANGE */}
    <div className="p-6 flex flex-col items-center">
      <div className="text-4xl text-gray-900 mb-4">
        <TbExchange />
      </div>
      <h3 className="text-lg font-semibold tracking-wider">ORDER EXCHANGE</h3>
      <p className="text-gray-600 mt-3 leading-relaxed text-sm">
        For a hassle free exchange service, fill out <br /> the exchange form
      </p>
    </div>

    {/* ORDER CANCELLATION */}
    <div className="p-6 flex flex-col items-center">
      <div className="text-4xl text-gray-900 mb-4">
        <TbUserCancel />
      </div>
      <h3 className="text-lg font-semibold tracking-wider">ORDER CANCELLATION</h3>
      <p className="text-gray-600 mt-3 leading-relaxed text-sm">
        For a hassle free cancellation service, fill out <br /> the cancellation form
      </p>
    </div>

  </div>
</div>


</section>

  );
};

export default Newsletter;