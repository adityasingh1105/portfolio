import React from "react";
import Footer from "../Component/Footer";
import Form from "../Component/Form";
import HeroImg2 from "../Component/HeroImg2";
import NavBar from "../Component/NavBar";

export default function Contact() {
  return (
    <><div>
  
      <NavBar />
      <HeroImg2 heading="CONTACT." text="Im a freindly Front-End Developer"/>
      <Form/>
      <Footer />
   </div>
    </>
  );
}
