import ShowCase from "@/app/components/Showcase/ShowCase";
import PharmacySection from "./PharmacySection"
import React from "react";
import Footer from "@/app/components/Footer/Footer";

const Pharmacy = () => {
  return (
    <div className="mx-auto container">
      <ShowCase />
      <PharmacySection/>
    </div>
  );
};

export default Pharmacy;
