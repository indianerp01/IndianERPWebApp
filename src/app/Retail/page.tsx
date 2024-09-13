import React from "react";
import ShowCase from "../components/Showcase/ShowCase";
import Hero from "../components/HeroSection/Hero";
import FeaturesList from "./RetailFeaturesList";
const Retail = () => {
  return (
    <div className="container">
      <div>
        {/* Hero Section  */}
        <Hero
          title="Retail Software"
          description="Best Billing Software For Retail Shop to manage your Billing, Accounting & Inventory at one place."
          buttonText="Get Started"
          buttonLink="#"
          imageSrc="./Retail/Retail-7.svg"
        />
      </div>
      {/* Showcase Section  */}
      <ShowCase />
      <FeaturesList/>
    </div>
  );
};

export default Retail;
