import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import IndusrtyFeatures from "./IndusrtyFeatures";
import Header from "@/app/components/HeroPages/Header";

const Industry = () => {
  return <div className="container">
     <Header 
  title="Industry Software" 
  description= "Our software takes the hassle out of GST billing and filing, automating processes and ensuring accuracy. Get started today and experience the difference." 
  link="/Contact" 
  img1= "/HeropagesImages/img52.svg"
  img2= "/HeropagesImages/img53.svg"
  img3= "/HeropagesImages/img54.svg"
  heading1="Inventory Management"
  heading2="Reporting & Analytics"
  heading3="Technology Management"
 /> 
   <ShowCase/>
   <IndusrtyFeatures/>
  </div>;
};

export default Industry;
