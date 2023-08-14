import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavImage from "./components/NavImage";
import Nav from "./components/Nav";
import Commercial from "./components/Commercial";
import Footer from "./components/Footer";
import Title1 from "./components/Title1";
import Info from "./components/Info";
import ProductSlider from "./components/ProductSlider";
import Info2 from "./components/Info2";
import Ik from "./components/Ik";
import Shop from "./components/Shop";
import Online from "./components/Online";
import News from "./components/News";
import SmartStop from "./components/solutions/SmartStop";
import SmartCity from "./components/solutions/SmartCity";
import Videowall from "./components/solutions/Videowall";
import ElectronicPayment from "./components/solutions/ElectronicPayment";
import Simulator from "./components/solutions/Simulator";
import Security from "./components/solutions/Security";
import MobileHospital from "./components/solutions/MobileHospital";
import Datacenter from "./components/solutions/Datacenter";
import Communication from "./components/support/Communication";
import DeliveryAndReturn from "./components/support/DeliveryAndReturn";
import SalesContract from "./components/support/SalesContract";
import SecurityPolicy from "./components/support/SecurityPolicy";

import Intern from "./components/Intern";
import Hiring from "./components/Hiring";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollToTopOnPageChange />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/human-sources" element={<Ik />} />
        <Route path="/news" element={<News />} />
        <Route path="/online" element={<Online />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="smart-stop" element={<SmartStop />} />
        <Route path="smart-city" element={<SmartCity />} />
        <Route path="videowall" element={<Videowall />} />
        <Route path="electronic-payment" element={<ElectronicPayment />} />
        <Route path="simulator" element={<Simulator />} />
        <Route path="security" element={<Security />} />
        <Route path="mobile-hospital" element={<MobileHospital />} />
        <Route path="datacenter" element={<Datacenter />} />
        <Route path="communication" element={<Communication />} />
        <Route path="delivery-and-return" element={<DeliveryAndReturn />} />
        <Route path="sales-contract" element={<SalesContract />} />
        <Route path="security-policy" element={<SecurityPolicy />} />
        <Route path="intern" element={<Intern />} />
        <Route path="hiring" element={<Hiring />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function MainPage() {
  return (
    <>
      <Title1 />
      <ProductSlider />
      <NavImage />
      <Info />
      <Info2 />
      <Commercial />
    </>
  );
}

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
