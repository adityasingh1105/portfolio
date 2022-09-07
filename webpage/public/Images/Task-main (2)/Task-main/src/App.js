import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ContactUs from "./Component/ContactUs";
import AboutUs from "./Component/AboutUs";
import TopNav from "./Component/TopNav";
import Category from "./Component/Category";
import Payment from "./Component/Payment";
import Footer from "./Component/Footer";
import Banner from "./Component/Banner";

import Shipping from "./Component/Shipping";
import Cancel from "./Component/Cancel";
import "./App.css";
import Faq from "./Component/Faq";
import Return from "./Component/Return";
function App() {
  return (
    <>
      <div>
      <TopNav />
        <Category />
        
        

        <BrowserRouter>
          <Routes>   <Route exact path="/" element ={<Banner /> }/>
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route exact path="/payment" element={<Payment />} />
            <Route exact path="/shipping" element={<Shipping />} />
            <Route exact path="/cancel" element={<Cancel />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/return" element={<Return />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
