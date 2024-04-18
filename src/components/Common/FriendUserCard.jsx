import React from "react";
import { FaMessage } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setReceiver } from "../../Store/Slices/ChatSlice";
import { useNavigate } from "react-router-dom";
import { useSocketContext } from "../../Context/Socket/SocketConnection";

export const FriendUserCard = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (data) => {
    dispatch(setReceiver(data));
    navigate("/chats");
  };

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
      className="relative flex w-full gap-4 items-center rounded-xl hover:bg-grey hover:bg-opacity-30 p-1 bg-transparent bg-clip-border text-gray-700 shadow-none"
      key={user._id}
    >
      <div class="relative me-4">
        <img
          src={user.image}
          alt={user.username}
          className="relative z-0 inline-block h-10 w-10 !rounded-xl  object-cover object-center"
        />
        {isOnline && <span class="top-0 start-7 absolute w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>}
      </div>

      <div class="max-w-[80%] truncate">
        <p class="font-medium text-sky-600 dark:text-white">{user.username}</p>
        <p class="text-sm text-gray-600 dark:text-white ">{user.email}</p>
      </div>
      <button
        type="button"
        className="text-sky-600 ml-auto"
        onClick={() => handleClick(user)}
      >
        <FaMessage size={20} />
      </button>
    </div>
  );
};
