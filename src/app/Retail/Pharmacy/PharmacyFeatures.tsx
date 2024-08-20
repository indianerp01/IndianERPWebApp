import { TbDatabasePlus } from "react-icons/tb";
import { BsDatabaseCheck } from "react-icons/bs";
import { BsHddRack } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { HiOutlineTruck } from "react-icons/hi2";

import { FaRecycle } from "react-icons/fa";

interface ItemProps {
  icons: JSX.Element;
  title: string;
}

const WhyUsItem: React.FC<ItemProps> = ({ icons, title }) => {
  return (
    <div className="p-3 lg:w-1/5 md:w-1/4 sm:w-1/3 border rounded-lg m-2">
      <div className="px-4 py-6 ">
        <div className="flex justify-center">{icons}</div>
        <h2 className="text-xl">{title}</h2>
      </div>
    </div>
  );
};

const PharmacyFeatures = () => {
  const FeaturesItems: ItemProps[] = [
    {
      icons: <BsDatabaseCheck className="w-32 mb-3 text-6xl" />,
      title: "Stock Management",
    },
    {
      icons: <BsHddRack className="w-32 mb-3 text-6xl" />,
      title: "Expiry Management",
    },
    {
      icons: <TbDatabasePlus className="w-32 mb-3 text-6xl" />,
      title: "Rack Management",
    },
    {
      icons: <CgFileDocument className="w-32 mb-3 text-6xl" />,
      title: "Prescription",
    },
    {
      icons: <FaRegClock className="w-32 mb-3 text-6xl" />,
      title: "Alert Management",
    },
    {
      icons: <MdOutlinePhoneIphone className="w-32 mb-3 text-6xl" />,
      title: "Online Purchase Import",
    },
    {
      icons: <MdEventAvailable className="w-32 mb-3 text-6xl" />,
      title: "Substitute Availability",
    },
    {
      icons: <GiRotaryPhone className="w-32 mb-3 text-6xl" />,
      title: "Free Drug Helpline",
    },
    {
      icons: <FaClockRotateLeft className="w-32 mb-3 text-6xl" />,
      title: "24x7 Ordering",
    },
    {
      icons: <FaUserDoctor className="w-32 mb-3 text-6xl" />,
      title: "Doctor Account",
    },
    {
      icons: <BsPeople className="w-32 mb-3 text-6xl" />,
      title: "Family Ledger Management",
    },
    {
      icons: <GiTakeMyMoney className="w-32 mb-3 text-6xl" />,
      title: "Digital Payment & Collection",
    },

    {
      icons: <BsBank className="w-32 mb-3 text-6xl" />,
      title: "Connected Banking",
    },

    {
      icons: <HiOutlineTruck className="w-32 mb-3 text-6xl" />,
      title: "Delivery & Shipping",
    },

    {
      icons: <FaRecycle className="w-32 mb-3 text-6xl" />,
      title: "Re-Order Management",
    },
  ];

  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
      Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          {FeaturesItems.map((item, index) => (
            <WhyUsItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PharmacyFeatures;
