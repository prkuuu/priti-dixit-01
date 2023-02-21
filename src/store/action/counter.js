import { INCREMENT, DECREMENT } from "../constant";

// export const counterFun = {
//   increment: (count) => ({
//     type: INCREMENT,
//     payload: count
//   }),

//   decrement: (count) => ({
//     type: DECREMENT,
//     payload: count
//   })
// };

export const increment = (count) => {
  return {
    type: INCREMENT,
    payload: count
  };
};

export const decrement = (count) => {
  return {
    type: DECREMENT,
    payload: count
  };
};
