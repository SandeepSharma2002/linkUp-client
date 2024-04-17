import React from "react";

export const UserCard = ({ user }) => {
  return (
    <div
      className="relative flex w-full gap-4 items-center rounded-xl hover:bg-grey hover:bg-opacity-30 p-1 bg-transparent bg-clip-border text-gray-700 shadow-none"
      key={user._id}
    >
      <img
        src={user.image}
        alt={user.username}
        className="relative z-0 inline-block h-10 w-10 !rounded-xl  object-cover object-center"
      />
      <div class="">
        <p class="font-medium text-sky-600 dark:text-white">{user.username}</p>
        <p class="text-sm text-gray-600 dark:text-white">{user.email}</p>
      </div>
    </div>
  );
};
