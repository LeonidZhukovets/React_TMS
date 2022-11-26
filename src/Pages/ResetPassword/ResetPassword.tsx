import React, { useEffect, useRef, useState } from "react";
import Button, { ButtonTypes } from "../../Components/Button";

import FormContainer from "../../Components/FormContainer";

import styles from "./ResetPassword.module.css";
import Input from "../../Components/Input";

const ResetPassword = () => {
  const [login, setLogin] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <FormContainer title={"Reset password"}>
      <>
        <div className={styles.container}>
          <Input
            title={"Email"}
            placeholder={"Your email"}
            value={login}
            onChange={(value: string) => setLogin(value)}
            ref={inputRef}
          />
          <Button
            title={"Reset"}
            type={ButtonTypes.Primary}
            onClick={() => {}}
            className={styles.button}
          />
        </div>
      </>
    </FormContainer>
  );
};

export default ResetPassword;
