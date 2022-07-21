import React from "react";
import MaxContentWidth from "./MaxWidthContainer";
import Heading from "./Heading";
import style from "styles/Footer.module.css";
import { Link } from "react-router-dom";
import SiteLogo from "components/SiteLogo";

interface FooterProps {}
const Footer = (props: FooterProps) => {
  return (
    <footer>
      <MaxContentWidth>
      
        <div className={style.footerFlexContainer}>
        <SiteLogo version="white" />
          <div className={style.footerLinkContainer}>
            <Heading size="h6" color="white" text="Company" />
            <Link to="about">About Neuro</Link>
            <Link to="about">Why Neuro</Link>
            <Link to="about">Blog</Link>
          </div>
          <div className={style.footerLinkContainer}>
            <Heading size="h6" color="white" text="Shop" />
            <Link to="about">Shop Neuro</Link>
            <Link to="about">Shop Merchandise</Link>
            <Link to="about">Store Locator</Link>
            <Link to="#">Wholesale</Link>
          </div>
          <div className={style.footerLinkContainer}>
            <Heading size="h6" color="white" text="Partner" />
            <Link to="about">About Neuro</Link>
            <Link to="about">Why Neuro</Link>
            <Link to="about">Blog</Link>
          </div>
          <div className={style.footerLinkContainer}>
            <Heading size="h6" color="white" text="Support" />
            <Link to="about">About Neuro</Link>
            <Link to="about">Why Neuro</Link>
            <Link to="about">Blog</Link>
          </div>
        </div>
        <div>
          
        </div>
      </MaxContentWidth>
    </footer>
  );
};

export default Footer;
