import React, { useEffect, useRef, useState } from "react";
import Button, { ButtonTypes } from "../../Components/Button";

import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";

//@ts-ignore
import styles from "./SignIn.module.css";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    if (inputRef.current) {
      inputRef.current.focus()
    }

  },[])

  return (
    <FormContainer title={"Sign In"}>
      <>
        <div className={styles.inputContainer}>
          <Input
            title={"Email"}
            placeholder={"Your email"}
            value={login}
            onChange={(value: string) => setLogin(value)}
            ref={inputRef}
          />
          <Input
            title={"Password"}
            placeholder={"Your password"}
            value={password}
            onChange={(value: string) => setPassword(value)}
          />
        </div>
        <div className={styles.forgotPassword}>{"Forgot password"}</div>
        <Button
          title={"Sign In"}
          type={ButtonTypes.Primary}
          onClick={() => {}}
          className={styles.button}
        />
        <div className={styles.signUpRedirectContainer}>
          {"Don’t have an account?"}{" "}
          <span className={styles.SignUpLink}>{"Sign Up"}</span>
        </div>
      </>
    </FormContainer>
  );
};

export default SignIn;
