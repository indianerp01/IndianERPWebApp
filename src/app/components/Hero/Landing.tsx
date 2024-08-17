import { BsBasket3Fill } from "react-icons/bs";
import MiniTech from "./MiniTech";
import { SiPayloadcms } from "react-icons/si";
import { MdFactory, MdMore, MdOutlineWeb } from "react-icons/md";
import { RiFlowChart } from "react-icons/ri";
import { IoIosApps } from "react-icons/io";
import { FaHotel } from "react-icons/fa6";

const Landing = () => {
  return (
    <section>
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-neutral-700 leading-tight">
          Indian Computer Technology
        </h1>
        <div className="py-7 text-[22px] text-neutral-500">
          <p>Your Vision Is Our Mission</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10">
        <div className="flex items-start gap-y-5 justify-center flex-col w-[60%]">
          <h1 className="text-4xl font-semibold text-neutral-700 uppercase">
            Indian ERP Softwares
          </h1>
          <p className="text-md font-light">
            GST Billing to Filing Sales & Support Centers / 3000+ Satisfied
            users. GST Billing, E-invoice, Accounting, Inventory Management
            Softwares.Indian DMSxpert is a web-based, easy-to-use software which
            gives you more control in managing your chain of shops. It works
            seamlessly with your individual shops data & gives a consolidaed and
            centralized way of managing chain business better.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <MiniTech
            title={"Retailization"}
            icon={<BsBasket3Fill className="text-7xl px-3 py-2" />}
          />
          <MiniTech
            title="Manufacture"
            icon={<MdFactory className="text-7xl px-3 py-2" />}
          />
          <MiniTech
            title="Distribution"
            icon={<RiFlowChart className="text-7xl px-3 py-2" />}
          />
          <MiniTech
            title="Hotelization"
            icon={<FaHotel className="text-7xl px-3 py-2" />}
          />
          <MiniTech
            title="MobileApp"
            icon={<IoIosApps className="text-7xl px-3 py-2" />}
          />
          <MiniTech
            title="WebApps"
            icon={<MdOutlineWeb className="text-7xl px-3 py-2" />}
          />
          <MiniTech
            title="Others"
            icon={<MdMore className="text-7xl px-3 py-2" />}
          />
          <MiniTech
            title="Chaining"
            icon={<SiPayloadcms className="text-7xl px-3 py-2" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
