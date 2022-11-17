import React, { FC } from "react";
import ReactModal, { Props } from "react-modal";
import styles from "./Modal.module.css";
import { ModalClosedIcon } from "../../Assets";

const CUSTOM_STYLES = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(38, 34, 47, 0.5)",
  },
};

const Modal: FC<Props> = (props) => {
  return (
    <ReactModal style={{ ...CUSTOM_STYLES, ...props.style }} {...props}>
      {props.children}
      <div onClick={props.onRequestClose} className={styles.closedIcon}>
        <ModalClosedIcon />
      </div>
    </ReactModal>
  );
};

export default Modal;
