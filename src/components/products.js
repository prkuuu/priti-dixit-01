import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getUserList, getUser } from "../store/action/user";
import styles from "../styles.css";
import {
  useSearchParams,
  useLocation,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";
//import { push } from "connected-react-router";

const Products = (props) => {
  const user = useSelector(
    ({ user }) => ({
      ...user,
      userList: user.userList
    }),
    shallowEqual
  );
  // const user = useSelector(
  //   ({ user: { user } }) => ({ ...user}),
  //   shallowEqual
  // );
  const location = useLocation();
  let navigate = useNavigate();
  let params = useParams();

  const [items, setItems] = useState(null);
  const dispatch = useDispatch();

  const grid = {
    padding: "20px",
    color: "#44014C",
    list: {
      display: "flex",
      item: {
        flex: "1",
        padding: "10px",
        border: "1px solid grey",
        marginTop: "-1px"
      }
    }
  };

  // const getProducts = useCallback(async () => {
  //   const response = await axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .catch((err) => err);
  //   dispatch(getUserList(response.data));
  // }, [dispatch]);

  // useEffect(() => {
  //   getProducts();
  // }, [getProducts]);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  const handleList = (id) => {
    navigate(`${location.pathname}/${id}`);
    dispatch(getUser(id));
  };

  console.log("state", user);

  return (
    <div style={grid}>
      {user.userList &&
        user.userList.map((item) => (
          <div
            onClick={() => handleList(item.id)}
            style={grid.list}
            key={item.id}
            user={item}
          >
            <div style={grid.list.item}> {item.name}</div>
            <div style={grid.list.item}>{item.email}</div>
            <div style={grid.list.item}>{item.username}</div>
          </div>
        ))}
    </div>
  );
};

export default Products;
