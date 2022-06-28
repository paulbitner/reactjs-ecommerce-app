import React from "react";
import styles from "styles/announcementBar.module.css";
import MaxContentWidth from "components/Layout/MaxWidthContainer";


interface Announcement {
  announcement: string;
}

const AnnouncementBar = (props: Announcement) => {
  return (
    <div className={styles.announcementBar}>
      <MaxContentWidth>{props.announcement}</MaxContentWidth>
    </div>
  );
};

export default AnnouncementBar;
