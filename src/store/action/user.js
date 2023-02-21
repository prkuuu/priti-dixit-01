import { USER, USER_LIST_GO, GET_USER_GO } from "../constant";

export const userName = (name) => {
  return {
    type: USER,
    payload: name
  };
};

export const getUserList = () => {
  return {
    type: USER_LIST_GO
  };
};

export const getUser = (Id) => {
  return {
    type: GET_USER_GO,
    payload: Id
  };
};
