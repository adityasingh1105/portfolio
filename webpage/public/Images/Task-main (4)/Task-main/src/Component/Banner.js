import React from 'react'
import shoes from "./images/shoes.jpg";
import girl from "./images/girl.jpg";
import iphone from "./images/iphone.png";
import Clothes from "./images/Clothes.jpg";
import ecommerce from "./images/ecommerce.png";
import man from "./images/man.jpg";
import TeddyImage from "./images/Teddy Image.jpg";
import SectioDemo from "./SectioDemo";
import BusinessGallery from "./BusinessGallery"


import Details from "./Details";
import OurProduct from "./OurProduct";
import CompanyInfo from "./CompanyInfo";

import TopBrands from "./TopBrands";

export default function Banner() {
  return (
    <><div className="banner">
               <div className="banner-content">
                  <div className="banner-left">
                     <div className="slider">
                        <div className="wrapper">
                           <div className="box">                              
                              <div className="scroll">
                                 
                              <marquee width="60%" direction="up" height="200px" scrollamount="5">
                              <img src={shoes}      width="100%" height="auto"          alt='..'  />
                              <img src={girl}         width="100%" height="auto"        alt='..'   />
                              <img src={iphone}    width="100%" height="auto"           alt='..'  />
                              <img src={Clothes}            width="100%" height="auto"  alt='..'     />
                              <img src={TeddyImage}    width="100%" height="auto"       alt='..'  />
</marquee>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="banner-mid">
                     <div className="banner-txt">India's largest E-commerce platform</div>
                     <div className="larg-ecom-img">
                        <img src={ecommerce} alt="India's largest e-commerce platform" />
                     </div>
                  </div>
                  <div className="banner-right">
                     <img src={man} alt="standing man" />
                  </div>
               </div>
            </div>
            <SectioDemo/>
            
         
  <BusinessGallery />
        <TopBrands />
        <OurProduct />
        <CompanyInfo />
        <Details /> 
    </>
  )
}


// <ul>
//                                     <li><img src={shoes}/></li>
//                                     <li><img src={girl}/></li>
//                                     <li><img src={iphone}/></li>
//                                     <li><img src={Clothes}/></li>
//                                     <li><img src={TeddyImage}/></li>
//                                   </ul>