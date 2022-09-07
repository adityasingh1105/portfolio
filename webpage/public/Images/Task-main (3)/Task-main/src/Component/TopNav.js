import React from "react";
import "./style.css";
import profileuser from "./images/profile-user.png";
export default function topNav() {
  return (
    <>
      {" "}
      <div>
        <div className="nav">
          <div className="logo"></div>
          <div className="disp-logo">
            <div className="null"></div>
            <div className="logo-txt">RAULSON</div>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search Mobiles, Fashion, Medicines and more..."
            />
            <span className="src-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
          <div className="sell">
            <a  href="/#">
              <div className="become-seller">
                <div id="sell-icon">
                  <i className="fa-solid fa-users"></i>
                </div>
                <div id="sell-text">Become a Seller</div>
              </div>
            </a>
          </div>
          <div className="login">
            <img src={profileuser} alt="" />
            <h6>Login</h6>
          </div>
          <div>
            <a className="e-btn e-link sf-icon-telephone" href="tel:180000000">
              <span>&#9742;</span>
            </a>
          </div>
          <div className="cartreturn">
            <div className="cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>            <div id="searchln"><input type="text" placeholder="search" /></div>
    </>
  );
}
