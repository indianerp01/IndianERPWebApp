import ShowCase from "@/app/components/Showcase/ShowCase";
import SupplyChainFeatures from "@/app/Distribution/SupplyChain/SupplyChainFeatures";
import React from "react";

const SupplyChain = () => {
  return <div className="container">
    <ShowCase/>
    <SupplyChainFeatures/>
  </div>;
};

export default SupplyChain;
