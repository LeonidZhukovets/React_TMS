import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Reducers/themeReducer";
import postsReducer from "./Reducers/postsReducer";
import imageReducer from "./Reducers/imageReducer";

export const store = configureStore({
  reducer: { themeReducer, postsReducer, imageReducer },
});

export type RootState = ReturnType<typeof store.getState>;
