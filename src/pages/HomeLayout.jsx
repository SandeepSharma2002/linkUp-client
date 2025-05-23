import React from "react";
import { RightSideComp } from "./Other/RightSideComp";
import { Outlet, useNavigate } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <div className="flex min-h-full">
      <div className="relative overflow-y-auto min-h-full flex-1 dark:bg-bg-dark-2">
      <Outlet />
      </div>
      <RightSideComp />
    </div>
  );
};
