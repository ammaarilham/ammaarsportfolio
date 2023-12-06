// WorkList.js
import React from "react";
import WorkItem from "./WorkItem";
import { works } from "./worksData";
import styles from "../../styles/WorkList.module.css";

const WorkList = () => {
  return (
    <div className={styles.list}>
      <div className={styles.texts}>
        <h1 className={styles.title}>View of My Projects</h1>
        <p className={styles.desc}>
          Have a look at all the projects I have built on a bigger screen!
        </p>
      </div>
      <div className={styles.itemsContainer}>
        {works.map((item) => (
          <WorkItem key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default WorkList;
