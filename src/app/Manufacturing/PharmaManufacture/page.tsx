import ShowCase from "@/app/components/Showcase/ShowCase";
import ProductsFeature from "./PharmaProductsFeatures";
import React from "react";
import PharmacyFAQSection from "@/app/Retail/Pharmacy/PharmacyFAQSection";

const PharmaManu = () => {
  return (
    <div className="container m-auto">
      <ShowCase />
      <ProductsFeature />
      <PharmacyFAQSection />
    </div>
  );
};

export default PharmaManu;
