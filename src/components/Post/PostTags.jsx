import React, { useEffect, useState } from "react";
import Post from "../../Services/Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { setTag } from "../../Store/Slices/PostSlice";

export const PostTags = () => {
  const [tags, setTags] = useState([]);
  const [index, setIndex] = useState(10);
  const dispatch = useDispatch();
  const { tag: activeTab } = useSelector((state) => state.PostState);

  useEffect(() => {
    Post.getPostTags()
      .then((res) => {
        setTags(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full glass rounded-xl border border-white/10">
      <h2 className="heading">Trending Tags</h2>
      <ul className="flex flex-wrap gap-2">
            <li
              className={`relative flex bg-body-d border border-white/10 justify-center items-center px-4 rounded-full gap-1 hover:scale-105 transition-all duration-200  hover:cursor-pointer  ${
                activeTab === "latest" ? "bg-blue-600" : "bg-gray-800"
              }`}
            >
              <button
                className="outline-none py-2 rounded-full text-sm"
                onClick={() => dispatch(setTag("latest"))}
              >
                latest
              </button>
            </li>
            <li
              className={`relative flex bg-body-d border border-white/10 justify-center items-center px-4 rounded-full gap-1 hover:scale-105 transition-all duration-200  hover:cursor-pointer ${
                activeTab === "trending" ? "bg-blue-600" : " bg-gray-800 "
              }`}
            >
              <button
                className="outline-none py-2 rounded-full text-sm"
                onClick={() => dispatch(setTag("trending"))}
              >
                trending
              </button>
            </li>
      {tags.map((tag, i) =>
          (
          <li
            className={`relative flex bg-body-d border border-white/10 justify-center items-center px-4 rounded-full gap-1 hover:scale-105 transition-all duration-200  hover:cursor-pointer ${
              activeTab === tag.title ? "bg-blue-600" : " bg-gray-800 "
            }`}
          >
            <button
              className="outline-none py-2 rounded-full text-sm"
              onClick={() => dispatch(setTag(tag.title))}
            >
              {tag.title}
            </button>
          </li>
        )
      )}
      </ul>
      {index < tags.length && (
        <button
          onClick={() => setIndex((prev) => prev + 5)}
          className="text-sm bg-btn-color rounded-full py-2 mt-2 mr-2 px-4 text-white font-semibold hover:cursor-pointer"
        >
          More tags
        </button>
      )}
    </div>
  );
};
