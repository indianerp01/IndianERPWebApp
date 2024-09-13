import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import ErpSolutionFAQSection from "./ErpSolutionFAQSection";
import ErpSolutionFeatures from "./ErpSolutionFeatures";

const ErpSolution = () => {
  return (
    <div className="container m-auto">
      <ShowCase />
      <ErpSolutionFeatures />
      <ErpSolutionFAQSection />
    </div>
  );
};

export default ErpSolution;
