import { Link } from "react-router-dom";

export default function NavBar() {
  const cartstyle = {
    background: "#F59E0D",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img style={{ height: 45 }} src="/Images/logo.png" alt="..." />
        </Link>
        <ul className="flex item-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-3">
            <Link to="/products">Product</Link>
          </li>
          <li className="ml-3">
            <Link to="/carts">
              <div style={cartstyle}>
                <span>10</span>
                <img className="ml-2" src="/images/cart.png" alt="..." />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
