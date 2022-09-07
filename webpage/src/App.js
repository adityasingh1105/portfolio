import {
  BrowserRouter as Router,
  Routes,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavBar from "./components/NavBar";
import Products from "./Pages/Products";
import Carts from "./components/Cart";
import SingleProduct from "./Pages/SingleProduct";
import Items from "./components/Items";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          {/* <Route exact path="/products/:pid" element={<SingleProduct />} /> */}
          <Route exact path="/carts" element={<Carts />} />

          <Route exact
            path="/products/:pid"
            render={({ match }) => (
              <SingleProduct
                product={Items.find(
                  (product) => product.pid === match.params.pid
                )}
              />
            )}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
// item={Items.find(
//   (item) => item.pid === match.params.pid
// )}
