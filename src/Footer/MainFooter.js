import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaWhatsapp, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                <Link to="/dispatch-timeline">Dispatch Timeline</Link>
              </li>
              <li className="text-[#bdb5b5] hover:text-[#e8dada] cursor-pointer">
                <Link to="/exchange-information">Exchange Information</Link>
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
              <p className="font-bold text-[#bdb5b5] text-lg">PAKISTAN</p>
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
  );
};

export default MainFooter;