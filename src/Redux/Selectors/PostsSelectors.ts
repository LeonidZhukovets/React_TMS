import { RootState } from "../store";

export default {
  getSelectedPost: (state: RootState) => state.postsReducer.selectedPost,
  getSelectedPostModalVisible: (state: RootState) =>
    state.postsReducer.isSelectedPostModalOpened,
  getLikedPost: (state: RootState) => state.postsReducer.likedPosts,
  getDislikedPost: (state: RootState) => state.postsReducer.disLikedPosts,
  getSavePost: (state: RootState) => state.postsReducer.savedPosts,
};
