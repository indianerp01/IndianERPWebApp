import React from "react";
import Hero from "../components/HeroSection/Hero";
import ShowCase from "../components/Showcase/ShowCase";
import ERPFeaturesList from "./ERPFeaturesList";

const ERP = () => {
  return <div className="container">
      <Hero
          title="ERP Corporate Solutions"
          description="Our comprehensive ERP solutions offer a single platform for managing all aspects of your business, from finance and inventory to sales and customer relationships. Gain a complete picture of your operations and make informed decisions."
          buttonText="Get Started"
          buttonLink="#"
          imageSrc="/ERP/ERP-9.svg"
        />
         <ShowCase/>
         <ERPFeaturesList/>
  </div>;
};

export default ERP;
