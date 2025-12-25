import "./App.css";
import MainFooter from "./Footer/MainFooter";
import TopHeader from "./Home-Page-Components/TopHeader";
import Navigation from "./Home-Page-Components/Navigation";
import MainBanner from "./Home-Page-Components/MainBanner";
import OwnYourLook from "./Home-Page-Components/OwnYourLook";
import ReadyToWear from "./Home-Page-Components/ReadyToWear";
import ChantelleCollection from "./Home-Page-Components/ChantelleCollection";
import Essentials from "./Home-Page-Components/Essentials";
import Newsletter from "./Home-Page-Components/Newsletter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhoWeAre from "./Footer/About/WhoWeAre";
import OurResponsibility from "./Footer/About/OurResponsibility";
import ServiceWeProvide from "./Footer/About/ServiceWeProvide";
import CareerS from "./Footer/About/Careers";
import ContactUs from "./Footer/CustomerService/ContactUs";
import DispatchTimeline from "./Footer/CustomerService/DispatchTimeline";
import ExchangeInformation from "./Footer/CustomerService/ExchangeInformation";
import Privacy from "./Footer/Policies/Privacy";
import Refund from "./Footer/Policies/Refund";
import Shipping from "./Footer/Policies/Shipping";
import Terms from "./Footer/Policies/Terms";
import Legal from "./Footer/Policies/Legal";
import CollectionCategory from "./Collections/CollectionCategory";
import ProductDetail from "./Collections/ProductDetail";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Dashboard from "./Admin/Dashboard";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/*"
          element={
            <>
              <TopHeader />
              <Navigation />

              <Routes>
                {/* Home Page Route */}
                <Route
                  path="/"
                  element={
                    <>
                      <MainBanner />
                      <OwnYourLook />
                      <ReadyToWear />
                      <ChantelleCollection />
                      <Essentials />
                      <Newsletter />
                    </>
                  }
                />

                <Route path="/who-we-are" element={<WhoWeAre />} />
                <Route
                  path="/our-responsibility"
                  element={<OurResponsibility />}
                />
                <Route
                  path="/service-we-provide"
                  element={<ServiceWeProvide />}
                />
                <Route path="/careers" element={<CareerS />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route
                  path="/dispatch-timeline"
                  element={<DispatchTimeline />}
                />
                <Route
                  path="/exchange-information"
                  element={<ExchangeInformation />}
                />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/refund-policy" element={<Refund />} />
                <Route path="/shipping-policy" element={<Shipping />} />
                <Route path="/terms-of-service" element={<Terms />} />
                <Route path="/legal" element={<Legal />} />

                {/* Product Collections Routes */}

                <Route
                  path="/stitched"
                  element={<CollectionCategory category="stitched" />}
                />
                <Route
                  path="/stitched/formal"
                  element={<CollectionCategory category="stitchedFormal" />}
                />
                <Route
                  path="/stitched/casual"
                  element={<CollectionCategory category="stitchedCasual" />}
                />
                <Route
                  path="/stitched/partywear"
                  element={<CollectionCategory category="stitchedPartywear" />}
                />
                <Route
                  path="/stitched/winter"
                  element={<CollectionCategory category="stitchedWinter" />}
                />

                <Route
                  path="/unstitched"
                  element={<CollectionCategory category="unstitched" />}
                />
                <Route
                  path="/unstitched/formal"
                  element={<CollectionCategory category="unstitchedFormal" />}
                />

                <Route
                  path="/unstitched/casual"
                  element={<CollectionCategory category="unstitchedCasual" />}
                />

                <Route
                  path="/unstitched/partywear"
                  element={
                    <CollectionCategory category="unstitchedPartywear" />
                  }
                />

                <Route
                  path="/unstitched/winter"
                  element={<CollectionCategory category="unstitchedWinter" />}
                />

                <Route
                  path="/ready-to-wear/formal"
                  element={<CollectionCategory category="readytowearformal" />}
                />
                <Route
                  path="/ready-to-wear/casual"
                  element={<CollectionCategory category="readytowearcasual" />}
                />
                <Route
                  path="/ready-to-wear/partywear"
                  element={
                    <CollectionCategory category="readytowearpartywear" />
                  }
                />
                <Route
                  path="/ready-to-wear/winter"
                  element={<CollectionCategory category="readytowearwinter" />}
                />

                {/* Chantelle Collection */}
                <Route
                  path="/chantelle/stitched"
                  element={<CollectionCategory category="chantellestitched" />}
                />
                <Route
                  path="/chantelle/unstitched"
                  element={
                    <CollectionCategory category="chantelleunstitched" />
                  }
                />

                {/* Essentials */}
                <Route
                  path="/essentials/ensembles"
                  element={
                    <CollectionCategory category="essentialsensembles" />
                  }
                />
                <Route
                  path="/essentials/shawls"
                  element={<CollectionCategory category="essentialsshawls" />}
                />
                <Route
                  path="/essentials/dupattas"
                  element={<CollectionCategory category="essentialsdupattas" />}
                />

                {/* Single Product Detail */}
                <Route path="/product/:id" element={<ProductDetail /> } />
              </Routes>

              <MainFooter />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
