import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import SupplyChainFeatures from "./SupplyChainFeatures";
import Header from "@/app/components/HeroPages/Header";

const SupplyChain = () => {
  return <div className="container">
     <Header 
  title="Supply Chain Management" 
  description="Simplify your supply chain. Our Indian ERP, GST Billing, and Filing software makes it easy to manage inventory, track finances, and stay compliant." 
  link="/Contact" 
  img1= "/HeropagesImages/img31.svg"
  img2= "/HeropagesImages/img32.svg"
  img3= "/HeropagesImages/img33.svg"
  heading1="Supplier Relationship Management"
  heading2=" Production & Manufacturing"
  heading3="Supply Chain Financing"
 /> 
    <ShowCase/>
    <SupplyChainFeatures/>
  </div>;
};

export default SupplyChain;
