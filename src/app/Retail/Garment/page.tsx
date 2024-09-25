import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import GarmentFeatures from "./GarmentFeatures";
import GarmentFAQSection from "./GarmentFAQSection";
import Header from "@/app/components/HeroPages/Header";

const Garment = () => {
  return <div className="container m-auto">
    <Header 
  title="Garment Software" 
  description="Finding the best garment software involves defining your specific needs, researching reputable providers, and comparing features, pricing, implementation, and support before making a decision. " 
  link="/Contact" 
  img1= "/HeropagesImages/img7.svg"
  img2= "/HeropagesImages/img8.svg"
  img3= "/HeropagesImages/img9.svg"
  heading1="Sample Management"
  heading2="Material Management"
  heading3="Work Order Management"
 /> 
    <ShowCase/>
    <GarmentFeatures/>
    < GarmentFAQSection/>
  </div>;
};

export default Garment;
