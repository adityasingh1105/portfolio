import React, { useState, useEffect } from "react";
import Product from "./Product";
import Items from "../components/Items";

const Products = () => {
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {Items.map((Items) => (
          <Product key={Items.pid} Items={Items} />
        ))}
      </div>
    </div>
  );
};

export default Products;
