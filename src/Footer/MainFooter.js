import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const MainFooter = () => {
  const [showCountryModal, setShowCountryModal] = useState(false);
  const navigate = useNavigate();

  const handleCountryClick = () => {
    setShowCountryModal(true);
  };

  const handleShopNow = () => {
    setShowCountryModal(false);
    navigate("/");
  };

  return (
    <>
      <footer className="bg-[#2f2f2f]">
        <div className="container mx-auto">
          {/* Main Sections */}
          <div className="flex flex-col lg:flex-row justify-between pt-10">
            {/* ABOUT SECTION */}
            <div className="w-full lg:w-3/12 md:w-6/12 mb-8 lg:ml-0 md:ml-0 ml-0 lg:px-4">
              <h5 className="font-bold text-lg mb-4 text-[#d9cfce]">ABOUT</h5>
              <ul className="space-y-2 mb-6">
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <Link to="/who-we-are">Who We Are</Link>
                </li>
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <Link to="/our-responsibility">Our Responsibility</Link>
                </li>
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <Link to="/service-we-provide">Service We Provide</Link>
                </li>
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <Link to="/careers">Careers</Link>
                </li>
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <Link to="/our-store">
                    Our Shop: First Floor, Dolmen Mall,
                    <br />
                    Shop No F-06, A Block DHA Phase 6,
                    <br />
                    Lahore
                  </Link>
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
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <Link to="/dispatch-timeline">Dispatch Timeline</Link>
                </li>
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <Link to="/exchange-information">Exchange Information</Link>
                </li>
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <a href="mailto:ayyazrana033@gmail.com">
                    Email: ayyazrana033@gmail.com
                  </a>{" "}
                </li>
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  Phone: +92 309 7613341
                </li>
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <a
                    href="https://wa.me/923097613341"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp: +92 309 7613341
                  </a>{" "}
                </li>
              </ul>
            </div>

            {/* POLICIES */}
            <div className="w-full lg:w-3/12 md:w-6/12 mb-8 lg:mr-0 md:mr-0 mr-0 lg:px-4">
              <h5 className="font-bold text-lg mb-4 text-[#d9cfce]">
                POLICIES
              </h5>
              <ul className="space-y-2">
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <Link to="/refund-policy">Refund Policy</Link>
                </li>
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <Link to="/shipping-policy">Shipping Policy</Link>
                </li>
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <Link to="/terms-of-service">Terms of Service</Link>
                </li>
                <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                  <Link to="/legal">Legal</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="container mx-auto px-4">
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

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-10 pb-8">
              <div className="mb-4 lg:mb-0 lg:w-3/12 text-center lg:text-left">
                <button
                  onClick={handleCountryClick}
                  className="text-[#bdb5b5] text-sm flex items-center justify-center lg:justify-start cursor-pointer hover:text-[#e8dada]"
                >
                  PAKISTAN
                  <MdOutlineKeyboardArrowDown className="ml-1 text-lg" />
                </button>
              </div>

              <div className="mb-4 lg:mb-0 lg:w-3/12">
                <p className="text-[#bdb5b5]">© 2025 – BAROQUE</p>
              </div>

              <div className="mb-4 lg:mb-0 lg:w-3/12">
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

      {/* ✅ Country Selection Modal */}
      {showCountryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5">
          <div className="bg-white shadow-xl max-w-md w-full mx-auto">
            {/* Modal Header */}
            <div className="px-5 pt-7">
              <h2 className="text-xl text-left letterSpacing">
                Are you in the right place?
              </h2>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              <p className="text-left mb-4">
                Please select your shipping country.
              </p>

              <p className="text-sm text-left mb-6">
                Buy from the country of your choice. Remember that we can only
                ship your order to addresses located in the chosen country.
              </p>

              {/* Country Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 font-sm mb-2">
                  Country
                </label>
                <select
                  className="w-full p-3 border-b border-black"
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
                onClick={handleShopNow}
                className="w-full bg-black text-white py-3 px-6 font-semibold hover:bg-transparent hover:text-black border border-black transition duration-200"
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

export default MainFooter;
