import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import FMCGFeatures from "./FMCGFeatures";
import FMCGFAQSection from "./FMCGFAQSection";

const FMCG = () => {
  return <div className="container m-auto">
    <ShowCase/>
     <FMCGFeatures/>
     <FMCGFAQSection/>

  </div>;
};

export default FMCG;
