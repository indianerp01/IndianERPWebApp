import React from "react";
import { AiOutlineTransaction } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiInvoiceDuotone } from "react-icons/pi";

interface ShowcaseStatProps {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const ShowcaseStat: React.FC<ShowcaseStatProps> = ({ icon, title, desc }) => {
  return (
    <div className="border-r">
      <div className="flex items-center justify-center">{icon}</div>
      <div className="flex items-center justify-center flex-col p-3 gap-y-1">
        <div className="text-xl font-bold">{title}</div>
        <div className="text-center text-sm">{desc}</div>
      </div>
    </div>
  );
};

const ShowCase = () => {
  const showcaseStats: ShowcaseStatProps[] = [
    {
      icon: (
        <MdOutlineSupportAgent className="text-7xl rounded-full  bg-gray-100 p-3" />
      ),
      title: "10+",
      desc: "Sales & Support Centers",
    },
    {
      icon: (
        <PiInvoiceDuotone className="text-7xl rounded-full  bg-gray-100 p-3" />
      ),
      title: "20 Billion+",
      desc: "Invoices Processed Per Year",
    },
    {
      icon: (
        <AiOutlineTransaction className="text-7xl rounded-full  bg-gray-100 p-3" />
      ),
      title: "100 Billion $",
      desc: "Transactions Processed A Year",
    },
    {
      icon: (
        <LiaFileMedicalAltSolid className="text-7xl rounded-full  bg-gray-100 p-3" />
      ),
      title: "Pharma & FMCG",
      desc: "Runs On Marg ERP Software",
    },
    {
      icon: <GiWorld className="text-7xl rounded-full  bg-gray-100 p-3" />,
      title: "1 Million+",
      desc: "Business Served World Wide",
    },
  ];

  return (
    <section className="py-20 container ">
      <div className="text-[42px] font-bold text-center text-black pb-10 flex items-center justify-center flex-col ">
        Empowering Businesses, Enabling Better India{" "}
        <div className="text-center">Through IT</div>
      </div>
      <div className="border rounded-md m-10">
        <div className="grid grid-cols-5 mx-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 md: py-10">
          {showcaseStats.map((stat, index) => (
            <ShowcaseStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
