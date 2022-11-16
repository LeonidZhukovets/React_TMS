import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import styles from "./SignIn.module.css";
import Button, { ButtonTypes } from "../../Components/Button";
import { PathNames } from "../Router/Router";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
          <NavLink to={PathNames.SignUp} className={styles.SignUpLink}>
            {"Sign Up"}
          </NavLink>
        </div>
      </>
    </FormContainer>
  );
};

export default SignIn;
