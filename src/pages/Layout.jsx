import React, { useEffect } from "react";
import { SideBar } from "../components/Common/SideBar";
import { Navbar } from "../components/Common/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BottomNavigation } from "../components/Common/BottomNavigation";

export const Layout = () => {
  const navigate = useNavigate();
  const { isLoggedIn, access_token } = useSelector((state) => state.User);

  useEffect(() => {
    if (access_token === null || isLoggedIn === false) {
      return navigate("/signin");
    }
  }, [navigate, isLoggedIn, access_token]);

  // useEffect(() => {
  //   if (window.location.pathname === "/") {
  //     navigate("/");
  //   }
  // }, [navigate]);

  return (
    <div className="flex w-screen h-screen overflow-x-hidden">
      {/* <Navbar /> */}
      <SideBar />
      <div className="flex flex-1 w-full flex-col mb-16">
        <Outlet />
      </div>
      <BottomNavigation />
    </div>
  );
};
