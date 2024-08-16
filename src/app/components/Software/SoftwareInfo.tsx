import { SoftwareInfoProp } from "@/app/TS/interfaces/interface";

const SoftwareInfo = ({ src, name }: SoftwareInfoProp) => {
  return (
    <div className="flex flex-col gap-4 border p-3">
      <div className="border rounded-md">
        <img
          src={src}
          alt=""
          className="w-full h-[300px] object-contain object-center grayscale-[20%]"
        />
      </div>
      <button className="bg-gray-100 hover:bg-gray-200 transition-all ease-linear duration-300 px-4 py-2 rounded-sm text-center">
        {name}
      </button>
    </div>
  );
};

export default SoftwareInfo;
