import classNames from "classnames";
import React, { FC, ReactElement } from "react";
import Title from "../Title";

//@ts-ignore
import styles from "./FormContainer.module.css";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../constants/@types";

type FormContainerProps = {
  title: string;
  children: ReactElement;
};

const FormContainer: FC<FormContainerProps> = ({ title, children }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <div>
        <div className={styles.goBackLink}>{"Back to home"}</div>
        <Title title={title} />
      </div>
      <div className={styles.formContainer}>{children}</div>
    </div>
  );
};

export default FormContainer;
