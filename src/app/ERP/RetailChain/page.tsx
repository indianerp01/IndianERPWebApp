import Header from "@/app/components/HeroPages/Header";
import ShowCase from "@/app/components/Showcase/ShowCase";
import ErpSolutionFeatures from "@/app/Manufacturing/ErpSolution/ErpSolutionFeatures";
import React from "react";

const RetailChain = () => {
  return <div className="container">
     <Header 
  title="Retail Chain Management" 
  description="Boost efficiency, improve accuracy, and stay ahead of the competition. Our software offers comprehensive features for billing, inventory, customer management, and GST compliance, specifically designed for retail chains. Maximize your profitability and streamline your retail operations." 
  link="/Contact" 
  img1= "/HeropagesImages/img61.svg"
  img2= "/HeropagesImages/img62.svg"
  img3= "/HeropagesImages/img63.svg"
  heading1="Inventory & Warehouse Management"
  heading2="Employee Management"
  heading3="Reporting & Analytics"
/>
     <ShowCase/>
     <ErpSolutionFeatures/>
  </div>;
};

export default RetailChain;
