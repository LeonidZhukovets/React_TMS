import React, { useState, useRef, useEffect } from "react";
import Button, { ButtonTypes } from "../../Components/Button";
import { NavLink } from "react-router-dom";

import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import { PathNames } from "../Router/Router";
import styles from "./SignUp.module.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Reducers/authReducer";

const SignUp = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const dispatch = useDispatch();

  const onSignUp = () => {
    dispatch(registerUser({ username: name, email: login, password }));
  };

  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  return (
    <FormContainer title={"Sign Up"}>
      <>
        <div className={styles.inputContainer}>
          <Input
            title={"Name"}
            placeholder={"Your Name"}
            value={name}
            onChange={(value: string) => setName(value)}
            ref={nameRef}
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
          title={"Sign Up"}
          type={ButtonTypes.Primary}
          onClick={onSignUp}
          className={styles.button}
        />
        <div className={styles.signUpRedirectContainer}>
          {"Already have an account?"}{" "}
          <NavLink to={PathNames.SignIn} className={styles.SignInLink}>
            {"Sign In"}
          </NavLink>
        </div>
      </>
    </FormContainer>
  );
};

export default SignUp;
