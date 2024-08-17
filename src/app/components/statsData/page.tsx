import { FaLaptopFile } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import { MdLocalPharmacy } from "react-icons/md";
import { IoIosBusiness } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
const Statistics = () => {
  const statsData = [
    {
      icon: <FaLaptopFile />,
      value: "20 Billion+",
      label: "Invoices Processed Per Year",
    },
    {
      icon: <IoEarthOutline />,
      value: "100 Billion$",
      label: "Transactions Processed Per Year",
    },
    {
      icon: <MdLocalPharmacy />,
      value: "50% Pharma",
      label: "Runs On Marg ERP Software",
    },
    {
      icon: <IoIosBusiness />,
      value: "1 Million+",
      label: "Businesses Served Worldwide",
    },
    {
      icon: <MdOutlineSupportAgent />,
      value: "10+",
      label: "Sales & Support Centers",
    },
    {
      icon: <MdHomeRepairService />,
      value: "25+",
      label: "Sales & Service Professionals",
    },
  ];

  return (
    <div className="container px-4 md:px-12 py-10 mx-auto">
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-6 border rounded-lg shadow p-4 md:p-6 text-center">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-wrap flex-col items-center justify-center px-1 md:px-6"
          >
            <div className="text-5xl border-gray-900 rounded-full border p-4 bg-gray-200">
              {stat.icon}
            </div>
            <h1 className="mt-4 text-lg font-semibold text-gray-800">
              {stat.value}
            </h1>
            <p className="mt-2 text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
