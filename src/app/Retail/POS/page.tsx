import POSFeatures from "./POSFeatures";
import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import POFAQSection from "./POFAQSection";

const POS = () => {
  return <div className="container m-auto">
    <ShowCase/>
    <POSFeatures/>
    <POFAQSection/>
  </div>;
};

export default POS;
