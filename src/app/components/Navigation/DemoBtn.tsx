import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const DemoBtn = () => {
  return (
    <a href ="http://localhost:3000/Login"
      type="button"
      className="hover:bg-gray-100 ring-1 ring-gray-200 duration-200 transition-all px-2 py-1 rounded text-sm flex items-center justify-center gap-2  max-sm:text-lg "
    >
      Login{" "}
      <span>
        <FaArrowRightLong className="h-3 w-3"/>
      </span>
    </a>
  );
};

export default DemoBtn;
