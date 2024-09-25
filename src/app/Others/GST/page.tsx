import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import GSTFAQSection from "./GSTFAQSection";
import Header from "@/app/components/HeroPages/Header";
import GSTFeatures from "./GSTFeatures";

const GST = () => {
  return <div className="container">
     <Header 
  title="GST Software" 
  description= "Boost efficiency, improve accuracy, and avoid penalties. Our GST software streamlines your billing and filing, ensuring compliance with all regulations. Focus on growing your business, not on paperwork." 
  link="/Contact" 
  img1= "/HeropagesImages/img92.svg"
  img2= "/HeropagesImages/img93.svg"
  img3= "/HeropagesImages/img94.svg"
  heading1="GST Calculation"
  heading2="GST Return Filing"
  heading3="GSTIN Validation"
 /> 
    <ShowCase/>
    <GSTFeatures/>
    <GSTFAQSection/>
  </div>;
};

export default GST;
