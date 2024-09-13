import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import AutoMobileFeatures from "./AutoMobileFeatures";

const AutoMobile = () => {
  return <div className="container m-auto">
      <ShowCase/>
      <AutoMobileFeatures/>
  </div>;
};

export default AutoMobile;
