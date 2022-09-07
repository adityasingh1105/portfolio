import React from "react";

import Carousel from "react-elastic-carousel";
import iphone from "./images/iphone.png";
import girl from "./images/girl.jpg";
import shoes from "./images/shoes.jpg";
import bedsheet from "./images/bedsheet.png";
import laptop from "./images/laptop.png";
import mixer from "./images/mixer.png";
import led from "./images/led.png";
import medicine from "./images/medicine.png";
import fruits from "./images/fruits.png";
import TeddyImage from "./images/Teddy Image.jpg";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1220, itemsToShow: 5 },
];
export default function SectioDemo() {
  return (
    <>
      <h2 className="product-category">best selling</h2>

      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img src={iphone} className="product-thumb" alt="" />
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">brand</h2>
              <p className="product-short-description">
                a short line about the cloth..
              </p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img src={girl} className="product-thumb" alt="" />
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">brand</h2>
              <p className="product-short-description">
                a short line about the cloth..
              </p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img src={shoes} className="product-thumb" alt="" />
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">brand</h2>
              <p className="product-short-description">
                a short line about the cloth..
              </p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img src={bedsheet} className="product-thumb" alt="" />
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">brand</h2>
              <p className="product-short-description">
                a short line about the cloth..
              </p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img src={laptop} className="product-thumb" alt="" />
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">brand</h2>
              <p className="product-short-description">
                a short line about the cloth..
              </p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img src={mixer} className="product-thumb" alt="" />
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">brand</h2>
              <p className="product-short-description">
                a short line about the cloth..
              </p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img src={led} className="product-thumb" alt="" />
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">brand</h2>
              <p className="product-short-description">
                a short line about the cloth..
              </p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img src={medicine} className="product-thumb" alt="" />
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">brand</h2>
              <p className="product-short-description">
                a short line about the cloth..
              </p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img src={fruits} className="product-thumb" alt="" />
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">brand</h2>
              <p className="product-short-description">
                a short line about the cloth..
              </p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img src={TeddyImage} className="product-thumb" alt="" />
              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">brand</h2>
              <p className="product-short-description">
                a short line about the cloth..
              </p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
