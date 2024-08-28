import SoftwareInfo from "./SoftwareInfo";

const SoftwareComp = ({
  src1,
  src2,
  src3,
  src4,
  src5,
  src6,
  src7,
  name1,
  name2,
  name3,
  name4,
  name5,
  name6,
  name7,
}: any) => {
  return (
    <div>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 py-5 gap-6">
        <SoftwareInfo src={src1} name={name1} />
        <SoftwareInfo src={src2} name={name2} />
        <SoftwareInfo src={src3} name={name3} />
        <SoftwareInfo src={src4} name={name4} />
        <SoftwareInfo src={src5} name={name5} />
        <SoftwareInfo src={src6} name={name6} />
        <SoftwareInfo src={src7} name={name7} />
      </div>
    </div>
  );
};

export default SoftwareComp;
