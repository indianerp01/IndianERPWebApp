import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import   BillingFeatures from  "./BillingFeatures";
import Header from "@/app/components/HeroPages/Header";
const Billing = () => {
  return <div className="container">
    <Header 
  title="Billing Software" 
  description= "Boost efficiency and improve accuracy with our billing software. Create professional invoices, manage payments, and stay compliant with GST regulations. Free yourself from tedious tasks and focus on growing your business." 
  link="/Contact" 
  img1= "/HeropagesImages/img89.svg"
  img2= "/HeropagesImages/img90.svg"
  img3= "/HeropagesImages/img91.svg"
  heading1="Invoice Creation & Management"
  heading2="Payment Processing & Integration"
  heading3="Customer Management"
 /> 
    <ShowCase/>
    <BillingFeatures/>
  </div>;
};

export default Billing;
