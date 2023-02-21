import { all } from "redux-saga/effects";
import userSaga from "./saga/user";
import counterSaga from "./saga/counter";

export default function* rootSaga() {
  yield all([userSaga(), counterSaga()]);
}
