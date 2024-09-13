import React from "react";
import Hero from "../components/HeroSection/Hero";
import ShowCase from "../components/Showcase/ShowCase";
import ManufacturingFeaturesList from "./ManufacturingFeaturesList";

const Manufacturing = () => {
  return <div className="container">
   <Hero
          title="Manufacturing Software"
          description="Optimize your manufacturing processes and boost productivity, leading to higher output, lower costs, and increased profitability."
          buttonText="Get Started"
          buttonLink="#"
          imageSrc="/Manufacture/Manufact-8.svg"
        />
         <ShowCase/>
         <ManufacturingFeaturesList/>
  </div>;
};

export default Manufacturing;
