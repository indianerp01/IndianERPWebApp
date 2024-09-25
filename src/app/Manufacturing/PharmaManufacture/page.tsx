import ShowCase from "@/app/components/Showcase/ShowCase";
import ProductsFeature from "./PharmaProductsFeatures";
import React from "react";
import PharmacyFAQSection from "@/app/Retail/Pharmacy/PharmacyFAQSection";
import Header from "@/app/components/HeroPages/Header";

const PharmaManu = () => {
  return (
    <div className="container">
       <Header 
  title="Pharmaceutical Manufacturing Software" 
  description= "Boost efficiency, ensure compliance, and optimize your pharma manufacturing. Indian Pharma Manufacturing software provides specialized tools for inventory, production, and quality management. Get the edge you need to succeed." 
  link="/Contact" 
  img1= "/HeropagesImages/img43.svg"
  img2= "/HeropagesImages/img44.svg"
  img3= "/HeropagesImages/img45.svg"
  heading1="Bill of Materials Management"
  heading2="Work Order Management"
  heading3="Packaging Materials Management"
 /> 
      <ShowCase />
      <ProductsFeature />
      <PharmacyFAQSection />
    </div>
  );
};

export default PharmaManu;
