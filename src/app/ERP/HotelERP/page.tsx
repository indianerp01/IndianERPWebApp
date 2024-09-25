import Header from "@/app/components/HeroPages/Header";
import React from "react";
import HotelERPSoftwaresFeatures from "./HotelERPSoftwaresFeatures";
import ShowCase from "@/app/components/Showcase/ShowCase";

const HotelERP = () => {
  return <div className="container">
     <Header 
  title="Hotel ERP Softwares" 
  description= "Gain complete control over your hotel operations with a comprehensive ERP solution. Improve efficiency, automate tasks, and make better business decisions with real-time data and insights. Enhance the guest experience and drive revenue growth." 
  link="/Contact" 
  img1= "/HeropagesImages/img76.svg"
  img2= "/HeropagesImages/img77.svg"
  img3= "/HeropagesImages/img78.svg"
  heading1="Guest Relationship Management"
  heading2="Food & Beverage Management"
  heading3="Maintenance Management"
 /> 
 <ShowCase/>
 <HotelERPSoftwaresFeatures/>
  </div>;
};

export default HotelERP;
