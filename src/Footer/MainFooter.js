import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaWhatsapp, FaCcMastercard, FaCcVisa } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className="bg-[#2f2f2f] py-8">
      <div className="container mx-auto px-4">
        {/* Main Sections */}
        <div className="flex flex-col lg:flex-row justify-between pt-10">
          {/* ABOUT SECTION */}
          <div className="w-full lg:w-3/12 md:w-6/12 mb-8 lg:ml-0 md:ml-0 ml-0 lg:px-4">
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
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div className="w-full lg:w-3/12 md:w-6/12 mb-8 lg:mx-0 md:mx-0 mx-0 lg:px-4">
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

          {/* POLICIES */}
          <div className="w-full lg:w-3/12 md:w-6/12 mb-8 lg:mr-0 md:mr-0 mr-0 lg:px-4">
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

        {/* Social Icons - Centered on mobile */}
      <div className="">

  <div className="flex justify-center lg:justify-start lg:ml-0 mt-6">
          <div className="flex gap-6">
            <i className="text-[#d9cfce] text-xl hover:text-[#e8dada] cursor-pointer">
              <FaFacebookF />
            </i>
            <i className="text-[#d9cfce] text-xl hover:text-[#e8dada] cursor-pointer">
              <FaInstagram />
            </i>
            <i className="text-[#d9cfce] text-xl hover:text-[#e8dada] cursor-pointer">
              <FaYoutube />
            </i>
            <i className="text-[#d9cfce] text-xl hover:text-[#e8dada] cursor-pointer">
              <FaWhatsapp />
            </i>
            <i className="text-[#d9cfce] text-xl hover:text-[#e8dada] cursor-pointer">
              <FaTiktok />
            </i>
          </div>
        </div>

        {/* Bottom Section - Stack on mobile */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-10 pb-8  ">
          {/* PAKISTAN */}
          <div className="mb-4 lg:mb-0 lg:w-3/12 text-center lg:text-left">
            <p className="font-bold text-[#bdb5b5] text-lg">PAKISTAN</p>
          </div>
          
          {/* BAROQUE */}
          <div className="mb-4 lg:mb-0 lg:w-3/12 ">
            <p className="text-[#bdb5b5]">© 2025 – BAROQUE</p>
          </div>
          
          {/* Payment Icons */}
          <div className=" mb-4 lg:mb-0 lg:w-3/12 ">
            <div className="flex space-x-4">
              <i className="text-3xl text-white">
                <FaCcVisa />
              </i>
              <i className="text-3xl text-white">
                <FaCcMastercard />
              </i>
            </div>
          </div>
        </div>


      </div>
      </div>
    </footer>
  );
};

export default MainFooter;