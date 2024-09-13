import EcodCards from "./EcodCards";
import ShowCase from "@/app/components/Showcase/ShowCase";
import ErpSolutionFeatures from "@/app/Manufacturing/ErpSolution/ErpSolutionFeatures";
import React from "react";

const ECOD = () => {
  return <div className="container m-auto">
     <ShowCase/>
     <ErpSolutionFeatures/>
     <EcodCards/>     
  </div>;
};

export default ECOD;
