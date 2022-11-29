import { takeLatest, all, call } from "redux-saga/effects";
import { registerUser } from "../Reducers/authReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { RegisterUserPayload } from "../Types/auth";
import API from "../utils/api";

function* registerUserWorker(action: PayloadAction<RegisterUserPayload>) {
  const { ok, data, problem } = yield call(API.registerUser, action.payload);
}

export default function* authSaga() {
  yield all([takeLatest(registerUser, registerUserWorker)]);
}
