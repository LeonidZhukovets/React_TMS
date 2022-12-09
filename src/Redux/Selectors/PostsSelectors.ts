import { RootState } from "../store";

export default {
  getSelectedPost: (state: RootState) => state.postsReducer.selectedPost,
  getSelectedPostModalVisible: (state: RootState) =>
    state.postsReducer.isSelectedPostModalOpened,
  getLikedPost: (state: RootState) => state.postsReducer.likedPosts,
  getDislikedPost: (state: RootState) => state.postsReducer.disLikedPosts,
  getSavedPost: (state: RootState) => state.postsReducer.savedPosts,
  getAllPosts: (state: RootState) => state.postsReducer.allPosts,
  getSinglePost: (state: RootState) => state.postsReducer.singlePost,
  getPostsLoading: (state: RootState) => state.postsReducer.isPostsLoading,
};
