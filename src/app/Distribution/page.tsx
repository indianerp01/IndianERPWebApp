import React from "react";
import Hero from "../components/HeroSection/Hero";
import ShowCase from "../components/Showcase/ShowCase";
import DistributionFeaturesList from "./DistributionFeaturesList";

const page = () => {
  return <div className="container">
    <Hero
          title="Distributor Software"
          description="Streamline your distribution operations with efficient software tools, maximizing efficiency, reducing costs, and delivering products faster than ever before."
          buttonText="Get Started"
          buttonLink="#"
          imageSrc="./Dist/Dist-6.svg"
        />
        <ShowCase/>
        <DistributionFeaturesList/>
  </div>;
};

export default page;
