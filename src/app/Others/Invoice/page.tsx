import Header from "@/app/components/HeroPages/Header";
import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import BillingFeatures from "../Billing/BillingFeatures";
import InvoiceFAQSection from "./InvoiceFAQSection";

const Invoice = () => {
  return <div className="container">
     <Header 
  title="Invoice software" 
  description= "Boost your efficiency and ensure accuracy with our invoice software. Create professional invoices, manage payments, and stay compliant with GST regulations. Generate invoices with confidence, knowing they meet all requirements." 
  link="/Contact" 
  img1= "/HeropagesImages/img95.svg"
  img2= "/HeropagesImages/img96.svg"
  img3= "/HeropagesImages/img97.svg"
  heading1="Core Invoice Creation & Management"
  heading2="Payment Processing & Integration"
  heading3="Reporting & Analytics"
 /> 
 <ShowCase/>
 <BillingFeatures/>
 <InvoiceFAQSection/>
  </div>;
};

export default Invoice;
