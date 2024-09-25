import Header from "@/app/components/HeroPages/Header";
import EcodCards from "./EcodCards";
import ShowCase from "@/app/components/Showcase/ShowCase";
import ErpSolutionFeatures from "@/app/Manufacturing/ErpSolution/ErpSolutionFeatures";
import React from "react";

const ECOD = () => {
  return <div className="container">
     <Header 
  title="ECOD Secure" 
  description= "Take control of your data and streamline your supply chain. ECOD facilitates secure and error-free data exchange between your server and distributor. Experience the benefits of direct data sharing and enhanced efficiency." 
  link="/Contact" 
  img1= "/HeropagesImages/img82.svg"
  img2= "/HeropagesImages/img83.svg"
  img3= "/HeropagesImages/img84.svg"
  heading1="Data Exchange"
  heading2="Secure File Transfer"
  heading3="Real-time Data Synchronization"
 /> 
     <ShowCase/>
     <ErpSolutionFeatures/>
     <EcodCards/>     
  </div>;
};

export default ECOD;
