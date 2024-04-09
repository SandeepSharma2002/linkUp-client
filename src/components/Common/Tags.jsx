import React from "react";
import { RxCross2 } from "react-icons/rx";

export const Tag = ({ tag, setTags, index }) => {

  const handleTagRemove = (indexToRemove) => {
    setTags((prev) => {
      return prev.filter((item, i) => i !== indexToRemove);
    });
  };
  
  return (
    <div className="relative flex bg-slate-200 border text-gray-800 text-xs justify-center items-center w-fit px-2 rounded-full gap-2 ">
      <p className="outline-none py-2 rounded-full ">{tag}</p>
      <button
        className="bg-white/70 text-dark-grey rounded-full p-1"
        onClick={()=>handleTagRemove(index)}
      >
        <RxCross2 />
      </button>
    </div>
  );
};
