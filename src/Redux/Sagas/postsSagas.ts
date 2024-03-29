import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  getPosts,
  setPosts,
  getSinglePost,
  setSinglePost,
  setPostsLoading,
  setMyPostsLoading,
  setMyPosts,
  getMyPosts,
  setTotalCount,
} from "../Reducers/postsReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import API from "../utils/api";
import callCheckingAuth from "./callCheckingAuth";
import { GetPostsPayload } from "../Types/posts";

function* getPostsWorker(action: PayloadAction<GetPostsPayload>) {
  const { offset, search, ordering } = action.payload;
  yield put(setPostsLoading(true));
  const { ok, data, problem } = yield call(
    API.getAllPosts,
    offset,
    search,
    ordering
  );
  if (ok && data) {
    yield put(setPosts(data.results));
    yield put(setTotalCount(data.count));
  } else {
    console.warn("Error fetching all posts: ", problem);
  }
  yield put(setPostsLoading(false));
}

function* getMyPostsWorker(action: PayloadAction<undefined>) {
  yield put(setMyPostsLoading(true));
  const { ok, data, problem, status } = yield callCheckingAuth(API.getMyPosts);
  if (ok && data) {
    yield put(setMyPosts(data));
  } else if (status === 404) {
    yield put(setMyPosts([]));
  } else {
    console.warn("Error fetching my posts: ", problem);
  }
  yield put(setMyPostsLoading(false));
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  const { ok, data, problem } = yield call(API.getSinglePost, action.payload);
  if (ok && data) {
    yield put(setSinglePost(data));
  } else {
    console.warn("Error fetching single post: ", problem);
  }
}

export default function* postSaga() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(getMyPosts, getMyPostsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
  ]);
}
