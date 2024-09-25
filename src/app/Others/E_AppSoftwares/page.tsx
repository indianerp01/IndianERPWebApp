import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import Header from "@/app/components/HeroPages/Header";
import E_AppSoftwaresFeatures from "./E_AppSoftwaresFeatures";

const E_AppSoftwares = () => {
  return <div className="container ">
    <Header 
  title="Ecommerce App Software" 
  description= "Boost your sales and reach new customers with a powerful ecommerce app. Manage your products, process orders, and engage with customers all in one platform. Grow your online presence and expand your business reach." 
  link="/Contact" 
  img1= "/HeropagesImages/img98.svg"
  img2= "/HeropagesImages/img99.svg"
  img3= "/HeropagesImages/img100.svg"
  heading1="Product Management"
  heading2="Order Processing & Fulfillment"
  heading3="Payment Processing"
 /> 
    <ShowCase/>
    <E_AppSoftwaresFeatures/>

  </div>;
};

export default E_AppSoftwares;
