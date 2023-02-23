import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CardsListType,
  CardType,
  LikeStatus,
  SetLikeStatusPayload,
} from "../../constants/@types";
import { GetPostsPayload } from "../Types/posts";

type PostsReducerState = {
  selectedPost: CardType | null;
  isSelectedPostModalOpened: boolean;
  likedPosts: CardsListType;
  disLikedPosts: CardsListType;
  savedPosts: CardsListType;
  allPosts: CardsListType;
  myPosts: CardsListType;
  singlePost: CardType | null;
  isPostsLoading: boolean;
  isMyPostsLoading: boolean;
  totalCount: number;
};

const initialState: PostsReducerState = {
  selectedPost: null,
  isSelectedPostModalOpened: false,
  likedPosts: [],
  disLikedPosts: [],
  savedPosts: [],
  allPosts: [],
  myPosts: [],
  singlePost: null,
  isPostsLoading: false,
  isMyPostsLoading: false,
  totalCount: 0,
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
    setSavedStatus: (state, action: PayloadAction<CardType>) => {
      const card = action.payload;
      const savedPostsIndex = state.savedPosts.findIndex(
        (post) => post.id === card.id
      );
      if (savedPostsIndex === -1) {
        state.savedPosts.push(card);
      } else {
        state.savedPosts.splice(savedPostsIndex, 1);
      }
    },
    getPosts: (state, action: PayloadAction<GetPostsPayload>) => {},
    setPosts: (state, action: PayloadAction<CardsListType>) => {
      state.allPosts = action.payload;
    },
    getMyPosts: (state, action: PayloadAction<undefined>) => {},
    setMyPosts: (state, action: PayloadAction<CardsListType>) => {
      state.myPosts = action.payload;
    },
    getSinglePost: (state, action: PayloadAction<string>) => {},
    setSinglePost: (state, action: PayloadAction<CardType>) => {
      state.singlePost = action.payload;
    },
    setPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.isPostsLoading = action.payload;
    },
    setMyPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.isMyPostsLoading = action.payload;
    },

    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
  },
});

export const {
  setSelectedPost,
  setSelectedPostModalVisible,
  setLikedStatus,
  setSavedStatus,
  getPosts,
  setPosts,
  getMyPosts,
  setMyPosts,
  getSinglePost,
  setSinglePost,
  setPostsLoading,
  setMyPostsLoading,
  setTotalCount,
} = postsSlice.actions;

const postsReducer = postsSlice.reducer;
export default postsReducer;
