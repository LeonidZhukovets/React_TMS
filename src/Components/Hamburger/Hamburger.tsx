import React, { FC } from "react";

//@ts-ignore
import styles from "./Hamburger.module.css";
//@ts-ignore
import Burger from "./Burger.png";

type HamburgerProps = {
  isOpened?: boolean;
  onClick: () => void;
};

const Hamburger: FC<HamburgerProps> = (props) => {
  const { isOpened, onClick } = props;

  return (
    <div className={styles.container} onClick={onClick}>
      {isOpened ? (
        <span className={styles.iconX}>X</span>
      ) : (
        <img src={Burger} alt={"logo"} className={styles.icon}></img>
      )}
    </div>
  );
};

export default Hamburger;
