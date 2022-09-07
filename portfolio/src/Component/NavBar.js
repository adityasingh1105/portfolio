import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
export default function NavBar() {
  const [humburgerclick, sethumburgerclick] = useState(false);
  const handleClick = () => sethumburgerclick(!humburgerclick);
  const [color, setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll",changeColor)
  return (
    <div className={color?"header header-bg": "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={humburgerclick ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li><li>
          <Link to="/project">Project</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {humburgerclick ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
}
