import React from 'react'
import NavBar from '../Component/NavBar'
import HeroImg from '../Component/HeroImg'
import Footer from '../Component/Footer';
import Work from "../Component/Work";


export default function Home() {
  return (
  <>
   <div>
   <NavBar/>
  
    <HeroImg/>
    <Work />
    <Footer/>
   </div>
  </>

  )
}
