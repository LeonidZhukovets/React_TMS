import React from "react";
import Modal from "react-modal";
import styles from "./SelectedImageModal.module.css";

import { useDispatch, useSelector } from "react-redux";
import ImageSelectors from "../../../Redux/Selectors/imageSelectors";

import Image from "../../../Components/Image";
import { setSelectedImageModalVisible } from "../../../Redux/Reducers/imageReducer";
import { ModalClosedIcon } from "../../../Assets";

const SelectedImageModal = () => {
  const customStyles = {
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
  const SelectedImage = useSelector(ImageSelectors.getSelectedImage);
  const isVisible = useSelector(ImageSelectors.getSelectedImageModalVisible);

  const dispatch = useDispatch();

  const OnClose = () => {
    dispatch(setSelectedImageModalVisible(false));
  };
  return (
    <>
      {SelectedImage && (
        <Modal isOpen={isVisible} onRequestClose={OnClose} style={customStyles}>
          {/*<Image src={SelectedImage} alt={""} />*/}
          <img src={SelectedImage} alt={""} className={styles.img} />
          <div onClick={OnClose} className={styles.closedIcon}>
            <ModalClosedIcon />
          </div>
        </Modal>
      )}
    </>
  );
};

export default SelectedImageModal;
