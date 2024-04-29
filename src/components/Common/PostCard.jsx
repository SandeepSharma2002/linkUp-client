import React, { useEffect, useState } from "react";
import useCustomDateFormat from "../../hooks/UseCustomDate";
import { Tag } from "./Tags";
import { FiHeart } from "react-icons/fi";
import { FaHeart, FaRegComment } from "react-icons/fa";
import Post from "../../Services/Post/Post";
import { CommentCard } from "./CommentCard";
import { CommentDesc } from "./CommentDesc";
import { HiDotsVertical } from "react-icons/hi";
import { toast } from "react-toastify";
import { CreatePostModal } from "../Modals/CreatePostModal";
import { useDispatch, useSelector } from "react-redux";
import { setRefresh } from "../../Store/Slices/RefreshSlice";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";

export const PostCard = ({ post, type}) => {
  const [commentsWrapper, setCommentsWrapper] = useState(false);
  const [totalLikes, setTotalLikes] = useState(post?.activity?.total_likes);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [totalComment, setTotalComment] = useState(
    post?.activity?.total_parent_comments
  );
  const [toggleMenu, setToggleMenu] = useState(false);
  const [postData, setPostData] = useState({});
  const [commentData, setCommentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLikedByUser, setIsLikedByUser] = useState(false);
  const dispatch = useDispatch();
  const { username, image, isLoggedIn, email } = useSelector(
    (state) => state.User
  );

  const publishedDate = useCustomDateFormat(post?.publishedAt);

  function isURL(str) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(str);
  }

  useEffect(() => {
    Post?.isLikedPost({ _id: post?._id })
      .then((res) => {
        let isLiked = res.data.message;
        setIsLikedByUser(Boolean(isLiked));
      })
      .catch((err) => console.log(err));
  }, [type]);

  const handleLike = (post_Id) => {
    Post?.likePost({ post_Id: post_Id, isLikedByUser: isLikedByUser })
      .then((res) => {
        setTotalLikes((prev) => (isLikedByUser ? prev - 1 : prev + 1));
        setIsLikedByUser(!isLikedByUser);
      })
      .catch((err) => console.log(err));
  };

  const getPostComment = (post_Id) => {
    setLoading(true);
    Post?.getPostComments({ post_Id })
      .then((res) => setCommentData(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleComments = (e) => {
    setCommentsWrapper(!commentsWrapper);
    getPostComment(e);
  };

  const handleMenuOperation = (mode, data) => {
    if (mode == "edit") {
      setPostData(data);
      setShowModal(true);
    } else if (mode == "delete") {
      console.log(data);
      Post?.deletePost({ _id: data._id })
        .then((res) => {
          dispatch(setRefresh());
          toast.success(res.data.message);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        })
        .finally(() => setToggleMenu(false));
    } else {
      toast.error("Post reported successfully.");
    }
  };

  return (
    <li class="py-6 text-base border-b z-0 border-gray-dark last:border-0">
      <article class="flex justify-between items-center mb-2">
        <div class="flex items-center">
          <img
            class="mr-2 w-10 h-10 rounded-lg"
            src={post?.author?.image}
            alt={post?.author?.username}
          />
          <div>
            <p class="inline-flex items-center mr-3 text-black dark:text-white font-semibold">
              {post?.author?.username}
            </p>
            <p class=" text-text-l-500 dark:text-gray-400">
              <time title="February 8th, 2022">
                {publishedDate}
              </time>
            </p>
          </div>
        </div>
        <div className="relative">
          <button
            onBlur={() => setTimeout(() => setShowDropDown(false), 300)}
            onClick={() => setShowDropDown(!showDropDown)}
            class="inline-flex items-center p-2 text-sm rotate-90 font-medium text-center text-gray-500 dark:text-gray-400 rounded-lg hover:bg-gray-100 focus:outline-none  dark:hover:bg-gray-700 dark:focus:ring-text-l-500"
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
          {/* Dropdown menu */}
          {showDropDown && (
            <div
              onBlur={() => setShowDropDown(false)}
              id="dropdownComment1"
              class="absolute top-4 right-8 z-10 w-20 bg-white rounded divide-y divide-gray-200 shadow-xl dark:bg-gray-700 dark:divide-text-l-500"
            >
              <ul
                class="py-1 text-sm text-gray-800 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                {username === post?.author?.username && (
                  <>
                    <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-text-l-500 dark:hover:text-white">
                      <button onClick={() => handleMenuOperation("edit", post)}>
                        Edit
                      </button>
                    </li>
                    <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-text-l-500 dark:hover:text-white">
                      <button
                        onClick={() => handleMenuOperation("delete", post)}
                      >
                        Remove
                      </button>
                    </li>
                  </>
                )}
                <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-text-l-500 dark:hover:text-white">
                  <button onClick={() => handleMenuOperation("report", post)}>
                    Report
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </article>
      <div className="my-2 dark:text-white" dangerouslySetInnerHTML={{ __html: post?.des}} />

      <span class=" bg-primary-500/10 text-primary-700 text-sm font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
        {post?.title}
      </span>
      <div class="flex items-center mt-4 space-x-4">
        <button
          type="button"
          onClick={() => handleLike(post?._id)}
          class="flex items-center text-sm text-text-l-500 hover:underline dark:text-gray-400 font-medium"
        >
          <FaHeart
            className={`${
              isLikedByUser ? "text-danger" : "text-text-l-500"
            } mr-1`}
            size={12}
          />
          {totalLikes} Like
        </button>
        <button
          type="button"
          onClick={() => {
            handleComments(post?._id);
          }}
          class="flex items-center text-sm text-text-l-500 hover:underline dark:text-gray-400 font-medium"
        >
          <TfiCommentAlt className="mr-1" size={12} />
          {totalComment} Comment
        </button>
      </div>
      {commentsWrapper && (
        <>
          <CommentCard
            post_Id={post?._id}
            author={post?.author?._id}
            getPostComment={getPostComment}
            setTotalComment={setTotalComment}
            totalComments={totalComment}
            username={username}
            type={"comment"}
          />
          {commentData.map((comment) => (
            <CommentDesc
              post_Id={post?._id}
              author={post?.author?._id}
              comment={comment}
              getPostComment={getPostComment}
              setTotalComment={setTotalComment}
              totalComments={totalComment}
              username={username}
              type={"comment"}
            />
          ))}
        </>
      )}
    </li>
  );
};
