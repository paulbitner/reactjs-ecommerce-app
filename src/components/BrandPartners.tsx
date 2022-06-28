import React from "react";
import styles from "styles/BrandPartners.module.css";
import MaxContentWidth from "components/Layout/MaxWidthContainer";
import SharkTank from 'static/shark_tank.png';
import Amazon from 'static/amazon.png';
import Entrepreneur from 'static/entrepreneur.png';
import Time from 'static/time.png';
import Walmart from 'static/walmart.png';
import Forbes from 'static/forbes.png';



const AnnouncementBar = () => {
  return (
    <div className={styles.partners}>
      <MaxContentWidth>
      <div className={styles.partnersFlex}>
        <div><img src={SharkTank} alt="Brand Partner" /></div>
        <div><img src={Time} alt="Brand Partner" /></div>
        <div><img src={Entrepreneur} alt="Brand Partner" /></div>
        <div><img src={Forbes} alt="Brand Partner" /></div>
        <div><img src={Amazon} alt="Brand Partner" /></div>
        <div><img src={Walmart} alt="Brand Partner" /></div>

      </div>
      </MaxContentWidth>
    </div>
  );
};

export default AnnouncementBar;
