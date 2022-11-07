import React, { useState } from "react";

import Button, { ButtonTypes } from "../Button";
import {
  BurgerClosedIcon,
  BurgerOpenedIcon,
  SearchIcon,
  UserIcon,
} from "../../Assets";
import styles from "./Header.module.css";
import Menu from "./Menu";
import { isLoggedIn } from "./Menu/Menu";
import UserName from "../UserName";

const Header = () => {
  const [isOpened, setOpened] = useState(false);

  const onBurgerClick = () => {
    setOpened(!isOpened);
  };

  return (
    <div className={styles.container}>
      <Button
        icon={isOpened ? <BurgerOpenedIcon /> : <BurgerClosedIcon />}
        onClick={onBurgerClick}
        type={ButtonTypes.Primary}
        className={styles.burgerButton}
      />
      {isOpened && <Menu />}
      <div className={styles.searchContainer}>
        <Button
          icon={<SearchIcon />}
          type={ButtonTypes.Primary}
          onClick={onBurgerClick}
          className={styles.searchButton}
        />
        {isLoggedIn ? (
          <UserName username={"Artem_Malkin"} />
        ) : (
          <Button
            icon={<UserIcon />}
            type={ButtonTypes.Primary}
            onClick={() => alert("signIn")}
            className={styles.userContainer}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
