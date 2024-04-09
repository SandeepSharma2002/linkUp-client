import React, { useEffect, useState } from "react";
import { Notification } from "./Notification";
import { FaRegBell } from "react-icons/fa";
import { LuDoorOpen } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../Store/Slices/UserSlice";
import Post from "../../Services/Post/Post";

export const RightSideBar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationsData, setNotificationsData] = useState([]);
  const [toggler2, setToggler2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("");
  const [noticount, setNotiCounts] = useState(0);
  const [update, setUpdate] = useState(false);
  const { image } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logOutUser());
  };

  useEffect(() => {
    Post.getNotificationsCount()
      .then((res) => {
        setNotiCounts(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getNotifications = () => {
    setShowNotifications(!showNotifications);
    !showNotifications &&
      Post.getNotifications({})
        .then((res) => {
          console.log(res.data);
          setNotificationsData(res.data.data);
        })
        .catch((err) => console.log(err));
  };
  return (
    <aside class="relative z-30  border-l border-slate-200 bg-slate-100 w-72 hidden md:flex flex-col">
      <ul class="flex justify-center items-center mt-4 space-x-6 sm:mt-0 h-16 border-b border-slate-200">
        <li class="">
          <Link
            to="/profile"
            class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        </li>
        <li class="relative">
          <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
            <FaRegBell size={20} onClick={() => getNotifications()} />
          </button>
          {showNotifications && <Notification />}
        </li>
        <li class="">
          <button
            onClick={handleSignOut}
            class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow"
          >
            <LuDoorOpen size={20} />
          </button>
        </li>
      </ul>
      <div class="relative mx-auto flex justify-between rounded-md my-4">
        <svg
          class="absolute left-2 top-3 ml-2 block h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8" class=""></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
        </svg>
        <input
          type="name"
          name="search"
          class="h-12 w-full rounded-md border border-gray-100 bg-white py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
          placeholder="Search for anything"
        />
      </div>
    </aside>
  );
};
