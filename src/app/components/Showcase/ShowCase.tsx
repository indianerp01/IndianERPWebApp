import { AiOutlineTransaction } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiInvoiceDuotone } from "react-icons/pi";

const ShowCase = () => {
  return (
    <section className="py-20">
      <div className="text-[42px] font-bold text-center text-neutral-700 pb-10 flex items-center justify-center flex-col ">
        Empowering Businesses, Enabling Better India{" "}
        <div className="text-center">Through IT</div>
      </div>
      <div className="border rounded-md  bg-gray-200 bg-opacity-10">
        <div className="grid grid-cols-5 mx-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 md: py-10">
          <div>
            <div className="flex items-center justify-center ">
              <MdOutlineSupportAgent className="text-7xl rounded-full  bg-gray-100 p-3" />
            </div>
            <div className="flex items-center justify-center flex-col p-3 gap-y-1">
              <div className="text-xl font-bold">
                10<sup>+</sup>{" "}
              </div>
              <div className="text-center text-sm">Sales & Support Centers</div>
            </div>
          </div>

          {/*  */}
          <div className="border-l-2">
            <div className="flex items-center justify-center">
              <PiInvoiceDuotone className="text-7xl rounded-full  bg-gray-100 p-3" />
            </div>
            <div className="flex items-center justify-center flex-col p-3 gap-y-1">
              <div className="text-xl font-bold">
                20 Billion<sup>+</sup>{" "}
              </div>
              <div className="text-center text-sm">
                Invoices Processed Per Year
              </div>
            </div>
          </div>
          {/*  */}

          <div className="border-l-2">
            <div className="flex items-center justify-center">
              <AiOutlineTransaction className="text-7xl rounded-full  bg-gray-100 p-3" />
            </div>
            <div className="flex items-center justify-center flex-col p-3 gap-y-1">
              <div className="text-xl font-bold">100 Billion $</div>
              <div className="text-center text-sm">
                Transactions Processed A Year
              </div>
            </div>
          </div>

          {/*  */}

          <div className="border-l-2">
            <div className="flex items-center justify-center">
              <LiaFileMedicalAltSolid className="text-7xl rounded-full  bg-gray-100 p-3" />
            </div>
            <div className="flex items-center justify-center flex-col p-3 gap-y-1">
              <div className="text-xl font-bold line-clamp-1">
                Pharma & FMCG
              </div>
              <div className="text-center text-sm">
                Runs On Marg ERP Software
              </div>
            </div>
          </div>

          {/*  */}

          <div className="border-l-2">
            <div className="flex items-center justify-center">
              <GiWorld className="text-7xl rounded-full  bg-gray-100 p-3" />
            </div>
            <div className="flex items-center justify-center flex-col p-3 gap-y-1">
              <div className="text-xl font-bold">
                1 Million<sup>+</sup>{" "}
              </div>
              <div className="text-center text-sm">
                Business Served World Wide
              </div>
            </div>
          </div>

          {/* <div className="border-l-2">
            <div className="flex items-center justify-center">
              <GiWorld className="text-7xl rounded-full  bg-gray-200 p-3 " />
            </div>
            <div className="flex items-center justify-center flex-col p-3 gap-y-1">
              <div className="text-2xl font-bold">1 Million +</div>
              <div className="text-center text-sm">
                Business Served World Wide
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ShowCase;