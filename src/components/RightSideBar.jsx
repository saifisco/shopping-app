import React from "react";

export const RightSideBar = ({ setRightSideBar }) => {
  return (
    <div className="right-side-bar fixed top-0 right-0 bg-blue-700c p-2.5 w-[30%] h-full">
      <div className="relative">
        <div>
          <h3>Added to carts</h3>
        </div>
        <button
          className="size-8 bg-slate-600 absolute right-0 top-0"
          onClick={() => setRightSideBar(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};
