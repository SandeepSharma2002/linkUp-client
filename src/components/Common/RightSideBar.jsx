import React, { useEffect, useState } from "react";
import { Notification } from "./Notification";
import { FaRegBell } from "react-icons/fa";
import { LuDoorOpen } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../Store/Slices/UserSlice";
import Post from "../../Services/Post/Post";
import { FaCircleUser } from "react-icons/fa6";
import { PostTags } from "../Post/PostTags";

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
    <aside class="relative z-50  border-l border-slate-200 bg-slate-100 w-72 hidden md:flex flex-col dark:bg-gray-700 dark:border-gray-600">
      <ul class="flex justify-center items-center mt-4 space-x-6 sm:mt-0 h-16 border-b border-slate-200 dark:border-gray-600 dark:text-white">
        <li class="">
          <Link
            to="/profile"
            class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 dark:border-gray-600 dark:text-black hover:text-black hover:shadow"
          >
            <FaCircleUser size={20} />
          </Link>
        </li>
        <li class="relative">
          <Link
            to="/notifications"
            class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 dark:border-gray-600 dark:text-black hover:text-black hover:shadow"
          >
            <FaRegBell size={20} />
          </Link>
        </li>
        <li class="">
          <button
            onClick={handleSignOut}
            class="flex h-8 w-8 items-center justify-center rounded-xl border dark:border-gray-600 text-gray-600 dark:text-black hover:text-black hover:shadow"
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
          class="h-12 w-full rounded-md border border-gray-100 bg-white dark:bg-gray-900 dark:border-gray-600 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
          placeholder="Search for anything"
        />
      </div>
      <PostTags/>
    </aside>
  );
};
