/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

import LoadingToRedirect from "./LoadingToRedirect";
import { useEffect, useState } from "react";
import { dummyUser } from "../../data-placeholder";

const UserRoute = ({ children }) => {
  const [stateUser, setStateUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("donatrakUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setStateUser(parsedUser);
      console.log("User---->", parsedUser);
      dispatch({
        type: "LOGGED_IN_USER",
        payload: parsedUser,
      });
    } else {
      setStateUser(dummyUser);
    }
  }, [dispatch]);

  const { user } = useSelector((state) => ({ ...state }));
  let accessToken;
  if (window.localStorage.getItem("donatrakAccessToken")) {
    accessToken = window.localStorage.getItem("donatrakAccessToken");
  }
  return (user && user.role === "user") || accessToken ? (
    <div>{children}</div>
  ) : (
    <LoadingToRedirect to="/login" message="You are not logged in." />
  );
};

export default UserRoute;
