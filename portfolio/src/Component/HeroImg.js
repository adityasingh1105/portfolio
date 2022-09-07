import React from "react";
import "./HeroImg.css";
import Intro from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

export default function HeroImg() {
  return (
    <>
      <div className="hero">
        <div className="mask">
          <img className="intoimg" src={Intro} alt="..." />
        </div>
        <div className="content">
          <p>Hi</p>
          <h1>React Developer</h1>
          <div>
            <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
            Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
