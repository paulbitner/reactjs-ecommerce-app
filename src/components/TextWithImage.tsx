import React from "react";
import styles from "styles/TextWithImage.module.css";
import MaxContentWidth from "components/Layout/MaxWidthContainer";
import Heading from "components/Layout/Heading";
import TheZoneGif from 'static/the_zone_gif.gif';

interface TextWithImageProps{
  headingText: string;
  paragraphText?: string;
  image: string;
  imageAltText: string;
}

const TextWithImage = (props: TextWithImageProps) => {
  return (
    <div className={styles.textWithImage}>
      <MaxContentWidth>
        <Heading size="h3" text={props.headingText} class={styles.partnersFlex} />
        <p>{props.paragraphText}</p>
        <img src={props.image} alt="Loading Gif" />
      </MaxContentWidth>
    </div>
  );
};

export default TextWithImage;
