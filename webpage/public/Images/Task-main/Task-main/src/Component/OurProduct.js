import React from "react";
import Electrics from "./logos/Electrics & Appliances.jpg";
import Footwear from "./logos/Footwear.jpg";
import GiftsToys from "./logos/Gifts & Toys.jpg";
import GroceryIconsjpg from "./logos/Grocery Iconsjpg.jpg";
import HardwareSanitary from "./logos/Hardware&Sanitary.jpg";
import Kidwear from "./logos/Kidwear.jpg";
import luggageBags from "./logos/luggage&Bags.jpg";
import Makeup from "./logos/Makeup.jpg";
import Medicn from "./logos/Medicn.jpg";

export default function OurProduct() {
  return (
    <>
      <div className="p-container">
        <h2>&ensp;Our products</h2>
        <div className="p-inner-container">
          <div className="p-card">
            <div className="p-logo">
              <img src={Electrics} alt="logos/Electrics & Appliances" />
            </div>
            <div className="p-content">
              <h3>Electronics</h3>
              <p>Microwave,Dishwasher,Pressure Cooker,Mixer Grinder&more</p>
            </div>
          </div>
          <div className="p-card">
            <div className="p-logo">
              <img src={Footwear} alt="Footwear" />
            </div>
            <div className="p-content">
              <h3>Footwear</h3>
              <p>Male,Female & Kids footwear&more</p>
            </div>
          </div>
          <div className="p-card">
            <div className="p-logo">
              <img src={GiftsToys} alt="logos/Gifts & Toys" />
            </div>
            <div className="p-content">
              <h3>Gifts & Toys</h3>
              <p>Car,Train,Doll,Teddy, Pots&more</p>
            </div>
          </div>
          <div className="p-card">
            <div className="p-logo">
              <img src={GroceryIconsjpg} alt="Grocery Iconsjpg" />
            </div>
            <div className="p-content">
              <h3>Grocery</h3>
              <p>Flour,Pulses,Rice,Oils,Soup Breakfast Foods&more</p>
            </div>
          </div>
          <div className="p-card">
            <div className="p-logo">
              <img src={HardwareSanitary} alt="Hardware&Sanitary" />
            </div>
            <div className="p-content">
              <h3>Sanitary Ware</h3>
              <p>Seats,Tab,Sink,Tanks Brass&more</p>
            </div>
          </div>
          <div className="p-card">
            <div className="p-logo">
              <img src={Kidwear} alt="Kidwear" />
            </div>
            <div className="p-content">
              <h3>Cloth & Apparel</h3>
              <p>Tshirt,Jeans,Vest,Dress Saree&more</p>
            </div>
          </div>
          <div className="p-card">
            <div className="p-logo">
              <img src={luggageBags} alt="luggage&Bags" />
            </div>
            <div className="p-content">
              <h3>Bags & Suitcase</h3>
              <p>Handbag,Trolley Bag Wheeled,luggage&more</p>
            </div>
          </div>
          <div className="p-card">
            <div className="p-logo">
              <img src={Makeup} alt="Makeup" />
            </div>
            <div className="p-content">
              <h3>Beauty Products</h3>
              <p>Moisturizer,Cream,Powder Lipstick,Lip Balm&more</p>
            </div>
          </div>
          <div className="p-card">
            <div className="p-logo">
              <img src={Medicn} alt="Medicn" />
            </div>
            <div className="p-content">
              <h3>Medicine & Cure</h3>
              <p>Tablet,Syrup,Injection Personal care&more</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
