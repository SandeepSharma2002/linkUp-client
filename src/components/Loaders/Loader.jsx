import React from "react";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-btn-color"></div>
    </div>
  );
};
