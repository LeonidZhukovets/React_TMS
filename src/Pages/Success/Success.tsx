import React from "react";
import Button, { ButtonTypes } from "../../Components/Button";

import FormContainer from "../../Components/FormContainer";

//@ts-ignore
import styles from "./Success.module.css";

const Success = () => {
  return (
    <FormContainer title={"Success"}>
      <>
        <div className={styles.container}>
          <div className={styles.description}>
            Email confirmed. <br /> Your registration is now completed
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

export default Success;
