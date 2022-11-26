import React, { useEffect, useRef, useState } from "react";
import Button, { ButtonTypes } from "../../Components/Button";

import FormContainer from "../../Components/FormContainer";

import styles from "./NewPassword.module.css";
import Input from "../../Components/Input";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <FormContainer title={"New password"}>
      <>
        <div className={styles.container}>
          <div className={styles.inputContainer}>
            <Input
              title={"Password"}
              placeholder={"Your password"}
              value={newPassword}
              onChange={(value: string) => setNewPassword(value)}
              ref={inputRef}
            />
            <Input
              title={"Confirm password"}
              placeholder={"Confirm your password"}
              value={checkPassword}
              onChange={(value: string) => setCheckPassword(value)}
            />
          </div>
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

export default NewPassword;
