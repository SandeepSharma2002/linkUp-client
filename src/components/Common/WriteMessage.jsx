import EmojiPicker from "emoji-picker-react";
import React, { useRef, useState } from "react";
import InputEmoji from "react-input-emoji";
import { FaPaperPlane, FaPlus } from "react-icons/fa6";
import { convertToRaw, ContentState, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Message from "../../Services/Messages/Message";

export const WriteMessage = ({ chatId }) => {
  const [text, setText] = useState("");

  const sendMessage = () => {
    Message.sendmessage({
      chatId,
      content: text,
    })
      .then((res) => {
        setText("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="absolute bottom-0 pb-2 w-full bg-white flex gap-2 px-4 justify-center items-center mx-auto">
      <div className="w-[90%] max-w-[640px]">
        <InputEmoji
          value={text}
          onChange={setText}
          shouldReturn={true}
          placeholder="Type a message"
        />
      </div>
      <button className="h-fit w-fit p-2 bg-sky-600 text-white rounded-full">
        <FaPaperPlane size={20} onClick={() => sendMessage()} />
      </button>
    </div>
  );
};
