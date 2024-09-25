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
  title="Pahrmacy Software" 
  description="Finding the best pharmacy software in India requires defining your specific needs and researching reputable providers. Consider features, pricing, implementation, and support before making a decision." 
  link="/Contact" 
  img1= "/HeropagesImages/img1.svg"
  img2= "/HeropagesImages/img2.svg"
  img3= "/HeropagesImages/img3.svg"
  heading1="Prescription Management"
  heading2="Refill Reminders"
  heading3="Reporting & Analytics"
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
