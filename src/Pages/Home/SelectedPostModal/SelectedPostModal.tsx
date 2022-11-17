import React from "react";
import Card from "../../../Components/Card";
import { CardSize } from "../../../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import PostsSelectors from "../../../Redux/Selectors/PostsSelectors";
import { setSelectedPostModalVisible } from "../../../Redux/Reducers/postsReducer";
import styles from "./SelectedPostModal.module.css";
import Modal from "../../../Components/Modal";

const SelectedPostModal = () => {
  const selectedPost = useSelector(PostsSelectors.getSelectedPost);
  const isVisible = useSelector(PostsSelectors.getSelectedPostModalVisible);

  const dispatch = useDispatch();

  const OnClose = () => {
    dispatch(setSelectedPostModalVisible(false));
  };
  return (
    selectedPost && (
      <Modal isOpen={isVisible} onRequestClose={OnClose}>
        <div className={styles.container}>
          <Card isFromModal size={CardSize.Large} card={selectedPost} />
        </div>
      </Modal>
    )
  );
};

export default SelectedPostModal;
