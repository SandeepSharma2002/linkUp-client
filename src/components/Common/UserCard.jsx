import React from "react";

export const UserCard = ({ user }) => {
    

  return (
    <div
      className="relative flex w-full flex-col border z-0 border-grey rounded-xl hover:bg-grey hover:bg-opacity-30 p-1 bg-transparent bg-clip-border text-gray-700 shadow-none"
      key={user._id}
    >
      <div className="relative flex items-center gap-4 pt-0 pb-2 mx-0 mt-1 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
        <img
          src={user.image}
          alt={user.username}
          className="relative z-0 inline-block h-10 w-10 !rounded-full  object-cover object-center"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {user.username}
            </h5>
          </div>
          {user.currentPosition !== null && (
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
              {`${user.currentPosition.position} @${user.currentPosition.company}`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
