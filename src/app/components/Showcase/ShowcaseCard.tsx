import React from "react";
import { IoIosLaptop } from "react-icons/io";

const ShowcaseCard = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <IoIosLaptop className="w-16 h-16 " />
        </div>
        <div className="flex items-center justify-center flex-col">
          <div>20 Billion +</div>
          <div>Invoices Processed Per Year</div>
        </div>
      </div>
    </>
  );
};

export default ShowcaseCard;
