import { GrTechnology } from "react-icons/gr";

const HeaderLogo = () => {
  return (
    <div>
      <span className="flex items-center justify-center font-bold">
        <GrTechnology className="h-6 w-6 mr-3" />
        <span className="text-orange-500 text-lg">I-</span>
        <span className="text-blue-500 text-lg">C-</span>
        <span className="text-green-500 text-lg">TECH</span>
      </span>
    </div>
  );
};

export default HeaderLogo;
