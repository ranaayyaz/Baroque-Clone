import React from 'react';
import './App.css';
import MainFooter from './Footer/MainFooter';
import TopHeader from './TopHeader';
import Navigation from './Navigation';
import MainBanner from './MainBanner';
import OwnYourLook from './OwnYourLook';
import ReadyToWear from './ReadyToWear';
import ChantelleCollection from './ChantelleCollection';
import Essentials from './Essentials';
import Newsletter from './Newsletter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhoWeAre from './Footer/About/WhoWeAre';
import OurResponsibility from './Footer/About/OurResponsibility';
import ServiceWeProvide from './Footer/About/ServiceWeProvide';
import CareerS from './Footer/About/Careers';
import ContactUs from './Footer/CustomerService/ContactUs';
function App() {
  return (
    
    <Router>
      <TopHeader />
      <Navigation />
     
      <div className="App">
       
        
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <MainBanner />
              <OwnYourLook />
              <ReadyToWear />
              <ChantelleCollection />
              <Essentials />
              <Newsletter />
              
            </>
          } />
          
          {/* Other Pages */}
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/our-responsibility" element={<OurResponsibility/>} />
          <Route path="/service-we-provide" element={<ServiceWeProvide/>} />
          <Route path="/careers" element={<CareerS/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/dispatch-timeline" element={<div>Dispatch Timeline Page</div>} />
          <Route path="/exchange-information" element={<div>Exchange Information Page</div>} />
          <Route path="/privacy-policy" element={<div>Privacy Policy Page</div>} />
          <Route path="/refund-policy" element={<div>Refund Policy Page</div>} />
          <Route path="/shipping-policy" element={<div>Shipping Policy Page</div>} />
          <Route path="/terms-of-service" element={<div>Terms of Service Page</div>} />
          <Route path="/legal" element={<div>Legal Page</div>} />
        </Routes>
      </div>
       <MainFooter />
    </Router>
  );
}

export default App;