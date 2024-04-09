import React, { useEffect, useState } from "react";
import Post from "../../Services/Post/Post";
import { CiHeart } from "react-icons/ci";
import { FaComments } from "react-icons/fa6";

export const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([]);

  const customDateFormat = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    const diffInMilliseconds = now - date;
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));

    let formattedDate;
    if (diffInHours < 24) {
      if (diffInHours < 1) {
        formattedDate = `${diffInMinutes} mins`;
      } else {
        formattedDate = `${diffInHours} hr`;
      }
    } else {
      const options = { month: "short", day: "numeric" };
      const formatted = date.toLocaleDateString("en-US", options);
      formattedDate = formatted;
    }

    return formattedDate;
  };

  useEffect(() => {
    Post.getNotifications({})
      .then((res) => {
        console.log(res.data);
        setNotifications(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      id="toast-notification"
      class="w-full p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300 z-[1000000]"
      role="alert"
    >
      <div class="flex items-center mb-3 min-w-full">
        <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          Notification
        </span>
        <button
          type="button"
          class="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-notification"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      {notifications.map((noti) => (
        <div
          key={noti._id}
          class={`flex gap-2 border-l-4 border-transparent p-2 mb-1 ${
            !noti.seen && "border-l-btn-color"
          }`}
        >
          <div class="relative inline-block shrink-0">
            <img
              class="w-12 h-12 rounded-full"
              src={noti.user.image}
              alt="Jese Leos image"
            />
            <span
              class={`absolute bottom-0 right-0 inline-flex items-center justify-center w-5 h-5 ${noti.type === "comment" ? "bg-btn-color":"bg-red"} text-white rounded-full`}
            >
              {noti.type ==="comment" ? <FaComments size={12}/> :<CiHeart size={12}/>}
            </span>
          </div>
          <div class=" text-lg font-normal">
            <div className="flex justify-between">
              <div class="text-lg font-semibold w-fit text-gray-900 dark:text-white">
                {noti.user.username}
              </div>
              <span class="text-sm font-medium text-btn-color dark:text-blue-500 w-fit">
                {customDateFormat(noti.createdAt)}
              </span>
            </div>
            {noti.type === "comment" ? (
              <div class="text-sm font-normal">commented on your post.</div>
            ) : (
              <div class="text-sm font-normal">Liked your photo.</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
