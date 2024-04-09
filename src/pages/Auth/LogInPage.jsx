import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LogInForm } from "../../components/Auth/LogInForm";

export const LogInPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, access_token } = useSelector((state) => state.User);

  useEffect(() => {
    if (access_token !== null || isLoggedIn === true) {
      return navigate("/home");
    }
  }, [navigate, isLoggedIn, access_token]);

  return <LogInForm />;
};
