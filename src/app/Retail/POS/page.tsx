import POSFeatures from "./POSFeatures";
import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import POFAQSection from "./POFAQSection";
import Header from "@/app/components/HeroPages/Header";

const POS = () => {
  return <div className="container m-auto">
    <Header 
  title="POS Software" 
  description="Finding the best POS software for your retail business in India involves defining your specific needs, researching reputable providers, and comparing features, pricing, and support before making a decision." 
  link="/Contact" 
  img1= "/HeropagesImages/img10.svg"
  img2= "/HeropagesImages/img11.svg"
  img3= "/HeropagesImages/img12.svg"
  heading1="Customer Database"
  heading2="Purchase Order Management"
  heading3="Returns and Exchanges"
 /> 
    <ShowCase/>
    <POSFeatures/>
    <POFAQSection/>
  </div>;
};

export default POS;
