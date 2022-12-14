import React, { FC } from "react";
import styles from "./Title.module.css";
import classNames from "classnames";
import { Theme } from "../../constants/@types";
import { useThemeContext } from "../../Context/Theme";

type TitleProps = {
  title: string;
};

const Title: FC<TitleProps> = ({ title }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      {title}
    </div>
  );
};

export default Title;
