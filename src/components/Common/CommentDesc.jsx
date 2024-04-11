import React, { useEffect, useState } from "react";
import useCustomDateFormat from "../../hooks/UseCustomDate";
import { CommentCard } from "./CommentCard";
import Post from "../../Services/Post/Post";
import { ReplyCard } from "./Replycard";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

export const CommentDesc = ({
  post_Id,
  author,
  comment,
  getPostComment,
  setTotalComment,
  totalComments,
  username,
  type,
}) => {
  const publishedAt = useCustomDateFormat(comment?.commentedAt);
  const [showDropDown, setShowDropDown] = useState(false);
  const [repliesWrapper, setRepliesWrapper] = useState(false);
  const [totalReplies, setTotalReplies] = useState(comment?.children?.length);
  const [replies, setReplies] = useState([]);
  const [commentData, setCommentData] = useState("");
  const [loading, setLoading] = useState(false);
  const [commentsWrapper, setCommentsWrapper] = useState(false);

  const handleReplies = (_id) => {
    setRepliesWrapper(!repliesWrapper);
    !repliesWrapper && Post.getCommentReplies({ _id })
      .then((res) => {
        setReplies(res.data.data);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const handleDelete = (comm) => {
    Post.deleteComment({ _id: comm._id })
      .then((res) => {
        getPostComment(comm.post_Id);
        res.data.type == "Comment"
          ? setTotalComment((prev) => prev - 1)
          : setTotalReplies((prev) => prev - 1);
        toast.success(res.data.message);
      })
      .catch((err) => console.log(err.response.data.message));
  };


  return (
    <section
      className="bg-white dark:bg-gray-900 antialiased"
      key={comment._id}
    >
      <div class="max-w-full mx-auto px-4 ml-4">
        {comment?.comment && (
          <article class="px-4 py-2 text-base bg-white rounded-lg dark:bg-gray-900">
            <footer class="flex justify-between items-center mb-2">
              <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    class="mr-2 w-6 h-6 rounded-full"
                    src={comment?.commented_by?.image}
                    alt={comment?.commented_by?.username}
                  />
                  {comment?.commented_by?.username}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  <time
                    title="February 8th, 2022"
                  >
                    {publishedAt}
                  </time>
                </p>
              </div>
              <div className="relative">
                <button
                  onBlur={() => setTimeout(() => setShowDropDown(false), 300)}
                  onClick={() => setShowDropDown(!showDropDown)}
                  class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                  <span class="sr-only">Comment settings</span>
                </button>

                {showDropDown && (
                  <div
                    onBlur={() => setShowDropDown(false)}
                    id="dropdownComment1"
                    class="absolute top-4 right-8 z-10 w-20 bg-white rounded divide-y divide-gray-200 shadow-xl dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-1 text-sm text-gray-800 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      {username === comment?.commented_by?.username && (
                        <>
                          <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <button
                              onClick={() => handleDelete(comment)}
                            >
                              Remove
                            </button>
                          </li>
                        </>
                      )}
                      <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <button
                          // onClick={() => handleMenuOperation(comment)}
                        >
                          Report
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </footer>
            <p class="text-gray-500 dark:text-gray-400">{comment.comment}</p>
            <div class="flex items-center mt-4 space-x-4">
              <button
                type="button"
                onClick={() => handleReplies(comment._id)}
                class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  class="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                {totalReplies} Reply
              </button>
            </div>
            {repliesWrapper && (
              <>
                <CommentCard
                  post_Id={post_Id}
                  author={author}
                  replying_to={comment?._id}
                  getPostComment={handleReplies}
                  setTotalComment={setTotalComment}
                  totalComments={totalReplies}
                  username={username}
                  type={"reply"}
                />
                {replies.map((reply) => (
                  <CommentDesc
                    post_Id={post_Id}
                    author={author}
                    comment={reply}
                    getPostComment={handleReplies}
                    setTotalComment={setTotalReplies}
                    totalComments={totalReplies}
                    username={username}
                    type="reply"
                  />
                ))}
              </>
            )}
            
          </article>
        )}
      </div>
    </section>
  );
};
