import React, { FC, ReactElement } from "react";
import classnames from "classnames";

//@ts-ignore
import styles from "./Button.module.css";

export enum ButtonTypes {
  Primary = "primary",
  Secondary = "secondary",
  Error = "error",
  Like = "like",
  Dislike = "dislike",
  Bookmark = "bookmark",
}

type ButtonProps = {
  icon?: ReactElement;
  title?: string;
  type: ButtonTypes;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = (props) => {
  const { type, title, onClick, className, disabled, icon } = props;

  const buttonClassName = styles[type];

  return (
    <div
      className={classnames(styles.button, buttonClassName, className, {
        [styles.disabled]: !!disabled,
      })}
      onClick={onClick}
    >
      {icon}
      {title}
    </div>
  );
};

export default Button;
