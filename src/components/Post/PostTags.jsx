import React, { useEffect, useState } from "react";
import Post from "../../Services/Post/Post";

export const PostTags = ({ setActiveTab }) => {
  const [tags, setTags] = useState([]);
  const [index, setIndex] = useState(10);
  useEffect(() => {
    Post.getPostTags()
      .then((res) => {
        setTags(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex gap-1 flex-wrap w-full p-4 glass rounded-xl border border-white/10">
      <h2 className="heading">Get Feeds by tags.</h2>
      {tags.map(
        (tag, i) =>
          i <= index && (
            <div className="relative flex bg-body-d border border-white/10 justify-center items-center px-4 rounded-full gap-1 hover:scale-105 transition-all duration-200 hover:bg-white/10 hover:cursor-pointer">
              <button
                className="outline-none py-2 rounded-full text-sm"
                onClick={() => setActiveTab(tag)}
              >
                {tag}
              </button>
            </div>
          )
      )}
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
