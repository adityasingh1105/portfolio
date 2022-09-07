import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./FotterStyle.css";

export default function Footer() {
  
  return (
    <>
      <div className="footer">
        <div className="footercontainer">
          <div className="left">
            <div className="location">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <div>
                <p>829, Shatnti Nagar</p>
                <p>India</p>
              </div>
            </div>
    
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              9144774111
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              adis@gmail.com
            </h4>
          </div>      </div>
          <div className="right">
            <h4>About</h4>
            <p>
              This is Aditya Singh Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
            <div className="social">
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
