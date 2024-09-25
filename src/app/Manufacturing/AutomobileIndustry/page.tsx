import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import AutomobileIndustryFeatures from "./AutomobileIndustryFeatures";
import Header from "@/app/components/HeroPages/Header";

const AutomobileIndustry = () => {
  return <div className="container">
       <Header 
  title=" Automobile Industry Software" 
  description= "Boost efficiency, improve accuracy, and stay compliant. Our Indian ERP software streamlines your automotive parts distribution, with automated billing, inventory tracking, and GST filing." 
  link="/Contact" 
  img1= "/HeropagesImages/img46.svg"
  img2= "/HeropagesImages/img47.svg"
  img3= "/HeropagesImages/img48.svg"
  heading1="Dealership Management"
  heading2="Automotive Manufacturing"
  heading3="Parts Distribution"
 /> 
    <ShowCase/>
    <AutomobileIndustryFeatures/>
  </div>;
};

export default AutomobileIndustry;
