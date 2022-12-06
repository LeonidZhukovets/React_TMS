import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  activateUser,
  registerUser,
  setLoggedIn,
  setUserData,
  signInUser,
  getUserData,
} from "../Reducers/authReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  ActivateUserPayload,
  RegisterUserPayload,
  SignInUserPayload,
} from "../Types/auth";
import API from "../utils/api";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../constants/consts";

function* registerUserWorker(action: PayloadAction<RegisterUserPayload>) {
  const { data: registerData, callback } = action.payload;
  const { ok, problem } = yield call(API.registerUser, registerData);
  if (ok) {
    callback();
  } else {
    console.warn("Error while registering user", problem);
  }
}
function* activateUserWorker(action: PayloadAction<ActivateUserPayload>) {
  const { data: activateData, callback } = action.payload;
  const { ok, problem } = yield call(API.activateUser, activateData);
  if (ok) {
    callback();
  } else {
    console.warn("Error while registering user", problem);
  }
}

function* signInUserWorker(action: PayloadAction<SignInUserPayload>) {
  const { data: signInData, callback } = action.payload;
  const { ok, problem, data } = yield call(API.signInUser, signInData);
  if (ok) {
    localStorage.setItem(ACCESS_TOKEN_KEY, data?.access);
    localStorage.setItem(REFRESH_TOKEN_KEY, data?.refresh);
    yield put(setLoggedIn(true));
    callback();
  } else {
    console.warn("Error while sign in", problem);
  }
}

function* getUserDataWorker() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) || "";

  const { ok, problem, data } = yield call(API.getUserInfo, accessToken);
  if (ok && data) {
    yield put(setUserData(data.username));
  } else {
    console.warn("Error while getting user info", problem);
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(registerUser, registerUserWorker),
    takeLatest(activateUser, activateUserWorker),
    takeLatest(signInUser, signInUserWorker),
    takeLatest(getUserData, getUserDataWorker),
  ]);
}
