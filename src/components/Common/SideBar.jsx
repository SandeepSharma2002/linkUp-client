import React, { useState } from "react";
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

export const SideBar = () => {
  const { username, image, isLoggedIn, email } = useSelector(
    (state) => state.User
  );
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("");
  const [selectedTab, setSelectedTab] = useState("Home");

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
  return (
    <>
      <aside class="fixed z-50 lg:relative ">
        <input type="checkbox" class="peer hidden" id="sidebar-open" />
        <label
          class="peer-checked:rounded-full peer-checked:p-2 min-w-full peer-checked:left-56 transition-all duration-200 absolute top-8 -translate-y-1/2 z-50 mx-5 cursor-pointer lg:hidden"
          for="sidebar-open"
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
          class="peer-checked:w-72 left-0 z-10 flex h-screen w-0 border-r border-slate-200 flex-col overflow-hidden bg-slate-100 text-white transition-all lg:h-screen lg:w-72"
        >
          <Link to='/home' class="bg-slate-100 mt-5 py-4 pl-10 lg:mt-10 text-5xl text-black">
            LinkUp
          </Link>
          <ul class="mt-8 space-y-3 md:mt-20">
            {SidebarTabs.map((tab) => (
              <li
                class="relative"
                onClick={() => setSelectedTab(tab.label)}
                key={tab.label}
              >
                <Link
                  // to={tab.to}
                  class={` flex w-full space-x-2  px-10 py-4 text-gray-600 focus:outline-none ${
                    selectedTab === tab.label
                      ? " bg-blue-600 rounded-none text-white hover:bg-blue-700"
                      : "hover:bg-blue-400 hover:text-white"
                  }`}
                >
                  {tab.icon}
                  <span class="0.">{tab.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          

          <div class="my-6 mt-auto ml-10 flex cursor-pointer">
            <div>
              <img class="h-12 w-12 rounded-full" src={image} />
            </div>
            <div class="ml-3">
              <p class="font-medium text-black">{username}</p>
              <p class="text-sm text-gray-600">{email}</p>
            </div>
          </div>
        </nav>
      </aside>
      {/* <div className="h-screen py-3 space-y-2 w-80 glass text-dark-grey hidden md:inline">
        <div className="flex items-center p-2 space-x-4">
          <img
            src={image}
            alt="User Proile"
            className="w-12 h-12 rounded-full bg-gray-500"
          />
          <div>
            <h2 className="text-lg font-semibold">{username}</h2>
            <span className="flex items-center space-x-1">
              <p className="text-xs hover:underline text-gray-400">{email}</p>
            </span>
          </div>
        </div>
        <div className="divide-y divide-grey transition-all duration-500">
          <ul className="pt-2 pb-4 space-y-1 text-xl text-white">
            {SidebarTabs.map((tab) => (
              <li
                className={`border-transparent border-l-4 ${
                  selectedTab === tab.label ?
                  "border-l-heading-d bg-white/10 text-heading-d font-semibold":"hover:bg-white/10  hover:border-heading-d hover:text-grey hover:font-semibold "
                }`}
                onClick={() => setSelectedTab(tab.label)}
                key={tab.label}
              >
                <Link
                  rel="noopener noreferrer"
                  to={tab.to}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="pt-4 pb-2 flex flex-col space-y-1 text-xl h-full text-white">
            <li
    
              className={`border-transparent border-l-4 ${
                selectedTab === "Settings" ?
                "border-l-heading-d bg-white/10 text-heading-d font-semibold":"hover:bg-white/10  hover:border-heading-d hover:text-grey hover:font-semibold "
              }`}
              
              onClick={() => setSelectedTab("Settings")}
            >
              <Link
                rel="noopener noreferrer"
                to="/user/settings"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <IoSettings size={20} />
                <span>Settings</span>
              </Link>
            </li>
            <li
              className={`border-transparent border-l-4 ${
                selectedTab === "Contact" ?
                "border-l-heading-d bg-white/10 text-heading-d font-semibold":"hover:bg-white/10  hover:border-heading-d hover:text-grey hover:font-semibold "
              }`}
              onClick={() => setSelectedTab("Contact")}
            >
              <Link
                rel="noopener noreferrer"
                to="/contact-us"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <GrContact size={20} />
                <span>Contact Us</span>
              </Link>
            </li>
            <li className="hover:bg-white/10 border-l-4 border-transparent hover:border-heading-d hover:text-grey hover:font-semibold">
              <button
                onClick={handleSignOut}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <LuDoorOpen size={20} />
                <span>Logout</span>
              </button>
            </li>

            <li className="mx-2">
              <button
                type="button"
                onClick={() => {
                  setShowModal(true);
                  setMode("add");
                }}
                className="flex gap-2 mt-4 items-center justify-center bg-btn-color text-white w-full mb-4 px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 mx-auto disabled:bg-opacity-70 text-center"
              >
                <TfiWrite className="text-black" size={20} />{" "}
                <span>New Feed</span>
              </button>
            </li>
          </ul>
        </div>
      </div> */}
      {showModal && <CreatePostModal setShowModal={setShowModal} mode={mode} />}
    </>
  );
};
