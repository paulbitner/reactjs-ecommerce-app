import React from "react";
import ThreeColFlex from "./Layout/ThreeColFlex";
import SiteLogo from "components/SiteLogo";
import Navbar from "components/Navbar";
import ShoppingCart from "features/cart/ShoppingCart";
import MaxContentWidth from "components/Layout/MaxWidthContainer";
import style from 'styles/SiteHeaderMain.module.css';

const SiteHeaderMain = () => {
  return (
    <div className={style.siteHeader}>
    <MaxContentWidth>
      <ThreeColFlex>
        <Navbar />
        <SiteLogo version="black" />
        <ShoppingCart />
      </ThreeColFlex>
    </MaxContentWidth>
    </div>
  );
};

export default SiteHeaderMain;
