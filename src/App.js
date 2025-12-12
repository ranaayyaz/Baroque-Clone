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
import DispatchTimeline from './Footer/CustomerService/DispatchTimeline';
import ExchangeInformation from './Footer/CustomerService/ExchangeInformation';
import Privacy from './Footer/Policies/Privacy';
import Refund from './Footer/Policies/Refund';
import Shipping from './Footer/Policies/Shipping';
import Terms from './Footer/Policies/Terms';
import Legal from './Footer/Policies/Legal';

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