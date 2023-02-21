import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";

function* getCount(action) {
  try {
    const user = yield call(
      "https://jsonplaceholder.typicode.com/users/1",
      action.payload
    );
    console.log("saga count", user);
  } catch (e) {
    console.log(e);
  }
}

function* counterSaga() {
  yield takeLatest("INCREMENT", getCount);
}

export default counterSaga;
