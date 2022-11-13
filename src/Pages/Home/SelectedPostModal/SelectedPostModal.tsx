import React from "react";
import Modal from "react-modal";
import Card from "../../../Components/Card";
import { CardSize } from "../../../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import PostsSelectors from "../../../Redux/Selectors/PostsSelectors";
import { setSelectedPostModalVisible } from "../../../Redux/Reducers/postsReducer";
import styles from "./SelectedPostModal.module.css";
import { ModalClosedIcon } from "../../../Assets";

const SelectedPostModal = () => {
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

  const selectedPost = useSelector(PostsSelectors.getSelectedPost);
  const isVisible = useSelector(PostsSelectors.getSelectedPostModalVisible);

  const dispatch = useDispatch();

  const OnClose = () => {
    dispatch(setSelectedPostModalVisible(false));
  };
  return (
    selectedPost && (
      <Modal isOpen={isVisible} onRequestClose={OnClose} style={customStyles}>
        <div className={styles.container}>
          <Card size={CardSize.Large} card={selectedPost} />
        </div>
        <div onClick={OnClose} className={styles.closedIcon}>
          <ModalClosedIcon />
        </div>
      </Modal>
    )
  );
};

export default SelectedPostModal;
