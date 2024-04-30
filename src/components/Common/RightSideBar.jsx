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
import { UserCard } from "./UserCard";
import User from "../../Services/User/User";
import useDebounce from "../../hooks/UseDebounce";

export const RightSideBar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [users, setUsers] = useState([]);
  const [notificationsData, setNotificationsData] = useState([]);
  const [toggler2, setToggler2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("");
  const [noticount, setNotiCounts] = useState(0);
  const [update, setUpdate] = useState(false);
  const { image } = useSelector((state) => state.User);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
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

  const getUsers = () => {
      User.getUsers({})
        .then((res) => {
          setUsers(res.data.data);
        })
        .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      User.searchUsers({ query: debouncedSearchTerm, skip: 0, limit: 10 })
        .then((res) => {
          setUsers(res.data.data);
          res.data.data.length === 0 && toast.error("No results founds.");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else getUsers();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <aside class="relative z-50 px-4 h-screen  border-l border-gray-dark bg-gray-light w-[35%] lg:w-72 hidden md:flex flex-col dark:bg-bg-dark-1 dark:border-text-l-500">
      <ul class="flex justify-center items-center mt-4 space-x-6 sm:mt-0 h-16 border-b border-gray-dark dark:border-text-l-500 dark:text-white">
        <li class="">
          <Link
            to="/profile"
            class="flex h-8 w-8 items-center justify-center rounded-xl border text-text-l-500 dark:border-text-l-500 dark:text-gray-dark hover:text-black hover:shadow"
          >
            <FaCircleUser size={20} />
          </Link>
        </li>
        <li class="relative">
          <Link
            to="/notifications"
            class="flex h-8 w-8 items-center justify-center rounded-xl border text-text-l-500 dark:border-text-l-500 dark:text-gray-dark hover:text-black hover:shadow"
          >
            <FaRegBell size={20} />
            {noticount > 0 && <span>{noticount}</span>}
          </Link>
        </li>
        <li class="">
          <button
            onClick={handleSignOut}
            class="flex h-8 w-8 items-center justify-center rounded-xl border dark:border-text-l-500 text-text-l-500 dark:text-gray-dark hover:text-black hover:shadow"
          >
            <LuDoorOpen size={20} />
          </button>
        </li>
      </ul>
      <PostTags />
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          class="h-12 w-full rounded-md border border-gray-dark bg-white dark:bg-bg-dark dark:border-text-l-500 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
          placeholder="Search for user"
        />
      </div>
      <div className="flex flex-col gap-4">
      {users.map((user) => (
        <UserCard user={user} key={user.username}/>
      ))}
      </div>
    </aside>
  );
};
