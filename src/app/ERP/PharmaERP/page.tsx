import Header from "@/app/components/HeroPages/Header";
import ShowCase from "@/app/components/Showcase/ShowCase";
import PharmacyFeatures from "@/app/Retail/Pharmacy/PharmacyFeatures";
import React from "react";

const PharmaERP = () => {
  return <div className="container">
      <Header 
  title="Pharma ERP Softwares" 
  description= "Boost efficiency, ensure compliance, and optimize profitability. Our Pharma ERP software provides comprehensive tools for inventory, production, quality control, and financial management, designed specifically for pharmaceutical companies. Gain a competitive edge with streamlined operations." 
  link="/Contact" 
  img1= "/HeropagesImages/img70.svg"
  img2= "/HeropagesImages/img71.svg"
  img3= "/HeropagesImages/img72.svg"
  heading1="Pharma-Specific Features"
  heading2="Work Order Management"
  heading3="Quality Management System"
 /> 
    <ShowCase/>
    <PharmacyFeatures />
  </div>;
};

export default PharmaERP;
