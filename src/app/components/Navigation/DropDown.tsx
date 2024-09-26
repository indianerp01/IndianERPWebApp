import { DropDownProp } from "@/app/TS/types/type";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = ({
  title,
  dropDownT1,
  dropDownT2,
  dropDownT3,
  dropDownT4,
  dropDownT5,
  dropDownT6,
  dropDownT7,
  titleHREF,
  href1,
  href2,
  href3,
  href4,
  href5,
  href6,
  href7,
}: DropDownProp) => {
  return (
    <div>
      <div className="text-neutral-500 group relative hover:text-neutral-900 cursor-pointer  transition-all ease-linear duration-200">
        <div className="flex items-center justify-center group/icon ">
          <Link className="line-clamp-1 truncate" href={titleHREF}>
            {title}
          </Link>{" "}
          <span>
            <RiArrowDropDownLine className="group-hover/icon:rotate-180 w-4 h-4 transition-transform ease-linear duration-200" />
          </span>
        </div>
        <div className="absolute hidden top-[18px] group-hover:flex flex-col w-max  bg-gray-100 px-3 mt-[4px] transition-all duration-300 ease-linear py-3 rounded border ">
          <Link
            href={href1 as string}
            className="bg-white px-2 py-1 rounded mb-2 hover:bg-gray-200 transition-all ease-linear duration-200 "
          >
            {dropDownT1}
          </Link>
          <Link
            href={href2 as string}
            className="bg-white px-2 py-1 rounded mb-2 hover:bg-gray-200 transition-all ease-linear duration-200 "
          >
            {dropDownT2}
          </Link>
          <Link
            href={href3 as string}
            className="bg-white px-2 py-1 rounded mb-2 hover:bg-gray-200 transition-all ease-linear duration-200 "
          >
            {dropDownT3}
          </Link>
          <Link
            href={href4 as string}
            className="bg-white px-2 py-1 rounded mb-2 hover:bg-gray-200 transition-all ease-linear duration-200 "
          >
            {dropDownT4}
          </Link>
          <Link
            href={href5 as string}
            className="bg-white px-2 py-1 rounded mb-2 hover:bg-gray-200 transition-all ease-linear duration-200 "
          >
            {dropDownT5}
          </Link>
          <Link
            href={href6 as string}
            className="bg-white px-2 py-1 rounded mb-2 hover:bg-gray-200 transition-all ease-linear duration-200 "
          >
            {dropDownT6}
          </Link>
          <Link
            href={href7 as string}
            className="bg-white px-2 py-1 rounded hover:bg-gray-200 transition-all ease-linear duration-200 "
          >
            {dropDownT7}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
