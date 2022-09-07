import React, { useState, useEffect ,useContext } from "react";
import Product from "./Product";
import Items from "../components/Items";
import { CartContext } from "../CartContext";
const Products = () => {
 //const {name} =useContext(CartContext)

  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products </h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {Items.map((Item) => (
          <Product key={Item.pid} product={Item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
