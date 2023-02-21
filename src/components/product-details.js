import React, { useEffect, useState, useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getUser } from "../store/action/user";

import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  let params = useParams();
  const dispatch = useDispatch();
  const state = useSelector(
    ({ user }) => ({
      ...user
    }),
    shallowEqual
  );

  //const user = data.user.userList && data.user.userList.filter((cur, ind, arr) => data.user.userList.indexOf(cur) === params.id)

  return (
    <div>
      {state.user && (
        <h5>
          {state.user.id} {state.user.username}
        </h5>
      )}

      <h4>Website e</h4>
    </div>
  );
};

export default ProductDetails;
