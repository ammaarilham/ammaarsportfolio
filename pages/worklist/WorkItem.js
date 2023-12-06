// WorkItem.js
import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/WorkItem.module.css"; // Import the CSS module

const WorkItem = ({ img, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.item}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className={styles.browser}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <Image src={img} alt="" className={styles.image} />
      </a>
    </div>
  );
};

export default WorkItem;
