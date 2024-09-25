import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import WholesaleDistributionFeatures from "./WholesaleDistributionFeatures";
import Header from "@/app/components/HeroPages/Header";

const WholeSale = () => {
  return <div className="container m-auto">
    <Header 
  title="Wholesale Distribution Software" 
  description="Simplify your wholesale distribution business with our Indian ERP GST Billing & filing software. Boost efficiency, manage inventory, and streamline operations with ease." 
  link="/Contact" 
  img1= "/HeropagesImages/img25.svg"
  img2= "/HeropagesImages/img26.svg"
  img3= "/HeropagesImages/img27.svg"
  heading1="Order Confirmation & Notification"
  heading2="Shipping & Transportation Management"
  heading3="Warehouse Management"
 /> 
    <ShowCase/>
    < WholesaleDistributionFeatures/>
  </div>;
};

export default WholeSale;
