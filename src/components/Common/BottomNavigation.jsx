import React, { useEffect, useState } from "react";
import { TiHome } from "react-icons/ti";
import { GoBellFill } from "react-icons/go";
import { BsPlusCircleFill } from "react-icons/bs";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const BottomNavigation = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Home");
  let pathname = window.location.pathname;

  useEffect(() => {
    if (pathname === "/") setSelectedTab("Home");
    else if (pathname === "/notifications") setSelectedTab("Notifications");
    else if (pathname === "/profile") setSelectedTab("Profile");
    else if (pathname === "/chats") setSelectedTab("Chats");
  }, [pathname]);

  return (
    <div
      class={`fixed bottom-0 w-full lg:bottom-2 md:w-[65%] lg:left-1/2 lg:-translate-x-1/2 z-50 lg:w-fit lg:rounded-full h-16 bg-white border border-gray-dark dark:bg-bg-dark-1 dark:border-text-l-500 ${
        !showEditor && "overflow-hidden"
      }
    `}
    >
      <div class="grid h-full max-w-lg grid-cols-5 mx-auto font-medium dark:text-white">
        <Link
          onClick={() => {
            setSelectedTab("Home");
            setShowEditor(false);
          }}
          to="/"
          class="inline-flex flex-col items-center justify-center px-2 xl:px-5 border-gray-dark border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-text-l-500"
        >
          <TiHome
            size={20}
            className={`group-hover:text-primary-600 transition-all duration-200 group-hover:scale-110 ${
              selectedTab === "Home" ? "text-primary-600 scale-110" : ""
            }`}
          />
          <span
            class={`text-sm text-gray-500 dark:text-gray-400 transition-all duration-200 group-hover:scale-110 group-hover:text-primary-600 dark:group-hover:text-blue-500 ${
              selectedTab === "Home" ? "text-primary-600 scale-110" : ""
            }`}
          >
            Home
          </span>
        </Link>

        <Link
          onClick={() => {
            setSelectedTab("Notifications");
            setShowEditor(false);
          }}
          to="/notifications"
          class="inline-flex flex-col items-center justify-center px-2 xl:px-5 border-e border-gray-dark hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-text-l-500"
        >
          <GoBellFill
            size={20}
            className={`group-hover:text-primary-600 transition-all duration-200 group-hover:scale-110 ${
              selectedTab === "Notifications" ? "text-primary-600 scale-110" : ""
            }`}
          />
          <span
            class={`text-sm text-gray-500 dark:text-gray-400 transition-all duration-200 group-hover:scale-110 group-hover:text-primary-600 dark:group-hover:text-blue-500 ${
              selectedTab === "Notifications" ? "text-primary-600 scale-110" : ""
            }`}
          >
            Notifications
          </span>
        </Link>
        <Link
        onClick={() => {
          setSelectedTab("AddPost");
          setShowEditor(false);
        }}
        to="/create-post"
          class="inline-flex flex-col items-center justify-center px-2 xl:px-5 border-e text-primary-600 border-gray-dark hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-text-l-500 group"
        >
          <BsPlusCircleFill
            size={36}
            className={`group-hover:ring-4 transition-all duration-200 group-hover:scale-110 rounded-full ring-primary-500/20 ${
              selectedTab ==="AddPost" ? "ring-4 scale-110" : ""
            } `}
          />
        </Link>
        <Link
          onClick={() => {
            setSelectedTab("Chats");
            setShowEditor(false);
          }}
          to="/chats"
          class="inline-flex flex-col items-center justify-center px-2 xl:px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <IoChatbubblesSharp
            size={20}
            className={`group-hover:text-primary-600 transition-all duration-200 group-hover:scale-110 ${
              selectedTab === "Chats" ? "text-primary-600 scale-110" : ""
            }`}
          />
          <span
            class={`text-sm text-gray-500 dark:text-gray-400 transition-all duration-200 group-hover:scale-110 group-hover:text-primary-600 dark:group-hover:text-blue-500 ${
              selectedTab === "Chats" ? "text-primary-600 scale-110" : ""
            }`}
          >
            Chats
          </span>
        </Link>
        <Link
          onClick={() => {
            setSelectedTab("Profile");
            setShowEditor(false);
          }}
          to="/profile"
          class="inline-flex flex-col items-center justify-center px-2 xl:px-5 border-gray-dark hover:bg-gray-50 dark:hover:bg-gray-800 group border-x dark:border-text-l-500"
        >
          <FaCircleUser
            size={20}
            className={`group-hover:text-primary-600 transition-all duration-200 group-hover:scale-110 ${
              selectedTab === "Profile" ? "text-primary-600 scale-110" : ""
            }`}
          />
          <span
            class={`text-sm text-gray-500 dark:text-gray-400 transition-all duration-200 group-hover:scale-110 group-hover:text-primary-600 dark:group-hover:text-blue-500 ${
              selectedTab === "Profile" ? "text-primary-600 scale-110" : ""
            }`}
          >
            Profile
          </span>
        </Link>
      </div>
    </div>
  );
};
