import { INCREMENT, DECREMENT } from "../constant";

const initialState = {
  name: "priti",
  profile: "frontend",
  skils: "react redux",
  count: 3
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        name: "Dixit",
        count: action.payload
      };
    case DECREMENT:
      return {
        ...state,
        name: "Dixit",
        count: action.payload
      };
    default:
      return state;
  }
};
