import {BrowserRouter as Router,Routes,  Route,withRouter,} from "react-router-dom";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/SingleProduct"
import NavBar from "./components/NavBar";
import ProductsPage from "./Pages/ProductsPage";
import Carts from "./components/Cart";
import { CartContext } from "./CartContext";
import {useEffect, useState } from "react";
const App = () => {
  const [cart, setcart] = useState({});
  //load from local storage
//   useEffect(() => {
// const cart=window.localStorage.getItem('cart');
  
//     return () => {
//       second
//     }
//   }, [third])
  
  return (
    <>
      <Router>
        <CartContext.Provider value={{ name: "aditya" }}>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<ProductsPage />} />
            <Route exact path="/products/:pid" element={<SingleProduct />} />
            <Route exact path="/carts" element={<Carts />} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
};

export default App;
// item={Items.find(
//   (item) => item.pid === match.params.pid
// )}
