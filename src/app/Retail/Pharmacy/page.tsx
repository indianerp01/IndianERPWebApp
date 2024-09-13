import ShowCase from "@/app/components/Showcase/ShowCase";
import PharmacySection from "./PharmacySection";
import React from "react";
import PharmacyFeatures from "./PharmacyFeatures";
import ProductsFeatures from "@/app/components/ProductsFeatures/ProductsFeatures";
import PharmacyFAQSection from "./PharmacyFAQSection";
import Header from "@/app/components/HeroPages/Header";

const Pharmacy = () => {
  return (
    <div className=" container">
  <Header 
  title="Retail Softwares" 
  description="Manage all your retail operations in a centralized system with Indian Retail Software. From purchasing to inventory management to selling, stay on top of everything & increase your sales by attracting more customers." 
  link="/Contact" 
/>
      <ShowCase />
      <ProductsFeatures />
      <PharmacyFeatures />
      <PharmacySection />
      <PharmacyFAQSection />
    </div>
  );
};

export default Pharmacy;
