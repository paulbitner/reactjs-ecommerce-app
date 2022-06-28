import React, { useState } from "react";
import styles from "styles/ShopProductContainer.module.css";
import MaxContentWidth from "components/Layout/MaxWidthContainer";
import Heading from "components/Layout/Heading";
import Button from 'components/Button';
import Wave from 'components/Layout/Wave'


interface ShopProductContainerProps {
  orientation: "product-left" | "product-right";
  headingText: string;
  paragraphText?: string;
  imagePrimary: string;
  imagePrimaryAltText: string;
  imageSecondary: string;
  imageSecondaryAltText: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  primaryDescription: string;
  secondaryDescription: string;
  primaryTextColor: string;
  secondaryTextColor:string;
  primarySwatchColor: string;
  secondarySwatchColor: string;
}

const ShopProductContainer = (props: ShopProductContainerProps) => {
  const slides = [
    {
      backgroundColor: props.backgroundPrimary,
      buttonColor: "white",
      image: props.imagePrimary,
      description: props.primaryDescription,
      textColor: props.primaryTextColor,
    },
    {
      backgroundColor: props.backgroundSecondary,
      buttonColor: "black",
      image: props.imageSecondary,
      description: props.secondaryDescription,
      textColor: props.secondaryTextColor
    },
  ];

  const [textColor, setTextColor] = useState(props.primaryTextColor)
  const [activeSlide, setActiveSlide] = useState(0);
  const [background, setBackground] = useState(
    slides[activeSlide].backgroundColor
  );
  const [productImage, setProductImage] = useState(props.imagePrimary);

  const [activeButton, setActiveButton] = useState(0);

  const [description, setDescription] = useState(props.primaryDescription)

  function updateProductContainerUI(slideNumber: number, event: any) {
    event.preventDefault();
    setBackground(slides[slideNumber].backgroundColor);
    setProductImage(slides[slideNumber].image);
    setTextColor(slides[slideNumber].textColor);
    setActiveSlide(slideNumber);
    setActiveButton(slideNumber);
    setDescription(slides[slideNumber].description);
  }

  return (
    <>
    <Wave waveColor={background} />
    <div
      className={styles.shopProductContainer}
      style={{ backgroundColor: background }}
    >
      
      <MaxContentWidth>
        <div className={props.orientation === "product-left" ? `${styles.shopProductContainerFlex} ${styles.layoutLeft}` : `${styles.shopProductContainerFlex} ${styles.layoutRight}`}>
          
          <div>
            <img
              className={styles.imagePrimary}
              src={productImage}
              alt="Loading Gif"
            />
          </div>
          <div>
            <Heading size="h2" text={props.headingText} color={textColor} />
            <p style={{color: textColor}}>{props.paragraphText}</p>
            <div className={styles.shopProductSwatches}>
              <div
                onClick={(event) => updateProductContainerUI(0, event)}
                className={`${styles.shopProductColorSeletor} ${styles.swatchSelected}`}
                id="0"
              >
                <div
                  className={styles.shopProductColorSelectorSwatch}
                  style={{ backgroundColor: props.primarySwatchColor }}
                >
                  <div
                    className={styles.activeSwatch}
                    style={{ opacity: activeButton === 1 ? "0" : "0.5" }}
                  ></div>
                </div>
              </div>
              <div
                onClick={(event) => updateProductContainerUI(1, event)}
                className={`${styles.shopProductColorSeletor}`}
                id="1"
              >
                <div
                  className={styles.shopProductColorSelectorSwatch}
                  style={{ backgroundColor: props.secondarySwatchColor }}
                >
                  <div
                    className={styles.activeSwatch}
                    style={{ opacity: activeButton === 0 ? "0" : "0.5" }}
                  ></div>
                </div>
              </div>
              <div className={styles.description} style={{color: textColor}}>{description}</div>
            </div>
            <Button value="Shop" backgroundColor="#00000000" textColor={textColor} link="/shop" border={` 1px solid ${textColor}`} />
          </div>
        </div>
      </MaxContentWidth>
    </div>
    </>
  );
};

export default ShopProductContainer;
