import React from "react";
import style from "styles/SiteLogo.module.css";
import LogoBlack from "static/logo-black.svg";
import LogoWhite from "static/logo-white.svg";


interface SiteLogoProps {
  version: "white" | "black";
}
const SiteLogo = (props: SiteLogoProps) => {
  if (props.version === "black") {
    return (
      <div>
        <img className={style.logo} src={LogoBlack} alt="Site Logo" />
      </div>
    );
  } else if (props.version === "white") {
    return (
      <div>
        <img className={style.logo} src={LogoWhite} alt="Site Logo" />
      </div>
    );
  } else {
    return <></>;
  }
};

export default SiteLogo;
