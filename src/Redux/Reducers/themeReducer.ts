import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../../constants/@types";

const initialState = {
  theme: Theme.Light,
};

const themeSlice = createSlice({
  name: "themeReducer",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

const themeReducer = themeSlice.reducer;
export default themeReducer;
