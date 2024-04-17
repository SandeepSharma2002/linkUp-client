import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChatComp } from "../../components/Chat/Chat";

export const ChatPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, access_token } = useSelector((state) => state.User);

  useEffect(() => {
    if (access_token === null || isLoggedIn === false) {
      return navigate("/signin");
    }
  }, [navigate, isLoggedIn, access_token]);

  return <ChatComp />;
};
