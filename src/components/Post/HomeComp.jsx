import React, { useEffect, useState } from "react";
import { PostCard } from "../Common/PostCard";
import Post from "../../Services/Post/Post";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Loader } from "../Loaders/Loader";
import CreatePost from "./CreatePost";
import { BottomNavigation } from "../Common/BottomNavigation";
import useDebounce from "../../hooks/UseDebounce";
import { PostCardSkeleton } from "../Loaders/PostCardSkeleton";

export const HomeComp = () => {
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [postData, setPostData] = useState([]);
  const { postRefresh } = useSelector((state) => state.RefreshState);
  const { tag: activeTab } = useSelector((state) => state.PostState);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const getPosts = () => {
    setLoading(true);
    setPostData([]);
    if (activeTab === "latest") {
      Post.getLatestPosts({ skip: 0, limit: 10 })
        .then((res) => {
          setPostData(res.data.data);
          res.data.data.length === 0 && toast.error("No results founds.");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (activeTab === "trending") {
      Post.getTrendingPosts({ skip: 0, limit: 10 })
        .then((res) => {
          setPostData(res.data.data);
          res.data.data.length === 0 && toast.error("No results founds.");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      Post.searchPosts({ title: activeTab, skip: 0, limit: 10 })
        .then((res) => {
          setPostData(res.data.data);
          res.data.data.length === 0 && toast.error("No results founds.");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      Post.searchPosts({ query: debouncedSearchTerm, skip: 0, limit: 10 })
        .then((res) => {
          setPostData(res.data.data);
          res.data.data.length === 0 && toast.error("No results founds.");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else getPosts();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    getPosts();
  }, [activeTab, postRefresh, update]);

  return (
    <section className="relative w-full overflow-y-auto hide-scroll h-full  dark:bg-gray-900 ">
      <div className="fixed h-[64px] flex justify-center bg-slate-100 items-center pl-12  sm:pl-0 px-4 border-b w-full md:sticky z-10  top-0 left-0 border-slate-200 dark:border-gray-600 dark:bg-gray-700">
        <label htmlFor="\" className=" relative">
          <svg
            class="absolute left-2 top-3 ml-2 block h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" class=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
          </svg>
          <input
            type="name"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            class="h-12 rounded-md border border-gray-100 bg-white dark:bg-gray-900 dark:border-gray-600  xl:w-[540px] min-w-[300px] py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
            placeholder="Search for anything"
          />
        </label>
      </div>

      {loading ? (
         <ul className="mt-16 md:mt-0 px-4">
           <PostCardSkeleton />
         </ul>
      ) : (
        <>
          <ul className="mt-16 md:mt-0 px-4">
            {postData?.map((post) => (
              <PostCard post={post} type={activeTab} key={post?._id} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
