import React from "react";
import AboutContent from "../Component/AboutContent";
import Footer from "../Component/Footer";
import HeroImg2 from "../Component/HeroImg2";
import NavBar from "../Component/NavBar";
export default function About() {
  return (
    <>
      <NavBar />
      <HeroImg2 heading="ABOUTS." text="Lets have a chat" />
      <AboutContent />
      <Footer />
    </>
  );
}
