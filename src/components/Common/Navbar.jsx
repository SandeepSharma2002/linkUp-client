import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../Store/Slices/UserSlice";
import Post from "../../Services/Post/Post";
import { LuDoorOpen } from "react-icons/lu";
import { Notification } from "./Notification";

export const Navbar = () => {
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
    setShowNotifications(!showNotifications)
    !showNotifications && Post.getNotifications({})
      .then((res) => {
        console.log(res.data);
        setNotificationsData(res.data.data);
      })
      .catch((err) => console.log(err));
  }


  return (

    <header class="fixed w-full h-16 z-40 left-0 top-0 border-b border-gray-dark flex justify-end items-center bg-gray-light px-4 py-4 sm:flex-row">
        <ul class="mt-4 space-x-6 sm:mx-5 sm:mt-0 flex">
          <li class="">
            <Link
              to="/profile"
              class="flex h-8 w-8 items-center justify-center rounded-xl border text-text-l-500 hover:text-black hover:shadow"
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
            <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-text-l-500 hover:text-black hover:shadow">
              <FaRegBell
                size={20}
                onClick={() => getNotifications()}
              />
            </button>
            {
              showNotifications && <Notification/>
            }
          </li>
          <li class="">
            <button
              onClick={handleSignOut}
              class="flex h-8 w-8 items-center justify-center rounded-xl border text-text-l-500 hover:text-black hover:shadow"
            >
              <LuDoorOpen size={20} />
            </button>
          </li>
        </ul>
    </header>
  );
};
