import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import JewelleryFeatures from "./JewelleryFeatures";
import Header from "@/app/components/HeroPages/Header";

const Jewellery = () => {
  return <div className="container m-auto">
    <Header 
  title="Jewellery Software" 
  description="Finding the best jewellery software involves defining your specific needs, researching reputable providers, and comparing features, pricing, and support before making a decision." 
  link="/Contact" 
  img1= "/HeropagesImages/img13.svg"
  img2= "/HeropagesImages/img14.svg"
  img3= "/HeropagesImages/img15.svg"
  heading1="Item Catalog Management"
  heading2="Gemstone and Metal Management"
  heading3="Manufacturing Process Management"
 /> 
    <ShowCase/>
    <JewelleryFeatures/>
  </div>;
};

export default Jewellery;
