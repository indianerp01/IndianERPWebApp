import ShowCase from "@/app/components/Showcase/ShowCase";
import PharmacySection from "./PharmacySection"
import React from "react";
import FAQSection from "@/app/components/FAQSection/FAQSection";
import PharmacyFeatures from "./PharmacyFeatures";
import ProductsFeatures from "@/app/components/ProductsFeatures/ProductsFeatures";

const Pharmacy = () => {
  return (
    <div className="mx-auto container">
      <ShowCase />
      <PharmacyFeatures/>
      <ProductsFeatures/>
      <PharmacySection/>
      <FAQSection/>
    </div>
  );
};

export default Pharmacy;
