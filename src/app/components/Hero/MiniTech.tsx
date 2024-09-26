import { MiniTechProp } from "@/app/TS/interfaces/interface";

const MiniTech = ({ title, icon }: MiniTechProp) => {
  return (
    <div className="border p-5 rounded-md hover:bg-gray-300 transition-all ease-linear duration-300 cursor-pointer  bg-gray-200 bg-opacity-10">
      <div className="flex items-center justify-center flex-col gap-3 ">
        <div className="w-full flex items-center justify-center bg-gray-100 rounded-sm">
          {icon}
        </div>
        <div className="mx-10">
          <h1 className="p-2 rounded-md">
            <span className="text-md ">{title}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MiniTech;
