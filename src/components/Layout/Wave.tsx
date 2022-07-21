import React from "react";
import styles from "styles/Wave.module.css";

interface WaveProps {
  waveColor: string;
}

const Hero = (props: WaveProps) => {
  return (

        
    <svg
      viewBox="0 0 1440 400"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.wave}
    >
      <path
        d="M 0,400 C 0,400 0,200 0,200 C 123.33333333333331,229.86666666666667 246.66666666666663,259.73333333333335 408,249 C 569.3333333333334,238.26666666666668 768.6666666666667,186.93333333333334 947,172 C 1125.3333333333333,157.06666666666666 1282.6666666666665,178.53333333333333 1440,200 C 1440,200 1440,400 1440,400 Z"
        stroke="none"
        strokeWidth="0"
        fill={props.waveColor}
        className={styles.path}
      ></path>
    </svg>


  );
};

export default Hero;
