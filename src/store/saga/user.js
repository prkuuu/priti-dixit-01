import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import axios from "axios";

function getUserListApi() {
  const resp = axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });

  return resp;
  // return fetch("https://jsonplaceholder.typicode.com/users", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
  //   .then((response) => response.json())
  //   .catch((error) => {
  //     throw error;
  //   });
}

function* getUserList() {
  try {
    let users = yield call(getUserListApi);
    yield put({ type: "USER_LIST_YES", payload: users });
  } catch (e) {
    yield put({ type: "USER_LIST_NO", payload: e.message });
  }
}

function* getUserId(action) {
  let list = (state) => state.user.userList;
  list = yield select(list);

  try {
    const user = list.find((cur, i) => i === action.payload);
    yield put({ type: "GET_USER_YES", payload: user });
  } catch (e) {
    yield put({ type: "GET_USER_NO", payload: e.message });
  }
}

function* userSaga() {
  yield takeLatest("USER_LIST_GO", getUserList);
  yield takeLatest("GET_USER_GO", getUserId);
}

export default userSaga;
