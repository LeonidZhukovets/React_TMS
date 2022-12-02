import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivateUsePayload, RegisterUserPayload } from "../Types/auth";

const INITIAL_STATE = {};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUserPayload>) => {},
    activateUser: (state, action: PayloadAction<ActivateUsePayload>) => {},
  },
});
export const { registerUser, activateUser } = authSlice.actions;

export default authSlice.reducer;
