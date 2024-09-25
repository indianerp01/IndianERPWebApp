import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import FMCGFeatures from "./FMCGFeatures";
import FMCGFAQSection from "./FMCGFAQSection";
import Header from "@/app/components/HeroPages/Header";

const FMCG = () => {
  return <div className="container">
    <Header 
  title="FMCG Software" 
  description="Streamline your FMCG and packaged food distribution with software solutions designed for wholesale distribution, chain management, and order processing. Automate your operations with mobile apps and manage inventory, accounting, and more with ease." 
  link="/Contact" 
  img1= "/HeropagesImages/img22.svg"
  img2= "/HeropagesImages/img23.svg"
  img3= "/HeropagesImages/img24.svg"
  heading1="Purchase Order Management"
  heading2="Marketing & Promotions"
  heading3="Delivery Management"
 /> 
    <ShowCase/>
     <FMCGFeatures/>
     <FMCGFAQSection/>

  </div>;
};

export default FMCG;
