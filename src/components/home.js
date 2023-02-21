import React from "react";
import wrapComp from "./wrapcomp";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { increment, decrement } from "../store/action/counter";
import { userName } from "../store/action/user";

const Home = (props) => {
  const data = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const handleIncrement = (e) => {
    dispatch(increment(data.counter.count + 1));
  };
  const handleDecrement = (e) => {
    dispatch(decrement(data.counter.count - 1));
  };
  const changeName = () => dispatch(userName("Priya Dixit"));

  return (
    <div>
      <h5>Home {props.name}</h5>
      <h3>{data.user.name}</h3>
      <h3>{data.counter.count}</h3>
      <button onClick={handleIncrement}> Increment </button>
      <button onClick={handleDecrement}> Decrement </button>
      <button onClick={changeName}> Change Name </button>
    </div>
  );
};

export default wrapComp(Home);
