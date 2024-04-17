import React, { useEffect, useState } from "react";
import Chat from "../../Services/Chats/Chat";
import Message from "../../Services/Messages/Message";
import { MessageCard } from "../Common/Message";
import { useSelector } from "react-redux";
import { WriteMessage } from "../Common/WriteMessage";

export const ChatComp = () => {
  const [chatId, setChatId] = useState();
  const [messages, setMessages] = useState([]);
  const { username } = useSelector((state) => state.User);

  const getChats = () => {
    Chat.accessChat({ userId: "661f29c4cb11f23ad1cbcab3" }).then((res) => {
      setChatId(res.data.data._id);
    });
  };

  const getMessages = () => {
    Message.allmessages({ chatId }).then((res) => {
      setMessages(res.data.data);
    });
  };

  console.log(chatId);

  useEffect(() => {
    chatId && getMessages();
  }, [chatId]);

  useEffect(() => {
    getChats();
  }, []);


  return (
    <div class="mx-auto h-full overflow-y-auto dark:bg-gray-900 hide-scroll">
      <div
        class="h-[64px] flex justify-between items-center px-4  border-b w-full sticky z-50 bg-slate-100 dark:bg-gray-700 dark:border-gray-500
    top-0 left-0 border-slate-200"
      >
        <p class="text-xl font-bold text-gray-700 dark:text-white">Chats</p>
        <button class="text-sm font-medium text-blue-700 focus:outline-none">
          Chat Settings
        </button>
      </div>
      <div className="flex flex-col gap-4 px-6 mt-4 mb-16">
        {messages.map((message) => (
          <MessageCard message={message} username={username} />
        ))}
      </div>
      <div className="flex justify-center">
        <WriteMessage chatId={chatId} />
      </div>
    </div>
  );
};
