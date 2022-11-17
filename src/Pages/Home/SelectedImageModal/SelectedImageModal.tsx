import React from "react";
import styles from "./SelectedImageModal.module.css";

import { useDispatch, useSelector } from "react-redux";
import ImageSelectors from "../../../Redux/Selectors/imageSelectors";

import { setSelectedImageModalVisible } from "../../../Redux/Reducers/imageReducer";
import Modal from "../../../Components/Modal";

const SelectedImageModal = () => {
  const SelectedImage = useSelector(ImageSelectors.getSelectedImage);
  const isVisible = useSelector(ImageSelectors.getSelectedImageModalVisible);

  const dispatch = useDispatch();

  const OnClose = () => {
    dispatch(setSelectedImageModalVisible(false));
  };
  return (
    <>
      {SelectedImage && (
        <Modal isOpen={isVisible} onRequestClose={OnClose}>
          <img src={SelectedImage} alt={""} className={styles.img} />
        </Modal>
      )}
    </>
  );
};

export default SelectedImageModal;
