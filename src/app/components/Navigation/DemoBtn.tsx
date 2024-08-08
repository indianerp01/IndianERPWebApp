import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const DemoBtn = () => {
  return (
    <button
      type="button"
      className="hover:bg-gray-100 ring-1 ring-gray-200 duration-200 transition-all px-2 py-1 rounded text-sm flex items-center justify-center gap-2"
    >
      Book Demo{" "}
      <span>
        <FaArrowRightLong className="h-3 w-3"/>
      </span>
    </button>
  );
};

export default DemoBtn;
