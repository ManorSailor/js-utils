import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(): ReactElement {
  return (
    <nav>
      <h3 className="nav__header">Router</h3>

      <ul className="nav__route-list">
        <li className="route">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="route">
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
