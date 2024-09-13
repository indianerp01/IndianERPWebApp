import React from "react";
import Hero from "../components/HeroSection/Hero";
import ShowCase from "../components/Showcase/ShowCase";
import OthersFeaturesList from "./OthersFeaturesList";

const Others = () => {
  return <div className="container">
     <Hero
          title="Others Software"
          description="Find the perfect software solution for your needs. Explore our comprehensive collection of software, categorized by industry and function, and discover the tools that will transform your business."
          buttonText="Get Started"
          buttonLink="#"
          imageSrc="/Others/Others-9.svg"
        />
         <ShowCase/>
         <OthersFeaturesList />
  </div>;
};

export default Others;
