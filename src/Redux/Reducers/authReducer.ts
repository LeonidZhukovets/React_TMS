import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ActivateUserPayload,
  RegisterUserPayload,
  SignInUserPayload,
} from "../Types/auth";
import { ACCESS_TOKEN_KEY } from "../../constants/consts";

const INITIAL_STATE = {
  isLoggedIn: !!localStorage.getItem(ACCESS_TOKEN_KEY),
  userName: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUserPayload>) => {},
    activateUser: (state, action: PayloadAction<ActivateUserPayload>) => {},
    signInUser: (state, action: PayloadAction<SignInUserPayload>) => {},
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    getUserData: (state, action: PayloadAction<undefined>) => {},
    setUserData: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});
export const {
  registerUser,
  activateUser,
  signInUser,
  setLoggedIn,
  getUserData,
  setUserData,
} = authSlice.actions;

export default authSlice.reducer;
