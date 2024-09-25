import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import FoodFeatures from "./FoodFeatures";
import Header from "@/app/components/HeroPages/Header";

const Food = () => {
  return <div className="container">
       <Header 
  title="Food Software" 
  description= "Boost your food manufacturing efficiency and stay compliant. Our software automates GST billing and filing, saving you time and money." 
  link="/Contact" 
  img1= "/HeropagesImages/img55.svg"
  img2= "/HeropagesImages/img56.svg"
  img3= "/HeropagesImages/img57.svg"
  heading1="Recipe Management"
  heading2="Ingredient Management"
  heading3="Batch Tracking & Management"
 /> 
     <ShowCase/>
      <FoodFeatures/>
  </div>;
};

export default Food;
