import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import RestaurantFeatures from "./RestaurantFeatures";
import RestaurantFAQSection from "./RestaurantFAQSection";
import Header from "@/app/components/HeroPages/Header";

const Restaurant = () => {
  return <div className="container m-auto">
    <Header 
  title="Restaurant Software" 
  description="Streamline your restaurant operations with a smart billing system, complete order management, inventory, recipe management, and more. Discover exciting features like kitchen order tickets and displays to boost efficiency and customer satisfaction." 
  link="/Contact" 
  img1= "/HeropagesImages/img16.svg"
  img2= "/HeropagesImages/img17.svg"
  img3= "/HeropagesImages/img18.svg"
  heading1="Recipe Management"
  heading2="Table Management"
  heading3="Kitchen Order Ticket System"
 /> 
    <ShowCase/>
    <RestaurantFeatures/>
     <RestaurantFAQSection/>
  </div>;
};

export default Restaurant;
