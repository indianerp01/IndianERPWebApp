import { FeatureItemProp } from "@/app/TS/interfaces/interface";

const FeatureItem = ({ icon, title }: FeatureItemProp) => {
  return (
    <div className="p-3 lg:w-1/5 md:w-1/4 sm:w-1/3 border rounded-lg m-2 hover:shadow-md transform transition duration-300 group">
      <div className="px-4 py-6">
        <div className="flex justify-center group-hover:scale-125 transition-transform ease-linear duration-300  text-6xl mb-4">
          {icon}
        </div>
        <h2 className="text-lg font-semibold py-2 line-clamp-2">{title}</h2>
      </div>
    </div>
  );
};

export default FeatureItem;
