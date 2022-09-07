import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/Logo.png";

// import { BrowserRouter, Route, Routes ,Link } from "react-router-dom";
// import About from "./About";
// import Home from "./Home";
// import AboutUs from "./AboutUs";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="f-logo f-about">
            <a href="/#">
              <img src={Logo} alt="" />
            </a>
            <div>Raulson</div>
            <div>Har Vyavsay ka sathi</div>
          </div>
          <div className="f-about">
            <div className="f-h-about">
              <Link to="/aboutus">About</Link>
            </div>
            <Link to="/contactus">contact us</Link>
            <Link to="/aboutus">about us</Link>
            <a href="/#">Stories</a>
            <div style={{ color: "transparent" }}>dummy</div>
          </div>
          <div className="f-about">
            <div className="f-h-about">
              <a href="/#">Help</a>
            </div>
            <Link to="/payment">Payment</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/cancel">Cancellation & Return</Link>
            <Link to="/faq">FAQ</Link>
          
      
          
          </div>
          <div className="f-about">
            <div className="f-h-about">
              <a href="/#">Social</a>
            </div>
            <a href="/#">
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
            <a href="/#">
              <i className="fa-brands fa-square-twitter"></i> Twitter
            </a>
            <a href="/#">
              <i className="fa-brands fa-square-youtube"></i> YouTube
            </a>
            <a href="/#">
              <i className="fa-brands fa-square-facebook"></i> Facebook
            </a>
          </div>
          <div className="f-about">
            <div className="f-h-about">
              <a href="/#">Policy</a>
            </div>
            <Link to="/return">Return Policy</Link>
            <a href="/#">Undelivered Shipping Policy</a>
            <a href="/#">Warehouse Return Policy</a>
            <a href="/#">Product Listing Policy</a>
          </div>
          <div className="f-about">
            <div className="f-h-about">
              <a href="/#">Terms of use</a>
            </div>
            <a href="/#">Privacy Policy</a>
            <a href="/#">Infringment policy</a>
            <a href="/#">Anti Counterfeiting Policy</a>
            <div style={{ color: "transparent" }}>dummy</div>
          </div>
        </div>
        <div className="f-bottom">
          <p>Copyright &copy; 2022 Raulson. All Right Reserved. </p>
        </div>
      </div>
      
    </>
  );
}
