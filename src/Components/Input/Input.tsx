import React, { FC, ChangeEvent } from "react";
import classnames from "classnames";

//@ts-ignore
import styles from "./Input.module.css";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  title?: string;
  error?: string;
  className?: string;
};

const Input: FC<InputProps> = (props) => {
  const { value, onChange, placeholder, disabled, title, error, className } =
    props;
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className={styles.container}>
      {title && <div className={styles.title}>{title}</div>}
      <input
        value={value}
        onChange={onChangeInput}
        placeholder={placeholder}
        disabled={disabled}
        className={classnames(styles.input, className, {
          [styles.error]: !!error,
        })}
      />
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default Input;
