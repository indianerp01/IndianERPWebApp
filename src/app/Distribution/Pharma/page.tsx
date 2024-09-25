import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import PharmaFeatures from "./PharmaFeatures";
import Header from "@/app/components/HeroPages/Header";

const Pharma = () => {
  return <div className="container">
     <Header 
  title="Pharma Software" 
  description="Elevate your pharma distribution business to PRO status with Indian Computer Technology. Manage inventory, sales, and logistics with ease, ensuring efficiency and profitability." 
  link="/Contact" 
  img1= "/HeropagesImages/img19.svg"
  img2= "/HeropagesImages/img20.svg"
  img3= "/HeropagesImages/img21.svg"
  heading1="Prescription Management"
  heading2="Inventory Management"
  heading3="Reporting and Analytics"
 /> 
    <ShowCase/>
    <PharmaFeatures/>
  </div>;
};

export default Pharma;
