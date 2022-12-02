import { takeLatest, all, call } from "redux-saga/effects";
import { activateUser, registerUser } from "../Reducers/authReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { ActivateUsePayload, RegisterUserPayload } from "../Types/auth";
import API from "../utils/api";

function* registerUserWorker(action: PayloadAction<RegisterUserPayload>) {
  const { data: registerData, callback } = action.payload;
  const { ok, problem } = yield call(API.registerUser, registerData);
  if (ok) {
    callback();
  } else {
    console.warn("Error while registering user", problem);
  }
}
function* activateUserWorker(action: PayloadAction<ActivateUsePayload>) {
  const { data: registerData, callback } = action.payload;
  const { ok, problem } = yield call(API.activateUser, registerData);
  if (ok) {
    callback();
  } else {
    console.warn("Error while registering user", problem);
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(registerUser, registerUserWorker),
    takeLatest(activateUser, activateUserWorker),
  ]);
}
