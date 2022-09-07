import React from "react";
import { Link } from "react-router-dom";


function Product(props) {
  const { product } = props;
  const productid =product.pid
  const addToCart= (event)=>{
    event.preventDefault();
    console.log(event,product);
  }
  return (
    <Link to={`/products/${product.pid}`} state={{productid}}>
      <div>
        <img src={product.image} alt="..." style={{ height: "100px" }} />
        <div className="text center">
          <h2 className="text-lg font-bold py-8"> {product.name} </h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4 font-bold">
            {product.size}
          </span>
        </div>
        <div className="flex justify-between product-center mt-4">
          <span>
            <b>₹ </b>
            {product.price}
          </span>
          <button onClick={ (event) =>{addToCart(event, product)}} className="bg-yellow-500 py-1 px-4 rounded-full font-bold">Add</button>

        </div>
      </div>
    </Link>
  );
}

export default Product;
