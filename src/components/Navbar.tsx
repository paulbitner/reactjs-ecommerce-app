import React from "react";
import { Link } from "react-router-dom";
import style from "styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={style.navLink}>
        <Link to="shop">Shop</Link> | <Link to="About">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
