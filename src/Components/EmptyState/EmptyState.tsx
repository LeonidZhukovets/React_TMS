import React from "react";
import styles from "./EmptyState.module.css";

const EmptyState = () => {
  return (
    <div className={styles.container}>
      <img src={"/Image/404.png"} alt={"Oops! 404"} className={styles.image} />
      <div className={styles.description}>{"Sorry, no posts yet..."}</div>
    </div>
  );
};

export default EmptyState;
