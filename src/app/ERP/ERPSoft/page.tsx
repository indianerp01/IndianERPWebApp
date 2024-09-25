import Header from "@/app/components/HeroPages/Header";
import ShowCase from "@/app/components/Showcase/ShowCase";
import ErpSolutionFeatures from "@/app/Manufacturing/ErpSolution/ErpSolutionFeatures";
import React from "react";

const ERPSoft = () => {
  return <div className="container">
      <Header 
  title="ERP Software Solution" 
  description= "Boost efficiency, improve decision-making, and enhance customer service. ERP software streamlines your operations and provides valuable insights. Discover how ERP can transform your business." 
  link="/Contact" 
  img1= "/HeropagesImages/img67.svg"
  img2= "/HeropagesImages/img68.svg"
  img3= "/HeropagesImages/img69.svg"
  heading1="Industry-Specific ERP Solutions"
  heading2="Manufacturing ERP"
  heading3="Financial Services ERP"
 /> 
     <ShowCase/>
     <ErpSolutionFeatures/>
  </div>;
};

export default ERPSoft;
