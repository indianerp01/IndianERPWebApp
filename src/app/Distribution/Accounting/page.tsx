import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import AccountingFeatures from "./AccountingFeatures";
import Header from "@/app/components/HeroPages/Header";

const Accounting = () => {
  return <div className="container ">
     <Header 
  title="Accounting Software" 
  description="Automate invoicing, track expenses, and manage your books effortlessly. Accounting software helps you make informed financial decisions. Find the perfect solution for your business needs." 
  link="/Contact" 
  img1= "/HeropagesImages/img37.svg"
  img2= "/HeropagesImages/img38.svg"
  img3= "/HeropagesImages/img39.svg"
  heading1="Accounts Payable (AP)"
  heading2="Bank Reconciliation"
  heading3="Financial Reporting & Analysis"
/>
    <ShowCase/>
    <AccountingFeatures/>
  </div>;
};

export default Accounting;
