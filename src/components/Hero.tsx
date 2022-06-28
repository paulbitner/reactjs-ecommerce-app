import React from "react";
import style from "styles/Hero.module.css";
import Heading from 'components/Layout/Heading'
import MaxContentWidth from "./Layout/MaxWidthContainer";
import HeroWebP from "static/homepageHero.webp";
import Button from 'components/Button';


interface HeroImage {
  image: string;
  headline: string;
  subheading: string;
}

const Hero = (props: HeroImage) => {
  return (
    <div
      className={style.hero}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <MaxContentWidth>

        <div className={style.mainBannerTextContainer}>
          <Heading size="h1" text={props.headline} color="#fff" class={style.mainBannerWithTextTitle} />
          <div className={style.mainBannerWithTextBody}>
            {props.subheading}
          </div>
          <Button value="Shop" backgroundColor="#000" textColor="#fff" link="/shop" border="1px solid #000"  />
            
        </div>
      </MaxContentWidth>
    </div>
  );
};

export default Hero;
