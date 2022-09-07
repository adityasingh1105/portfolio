import React from 'react'
import Logo from "./images/Logo.png";
import SpecialInitiatives from "./images/Special Initiatives.gif";
import EmpowerManufacturerTraders from "./images/Empower Manufacturer Traders.gif";
import ShopthroughMobile from "./images/Shop through Mobile.gif";
import bestprice from "./images/best price.gif";
import SimpleReturn from "./images/Simple Return.gif";
export default function CompanyInfo() {
  return (
<>
<div className="company-info-container"     >
         <div className="com-name">
            <img src={Logo} width="25%" heigth="25%" alt="" />
            <h2>Welcome to Raulson</h2>
            <h4>Har Vyavsay Ka Sathi</h4>
         </div>
         <div className="section-container">
            <div className="columns image" //style="background-image:url('images/Special Initiatives.gif')"
            >
                 <img src={SpecialInitiatives} style={{"width" : "929px", "height": "300px"}} alt=""/>
               &nbsp;
            </div>
            <div className="columns content">
               <div className="content-container">
                  <h5>Special Initiatives for small businesses</h5>
                  <p>
                     Raulson platform helps to reach wide audience, using Raulson is one of the most significant advantages is that it takes your business to people where it’s not possible for you to be present physically.
                     Raulson helps businesses in increasing revenue as your business reach widens, your customer base would grow, which will directly increase the revenue.
                     Raulson decrease Operational Cost, One of the benefits of having an online store is that you don’t have to build physical stores at all the locations where you want to sell your products, Raulson would do that for you.
                  </p>
               </div>
            </div>
         </div>
         <div className="section-container">
            <div className="columns content">
               <div className="content-container">
                  <h5>Empower Whole-sellers, Traders, Retailers</h5>
                  <p>
                     Raulson enables digital marketing efforts, integrate with other business solutions, and free up sales and customer service so they can focus on more value-added tasks.
                     Raulson enables manufacturers to combine their marketing sites with their purchasing sites so that customers, employees and other users don't need to switch between multiple systems.
                     Raulson provide solutions to whole-seller: (1) Consistent Buyer Interaction, (2) Create Room for Mobile Browsing, (3) Direct-to-Consumer Potential, (4) Eliminate Unnecessary Costs (5) Increase Promotional Opportunities.
                     Raulson in retailing also helps companies to move products faster and reach a larger customer base online than with traditional physical locations. 
                  </p>
               </div>
            </div>
            <div className="columns image" //style="background-image:url('images/Empower Manufacturer Traders.gif')"
            ><img src={EmpowerManufacturerTraders} style={{"width" : "929px", "height": "300px"}} alt=""/>
               &nbsp;
            </div>
         </div>
         <div className="section-container">
            <div className="columns image" //style="background-image:url('images/Shop through Mobile.gif')"
            ><img src={ShopthroughMobile}style={{"width" : "929px", "height": "300px"}} alt=""/>
               &nbsp;
            </div>
            <div className="columns content">
               <div className="content-container">
                  <h5>Connect Whole-seller, Trader, Retailer via Mobile app</h5>
                  <p>
                     Raulson mobile app helps in meeting buyers where they are.
                     Wholesale e-commerce businesses aren't bound by physical location.
                     Raulson simplifies the buying process.
                     Raulson automates wholesale processes.
                     Raulson increases sales while lowering spend. 
                     Raulson helps enter into the new markets.
                     Raulson allows customers to choose a product or service they want, from any supplier, anywhere in the India you have a much wider choice. 
                  </p>
               </div>
            </div>
         </div>
         <div className="section-container">
            <div className="columns content">
               <div className="content-container">
                  <h5>Best wholesale price</h5>
                  <p>
                     Available on all products from Consumer Goods to Cloth Apparel, from Medicine to Footwears, from Beauty Products to Gift & Toys.
                     Grab huge discounts on your first order.
                     Upto 20% off on 2lkh products.  
                     Best price ever on all products.
                     <strong>Order Now</strong>
                  </p>
               </div>
            </div>
            <div className="columns image" //style="background-image:url('images/best price.gif')"
            ><img src={bestprice} style={{"width" : "929px", "height": "300px"}} alt=""/>
               &nbsp;
            </div>
         </div>
         <div className="section-container">
            <div className="columns image" //style="background-image:url('images/Simple Return.gif')"
            ><img src={SimpleReturn} style={{"width" : "929px", "height": "300px"}} alt=""/>
               &nbsp;
            </div>
            <div className="columns content">
               <div className="content-container">
                  <h5>Simple return process</h5>
                  <p>
                     Return Process is easy on Raulson.
                     Raulson offers free return shipping. 
                     Refund credit within 5 days of returning.
                     Customers can track information for their return shipment and/or automatic text alerts once their return has been received and refunded.
                  </p>
               </div>
            </div>
         </div>
 </div>

</>
  )
}
