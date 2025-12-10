import React from 'react';
import { FiTruck } from "react-icons/fi";
import { TbTextResize } from "react-icons/tb";
import { TbExchange } from "react-icons/tb";
import { TbUserCancel } from "react-icons/tb";

const Newsletter = () => {
  return (
  <section class="w-full py-16 bg-white">
  <div class="max-w-3xl mx-auto text-center px-4">
    
    <h2 class="text-3xl tracking-widest font-semibold text-gray-900">
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
        class="w-full sm:w-auto bg-black text-white tracking-widest px-8 py-3 hover:bg-gray-800 transition">
        SUBSCRIBE
      </button>
    </form>
  </div>

  <div className="about grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-4 md:px-8 lg:px-16">
  
  {/* Free Shipping */}
  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
    <i className="bi bi-truck text-3xl md:text-4xl text-gray-800 mb-4 about"><FiTruck />
</i>
    <br />
    <strong className="text-lg md:text-xl font-bold text-gray-900 block mb-3">
      Free Shipping
    </strong>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      We provide free shipping all across <br className="hidden sm:block" /> 
      Pakistan on all of our orders
    </p>
  </div>

  {/* Custom Size */}
  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
    <i className="bi bi-bounding-box-circles text-3xl md:text-4xl text-gray-800 mb-4"><TbTextResize />
</i>
    <br />
    <strong className="text-lg md:text-xl font-bold text-gray-900 block mb-3">
      Custom Size
    </strong>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Get your outfit tailored to perfection as <br className="hidden sm:block" /> 
      per your desired measurements
    </p>
  </div>

  {/* ORDER EXCHANGE */}
  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
    <i className="bi bi-person-lines-fill text-3xl md:text-4xl text-gray-800 mb-4"><TbExchange />
</i>
    <br />
    <strong className="text-lg md:text-xl font-bold text-gray-900 block mb-3">
      ORDER EXCHANGE
    </strong>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      For a hassle free exchange service, fill out <br className="hidden sm:block" /> 
      the exchange form
    </p>
  </div>

  {/* ORDER CANCELLATION */}
  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
    <i className="bi bi-person-fill-slash text-3xl md:text-4xl text-gray-800 mb-4"><TbUserCancel />
</i>
    <br />
    <strong className="text-lg md:text-xl font-bold text-gray-900 block mb-3">
      ORDER CANCELLATION
    </strong>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      For a hassle free cancellation service, fill <br className="hidden sm:block" /> 
      out the cancellation form
    </p>
  </div>

</div>
</section>

  );
};

export default Newsletter;