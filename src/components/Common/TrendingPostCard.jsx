import React from "react";
import useCustomDateFormat from "../../hooks/UseCustomDate";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";

export const TrendingPostCard = ({ post }) => {

  const publishedDate = useCustomDateFormat(post.publishedAt);
  function isURL(str) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(str);
  }
  return (
    <>
      <div
        className="relative flex w-full flex-col my-1 hover:bg-white/10 bg-body-d border text-white rounded-xl -z-1 border-white/10 p-4 bg-clip-border shadow-none"
        key={post._id}
      >
        <div className="relative flex items-center gap-4 pt-0 pb-2 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
          <img
            src={post.author.image}
            alt={post.author.username}
            className="relative z-0 inline-block h-10 w-10 !rounded-full  object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5 text-sm">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {post.author.username}
              </h5>
              <div className="flex items-center">{publishedDate}</div>
            </div>
            {post.author !== null && post.author.currentPosition !== null && (
              <p className="block font-sans text-base antialiased font-light leading-relaxed ">
                {`${post.author.currentPosition.position}`}  <span className="text-btn-color">@{`${post.author.currentPosition.position}`}</span>
              </p>
            )}
          </div>
        </div>
        <div className="p-0 mb-2 text-sm">
          {post?.des?.map(
            (line, index) =>
                index < 2 && <p key={index}
                  className={`${index >= 0 && "truncate"}`}
                >
                 {line}
                </p>
          )}
        </div>

        <div className="flex border-t pt-2 border-t-white/10 gap-10 text-xl">
          <button className="flex gap-2 items-center">
            <span className="text-sm">{post.activity.total_likes} likes</span>
          </button>
          <button className="flex gap-2 items-center">
            <span className="text-sm">{post.activity.total_parent_comments} comments</span>
          </button>
        </div>
      </div>
    </>
  );
};
