import Header from "@/app/components/HeroPages/Header";
import React from "react";
import InventoryManagementFeatures from "./InventoryManagementFeatures";

const InventoryMgt = () => {
  return <div className="container">
     <Header 
  title="Inventory Management" 
  description= "Inventory management optimizes your supply chain, reduces costs, and improves customer satisfaction. It ensures you have the right products, in the right quantities, at the right time. Streamline your operations and achieve greater efficiency." 
  link="/Contact" 
  img1= "/HeropagesImages/img73.svg"
  img2= "/HeropagesImages/img74.svg"
  img3= "/HeropagesImages/img75.svg"
  heading1="Inventory Tracking and Visibility"
  heading2="Warehouse Management System"
  heading3="Real-time Inventory Updates"
 /> 
  <InventoryManagementFeatures/>
 
  </div>;
};

export default InventoryMgt;
