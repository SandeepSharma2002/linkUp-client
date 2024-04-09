import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SignUpForm } from "../../components/Auth/SignUpForm";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, access_token } = useSelector((state) => state.User);

  useEffect(() => {
    if (access_token !== null || isLoggedIn === true) {
      return navigate("/home");
    }
  }, [navigate, isLoggedIn, access_token]);

  return <SignUpForm />;
};
