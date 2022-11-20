import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CardsListType,
  CardType,
  LikeStatus,
  SetLikeStatusPayload,
} from "../../constants/@types";

type PostsReducerState = {
  selectedPost: CardType | null;
  isSelectedPostModalOpened: boolean;
  likedPosts: CardsListType;
  disLikedPosts: CardsListType;
  savedPosts: CardsListType;
};

const initialState: PostsReducerState = {
  selectedPost: null,
  isSelectedPostModalOpened: false,
  likedPosts: [],
  disLikedPosts: [],
  savedPosts: [],
};

const postsSlice = createSlice({
  name: "postsReducer",
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<CardType | null>) => {
      state.selectedPost = action.payload;
      state.isSelectedPostModalOpened = true;
    },
    setSelectedPostModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isSelectedPostModalOpened = action.payload;
      if (!action.payload) {
        state.selectedPost = null;
      }
    },
    setLikedStatus: (state, action: PayloadAction<SetLikeStatusPayload>) => {
      const { card, likeStatus } = action.payload;

      const isLike = likeStatus === LikeStatus.Like;

      const dislikedIndex = state.disLikedPosts.findIndex(
        (post) => post.id === card.id
      );
      const likedIndex = state.likedPosts.findIndex(
        (post) => post.id === card.id
      );

      const mainArrayKey = isLike ? "likedPosts" : "disLikedPosts";
      const secondaryArrayKey = isLike ? "disLikedPosts" : "likedPosts";
      const mainIndex = isLike ? likedIndex : dislikedIndex;
      const secondaryIndex = isLike ? dislikedIndex : likedIndex;

      if (mainIndex === -1) {
        state[mainArrayKey].push(card);
      } else {
        state[mainArrayKey].splice(mainIndex, 1);
      }
      if (secondaryIndex > -1) {
        state[secondaryArrayKey].splice(secondaryIndex, 1);
      }
    },
  },
});

export const { setSelectedPost, setSelectedPostModalVisible, setLikedStatus } =
  postsSlice.actions;

const postsReducer = postsSlice.reducer;
export default postsReducer;
