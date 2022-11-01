import React, { useState, useRef, useEffect } from "react";
import Button, { ButtonTypes } from "../../Components/Button";

import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";

//@ts-ignore
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    if (nameRef.current){
      nameRef.current.focus()
    }
  },[])

  return (
    <FormContainer title={"Sign Up"}>
      <>
        <div className={styles.inputContainer}>
          <Input
            title={"Name"}
            placeholder={"Your Name"}
            value={name}
            onChange={(value: string) => setName(value)}
            ref = {nameRef}
          />
          <Input
            title={"Email"}
            placeholder={"Your email"}
            value={login}
            onChange={(value: string) => setLogin(value)}
          />
          <Input
            title={"Password"}
            placeholder={"Your password"}
            value={password}
            onChange={(value: string) => setPassword(value)}
          />
          <Input
            title={"Confirm Password"}
            placeholder={"Confirm password"}
            value={passwordConfirmation}
            onChange={(value: string) => setPasswordConfirmation(value)}
          />
        </div>

        <Button
          title={"Sign In"}
          type={ButtonTypes.Primary}
          onClick={() => {}}
          className={styles.button}
        />
        <div className={styles.signUpRedirectContainer}>
          {"Already have an account?"}{" "}
          <span className={styles.SignUpLink}>{"Sign In"}</span>
        </div>
      </>
    </FormContainer>
  );
};

export default SignUp;
