import {
  USER,
  USER_LIST_GO,
  GET_USER_GO,
  GET_USER_YES,
  USER_LIST_YES
} from "../constant";

const initialState = {
  name: "priti gupta",
  userList: null,
  user: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      const name = action.payload;
      return {
        ...state,
        name: name
      };
    case USER_LIST_GO:
      console.warn(action.type, "actions ");
      return {
        ...state
      };
    case USER_LIST_YES:
      const userList = action.payload;
      console.log("userList", userList);
      return {
        ...state,
        userList
      };
    case GET_USER_GO:
      return {
        ...state
      };
    case GET_USER_YES:
      const user = action.payload;
      return {
        ...state,
        user
      };
    default:
      return state;
  }
};
