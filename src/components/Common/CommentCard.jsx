import React, { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
import Post from "../../Services/Post/Post";

export const CommentCard = ({
  post_Id,
  author,
  totalComments,
  replying_to = null,
  setTotalComment,
  getPostComment,
  handleReplies,
  type
}) => {
  const { image } = useSelector((state) => state.User);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);


  console.log(replying_to);
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleComment = (id) => {
    let body = {
      _id: post_Id,
      post_author: author,
      comment,
      replying_to
    };

    setLoading(true);
    Post.commentPost(body)
      .then((res) => {
        setTotalComment((prev) => prev + 1);
        setComment("");

        replying_to === null
          ? getPostComment(post_Id)
          : getPostComment(commentedBy);
        console.log(res.data.message);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  // const handleComment = (id) => {
  //   let body = {
  //     _id: post_Id,
  //     post_author: author,
  //     comment: commentData,
  //     replying_to: type === "comment" ? null : comment?.commented_by?._id,
  //   };

  //   console.log(id);

  //   setLoading(true);
  //   Post.commentPost(body)
  //     .then((res) => {
  //       setTotalComment((prev) => prev + 1);
  //       setCommentData("");
  //       getPostComment(post_Id);
  //       // Here some logic mistake reverify it.
  //       // explanation : Call api accordingly if replies added or comment added
  //       replying_to === null ? handleReplies(id) : getPostComment(replying_to);
  //       console.log(res.data.message);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // };

  return (
    <>
      <div className="flex flex-col rounded-xl p-2">
        <div class="flex  justify-between items-center mb-2">
          <h2 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
         {type === "reply" ? `Replies (${totalComments})` : `Comments (${totalComments})`}
          </h2>
        </div>
        <div class="mb-6">
          <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" class="sr-only">
              Your {type === "reply" ? "reply" : "comment"}
            </label>
            <textarea
              id="comment"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e?.target?.value)}
              class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder={`Write a ${type === "reply" ? "reply" : "comment"}...`}
              required
            ></textarea>
          </div>
          <button
            type="button"
            onClick={() => handleComment(comment?._id)}
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
};
