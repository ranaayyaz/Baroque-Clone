import React from 'react';
import './App.css';
import MainFooter from './Footer/MainFooter';
import TopHeader from './Home-Page-Components/TopHeader';
import Navigation from './Home-Page-Components/Navigation';
import MainBanner from './Home-Page-Components/MainBanner';
import OwnYourLook from './Home-Page-Components/OwnYourLook';
import ReadyToWear from './Home-Page-Components/ReadyToWear';
import ChantelleCollection from './Home-Page-Components/ChantelleCollection';
import Essentials from './Home-Page-Components/Essentials';
import Newsletter from './Home-Page-Components/Newsletter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhoWeAre from './Footer/About/WhoWeAre';
import OurResponsibility from './Footer/About/OurResponsibility';
import ServiceWeProvide from './Footer/About/ServiceWeProvide';
import CareerS from './Footer/About/Careers';
import ContactUs from './Footer/CustomerService/ContactUs';
import DispatchTimeline from './Footer/CustomerService/DispatchTimeline';
import ExchangeInformation from './Footer/CustomerService/ExchangeInformation';
import Privacy from './Footer/Policies/Privacy';
import Refund from './Footer/Policies/Refund';
import Shipping from './Footer/Policies/Shipping';
import Terms from './Footer/Policies/Terms';
import Legal from './Footer/Policies/Legal';
import Stitched from './Collections/Stitched';  // ✅ CORRECT


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
          <Route path="/dispatch-timeline" element={<DispatchTimeline/>} />
          <Route path="/exchange-information" element={<ExchangeInformation/>} />
          <Route path="/privacy-policy" element={<Privacy/>} />
          <Route path="/refund-policy" element={<Refund/>} />
          <Route path="/shipping-policy" element={<Shipping/>} />
          <Route path="/terms-of-service" element={<Terms/>} />
          <Route path="/legal" element={<Legal/>} />
        </Routes>
      </div>
       <MainFooter />
    </Router>




  );
}

export default App;