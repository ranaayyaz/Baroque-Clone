import React from 'react';

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
</section>

  );
};

export default Newsletter;