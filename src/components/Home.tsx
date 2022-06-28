import React from "react";
import style from "style/Home.module.css";
import Heading from "components//Layout/Heading";
import Button from "components/Button";
import Hero from "components/Hero";
import HeroWebP from "static/homepageHero.webp";
import BrandPartners from "components/BrandPartners";
import TextWithImage from "components/TextWithImage";
import TheZoneGif from "static/the_zone_gif.gif";
import ShopProductContainer from "components/ShopProductContainer";
import BlueMints from "static/mints_blue.png";
import RedMints from "static/mints_red.png";
import HoneyMints from "static/mints_honey_lemon.png";
import WhiteMints from "static/Neuro_Home_IdealstateMints.webp";
import NeuroGif from "static/neuro_head.gif";
import TwoColFlex from "components/Layout/TwoColFlex";
import BottomFooterHero from "static/neuro_bottom_hero.webp"

const Home = () => {
  return (
    <>
      <Hero
        image={HeroWebP}
        headline="The smart way to fuel body and mind"
        subheading="Gum and mints to energize, calm and focus you whenever you need it."
      />

      <BrandPartners />

      <TextWithImage
        headingText="We get the mental game."
        paragraphText="That’s why we create smarter products for your body and mind. Our functional gum and mints are the smarter way to get energized, calm or focused - anytime, anywhere."
        image={TheZoneGif}
        imageAltText="The Zone Gif"
      />

      <ShopProductContainer
        orientation="product-right"
        headingText="Energy &amp; Focus"
        paragraphText="Specially formulated with natural caffeine, L-theanine and B-vitamins to sustain the mental endurance necessary to maintain your focus.*"
        imagePrimary={BlueMints}
        imageSecondary={RedMints}
        imagePrimaryAltText="Blue Mints"
        imageSecondaryAltText="red Mints"
        backgroundPrimary="rgb(0, 84, 102)"
        backgroundSecondary="rgb(147, 38, 16)"
        primaryDescription="Peppermint"
        secondaryDescription="Cinnamon"
        primaryTextColor="#fff"
        secondaryTextColor="#fecb8b"
        primarySwatchColor="#13c0d7"
        secondarySwatchColor="#d53f23"
      />

      <ShopProductContainer
        orientation="product-left"
        headingText="Calm &amp; Clarity"
        paragraphText="Expertly developed with GABA, vitamin D3, and L-theanine to optimize composure and clarity of mind."
        imagePrimary={HoneyMints}
        imageSecondary={RedMints}
        imagePrimaryAltText="Blue Mints"
        imageSecondaryAltText="red Mints"
        backgroundPrimary="rgb(249, 223, 189)"
        backgroundSecondary="rgb(247, 216, 191)"
        primaryDescription="Ginger Thai"
        secondaryDescription="Honey Lemon"
        primaryTextColor="#ef9632"
        secondaryTextColor="#c47b59"
        primarySwatchColor="#ef9632"
        secondarySwatchColor="#c47b59"
      />

      <TwoColFlex backgroundColor="#fff">
        <div className="alignRight">
          <img src={WhiteMints} alt="White Mints" className="imageWithText" />
        </div>
        <div>
          <div className="imageWithTextContentContainer">
            <Heading size="h2" text="The Ideal State" color="#000" />
            <p style={{ color: "#000" }}>
              Some days, getting in the zone requires a boost – other days, we
              need to take it down a notch. Balance the ups and downs of your
              ambition with a combo pack of Energy &amp; Focus and Calm &amp;
              Clarity.
            </p>
            <Button
              value="Shop Now"
              backgroundColor="#00000000"
              textColor="#000"
              link="/shop"
              border={` 1px solid #000`}
            />
          </div>
        </div>
      </TwoColFlex>

      <TwoColFlex backgroundColor="#f1faf6">
        <div className="alignRight">
          <img src={NeuroGif} alt="Neuro Head GIF" className="imageWithText" />
        </div>
        <div>
          <div className="imageWithTextContentContainer">
            <Heading size="h2" text="In the zone. Every day." color="#000" />
            <p style={{ color: "#000" }}>
              Never run out of Neuro with a monthly subscription. Members get
              10% off and free shipping straight to your door.
            </p>
            <Button
              value="Shop Now"
              backgroundColor="#00000000"
              textColor="#000"
              link="/shop"
              border={` 1px solid #000`}
            />
          </div>
        </div>
      </TwoColFlex>

      <Hero
        image={BottomFooterHero}
        headline="Refresh your state of mind."
        subheading=""
      />
    </>
  );
};

export default Home;
