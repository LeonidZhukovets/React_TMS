import { all } from "redux-saga/effects";

import authSaga from "./authSagas";
import postSaga from "./postsSagas";

export default function* rootSaga() {
  yield all([authSaga(), postSaga()]);
}
