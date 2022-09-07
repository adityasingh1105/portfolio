import React from "react";
import sayHello from "../components/Product";
import Items from "../components/Items";


export default function SingleProduct(props) { 
  debugger;
  const { SingleProduct } = props.product;

  return (
    <div className=" container mx-auto mt-12">
      <button className="mb-12 font-bold">Back</button>
      <div className="flex">
        <img src="/Images/logo.png" alt="..." />
        <div className="ml-16">
          <h1 className="text-xl font-bold">Havaklna{Items.name}</h1>
          <div className="text-md">
            <div>smalliooi</div>
            <div className="font-bold mt-2">₹ 10</div>
            <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold mt-4">
              ssd
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
