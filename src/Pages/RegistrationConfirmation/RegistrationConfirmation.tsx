import React from "react";
import Button, { ButtonTypes } from "../../Components/Button";

import FormContainer from "../../Components/FormContainer";

//@ts-ignore
import styles from "./RegistrationConfirmation.module.css";

const RegistrationConfirmation = () => {
  return (
    <FormContainer title={"Registration Confirmation"}>
      <>
        <div className={styles.container}>
          <div className={styles.description}>
            Please activate your account with the activation <br />
            link in the email{" "}
            <span className={styles.email}>example@gmail.com.</span> <br />{" "}
            Please, check your email
          </div>
          <Button
            title={"Go to home"}
            type={ButtonTypes.Primary}
            onClick={() => {}}
            className={styles.button}
          />
        </div>
      </>
    </FormContainer>
  );
};

export default RegistrationConfirmation;
