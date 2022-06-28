import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="shop">Shop</Link> | <Link to="About">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
