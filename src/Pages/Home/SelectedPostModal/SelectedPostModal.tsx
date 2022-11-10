import React from "react";
import Modal from "react-modal";
import Card from "../../../Components/Card";
import { CardSize } from "../../../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import PostsSelectors from "../../../Redux/Selectors/PostsSelectors";
import { setSelectedPostModalVisible } from "../../../Redux/Reducers/postsReducer";

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
        <Card size={CardSize.Large} card={selectedPost} />
      </Modal>
    )
  );
};

export default SelectedPostModal;
