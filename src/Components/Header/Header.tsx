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
import { PathNames } from "../../Pages/Router/Router";
import { useNavigate } from "react-router-dom";
import Input from "../Input";

const Header = () => {
  const [isOpened, setOpened] = useState(false);

  const onBurgerClick = () => {
    setOpened(!isOpened);
  };
  const [isSearch, setSearch] = useState(false);

  const onSearchClick = () => {
    setSearch(!isSearch);
  };

  const navigateTo = useNavigate();
  const logInUser = () => {
    navigateTo(PathNames.SignIn);
  };
  const [inputValue, setInputValue] = useState("");

  const onChange = (value: string) => {
    setInputValue(value);
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
      {!isOpened && isSearch && (
        <Input
          value={inputValue}
          onChange={onChange}
          placeholder={"Search..."}
          className={styles.inputSearch}
        />
      )}
      <div className={styles.searchContainer}>
        <Button
          icon={<SearchIcon />}
          type={ButtonTypes.Primary}
          onClick={onSearchClick}
          className={styles.searchButton}
        />
        {isLoggedIn ? (
          <UserName username={"Artem_Malkin"} />
        ) : (
          <Button
            icon={<UserIcon />}
            type={ButtonTypes.Primary}
            onClick={logInUser}
            className={styles.userContainer}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
