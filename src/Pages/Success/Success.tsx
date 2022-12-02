import React from "react";
import Button, { ButtonTypes } from "../../Components/Button";

import FormContainer from "../../Components/FormContainer";

//@ts-ignore
import styles from "./Success.module.css";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { activateUser } from "../../Redux/Reducers/authReducer";
import { PathNames } from "../Router/Router";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const { uid, token } = useParams();
  console.log(uid, token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onConfirm = () => {
    if (uid && token) {
      dispatch(
        activateUser({
          data: { uid, token },
          callback: () => {
            navigate(PathNames.SignIn);
          },
        })
      );
    }
  };
  return (
    <FormContainer title={"Success"}>
      <>
        <div className={styles.container}>
          <div className={styles.description}>
            {"You need to confirm your email."} <br /> {"Please confirm"}
          </div>
          <Button
            title={"Confirm"}
            type={ButtonTypes.Primary}
            onClick={onConfirm}
            className={styles.button}
          />
        </div>
      </>
    </FormContainer>
  );
};

export default Success;
