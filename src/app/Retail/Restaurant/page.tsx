import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import RestaurantFeatures from "./RestaurantFeatures";
import RestaurantFAQSection from "./RestaurantFAQSection";

const Restaurant = () => {
  return <div className="container m-auto">
    <ShowCase/>
    <RestaurantFeatures/>
     <RestaurantFAQSection/>
  </div>;
};

export default Restaurant;
