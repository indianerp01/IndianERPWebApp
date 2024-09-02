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
//interface
import { FeatureData } from "@/app/TS/interfaces/interface";

//featuresData array with icons and titles.
const featuresData: FeatureData[] = [
  {
    icon: <BsDatabaseCheck className="w-32 mb-3 text-6xl" />,
    title: "Stock Management",
  },
  {
    icon: <BsHddRack className="w-32 mb-3 text-6xl" />,
    title: "Expiry Management",
  },
  {
    icon: <TbDatabasePlus className="w-32 mb-3 text-6xl" />,
    title: "Rack Management",
  },
  {
    icon: <CgFileDocument className="w-32 mb-3 text-6xl" />,
    title: "Prescription Management",
  },
  {
    icon: <FaRegClock className="w-32 mb-3 text-6xl" />,
    title: "Alert Management",
  },
  {
    icon: <MdOutlinePhoneIphone className="w-32 mb-3 text-6xl" />,
    title: "Online Purchase Import",
  },
  {
    icon: <MdEventAvailable className="w-32 mb-3 text-6xl" />,
    title: "Substitute Availability",
  },
  {
    icon: <GiRotaryPhone className="w-32 mb-3 text-6xl" />,
    title: "Free Drug Helpline",
  },
  {
    icon: <FaClockRotateLeft className="w-32 mb-3 text-6xl" />,
    title: "24x7 Ordering",
  },
  {
    icon: <FaUserDoctor className="w-32 mb-3 text-6xl" />,
    title: "Doctor Account",
  },
  {
    icon: <BsPeople className="w-32 mb-3 text-6xl" />,
    title: "Family Ledger Management",
  },
  {
    icon: <GiTakeMyMoney className="w-32 mb-3 text-6xl" />,
    title: "Digital Payment & Collection",
  },
  {
    icon: <BsBank className="w-32 mb-3 text-6xl" />,
    title: "Connected Banking",
  },
  {
    icon: <HiOutlineTruck className="w-32 mb-3 text-6xl" />,
    title: "Delivery & Shipping",
  },
  {
    icon: <FaRecycle className="w-32 mb-3 text-6xl" />,
    title: "Re-Order Management",
  },
];

export default featuresData;
