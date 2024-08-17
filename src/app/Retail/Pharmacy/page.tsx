import ShowCase from "@/app/components/Showcase/ShowCase";
import PharmacySection from "./PharmacySection"
import React from "react";
import FAQSection from "@/app/components/FAQSection/FAQSection";


const Pharmacy = () => {
  return (
    <div className="mx-auto container">
      <ShowCase />
      <PharmacySection/>
      <FAQSection/>
    </div>
  );
};

export default Pharmacy;
