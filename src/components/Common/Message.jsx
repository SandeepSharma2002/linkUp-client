import React from "react";

export const MessageCard = ({ message, username }) => {
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const currentDate = new Date();
    const diffInMilliseconds = currentDate - date;
    const diffInHours = Math.abs(diffInMilliseconds / (1000 * 60 * 60));

    const formatTime = (date) => {
      const options = { hour: "numeric", minute: "numeric", second: "numeric" };
      return date.toLocaleTimeString("en-US", options);
    };

    const formatDate = (date) => {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    };

    if (diffInHours < 24) {
      return formatTime(date);
    } else {
      return formatDate(date);
    }
  };

  console.log(message);

  return (
    <div key={message._id} class={`flex items-start gap-2.5 ${message.sender.username == username ? "flex-row-reverse":""}`}>
      <img
        class="w-8 h-8 rounded-full"
        src={message.sender.image}
        alt={message.sender.username}
      />
      <div
        class={`flex flex-col w-full max-w-[240px] leading-1.5 p-4 border-gray-dark  ${
          message.sender.username === username
            ? "bg-gray-light border-gray-dark rounded-s-xl rounded-b-xl"
            : " bg-primary-600 border-primary-700 text-white rounded-e-xl rounded-es-xl"
        }  dark:bg-gray-700`}
      >
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class={`text-sm font-semibold  ${ message.sender.username === username
            ? "text-black dark:text-white":" text-white"}`}>
            {message.sender.username}
          </span>
          <span class={`text-sm font-normal  dark:text-gray-400 ${ message.sender.username === username
            ? "text-text-l-500 dark:text-white":" text-gray-300"}`}>
            {formatDateTime(message.createdAt)}
          </span>
        </div>
        <p class={`text-sm font-normal py-2.5 break-all  ${ message.sender.username === username
            ? "text-black dark:text-white":" text-white"} `}>
          {message.content}
        </p>
        {/* <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Delivered
        </span> */}
      </div>
      {/* <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-black dark:hover:bg-gray-800 dark:focus:ring-text-l-500" type="button">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
         <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
      </svg>
   </button>
   <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-text-l-500">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-dark" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-text-l-500 dark:hover:text-white">Reply</a>
         </li>
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-text-l-500 dark:hover:text-white">Forward</a>
         </li>
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-text-l-500 dark:hover:text-white">Copy</a>
         </li>
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-text-l-500 dark:hover:text-white">Report</a>
         </li>
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-text-l-500 dark:hover:text-white">Delete</a>
         </li>
      </ul>
   </div> */}
    </div>
  );
};
