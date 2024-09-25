import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import PayrollFAQSection from "./PayrollFAQSection";
import PayrollFeatures from "./PayrollFeatures";
import Header from "@/app/components/HeroPages/Header";

const Payroll = () => {
  return <div className="container">
    <Header 
  title="Payroll Software" 
  description= "Boost your efficiency and reduce errors with our payroll software. Automate payroll processing, ensure compliance with tax regulations, and pay your employees accurately and on time. Focus on growing your business, not on paperwork." 
  link="/Contact" 
  img1= "/HeropagesImages/img85.svg"
  img2= "/HeropagesImages/img86.svg"
  img3= "/HeropagesImages/img87.svg"
  heading1="Employee Data Management"
  heading2="Payroll Calculation"
  heading3="Deductions & Benefits"
 /> 
    <ShowCase/>
    <PayrollFeatures />
    <PayrollFAQSection/>
  </div>;
};

export default Payroll;
