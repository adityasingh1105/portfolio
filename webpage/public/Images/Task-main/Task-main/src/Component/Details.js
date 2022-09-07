import React from "react";
import HOME from "./images/HOME.jpeg";
import MYCART from "./images/MY CART.jpeg";
import DOWNLOADAPP from "./images/DOWNLOAD APP.jpeg";
import CATEGORY from "./images/CATEGORY.jpg";
import "./style.css";

export default function Details() {
  return (
    <>
      <div className="foot-container">
        <div className="foot-content">
          <div className="f-logo f-about">
            <div>
              <h2>Shop for your online store on raulson</h2>
              <p>Har vyavsay ka sathi</p>
            </div>

            <div>
              <p>Trusted by more than 10000 store</p>
            </div>
            <p>Cash on Delivery | Free Delivery</p>
            <p>
            <a className="btn btn-google" href="/#" title="Google Play" >
                {/* style={{ "width": "300px"}} */}
              Google Play
            </a>
            <a className="btn btn-apple" href="/#" title="Google Play">
              App Store
            </a></p>
          </div> 
          <div className="fi-about">
            <div
              className="fi-h-about"style={{"margin-top" : "60px", "margin-left": "150px"}} 
          
            >
              <h4>Reach Out to us</h4>
            </div>

            <a href="/#">
              <i
                className="fa-brands fa-facebook"
                style={{ "margin-left": "140px"}} 
                //style="margin-left: 140px;"
              ></i>
              &ensp;
            </a>
            <a href="/#">
              <i
                className="fa-brands fa-youtube"style={{ "margin-left": "20px"}} 
                //style="margin-left: 20px;"
              ></i>
              &ensp;
            </a>
            <a href="/#">
              <i
                className="fa-brands fa-instagram"style={{ "margin-left": "20px"}} 
                //style="margin-left: 20px;"
              ></i>
              &ensp;
            </a>
            <a href="/#">
              <i
                className="fa-brands fa-twitter"style={{ "margin-left": "20px"}} 
                //style="margin-left: 20px;"
              ></i>
              &ensp;
            </a>
          </div>
          <div>
            <img src={HOME} alt="Paris" />
            <img src={CATEGORY}alt="Paris" />
            <img src={MYCART} alt="Paris" />
            <img src={DOWNLOADAPP} alt="Paris" />
          </div>
        </div>
      </div>
    </>
  );
}
