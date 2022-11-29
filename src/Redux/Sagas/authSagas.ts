import { takeLatest } from "redux-saga/effects";
import { registerUser } from "../Reducers/authReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { RegisterUserPayload } from "../Types/auth";

function* registerUserWorker(action: PayloadAction<RegisterUserPayload>) {}

function* authSaga() {
  yield takeLatest(registerUser, registerUserWorker);
}
