
import MiniTech from "./MiniTech";

import { Icon } from "@iconify/react/dist/iconify.js";

const Landing = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-neutral-700 leading-tight ">
          Indian Computer Technology
        </h1>
        <div className="py-7 text-[22px] text-neutral-500">
          <p>Your Vision Is Our Mission</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row md:flex-col items-center justify-between gap-10">
        {/* Text Area */}
        <div className="flex items-start gap-y-5 max-md:items-center sm:text justify-center flex-col     min-md:w-1/2 lg:w-[50%]  max-md:text-center">
          <h1 className="text-4xl font-semibold text-neutral-700 uppercase max-sm:text-4xl">
            Indian ERP Softwares
          </h1>
          <p className="text-md font-light ">
            GST Billing to Filing Sales & Support Centers / 3000+ Satisfied
            users. GST Billing, E-invoice, Accounting, Inventory Management
            Softwares.Indian DMSxpert is a web-based, easy-to-use software which
            gives you more control in managing your chain of shops. It works
            seamlessly with your individual shops data & gives a consolidaed and
            centralized way of managing chain business better.
          </p>
        </div>

        {/* Software Solution Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <MiniTech
            title={"Retailization"}
            icon={<Icon icon="twemoji:department-store" className="text-7xl px-3 py-2"  />}
          />
          <MiniTech
            title="Manufacture"
            icon={<Icon icon="fluent-emoji-flat:factory" className="text-7xl px-3 py-2"  />}
          />
          <MiniTech
            title="Distribution"
            icon={<Icon icon="fluent:align-distribute-left-16-filled"  style={{color: "#fb9902"}} className="text-7xl px-3 py-2" />}
          />
          <MiniTech
            title="Hotelization"
            icon={<Icon icon="fluent-emoji:hotel"  className="text-7xl px-3 py-2" />}
          />
          <MiniTech
            title="MobileApp"
            icon={<Icon icon="uim:apps"  style={{color: "#00ff00" }} className="text-7xl px-3 py-2"/>}
          />
          <MiniTech
            title="WebApps"
            icon={<Icon icon="uim:web-grid-alt"  style={{color: "#00aae4"}} className="text-7xl px-3 py-2" />}
          />
          <MiniTech
            title="Others"
            icon={<Icon icon="material-symbols:other-admission"  style={{color: "#ff8c69"}} className="text-7xl px-3 py-2" />}
          />
          <MiniTech
            title="Chaining"
            icon={<Icon icon="hugeicons:blockchain-04"  style={{color: "#00a86b"}} className="text-7xl px-3 py-2"  />}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;