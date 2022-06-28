import React from "react";
import { Link } from "react-router-dom";
import MaxContentWidth from "./Layout/MaxWidthContainer";
import styles from "styles/utilityBar.module.css";

const SecondaryHeaderLinks = () => {
  return (
    <div className={styles.utilityBar}>
      <MaxContentWidth>
      <div className={styles.utilityBarContent}>
        <nav>
          <Link to="shipping">Shipping</Link>
          <Link to="return_policy">Return Policy</Link>
          <Link to="FAQ">FAQ</Link>
          <Link to="contact">Contact us</Link>
        </nav>
      </div>
      </MaxContentWidth>
    </div>
  );
};

export default SecondaryHeaderLinks;
