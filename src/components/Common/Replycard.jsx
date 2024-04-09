import React from "react";
import useCustomDateFormat from "../../hooks/UseCustomDate";
import { MdDeleteForever } from "react-icons/md";

export const ReplyCard = ({ reply, setTotalReplies, handleCommentDelete }) => {
  const publishedAt = useCustomDateFormat(reply.commentedAt);
  const handleReplyDelete = (id) => {
    handleCommentDelete(id);
    setTotalReplies((prev) => prev - 1);
  };

  return (
    <div
      className="relative px-4 mx-6  flex w-full mb-2 flex-col border rounded-xl pb-2 glass border-white/10 z-0 hover:bg-white/10 hover:bg-opacity-30 p-1"
      key={reply._id}
    >
      <div className="relative flex items-center gap-4 pt-0 pb-2 mx-0 mt-1 overflow-hidden">
        <img
          src={reply.commented_by.image}
          alt={reply.commented_by.username}
          className="relative z-0 inline-block h-10 w-10 !rounded-full  object-cover object-center"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {reply.commented_by.username}
            </h5>
            <p className="text-dark-grey">{publishedAt}</p>
          </div>
          {reply.commented_by.currentPosition !== null && (
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
              {`${reply.commented_by.currentPosition.position} @${reply.commented_by.currentPosition.company}`}
            </p>
          )}
        </div>
      </div>
      <p className="resize-none ml-12 p-2 bg-body-d rounded-xl mx-2 h-auto text-white hide-scroll">
        {reply.comment}
      </p>
      <button
        className="text-sm text-red rounded-xl px-2 py-1 w-fit my-1"
        onClick={() => handleReplyDelete(reply._id)}
      >
        <MdDeleteForever size={24} />
      </button>
    </div>
  );
};
