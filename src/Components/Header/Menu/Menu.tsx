import React, { useMemo } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import ThemeSwitcher from "../../ThemeSwitcher";
import Button, { ButtonTypes } from "../../Button";
import styles from "./Menu.module.css";
import { PathNames } from "../../../Pages/Router/Router";
import classNames from "classnames";
import UserName from "../../UserName";
import { useDispatch, useSelector } from "react-redux";
import AuthSelectors from "../../../Redux/Selectors/authSelectors";
import { logoutUser } from "../../../Redux/Reducers/authReducer";

const Menu = () => {
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const username = useSelector(AuthSelectors.getUserName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navButtons = useMemo(
    () => [
      { title: "Home", link: PathNames.Home },
      ...(isLoggedIn ? [{ title: "Add Post", link: PathNames.AddPost }] : []),
    ],
    [isLoggedIn]
  );

  const onFooterButtonClick = () => {
    if (isLoggedIn) {
      dispatch(logoutUser());
    } else {
      navigate(PathNames.SignIn);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        {isLoggedIn && !!username && <UserName username={username} />}
        {navButtons.map(({ link, title }) => {
          return (
            <NavLink
              key={link}
              to={link}
              className={classNames(styles.navButton, {
                [styles.activeNavButton]: pathname === link,
              })}
            >
              {title}
            </NavLink>
          );
        })}
      </div>
      <div>
        <ThemeSwitcher />
        <Button
          title={isLoggedIn ? "Log Out" : "Sign In"}
          type={ButtonTypes.Secondary}
          className={styles.footerButton}
          onClick={onFooterButtonClick}
        />
      </div>
    </div>
  );
};

export default Menu;
