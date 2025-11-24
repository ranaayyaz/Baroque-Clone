import React from "react";

const MainFooter = () => {
  return (
 <footer className="bg-[#2f2f2f] py-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text justify-between mb-8">
      {/* ABOUT SECTION - Left aligned */}
      <div className="w-full lg:w-3/12 md:w-6/12 mb-8 ">
        <h5 className="font-bold text-lg mb-4 text-[#d9cfce]">ABOUT</h5>
        <ul className="space-y-2 mb-6">
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Who We Are
          </li>
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Our Responsibility
          </li>
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Service We Provide
          </li>
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Careers
          </li>
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Our Shop: First Floor, Dolmen Mall,
            <br />
            Shop No F-06, A Block DHA Phase 6,
            <br />
            Lahore
          </li>
          <br></br><br></br>
          <li className="flex gap-4">
            <i className="fa-brands fa-facebook-f text-[#bdb5b5] text-xl hover:text-[#e8dada] cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-[#bdb5b5] text-xl hover:text-[#e8dada] cursor-pointer"></i>
            <i className="fa-brands fa-youtube text-[#bdb5b5] text-xl hover:text-[#e8dada] cursor-pointer"></i>
            <i className="fa-brands fa-whatsapp text-[#bdb5b5] text-xl hover:text-[#e8dada] cursor-pointer"></i>
            <i className="fa-brands fa-tiktok text-[#bdb5b5] text-xl hover:text-[#e8dada] cursor-pointer"></i>
          </li>
        </ul>
      </div>

      {/* CUSTOMER SERVICE - Middle */}
      <div className="w-full lg:w-3/12 md:w-6/12 mb-8">
        <h5 className="font-bold text-lg mb-4 text-[#d9cfce]">
          CUSTOMER SERVICE
        </h5>
        <ul className="space-y-2 mb-6">
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Contact Us
          </li>
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Dispatch Timeline
          </li>
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Exchange Information
          </li>
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Email: info@baroque.pk
          </li>
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            UAN 111-302-302
          </li>
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            WhatsApp: +92 309 7613341
          </li>
        </ul>
      </div>

      {/* POLICIES - Right aligned */}
      <div className="w-full lg:w-3/12 md:w-6/12 mb-8 ">
        <h5 className="font-bold text-lg mb-4 text-[#d9cfce]">POLICIES</h5>
        <ul className="space-y-2">
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Privacy Policy
          </li>
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Refund Policy
          </li>
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Shipping Policy
          </li>
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Terms of Service
          </li>
          <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
            Legal
          </li>
        </ul>
      </div>
    </div>

    {/* COPYRIGHT SECTION - 3 Equal Columns */}
    <div className="">
      <div className="flex flex-wrap justify-between">
        {/* PAKISTAN - About ke niche */}
        <div className="w-full lg:w-3/12 md:w-6/12 text-left">
          <p className="font-bold text-[#bdb5b5] text-lg">PAKISTAN</p>
        </div>
        
        {/* BAROQUE - Customer Service ke niche */}
        <div className="w-full lg:w-3/12 md:w-6/12 text-left">
          <p className="text-[#bdb5b5]">© 2025 – BAROQUE</p>
        </div>
        
        {/* Payment Icons - Policies ke niche */}
        <div className="w-full lg:w-3/12 md:w-6/12">
          <div className="flex  space-x-4 text-left">
            <i className="fa-brands fa-cc-visa text-3xl text-blue-600"></i>
            <i className="fa-brands fa-cc-mastercard text-3xl text-yellow-600"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
};

export default MainFooter;
