import React from "react";
import Items from "../components/Items";
import { useState } from "react";
import { useLocation,  useNavigate } from "react-router-dom";

function SingleProduct() {
  const { state } = useLocation(); // <-- access route state
  const { productid } = state || {}; // <-- unpack the item from state
  let navigate = useNavigate();
  const product = Items.find((item) => {
    if (String(item.pid) === String(productid)) {
      return item;
    }
  });

  return (
    <div className=" container mx-auto mt-12">
      <button className="mb-12 font-bold" onClick={() => navigate(-1)}>Back</button>
     
      <div className="flex">
        <img src={product.image} style={{ height: "100px" }} alt="..." />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-md">
            <div>{product.size}</div>
            <div className="font-bold mt-2">₹ {product.price}</div>
            <button className="bg-yellow-500 py-1 px-4 rounded-full font-semibold mt-4 ">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;

// onClick={() => {history.goBack() }}
// export default function SingleProduct(match) {
//   const [Items, setItems] = useState({});
//   console.log(Items);
//   // const { SingleProduct } = props.item;
// return (
//   <div className=" container mx-auto mt-12">
//     <button className="mb-12 font-bold">Back</button>
//     <div className="flex">
//       <img src="/Images/logo.png" alt="..." />
//       <div className="ml-16">
//         <h1 className="text-xl font-bold">Havaklna{Items.name}</h1>
//         <div className="text-md">
//           <div>smalliooi</div>
//           <div className="font-bold mt-2">₹ 10</div>
//           <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold mt-4">
//             ssd
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }
