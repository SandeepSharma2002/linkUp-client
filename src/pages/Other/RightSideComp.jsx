import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CreatePost from "../../components/Post/CreatePost";
import { RightSideBar } from "../../components/Common/RightSideBar";

export const RightSideComp = () => {
  const navigate = useNavigate();
  const { isLoggedIn, access_token } = useSelector((state) => state.User);

  useEffect(() => {
    if (access_token === null || isLoggedIn === false) {
      return navigate("/signin");
    }
  }, [navigate, isLoggedIn, access_token]);

  return <RightSideBar />;
};
