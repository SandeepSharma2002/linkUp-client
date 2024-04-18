import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../Store/Slices/UserSlice";
import { Link } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { RiWechatLine } from "react-icons/ri";
import { LuDoorOpen } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { CreatePostModal } from "../Modals/CreatePostModal";
import logo from "../../imgs/logo-transparent.png";
import User from "../../Services/User/User";
import { FriendUserCard } from "./FriendUserCard";

export const SideBar = () => {
  const { username, image, isLoggedIn, email } = useSelector(
    (state) => state.User
  );
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("");
  const [selectedTab, setSelectedTab] = useState("Home");
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logOutUser());
  };
  const SidebarTabs = [
    {
      label: "Dashboard",
      icon: <IoCubeOutline size={20} />,
      to: "/dashboard",
    },
    {
      label: "Search",
      icon: <IoIosSearch size={20} />,
      to: "/search",
    },
    {
      label: "Chat",
      icon: <RiWechatLine size={20} />,
      to: "/chat",
    },
    {
      label: "Notifications",
      icon: <FaRegBell size={20} />,
      to: "/notifications",
    },
  ];

  const getUsers = () => {
    User.getUsers({})
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <aside class="fixed z-40 lg:relative dark:bg-gray-700 dark:border-gray-600">
        <input type="checkbox" class="peer hidden" id="sidebar-open" />
        <label
          class=" peer-checked:rounded-full peer-checked:p-2 min-w-full peer-checked:left-56 transition-all duration-200 absolute top-8 -translate-y-1/2 z-50 mx-5 cursor-pointer lg:hidden"
          htmlFor="sidebar-open"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Sidebar Navigation"
          class="peer-checked:w-72 pb-16 left-0 z-10 flex h-screen w-0 border-r border-slate-200 flex-col overflow-hidden bg-slate-100 text-white dark:bg-gray-700 dark:border-gray-600 transition-all lg:h-screen lg:w-72"
        >
          <Link to="/" class="my-4 mx-auto text-black">
            <img src={logo} alt="" srcset="" className="h-28" />
          </Link>
          <h3 className="mt-10 text-3xl text-sky-600 font-medium pl-4">Friends List</h3>
          <div className="flex flex-col gap-4 mt-2 px-4">
            {users.map((user) => (
              <FriendUserCard user={user} key={user.username} />
            ))}
          </div>
          <ul class="mt-8 space-y-3 md:mt-20">
            {/* {SidebarTabs.map((tab) => (
              <li
                class="relative"
                onClick={() => setSelectedTab(tab.label)}
                key={tab.label}
              >
                <Link
                  // to={tab.to}
                  class={` flex w-full space-x-2  px-10 py-4 text-gray-600 dark:text-white focus:outline-none ${
                    selectedTab === tab.label
                      ? " bg-blue-600 rounded-none text-white hover:bg-blue-700"
                      : "hover:bg-blue-400 hover:text-white"
                  }`}
                >
                  {tab.icon}
                  <span class="0.">{tab.label}</span>
                </Link>
              </li>
            ))} */}
          </ul>

          <div class="my-6 mt-auto ml-10 flex cursor-pointer">
            <img class="h-12 w-12 rounded-full" src={image} />
            <div class="ml-3">
              <p class="font-medium text-black dark:text-white">{username}</p>
              <p class="text-sm text-gray-600 dark:text-white">{email}</p>
            </div>
            <button
              class={` flex w-fit ml-auto pr-4 space-x-2 h-fit text-gray-600 dark:text-white focus:outline-none hover:text-gray-900`}
            >
              <LuDoorOpen onClick={handleSignOut} size={36} />
            </button>
          </div>
        </nav>
      </aside>

      {showModal && <CreatePostModal setShowModal={setShowModal} mode={mode} />}
    </>
  );
};
