import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import ErpSolutionFAQSection from "./ErpSolutionFAQSection";
import ErpSolutionFeatures from "./ErpSolutionFeatures";
import Header from "@/app/components/HeroPages/Header";

const ErpSolution = () => {
  return (
    <div className="container">
      <Header 
  title="ERP Software Solution" 
  description="Boost efficiency, improve decision-making, and enhance customer service. ERP software streamlines your operations and provides valuable insights. Discover how ERP can transform your business." 
  link="/Contact" 
  img1= "/HeropagesImages/img40.svg"
  img2= "/HeropagesImages/img41.svg"
  img3= "/HeropagesImages/img42.svg"
  heading1="Human Resources(HR)"
  heading2="Production Management"
  heading3="Customer Relationship Management"
/>
      <ShowCase />
      <ErpSolutionFeatures />
      <ErpSolutionFAQSection />
    </div>
  );
};

export default ErpSolution;
