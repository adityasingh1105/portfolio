import React from "react";
import Browse from "./images/Browse.jpg";
import EnrouteLocation3 from "./images/Enroute Location 3.jpg";
import Storeacknowledgepack2 from "./images/Store acknowledge&pack 2.jpg";
import DeliveredOnTime4 from "./images/Delivered on time 4.jpg";

// 
// 
//style={{"width" : "100%"}}

export default function BusinessGallery() {
  return (
    <>
      <div className="row">
        <div className="col">
          <img src={Browse} alt=""style={{"width" : "40%", "height": "60px"}}/>
          
            <h4>Shop &amp; Browse</h4>
      
          <p>
            Retailer can browse the app, find the desired product and order.
          </p>
        </div>
        <div className="col">
          <img src={Storeacknowledgepack2} alt=""style={{"width" : "40%", "height": "60px"}}/>
          
            <h4>Store acknowledge &amp; pack</h4>
      
          <p>
            Seller will acknowledge the order recieved, pack it and make it
            ready to ship.
          </p>
        </div>
        <div className="col">
          <img src={EnrouteLocation3} alt="" style={{"width" : "40%", "height": "60px"}}/>
          
            <h4>Enroute Location</h4>
      
          <p>Our logistics team will assists with the pick up the product.</p>
        </div>
        <div className="col">
          <img src={DeliveredOnTime4} alt="" style={{"width" : "40%", "height": "60px"}} />
          
            <h4>Delivered on time</h4>
      
          <p>
            We fulfill the container and send the product to customer on
            delivery time.
          </p>
        </div>
      </div>
    </>
  );
}
