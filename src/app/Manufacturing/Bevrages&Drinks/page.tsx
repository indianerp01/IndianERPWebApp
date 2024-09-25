import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import FoodFeatures from "../Food/FoodFeatures";
import Header from "@/app/components/HeroPages/Header";

const Bevrages = () => {
  return <div className="container m-auto">
      <Header 
  title="Beverage & Drinks Software" 
  description= "Boost your beverage manufacturing efficiency and stay compliant. Our software automates GST billing and filing, saving you time and money. Focus on what matters: producing delicious and refreshing drinks." 
  link="/Contact" 
  img1= "/HeropagesImages/img58.svg"
  img2= "/HeropagesImages/img59.svg"
  img3= "/HeropagesImages/img60.svg"
  heading1="Beverage-Specific Features"
  heading2="Inventory Management"
  heading3="Quality Control (QC)"
 /> 
    <ShowCase/>
    <FoodFeatures/>
  </div>;
};

export default Bevrages;
