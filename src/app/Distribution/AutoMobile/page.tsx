import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import AutoMobileFeatures from "./AutoMobileFeatures";
import Header from "@/app/components/HeroPages/Header";

const AutoMobile = () => {
  return <div className="container">
    <Header 
  title="Automobile Software" 
  description="Streamline your automobile accounting business with our Indian ERP GST Billing & Filing Software. Optimize your operations, manage inventory, and ensure compliance with ease." 
  link="/Contact" 
  img1= "/HeropagesImages/img28.svg"
  img2= "/HeropagesImages/img29.svg"
  img3= "/HeropagesImages/img30.svg"
  heading1="Pricing & Discount Management"
  heading2="Transportation Management"
  heading3="Customer Service Management"
 /> 
      <ShowCase/>
      <AutoMobileFeatures/>
  </div>;
};

export default AutoMobile;
