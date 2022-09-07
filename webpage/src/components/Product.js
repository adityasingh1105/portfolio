import React from "react";
import { Link } from "react-router-dom";


function Product(props) {
  const { Items } = props;
  return (
    <Link to={`/products/${Items.pid}`}>
      <div>
        <img src={Items.image} alt="..." style={{ height: "100px" }} />
        <div className="text center">
          <h2 className="text-lg font-bold py-8"> {Items.name} </h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4 font-bold">
            {Items.size}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>
            <b>₹ </b>
            {Items.price}
          </span>
          <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
            Add
          </button>

        </div>
      </div>
    </Link>
  );
}

export default Product;
