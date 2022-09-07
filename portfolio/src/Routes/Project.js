import React from "react";
import Footer from "../Component/Footer";
import HeroImg2 from "../Component/HeroImg2";
import NavBar from "../Component/NavBar";
import Pricing from "../Component/Pricing";
import Work from "../Component/Work";

export default function Project() {
  return (
    <>
      <NavBar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent work" />
      <Work />
      <Pricing />
      <Footer />
    </>
  );
}
