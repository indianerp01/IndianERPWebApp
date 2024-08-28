"use client";
import { useState } from "react";
import { DistributorSoftware, ERPCorporateSolutions, ManufacturingSoftware, RetailSoftware} from "./OnlineSoftwareCard";


const OnlineSoftware = () => {

    const [activeTab, setActiveTab] = useState("tab1");
    const handleTabClick = (
      event: React.MouseEvent<HTMLButtonElement>,
      tabName: string
    ) => {
      setActiveTab(tabName);
    };
  return (
    <div className=" container w-full p-10 m-auto ">
        {" "}
        <div className="flex  gap-3">
          {/* Button */}
          <button
            className={`w-1/2 py-4  text-center font-medium text-gray-700 bg-gray-100 rounded-lg focus:outline-none ${
              activeTab === "all" ? "active:bg-gray-200" : ""
            }`}
            onClick={(event) => handleTabClick(event, "all")}
          >
          All Software
          </button>
          <button
            className={`w-1/2 py-4  text-center font-medium text-gray-700 bg-gray-100 rounded-lg focus:outline-none ${
              activeTab === "tab1" ? "active:bg-gray-200" : ""
            }`}
            onClick={(event) => handleTabClick(event, "tab1")}
          >
            Retail Software
          </button>
          <button
            className={`w-1/2 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-lg focus:outline-none ${
              activeTab === "tab2" ? "active:bg-gray-200" : ""
            }`}
            onClick={(event) => handleTabClick(event, "tab2")}
          >
            Distributor Software
          </button>
          <button
            className={`w-1/2 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-lg focus:outline-none ${
              activeTab === "tab3" ? "active:bg-gray-200" : ""
            }`}
            onClick={(event) => handleTabClick(event, "tab3")}
          >
            Manufacturing Software
          </button>
          <button
            className={`w-1/2 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-lg focus:outline-none ${
              activeTab === "tab4" ? "active:bg-gray-200" : ""
            }`}
            onClick={(event) => handleTabClick(event, "tab4")}
          >
            ERP Corporate Solutions
          </button>
        </div>
        {/* Tab Content */}
        <div
          id="all"
          className={`tabcontent p-4 ${activeTab !== "all" ? "hidden" : ""}`}
        >
              {/* {all softwares} */}
          <h2 className="text-3xl font-bold text-gray-800 m-7 text-center">
            Retail Softwares
          </h2>
          <RetailSoftware />
          <h2 className="text-3xl font-bold text-gray-800 m-7 text-center">
          Distributor Software
          </h2>
          <DistributorSoftware/>
          <h2 className="text-3xl font-bold text-gray-800 m-7 text-center">
          Manufacturing Software
          </h2>
          <ManufacturingSoftware/>
          <h2 className="text-3xl font-bold text-gray-800 m-7 text-center">
          ERP Corporate Solutions
          </h2>
          <ERPCorporateSolutions/>
        </div>
        {/* {all softwares} */}
        <div
          id="tab1"
          className={`tabcontent p-4 ${activeTab !== "tab1" ? "hidden" : ""}`}
        >
          <h2 className="text-3xl font-bold text-gray-800 m-7 text-center">
            Retail Softwares
          </h2>
          <RetailSoftware />
        </div>
        <div
          id="tab2"
          className={`tabcontent p-4 ${activeTab !== "tab2" ? "hidden" : ""}`}
        >
          <h2 className="text-3xl font-bold text-gray-800 m-7 text-center">
            Distributor Softwares
          </h2>
          <DistributorSoftware/>
        </div>
        <div
          id="tab3"
          className={`tabcontent p-4 ${activeTab !== "tab3" ? "hidden" : ""}`}
        >
          <h2 className="text-3xl font-bold text-gray-800 m-7 text-center">
            Manufacturing Softwares
          </h2>
          <ManufacturingSoftware/>
        </div>
        <div
          id="tab4"
          className={`tabcontent p-4 ${activeTab !== "tab4" ? "hidden" : ""}`}
        >
          <h2 className="text-3xl font-bold text-gray-800 m-7 text-center">
            ERP Corporate Solutions
          </h2>
          <ERPCorporateSolutions/>
        </div>
      </div>
  )
}

export default OnlineSoftware;