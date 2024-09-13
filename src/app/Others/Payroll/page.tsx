import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import PayrollFAQSection from "./PayrollFAQSection";
import PayrollFeatures from "./PayrollFeatures";

const Payroll = () => {
  return <div className="container m-auto">
    <ShowCase/>
    <PayrollFeatures />
    <PayrollFAQSection/>
  </div>;
};

export default Payroll;
