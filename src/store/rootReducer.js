import { combineReducers } from "redux";

import { counterReducer } from "./reducer/counter";
import { userReducer } from "./reducer/user";

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});
