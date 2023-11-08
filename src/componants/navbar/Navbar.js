import React from "react";
import logo from "../../images/Logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <span>
          <img src={logo} alt="" />
        </span>
      </div>
      <div className="ul">
        <a href="/order">order</a >
        <a href="/oreder-review">order review</a>
        <a href="/mange-inventory">manage inventory</a>
        <a href="/login">login</a>
      </div>
    </nav>
  );
};

export default Navbar;
