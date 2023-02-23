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
import UserName from "../UserName";
import { PathNames } from "../../Pages/Router/Router";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import { useSelector } from "react-redux";
import AuthSelectors from "../../Redux/Selectors/authSelectors";

const Header = () => {
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const username = useSelector(AuthSelectors.getUserName);
  const [isOpened, setOpened] = useState(false);

  const onBurgerClick = () => {
    setOpened(!isOpened);
  };
  const [isSearch, setSearch] = useState(false);

  const navigateTo = useNavigate();
  const logInUser = () => {
    navigateTo(PathNames.SignIn);
  };

  const onSearchClick = () => {
    if (isSearch) {
      navigateTo(`search/${inputValue}`);
    }
    setSearch(!isSearch);
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
        {isLoggedIn && !!username ? (
          <UserName username={username} />
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
