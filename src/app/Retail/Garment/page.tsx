import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import GarmentFeatures from "./GarmentFeatures";
import GarmentFAQSection from "./GarmentFAQSection";

const Garment = () => {
  return <div className="container m-auto">
    <ShowCase/>
    <GarmentFeatures/>
    < GarmentFAQSection/>
  </div>;
};

export default Garment;
