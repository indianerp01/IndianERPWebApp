import Header from "@/app/components/HeroPages/Header";
import ShowCase from "@/app/components/Showcase/ShowCase";
import SupplyChainFeatures from "@/app/Distribution/SupplyChain/SupplyChainFeatures";
import React from "react";

const SupplyChain = () => {
  return <div className="container">
    <Header 
  title="Supply Chain  Management" 
  description="Boost efficiency, improve accuracy, and stay compliant. Our Indian ERP software streamlines your supply chain, with features for inventory management, distribution, and automated GST filing. Gain a competitive edge with streamlined operations." 
  link="/Contact" 
  img1= "/HeropagesImages/img64.svg"
  img2= "/HeropagesImages/img65.svg"
  img3= "/HeropagesImages/img66.svg"
  heading1=" Planning & Forecasting"
  heading2="Sourcing & Procurement"
  heading3="Production & Manufacturing"
/>
    <ShowCase/>
    <SupplyChainFeatures/>
  </div>;
};

export default SupplyChain;
