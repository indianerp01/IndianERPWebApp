import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import TexttileFeatures from "./TexttileFeatures";
import Header from "@/app/components/HeroPages/Header";

const Textile = () => {
  return <div className="container">
    <Header 
  title="Textile Software" 
  description= "Boost your textile business with streamlined operations. Our software automates billing, streamlines inventory management, and provides insightful financial reporting. Increase efficiency and profitability with a dedicated solution." 
  link="/Contact" 
  img1= "/HeropagesImages/img49.svg"
  img2= "/HeropagesImages/img50.svg"
  img3= "/HeropagesImages/img51.svg"
  heading1="Billing & Invoicing"
  heading2="Accounting & Financial Management"
  heading3="Sales & Order Management"
 /> 
    <ShowCase/>
    <TexttileFeatures/>
  </div>;
};

export default Textile;
